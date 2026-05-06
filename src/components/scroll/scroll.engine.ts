type ScrollEvents = {
  update: { progress: number; current: number; target: number };
};

type Callback<T> = (data: T) => void;

/** Signature for a custom lerp function. */
export type LerpFn = (current: number, target: number, factor: number) => number;

export type SnapZone = {
  /** Zone start as a progress value (0–1). */
  start: number;
  /** Zone end as a progress value (0–1). */
  end: number;
  /**
   * Which boundary to snap to when inside this zone.
   * - "start" / "end" → always that boundary
   * - omitted          → nearest boundary
   */
  pin?: "start" | "end";
  /** Override the global snapIdleMs just for this zone. */
  snapIdleMs?: number;
  /** Override the global lerp factor just for this zone (used during snapping). */
  lerp?: number;
  /** Override the lerp function entirely just for this zone (used during snapping). */
  lerpFn?: LerpFn;
};

// ─── Active snap state (resolved per-zone) ───────────────────────────────────
type ActiveSnap = {
  target: number;
  lerp: number;
  lerpFn: LerpFn;
};

export class ScrollEngine {
  private current = 0;
  private target = 0;
  private max = 5000;
  private lerp = 0.08;
  private lerpFn: LerpFn;
  private paused = false;

  private rafId: number | null = null;

  // Snap state
  private snapConfig: SnapZone[] = [];
  private snapIdleMs = 120;
  private snapLastInputAt = 0;
  private activeSnap: ActiveSnap | null = null;

  private events: {
    [K in keyof ScrollEvents]?: Callback<ScrollEvents[K]>[];
  } = {};

  constructor(options?: {
    paused?: boolean;
    max?: number;
    lerp?: number;
    /** Global lerp function. Receives (current, target, factor) → next current. */
    lerpFn?: LerpFn;
    snapConfig?: SnapZone[];
    snapIdleMs?: number;
  }) {
    this.paused = options?.paused ?? false;
    if (options?.max) this.max = options.max;
    if (options?.lerp) this.lerp = options.lerp;
    if (options?.snapIdleMs !== undefined) this.snapIdleMs = options.snapIdleMs;
    if (options?.snapConfig) this.snapConfig = options.snapConfig;

    // Default lerp fn is circular lerp; caller can swap it globally
    this.lerpFn = options?.lerpFn ?? this.circularLerp.bind(this);

    this.init();
  }

  // ─── Event system ────────────────────────────────────────────────────────────

  on<K extends keyof ScrollEvents>(event: K, cb: Callback<ScrollEvents[K]>) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event]!.push(cb);
  }

  off<K extends keyof ScrollEvents>(event: K, cb: Callback<ScrollEvents[K]>) {
    this.events[event] = this.events[event]?.filter((fn) => fn !== cb) || [];
  }

  private emit<K extends keyof ScrollEvents>(event: K, data: ScrollEvents[K]) {
    this.events[event]?.forEach((cb) => cb(data));
  }

  // ─── Wrap / circular lerp ────────────────────────────────────────────────────

  private wrap(v: number) {
    const range = this.max;
    return ((v % range) + range) % range;
  }

  private circularLerp(current: number, target: number, factor: number) {
    const range = this.max;
    let delta = target - current;
    if (delta > range / 2) delta -= range;
    if (delta < -range / 2) delta += range;
    return current + delta * factor;
  }

  // ─── Snap logic ──────────────────────────────────────────────────────────────

  /**
   * Returns a resolved ActiveSnap if progress is inside any zone, else null.
   * Each zone contributes its own idleMs, lerp factor, and lerpFn —
   * falling back to the engine-level globals when not specified.
   */
  private resolveSnap(progress: number, now: number): ActiveSnap | null {
    if (this.snapConfig.length === 0) return null;

    for (const zone of this.snapConfig) {
      const { start, end, pin, snapIdleMs, lerp, lerpFn } = zone;

      if (progress < start || progress > end) continue;

      // Check this zone's own idle threshold (fall back to global)
      const idleThreshold = snapIdleMs ?? this.snapIdleMs;
      if (now - this.snapLastInputAt < idleThreshold) return null;

      // Resolve snap point
      let snapPoint: number;
      if (pin === "start") {
        snapPoint = start;
      } else if (pin === "end") {
        snapPoint = end;
      } else {
        snapPoint = (progress - start) <= (end - progress) ? start : end;
      }

      return {
        target: snapPoint * this.max,
        lerp: lerp ?? this.lerp,
        lerpFn: lerpFn ?? this.lerpFn,
      };
    }

    return null;
  }

  /** Called on every user input event to cancel any in-progress snap. */
  private markInput() {
    this.snapLastInputAt = performance.now();
    this.activeSnap = null;
  }

  // ─── Input handlers ──────────────────────────────────────────────────────────

  private handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    this.markInput();
    const delta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 60);
    this.target = this.wrap(this.target + delta);
  };

  private lastY = 0;

  private handleTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    this.markInput();
    this.lastY = e.touches[0].clientY;
  };

  private handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    this.markInput();
    const y = e.touches[0].clientY;
    const delta = this.lastY - y;
    this.lastY = y;
    this.target = this.wrap(this.target + delta * 2);
  };

  // ─── RAF loop ────────────────────────────────────────────────────────────────

  private loop = () => {
    if (!this.paused) {
      const now = performance.now();

      // ── Snap decision ──────────────────────────────────────────────────────
      if (this.snapConfig.length > 0) {
        if (!this.activeSnap) {
          // Try to enter a snap — uses each zone's own idleMs
          const currentProgress = this.current / this.max;
          this.activeSnap = this.resolveSnap(currentProgress, now);
        }

        if (this.activeSnap) {
          this.target = this.activeSnap.target;
        }
      }

      // ── Lerp — use active snap's overrides if snapping, else globals ───────
      const lerpFn = this.activeSnap?.lerpFn ?? this.lerpFn;
      const lerpFactor = this.activeSnap?.lerp ?? this.lerp;

      this.current = lerpFn(this.current, this.target, lerpFactor);
      this.current = this.wrap(this.current);
    }

    const progress = this.current / this.max;

    this.emit("update", {
      progress,
      current: this.current,
      target: this.target,
    });

    this.rafId = requestAnimationFrame(this.loop);
  };

  // ─── Public controls ─────────────────────────────────────────────────────────

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }

  setMax(v: number) {
    this.max = v;
    this.current = this.wrap(this.current);
    this.target = this.wrap(this.target);
  }

  setSnapConfig(config: SnapZone[]) {
    this.snapConfig = config;
    this.activeSnap = null;
  }

  destroy() {
    window.removeEventListener("wheel", this.handleWheel);
    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchmove", this.handleTouchMove);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  // ─── Init ─────────────────────────────────────────────────────────────────────

  private init() {
    window.addEventListener("wheel", this.handleWheel, { passive: false });
    window.addEventListener("touchstart", this.handleTouchStart, { passive: false });
    window.addEventListener("touchmove", this.handleTouchMove, { passive: false });
    this.loop();
  }
}