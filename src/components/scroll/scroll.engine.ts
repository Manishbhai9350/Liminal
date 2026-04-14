// ScrollEngine.ts

type ScrollEvents = {
  update: { progress: number; current: number; target: number };
};

type Callback<T> = (data: T) => void;

// ScrollEngine.ts

export class ScrollEngine {
  private current = 0;
  private target = 0;
  private max = 5000;
  private lerp = 0.08;
  private paused = false;

  private events: {
    [K in keyof ScrollEvents]?: Callback<ScrollEvents[K]>[];
  } = {};

  constructor(options?: { paused?: boolean }) {
    this.paused = options?.paused ?? false;
    this.init();
  }

  // 🔥 Event system
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

  // 🎯 Input
  private handleWheel = (e: WheelEvent) => {
    const delta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 60);

    this.target = this.clamp(this.target + delta);
  };

  private lastY = 0;

  private handleTouchStart = (e: TouchEvent) => {
    this.lastY = e.touches[0].clientY;
  };

  private handleTouchMove = (e: TouchEvent) => {
    const y = e.touches[0].clientY;
    const delta = this.lastY - y;
    this.lastY = y;

    this.target = this.clamp(this.target + delta * 2);
  };

  private clamp(v: number) {
    return Math.max(0, Math.min(v, this.max));
  }

  // 🚀 Engine loop
  private loop = () => {
    if (!this.paused) {
      this.current += (this.target - this.current) * this.lerp;
    }

    const progress = this.current / this.max;

    this.emit("update", {
      progress,
      current: this.current,
      target: this.target,
    });

    this.rafId = requestAnimationFrame(this.loop);
  };

  // 🎛 Controls
  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }

  setMax(v: number) {
    this.max = v;
  }

  destroy() {
    window.removeEventListener("wheel", this.handleWheel);
    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchmove", this.handleTouchMove);

    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  // 🚀 Init
  private init() {
    window.addEventListener("wheel", this.handleWheel, {
      passive: true,
    });
    window.addEventListener("touchstart", this.handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", this.handleTouchMove, {
      passive: true,
    });

    this.loop();
  }
}
