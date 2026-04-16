(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [906],
  {
    3086: function (e, t, n) {
      "use strict";
      let r, i, l;
      n.d(t, {
        A: function () {
          return ec;
        },
        B: function () {
          return j;
        },
        D: function () {
          return ed;
        },
        E: function () {
          return z;
        },
        F: function () {
          return ep;
        },
        a: function () {
          return O;
        },
        b: function () {
          return ek;
        },
        c: function () {
          return eO;
        },
        d: function () {
          return e_;
        },
        e: function () {
          return C;
        },
        h: function () {
          return eR;
        },
        i: function () {
          return P;
        },
        u: function () {
          return $;
        },
      });
      var o,
        a,
        u = n(9892),
        s = n(959),
        c = n(5259),
        f = n(1171);
      let d = (e) => "object" == typeof e && "function" == typeof e.then,
        p = [];
      function h(e, t, n = (e, t) => e === t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        let r = e.length;
        if (t.length !== r) return !1;
        for (let i = 0; i < r; i++) if (!n(e[i], t[i])) return !1;
        return !0;
      }
      function g(e, t = null, n = !1, r = {}) {
        for (let i of (null === t && (t = [e]), p))
          if (h(t, i.keys, i.equal)) {
            if (n) return;
            if (Object.prototype.hasOwnProperty.call(i, "error")) throw i.error;
            if (Object.prototype.hasOwnProperty.call(i, "response"))
              return (
                r.lifespan &&
                  r.lifespan > 0 &&
                  (i.timeout && clearTimeout(i.timeout),
                  (i.timeout = setTimeout(i.remove, r.lifespan))),
                i.response
              );
            if (!n) throw i.promise;
          }
        let i = {
          keys: t,
          equal: r.equal,
          remove: () => {
            let e = p.indexOf(i);
            -1 !== e && p.splice(e, 1);
          },
          promise: (d(e) ? e : e(...t))
            .then((e) => {
              ((i.response = e),
                r.lifespan &&
                  r.lifespan > 0 &&
                  (i.timeout = setTimeout(i.remove, r.lifespan)));
            })
            .catch((e) => (i.error = e)),
        };
        if ((p.push(i), !n)) throw i.promise;
      }
      let m = (e, t, n) => g(e, t, !1, n),
        v = (e, t, n) => void g(e, t, !0, n),
        b = (e) => {
          if (void 0 === e || 0 === e.length) p.splice(0, p.length);
          else {
            let t = p.find((t) => h(e, t.keys, t.equal));
            t && t.remove();
          }
        };
      var y = n(1527),
        w = n(7427),
        E = n.n(w),
        x = n(5297),
        S = n(4507);
      let k = {},
        C = (e) => void Object.assign(k, e),
        _ = (e) => "colorSpace" in e || "outputColorSpace" in e,
        R = () => {
          var e;
          return null != (e = k.ColorManagement) ? e : null;
        },
        T = (e) => e && e.isOrthographicCamera,
        P = (e) => e && e.hasOwnProperty("current"),
        O =
          "undefined" != typeof window &&
          ((null != (o = window.document) && o.createElement) ||
            (null == (a = window.navigator) ? void 0 : a.product) ===
              "ReactNative")
            ? s.useLayoutEffect
            : s.useEffect;
      function $(e) {
        let t = s.useRef(e);
        return (O(() => void (t.current = e), [e]), t);
      }
      function j({ set: e }) {
        return (O(() => (e(new Promise(() => null)), () => e(!1)), [e]), null);
      }
      class z extends s.Component {
        constructor(...e) {
          (super(...e), (this.state = { error: !1 }));
        }
        componentDidCatch(e) {
          this.props.set(e);
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }
      z.getDerivedStateFromError = () => ({ error: !0 });
      let M = "__default",
        N = new Map(),
        I = (e) => e && !!e.memoized && !!e.changes;
      function L(e) {
        var t;
        let n =
          "undefined" != typeof window
            ? null != (t = window.devicePixelRatio)
              ? t
              : 2
            : 1;
        return Array.isArray(e) ? Math.min(Math.max(e[0], n), e[1]) : e;
      }
      let D = (e) => {
        var t;
        return null == (t = e.__r3f) ? void 0 : t.root.getState();
      };
      function A(e) {
        let t = e.__r3f.root;
        for (; t.getState().previousRoot; ) t = t.getState().previousRoot;
        return t;
      }
      let F = {
        obj: (e) => e === Object(e) && !F.arr(e) && "function" != typeof e,
        fun: (e) => "function" == typeof e,
        str: (e) => "string" == typeof e,
        num: (e) => "number" == typeof e,
        boo: (e) => "boolean" == typeof e,
        und: (e) => void 0 === e,
        arr: (e) => Array.isArray(e),
        equ(
          e,
          t,
          {
            arrays: n = "shallow",
            objects: r = "reference",
            strict: i = !0,
          } = {},
        ) {
          let l;
          if (typeof e != typeof t || !!e != !!t) return !1;
          if (F.str(e) || F.num(e) || F.boo(e)) return e === t;
          let o = F.obj(e);
          if (o && "reference" === r) return e === t;
          let a = F.arr(e);
          if (a && "reference" === n) return e === t;
          if ((a || o) && e === t) return !0;
          for (l in e) if (!(l in t)) return !1;
          if (o && "shallow" === n && "shallow" === r) {
            for (l in i ? t : e)
              if (!F.equ(e[l], t[l], { strict: i, objects: "reference" }))
                return !1;
          } else for (l in i ? t : e) if (e[l] !== t[l]) return !1;
          if (F.und(l)) {
            if (
              (a && 0 === e.length && 0 === t.length) ||
              (o && 0 === Object.keys(e).length && 0 === Object.keys(t).length)
            )
              return !0;
            if (e !== t) return !1;
          }
          return !0;
        },
      };
      function B(e, t) {
        return (
          (e.__r3f = {
            type: "",
            root: null,
            previousAttach: null,
            memoizedProps: {},
            eventCount: 0,
            handlers: {},
            objects: [],
            parent: null,
            ...t,
          }),
          e
        );
      }
      function H(e, t) {
        let n = e;
        if (!t.includes("-")) return { target: n, key: t };
        {
          let r = t.split("-"),
            i = r.pop();
          return { target: (n = r.reduce((e, t) => e[t], e)), key: i };
        }
      }
      let U = /-\d+$/;
      function W(e, t, n) {
        if (F.str(n)) {
          if (U.test(n)) {
            let { target: t, key: r } = H(e, n.replace(U, ""));
            Array.isArray(t[r]) || (t[r] = []);
          }
          let { target: r, key: i } = H(e, n);
          ((t.__r3f.previousAttach = r[i]), (r[i] = t));
        } else t.__r3f.previousAttach = n(e, t);
      }
      function V(e, t, n) {
        var r, i;
        if (F.str(n)) {
          let { target: r, key: i } = H(e, n),
            l = t.__r3f.previousAttach;
          void 0 === l ? delete r[i] : (r[i] = l);
        } else
          null == (r = t.__r3f) ||
            null == r.previousAttach ||
            r.previousAttach(e, t);
        null == (i = t.__r3f) || delete i.previousAttach;
      }
      function Q(
        e,
        { children: t, key: n, ref: r, ...i },
        { children: l, key: o, ref: a, ...u } = {},
        s = !1,
      ) {
        let c = e.__r3f,
          f = Object.entries(i),
          d = [];
        if (s) {
          let e = Object.keys(u);
          for (let t = 0; t < e.length; t++)
            i.hasOwnProperty(e[t]) || f.unshift([e[t], M + "remove"]);
        }
        f.forEach(([t, n]) => {
          var r;
          if (
            (null != (r = e.__r3f) && r.primitive && "object" === t) ||
            F.equ(n, u[t])
          )
            return;
          if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t))
            return d.push([t, n, !0, []]);
          let l = [];
          for (let e in (t.includes("-") && (l = t.split("-")),
          d.push([t, n, !1, l]),
          i)) {
            let n = i[e];
            e.startsWith(`${t}-`) && d.push([e, n, !1, e.split("-")]);
          }
        });
        let p = { ...i };
        return (
          null != c &&
            c.memoizedProps &&
            null != c &&
            c.memoizedProps.args &&
            (p.args = c.memoizedProps.args),
          null != c &&
            c.memoizedProps &&
            null != c &&
            c.memoizedProps.attach &&
            (p.attach = c.memoizedProps.attach),
          { memoized: p, changes: d }
        );
      }
      let G = void 0 !== S && !1;
      function q(e, t) {
        var n;
        let r = e.__r3f,
          i = null == r ? void 0 : r.root,
          l = null == i ? void 0 : null == i.getState ? void 0 : i.getState(),
          { memoized: o, changes: a } = I(t) ? t : Q(e, t),
          s = null == r ? void 0 : r.eventCount;
        e.__r3f && (e.__r3f.memoizedProps = o);
        for (let t = 0; t < a.length; t++) {
          let [n, i, o, s] = a[t];
          if (_(e)) {
            let e = "srgb",
              t = "srgb-linear";
            "encoding" === n
              ? ((n = "colorSpace"), (i = 3001 === i ? e : t))
              : "outputEncoding" === n &&
                ((n = "outputColorSpace"), (i = 3001 === i ? e : t));
          }
          let c = e,
            f = c[n];
          if (s.length && !((f = s.reduce((e, t) => e[t], e)) && f.set)) {
            let [t, ...r] = s.reverse();
            ((c = r.reverse().reduce((e, t) => e[t], e)), (n = t));
          }
          if (i === M + "remove") {
            if (c.constructor) {
              let e = N.get(c.constructor);
              (e || ((e = new c.constructor()), N.set(c.constructor, e)),
                (i = e[n]));
            } else i = 0;
          }
          if (o && r)
            (i ? (r.handlers[n] = i) : delete r.handlers[n],
              (r.eventCount = Object.keys(r.handlers).length));
          else if (f && f.set && (f.copy || f instanceof u.Layers)) {
            if (Array.isArray(i)) f.fromArray ? f.fromArray(i) : f.set(...i);
            else if (
              f.copy &&
              i &&
              i.constructor &&
              (G
                ? f.constructor.name === i.constructor.name
                : f.constructor === i.constructor)
            )
              f.copy(i);
            else if (void 0 !== i) {
              let e = f instanceof u.Color;
              (!e && f.setScalar
                ? f.setScalar(i)
                : f instanceof u.Layers && i instanceof u.Layers
                  ? (f.mask = i.mask)
                  : f.set(i),
                !R() && l && !l.linear && e && f.convertSRGBToLinear());
            }
          } else if (
            ((c[n] = i),
            c[n] instanceof u.Texture &&
              c[n].format === u.RGBAFormat &&
              c[n].type === u.UnsignedByteType &&
              l)
          ) {
            let e = c[n];
            _(e) && _(l.gl)
              ? (e.colorSpace = l.gl.outputColorSpace)
              : (e.encoding = l.gl.outputEncoding);
          }
          Y(e);
        }
        if (r && r.parent && e.raycast && s !== r.eventCount) {
          let t = A(e).getState().internal,
            n = t.interaction.indexOf(e);
          (n > -1 && t.interaction.splice(n, 1),
            r.eventCount && t.interaction.push(e));
        }
        return (
          !(1 === a.length && "onUpdate" === a[0][0]) &&
            a.length &&
            null != (n = e.__r3f) &&
            n.parent &&
            K(e),
          e
        );
      }
      function Y(e) {
        var t, n;
        let r =
          null == (t = e.__r3f)
            ? void 0
            : null == (n = t.root)
              ? void 0
              : null == n.getState
                ? void 0
                : n.getState();
        r && 0 === r.internal.frames && r.invalidate();
      }
      function K(e) {
        null == e.onUpdate || e.onUpdate(e);
      }
      function X(e, t) {
        e.manual ||
          (T(e)
            ? ((e.left = -(t.width / 2)),
              (e.right = t.width / 2),
              (e.top = t.height / 2),
              (e.bottom = -(t.height / 2)))
            : (e.aspect = t.width / t.height),
          e.updateProjectionMatrix(),
          e.updateMatrixWorld());
      }
      function Z(e) {
        return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId;
      }
      function J(e, t, n, r) {
        let i = n.get(t);
        i &&
          (n.delete(t),
          0 === n.size && (e.delete(r), i.target.releasePointerCapture(r)));
      }
      let ee = [
          "set",
          "get",
          "setSize",
          "setFrameloop",
          "setDpr",
          "events",
          "invalidate",
          "advance",
          "size",
          "viewport",
        ],
        et = (e) => !!(null != e && e.render),
        en = s.createContext(null),
        er = (e, t) => {
          let n = (0, f.Z)((n, r) => {
              let i;
              let l = new u.Vector3(),
                o = new u.Vector3(),
                a = new u.Vector3();
              function c(e = r().camera, t = o, n = r().size) {
                let { width: i, height: s, top: c, left: f } = n,
                  d = i / s;
                t instanceof u.Vector3 ? a.copy(t) : a.set(...t);
                let p = e.getWorldPosition(l).distanceTo(a);
                if (T(e))
                  return {
                    width: i / e.zoom,
                    height: s / e.zoom,
                    top: c,
                    left: f,
                    factor: 1,
                    distance: p,
                    aspect: d,
                  };
                {
                  let t = 2 * Math.tan((e.fov * Math.PI) / 180 / 2) * p,
                    n = (i / s) * t;
                  return {
                    width: n,
                    height: t,
                    top: c,
                    left: f,
                    factor: i / n,
                    distance: p,
                    aspect: d,
                  };
                }
              }
              let f = (e) =>
                  n((t) => ({ performance: { ...t.performance, current: e } })),
                d = new u.Vector2();
              return {
                set: n,
                get: r,
                gl: null,
                camera: null,
                raycaster: null,
                events: { priority: 1, enabled: !0, connected: !1 },
                xr: null,
                scene: null,
                invalidate: (t = 1) => e(r(), t),
                advance: (e, n) => t(e, n, r()),
                legacy: !1,
                linear: !1,
                flat: !1,
                controls: null,
                clock: new u.Clock(),
                pointer: d,
                mouse: d,
                frameloop: "always",
                onPointerMissed: void 0,
                performance: {
                  current: 1,
                  min: 0.5,
                  max: 1,
                  debounce: 200,
                  regress: () => {
                    let e = r();
                    (i && clearTimeout(i),
                      e.performance.current !== e.performance.min &&
                        f(e.performance.min),
                      (i = setTimeout(
                        () => f(r().performance.max),
                        e.performance.debounce,
                      )));
                  },
                },
                size: { width: 0, height: 0, top: 0, left: 0, updateStyle: !1 },
                viewport: {
                  initialDpr: 0,
                  dpr: 0,
                  width: 0,
                  height: 0,
                  top: 0,
                  left: 0,
                  aspect: 0,
                  distance: 0,
                  factor: 0,
                  getCurrentViewport: c,
                },
                setEvents: (e) =>
                  n((t) => ({ ...t, events: { ...t.events, ...e } })),
                setSize: (e, t, i, l, a) => {
                  let u = r().camera,
                    s = {
                      width: e,
                      height: t,
                      top: l || 0,
                      left: a || 0,
                      updateStyle: i,
                    };
                  n((e) => ({
                    size: s,
                    viewport: { ...e.viewport, ...c(u, o, s) },
                  }));
                },
                setDpr: (e) =>
                  n((t) => {
                    let n = L(e);
                    return {
                      viewport: {
                        ...t.viewport,
                        dpr: n,
                        initialDpr: t.viewport.initialDpr || n,
                      },
                    };
                  }),
                setFrameloop: (e = "always") => {
                  let t = r().clock;
                  (t.stop(),
                    (t.elapsedTime = 0),
                    "never" !== e && (t.start(), (t.elapsedTime = 0)),
                    n(() => ({ frameloop: e })));
                },
                previousRoot: void 0,
                internal: {
                  active: !1,
                  priority: 0,
                  frames: 0,
                  lastEvent: s.createRef(),
                  interaction: [],
                  hovered: new Map(),
                  subscribers: [],
                  initialClick: [0, 0],
                  initialHits: [],
                  capturedMap: new Map(),
                  subscribe: (e, t, n) => {
                    let i = r().internal;
                    return (
                      (i.priority = i.priority + (t > 0 ? 1 : 0)),
                      i.subscribers.push({ ref: e, priority: t, store: n }),
                      (i.subscribers = i.subscribers.sort(
                        (e, t) => e.priority - t.priority,
                      )),
                      () => {
                        let n = r().internal;
                        null != n &&
                          n.subscribers &&
                          ((n.priority = n.priority - (t > 0 ? 1 : 0)),
                          (n.subscribers = n.subscribers.filter(
                            (t) => t.ref !== e,
                          )));
                      }
                    );
                  },
                },
              };
            }),
            r = n.getState(),
            i = r.size,
            l = r.viewport.dpr,
            o = r.camera;
          return (
            n.subscribe(() => {
              let {
                camera: e,
                size: t,
                viewport: r,
                gl: a,
                set: u,
              } = n.getState();
              if (t.width !== i.width || t.height !== i.height || r.dpr !== l) {
                var s;
                ((i = t), (l = r.dpr), X(e, t), a.setPixelRatio(r.dpr));
                let n =
                  null != (s = t.updateStyle)
                    ? s
                    : "undefined" != typeof HTMLCanvasElement &&
                      a.domElement instanceof HTMLCanvasElement;
                a.setSize(t.width, t.height, n);
              }
              e !== o &&
                ((o = e),
                u((t) => ({
                  viewport: {
                    ...t.viewport,
                    ...t.viewport.getCurrentViewport(e),
                  },
                })));
            }),
            n.subscribe((t) => e(t)),
            n
          );
        },
        ei = new Set(),
        el = new Set(),
        eo = new Set();
      function ea(e, t) {
        if (e.size) for (let { callback: n } of e.values()) n(t);
      }
      function eu(e, t) {
        switch (e) {
          case "before":
            return ea(ei, t);
          case "after":
            return ea(el, t);
          case "tail":
            return ea(eo, t);
        }
      }
      function es(e, t, n) {
        let o = t.clock.getDelta();
        for (
          "never" === t.frameloop &&
            "number" == typeof e &&
            ((o = e - t.clock.elapsedTime),
            (t.clock.oldTime = t.clock.elapsedTime),
            (t.clock.elapsedTime = e)),
            i = t.internal.subscribers,
            r = 0;
          r < i.length;
          r++
        )
          (l = i[r]).ref.current(l.store.getState(), o, n);
        return (
          !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera),
          (t.internal.frames = Math.max(0, t.internal.frames - 1)),
          "always" === t.frameloop ? 1 : t.internal.frames
        );
      }
      function ec(e) {
        let t = s.useRef(null);
        return (O(() => void (t.current = e.current.__r3f), [e]), t);
      }
      function ef() {
        let e = s.useContext(en);
        if (!e)
          throw Error(
            "R3F: Hooks can only be used within the Canvas component!",
          );
        return e;
      }
      function ed(e = (e) => e, t) {
        return ef()(e, t);
      }
      function ep(e, t = 0) {
        let n = ef(),
          r = n.getState().internal.subscribe,
          i = $(e);
        return (O(() => r(i, t, n), [t, r, n]), null);
      }
      let eh = new WeakMap();
      function eg(e, t) {
        return function (n, ...r) {
          let i = eh.get(n);
          return (
            i || ((i = new n()), eh.set(n, i)),
            e && e(i),
            Promise.all(
              r.map(
                (e) =>
                  new Promise((n, r) =>
                    i.load(
                      e,
                      (e) => {
                        (e.scene &&
                          Object.assign(
                            e,
                            (function (e) {
                              let t = { nodes: {}, materials: {} };
                              return (
                                e &&
                                  e.traverse((e) => {
                                    (e.name && (t.nodes[e.name] = e),
                                      e.material &&
                                        !t.materials[e.material.name] &&
                                        (t.materials[e.material.name] =
                                          e.material));
                                  }),
                                t
                              );
                            })(e.scene),
                          ),
                          n(e));
                      },
                      t,
                      (t) =>
                        r(
                          Error(
                            `Could not load ${e}: ${null == t ? void 0 : t.message}`,
                          ),
                        ),
                    ),
                  ),
              ),
            )
          );
        };
      }
      function em(e, t, n, r) {
        let i = Array.isArray(t) ? t : [t],
          l = m(eg(n, r), [e, ...i], { equal: F.equ });
        return Array.isArray(t) ? l : l[0];
      }
      ((em.preload = function (e, t, n) {
        let r = Array.isArray(t) ? t : [t];
        return v(eg(n), [e, ...r]);
      }),
        (em.clear = function (e, t) {
          return b([e, ...(Array.isArray(t) ? t : [t])]);
        }));
      let ev = new Map(),
        { invalidate: eb, advance: ey } = (function (e) {
          let t,
            n,
            r,
            i = !1,
            l = !1;
          function o(a) {
            for (let s of ((n = requestAnimationFrame(o)),
            (i = !0),
            (t = 0),
            eu("before", a),
            (l = !0),
            e.values())) {
              var u;
              (r = s.store.getState()).internal.active &&
                ("always" === r.frameloop || r.internal.frames > 0) &&
                !(null != (u = r.gl.xr) && u.isPresenting) &&
                (t += es(a, r));
            }
            if (((l = !1), eu("after", a), 0 === t))
              return (eu("tail", a), (i = !1), cancelAnimationFrame(n));
          }
          return {
            loop: o,
            invalidate: function t(n, r = 1) {
              var a;
              if (!n) return e.forEach((e) => t(e.store.getState(), r));
              (null != (a = n.gl.xr) && a.isPresenting) ||
                !n.internal.active ||
                "never" === n.frameloop ||
                (r > 1
                  ? (n.internal.frames = Math.min(60, n.internal.frames + r))
                  : l
                    ? (n.internal.frames = 2)
                    : (n.internal.frames = 1),
                i || ((i = !0), requestAnimationFrame(o)));
            },
            advance: function (t, n = !0, r, i) {
              if ((n && eu("before", t), r)) es(t, r, i);
              else for (let n of e.values()) es(t, n.store.getState());
              n && eu("after", t);
            },
          };
        })(ev),
        { reconciler: ew, applyProps: eE } = (function (e, t) {
          function n(e, { args: t = [], attach: n, ...r }, i) {
            let l,
              o = `${e[0].toUpperCase()}${e.slice(1)}`;
            if ("primitive" === e) {
              if (void 0 === r.object)
                throw Error("R3F: Primitives without 'object' are invalid!");
              l = B(r.object, { type: e, root: i, attach: n, primitive: !0 });
            } else {
              let r = k[o];
              if (!r)
                throw Error(
                  `R3F: ${o} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`,
                );
              if (!Array.isArray(t))
                throw Error("R3F: The args prop must be an array!");
              l = B(new r(...t), {
                type: e,
                root: i,
                attach: n,
                memoizedProps: { args: t },
              });
            }
            return (
              void 0 === l.__r3f.attach &&
                (l instanceof u.BufferGeometry
                  ? (l.__r3f.attach = "geometry")
                  : l instanceof u.Material && (l.__r3f.attach = "material")),
              "inject" !== o && q(l, r),
              l
            );
          }
          function r(e, t) {
            let n = !1;
            if (t) {
              var r, i;
              (null != (r = t.__r3f) && r.attach
                ? W(e, t, t.__r3f.attach)
                : t.isObject3D && e.isObject3D && (e.add(t), (n = !0)),
                n || null == (i = e.__r3f) || i.objects.push(t),
                t.__r3f || B(t, {}),
                (t.__r3f.parent = e),
                K(t),
                Y(t));
            }
          }
          function i(e, t, n) {
            let r = !1;
            if (t) {
              var i, l;
              if (null != (i = t.__r3f) && i.attach) W(e, t, t.__r3f.attach);
              else if (t.isObject3D && e.isObject3D) {
                ((t.parent = e),
                  t.dispatchEvent({ type: "added" }),
                  e.dispatchEvent({ type: "childadded", child: t }));
                let i = e.children.filter((e) => e !== t),
                  l = i.indexOf(n);
                ((e.children = [...i.slice(0, l), t, ...i.slice(l)]), (r = !0));
              }
              (r || null == (l = e.__r3f) || l.objects.push(t),
                t.__r3f || B(t, {}),
                (t.__r3f.parent = e),
                K(t),
                Y(t));
            }
          }
          function l(e, t, n = !1) {
            e && [...e].forEach((e) => o(t, e, n));
          }
          function o(e, t, n) {
            if (t) {
              var r, i, o, a, u;
              (t.__r3f && (t.__r3f.parent = null),
                null != (r = e.__r3f) &&
                  r.objects &&
                  (e.__r3f.objects = e.__r3f.objects.filter((e) => e !== t)),
                null != (i = t.__r3f) && i.attach
                  ? V(e, t, t.__r3f.attach)
                  : t.isObject3D &&
                    e.isObject3D &&
                    (e.remove(t),
                    null != (a = t.__r3f) &&
                      a.root &&
                      (function (e, t) {
                        let { internal: n } = e.getState();
                        ((n.interaction = n.interaction.filter((e) => e !== t)),
                          (n.initialHits = n.initialHits.filter(
                            (e) => e !== t,
                          )),
                          n.hovered.forEach((e, r) => {
                            (e.eventObject === t || e.object === t) &&
                              n.hovered.delete(r);
                          }),
                          n.capturedMap.forEach((e, r) => {
                            J(n.capturedMap, t, e, r);
                          }));
                      })(A(t), t)));
              let s = null == (o = t.__r3f) ? void 0 : o.primitive,
                c = !s && (void 0 === n ? null !== t.dispose : n);
              if (
                (s ||
                  (l(null == (u = t.__r3f) ? void 0 : u.objects, t, c),
                  l(t.children, t, c)),
                delete t.__r3f,
                c && t.dispose && "Scene" !== t.type)
              ) {
                let e = () => {
                  try {
                    t.dispose();
                  } catch (e) {}
                };
                "undefined" == typeof IS_REACT_ACT_ENVIRONMENT
                  ? (0, x.unstable_scheduleCallback)(x.unstable_IdlePriority, e)
                  : e();
              }
              Y(e);
            }
          }
          let a = () => {};
          return {
            reconciler: E()({
              createInstance: n,
              removeChild: o,
              appendChild: r,
              appendInitialChild: r,
              insertBefore: i,
              supportsMutation: !0,
              isPrimaryRenderer: !1,
              supportsPersistence: !1,
              supportsHydration: !1,
              noTimeout: -1,
              appendChildToContainer: (e, t) => {
                if (!t) return;
                let n = e.getState().scene;
                n.__r3f && ((n.__r3f.root = e), r(n, t));
              },
              removeChildFromContainer: (e, t) => {
                t && o(e.getState().scene, t);
              },
              insertInContainerBefore: (e, t, n) => {
                if (!t || !n) return;
                let r = e.getState().scene;
                r.__r3f && i(r, t, n);
              },
              getRootHostContext: () => null,
              getChildHostContext: (e) => e,
              finalizeInitialChildren(e) {
                var t;
                return !!(null != (t = null == e ? void 0 : e.__r3f) ? t : {})
                  .handlers;
              },
              prepareUpdate(e, t, n, r) {
                var i;
                if (
                  (null != (i = null == e ? void 0 : e.__r3f) ? i : {})
                    .primitive &&
                  r.object &&
                  r.object !== e
                )
                  return [!0];
                {
                  let { args: t = [], children: i, ...l } = r,
                    { args: o = [], children: a, ...u } = n;
                  if (!Array.isArray(t))
                    throw Error("R3F: the args prop must be an array!");
                  if (t.some((e, t) => e !== o[t])) return [!0];
                  let s = Q(e, l, u, !0);
                  return s.changes.length ? [!1, s] : null;
                }
              },
              commitUpdate(e, [t, i], l, a, u, s) {
                t
                  ? (function (e, t, i, l) {
                      var a;
                      let u = null == (a = e.__r3f) ? void 0 : a.parent;
                      if (!u) return;
                      let s = n(t, i, e.__r3f.root);
                      if (e.children) {
                        for (let t of e.children) t.__r3f && r(s, t);
                        e.children = e.children.filter((e) => !e.__r3f);
                      }
                      (e.__r3f.objects.forEach((e) => r(s, e)),
                        (e.__r3f.objects = []),
                        e.__r3f.autoRemovedBeforeAppend || o(u, e),
                        s.parent && (s.__r3f.autoRemovedBeforeAppend = !0),
                        r(u, s),
                        s.raycast &&
                          s.__r3f.eventCount &&
                          A(s).getState().internal.interaction.push(s),
                        [l, l.alternate].forEach((e) => {
                          null !== e &&
                            ((e.stateNode = s),
                            e.ref &&
                              ("function" == typeof e.ref
                                ? e.ref(s)
                                : (e.ref.current = s)));
                        }));
                    })(e, l, u, s)
                  : q(e, i);
              },
              commitMount(e, t, n, r) {
                var i;
                let l = null != (i = e.__r3f) ? i : {};
                e.raycast &&
                  l.handlers &&
                  l.eventCount &&
                  A(e).getState().internal.interaction.push(e);
              },
              getPublicInstance: (e) => e,
              prepareForCommit: () => null,
              preparePortalMount: (e) => B(e.getState().scene),
              resetAfterCommit: () => {},
              shouldSetTextContent: () => !1,
              clearContainer: () => !1,
              hideInstance(e) {
                var t;
                let { attach: n, parent: r } = null != (t = e.__r3f) ? t : {};
                (n && r && V(r, e, n), e.isObject3D && (e.visible = !1), Y(e));
              },
              unhideInstance(e, t) {
                var n;
                let { attach: r, parent: i } = null != (n = e.__r3f) ? n : {};
                (r && i && W(i, e, r),
                  ((e.isObject3D && null == t.visible) || t.visible) &&
                    (e.visible = !0),
                  Y(e));
              },
              createTextInstance: a,
              hideTextInstance: a,
              unhideTextInstance: a,
              getCurrentEventPriority: () => (t ? t() : c.DefaultEventPriority),
              beforeActiveInstanceBlur: () => {},
              afterActiveInstanceBlur: () => {},
              detachDeletedInstance: () => {},
              now:
                "undefined" != typeof performance && F.fun(performance.now)
                  ? performance.now
                  : F.fun(Date.now)
                    ? Date.now
                    : () => 0,
              scheduleTimeout: F.fun(setTimeout) ? setTimeout : void 0,
              cancelTimeout: F.fun(clearTimeout) ? clearTimeout : void 0,
            }),
            applyProps: q,
          };
        })(0, function () {
          var e;
          let t =
            ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window);
          if (!t) return c.DefaultEventPriority;
          switch (null == (e = t.event) ? void 0 : e.type) {
            case "click":
            case "contextmenu":
            case "dblclick":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
              return c.DiscreteEventPriority;
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerenter":
            case "pointerleave":
            case "wheel":
              return c.ContinuousEventPriority;
            default:
              return c.DefaultEventPriority;
          }
        }),
        ex = { objects: "shallow", strict: !1 },
        eS = (e, t) => {
          let n = "function" == typeof e ? e(t) : e;
          return et(n)
            ? n
            : new u.WebGLRenderer({
                powerPreference: "high-performance",
                canvas: t,
                antialias: !0,
                alpha: !0,
                ...e,
              });
        };
      function ek(e) {
        let t, n;
        let r = ev.get(e),
          i = null == r ? void 0 : r.fiber,
          l = null == r ? void 0 : r.store;
        r && console.warn("R3F.createRoot should only be called once!");
        let o = "function" == typeof reportError ? reportError : console.error,
          a = l || er(eb, ey),
          s =
            i ||
            ew.createContainer(
              a,
              c.ConcurrentRoot,
              null,
              !1,
              null,
              "",
              o,
              null,
            );
        r || ev.set(e, { fiber: s, store: a });
        let f = !1;
        return {
          configure(r = {}) {
            var i, l;
            let {
                gl: o,
                size: s,
                scene: c,
                events: d,
                onCreated: p,
                shadows: h = !1,
                linear: g = !1,
                flat: m = !1,
                legacy: v = !1,
                orthographic: b = !1,
                frameloop: y = "always",
                dpr: w = [1, 2],
                performance: E,
                raycaster: x,
                camera: S,
                onPointerMissed: k,
              } = r,
              C = a.getState(),
              _ = C.gl;
            C.gl || C.set({ gl: (_ = eS(o, e)) });
            let T = C.raycaster;
            T || C.set({ raycaster: (T = new u.Raycaster()) });
            let { params: P, ...O } = x || {};
            if (
              (F.equ(O, T, ex) || eE(T, { ...O }),
              F.equ(P, T.params, ex) ||
                eE(T, { params: { ...T.params, ...P } }),
              !C.camera || (C.camera === n && !F.equ(n, S, ex)))
            ) {
              n = S;
              let e = S instanceof u.Camera,
                t = e
                  ? S
                  : b
                    ? new u.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3)
                    : new u.PerspectiveCamera(75, 0, 0.1, 1e3);
              (e ||
                ((t.position.z = 5),
                S &&
                  (eE(t, S),
                  ("aspect" in S ||
                    "left" in S ||
                    "right" in S ||
                    "bottom" in S ||
                    "top" in S) &&
                    ((t.manual = !0), t.updateProjectionMatrix())),
                C.camera || (null != S && S.rotation) || t.lookAt(0, 0, 0)),
                C.set({ camera: t }),
                (T.camera = t));
            }
            if (!C.scene) {
              let e;
              (c instanceof u.Scene
                ? (e = c)
                : ((e = new u.Scene()), c && eE(e, c)),
                C.set({ scene: B(e) }));
            }
            if (!C.xr) {
              let e = (e, t) => {
                  let n = a.getState();
                  "never" !== n.frameloop && ey(e, !0, n, t);
                },
                t = () => {
                  let t = a.getState();
                  ((t.gl.xr.enabled = t.gl.xr.isPresenting),
                    t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null),
                    t.gl.xr.isPresenting || eb(t));
                },
                n = {
                  connect() {
                    let e = a.getState().gl;
                    (e.xr.addEventListener("sessionstart", t),
                      e.xr.addEventListener("sessionend", t));
                  },
                  disconnect() {
                    let e = a.getState().gl;
                    (e.xr.removeEventListener("sessionstart", t),
                      e.xr.removeEventListener("sessionend", t));
                  },
                };
              ("function" ==
                typeof (null == (i = _.xr) ? void 0 : i.addEventListener) &&
                n.connect(),
                C.set({ xr: n }));
            }
            if (_.shadowMap) {
              let e = _.shadowMap.enabled,
                t = _.shadowMap.type;
              if (((_.shadowMap.enabled = !!h), F.boo(h)))
                _.shadowMap.type = u.PCFSoftShadowMap;
              else if (F.str(h)) {
                let e = {
                  basic: u.BasicShadowMap,
                  percentage: u.PCFShadowMap,
                  soft: u.PCFSoftShadowMap,
                  variance: u.VSMShadowMap,
                };
                _.shadowMap.type = null != (l = e[h]) ? l : u.PCFSoftShadowMap;
              } else F.obj(h) && Object.assign(_.shadowMap, h);
              (e !== _.shadowMap.enabled || t !== _.shadowMap.type) &&
                (_.shadowMap.needsUpdate = !0);
            }
            let $ = R();
            ($ &&
              ("enabled" in $
                ? ($.enabled = !v)
                : "legacyMode" in $ && ($.legacyMode = v)),
              f ||
                eE(_, {
                  outputEncoding: g ? 3e3 : 3001,
                  toneMapping: m ? u.NoToneMapping : u.ACESFilmicToneMapping,
                }),
              C.legacy !== v && C.set(() => ({ legacy: v })),
              C.linear !== g && C.set(() => ({ linear: g })),
              C.flat !== m && C.set(() => ({ flat: m })),
              !o || F.fun(o) || et(o) || F.equ(o, _, ex) || eE(_, o),
              d && !C.events.handlers && C.set({ events: d(a) }));
            let j = (function (e, t) {
              let n =
                "undefined" != typeof HTMLCanvasElement &&
                e instanceof HTMLCanvasElement;
              if (t) {
                let {
                  width: e,
                  height: r,
                  top: i,
                  left: l,
                  updateStyle: o = n,
                } = t;
                return { width: e, height: r, top: i, left: l, updateStyle: o };
              }
              if (
                "undefined" != typeof HTMLCanvasElement &&
                e instanceof HTMLCanvasElement &&
                e.parentElement
              ) {
                let {
                  width: t,
                  height: r,
                  top: i,
                  left: l,
                } = e.parentElement.getBoundingClientRect();
                return { width: t, height: r, top: i, left: l, updateStyle: n };
              }
              return "undefined" != typeof OffscreenCanvas &&
                e instanceof OffscreenCanvas
                ? {
                    width: e.width,
                    height: e.height,
                    top: 0,
                    left: 0,
                    updateStyle: n,
                  }
                : { width: 0, height: 0, top: 0, left: 0 };
            })(e, s);
            return (
              F.equ(j, C.size, ex) ||
                C.setSize(j.width, j.height, j.updateStyle, j.top, j.left),
              w && C.viewport.dpr !== L(w) && C.setDpr(w),
              C.frameloop !== y && C.setFrameloop(y),
              C.onPointerMissed || C.set({ onPointerMissed: k }),
              E &&
                !F.equ(E, C.performance, ex) &&
                C.set((e) => ({ performance: { ...e.performance, ...E } })),
              (t = p),
              (f = !0),
              this
            );
          },
          render(n) {
            return (
              f || this.configure(),
              ew.updateContainer(
                (0, y.jsx)(eC, {
                  store: a,
                  children: n,
                  onCreated: t,
                  rootElement: e,
                }),
                s,
                null,
                () => void 0,
              ),
              a
            );
          },
          unmount() {
            e_(e);
          },
        };
      }
      function eC({ store: e, children: t, onCreated: n, rootElement: r }) {
        return (
          O(() => {
            let t = e.getState();
            (t.set((e) => ({ internal: { ...e.internal, active: !0 } })),
              n && n(t),
              e.getState().events.connected ||
                null == t.events.connect ||
                t.events.connect(r));
          }, []),
          (0, y.jsx)(en.Provider, { value: e, children: t })
        );
      }
      function e_(e, t) {
        let n = ev.get(e),
          r = null == n ? void 0 : n.fiber;
        if (r) {
          let i = null == n ? void 0 : n.store.getState();
          (i && (i.internal.active = !1),
            ew.updateContainer(null, r, null, () => {
              i &&
                setTimeout(() => {
                  try {
                    var n, r, l, o;
                    (null == i.events.disconnect || i.events.disconnect(),
                      null == (n = i.gl) ||
                        null == (r = n.renderLists) ||
                        null == r.dispose ||
                        r.dispose(),
                      null == (l = i.gl) ||
                        null == l.forceContextLoss ||
                        l.forceContextLoss(),
                      null != (o = i.gl) && o.xr && i.xr.disconnect(),
                      (function (e) {
                        for (let t in (e.dispose &&
                          "Scene" !== e.type &&
                          e.dispose(),
                        e))
                          (null == t.dispose || t.dispose(), delete e[t]);
                      })(i),
                      ev.delete(e),
                      t && t(e));
                  } catch (e) {}
                }, 500);
            }));
        }
      }
      function eR(e, t, n) {
        return (0, y.jsx)(eT, { children: e, container: t, state: n }, t.uuid);
      }
      function eT({ state: e = {}, children: t, container: n }) {
        let { events: r, size: i, ...l } = e,
          o = ef(),
          [a] = s.useState(() => new u.Raycaster()),
          [c] = s.useState(() => new u.Vector2()),
          d = s.useCallback(
            (e, t) => {
              let s;
              let f = { ...e };
              if (
                (Object.keys(e).forEach((n) => {
                  (ee.includes(n) || (e[n] !== t[n] && t[n])) && delete f[n];
                }),
                t && i)
              ) {
                let n = t.camera;
                ((s = e.viewport.getCurrentViewport(n, new u.Vector3(), i)),
                  n !== e.camera && X(n, i));
              }
              return {
                ...f,
                scene: n,
                raycaster: a,
                pointer: c,
                mouse: c,
                previousRoot: o,
                events: {
                  ...e.events,
                  ...(null == t ? void 0 : t.events),
                  ...r,
                },
                size: { ...e.size, ...i },
                viewport: { ...e.viewport, ...s },
                ...l,
              };
            },
            [e],
          ),
          [p] = s.useState(() => {
            let e = o.getState();
            return (0, f.Z)((t, u) => ({
              ...e,
              scene: n,
              raycaster: a,
              pointer: c,
              mouse: c,
              previousRoot: o,
              events: { ...e.events, ...r },
              size: { ...e.size, ...i },
              ...l,
              set: t,
              get: u,
              setEvents: (e) =>
                t((t) => ({ ...t, events: { ...t.events, ...e } })),
            }));
          });
        return (
          s.useEffect(() => {
            let e = o.subscribe((e) => p.setState((t) => d(e, t)));
            return () => {
              e();
            };
          }, [d]),
          s.useEffect(() => {
            p.setState((e) => d(o.getState(), e));
          }, [d]),
          s.useEffect(
            () => () => {
              p.destroy();
            },
            [],
          ),
          (0, y.jsx)(y.Fragment, {
            children: ew.createPortal(
              (0, y.jsx)(en.Provider, { value: p, children: t }),
              p,
              null,
            ),
          })
        );
      }
      (ew.injectIntoDevTools({
        bundleType: 0,
        rendererPackageName: "@react-three/fiber",
        version: s.version,
      }),
        s.unstable_act);
      let eP = {
        onClick: ["click", !1],
        onContextMenu: ["contextmenu", !1],
        onDoubleClick: ["dblclick", !1],
        onWheel: ["wheel", !0],
        onPointerDown: ["pointerdown", !0],
        onPointerUp: ["pointerup", !0],
        onPointerLeave: ["pointerleave", !0],
        onPointerMove: ["pointermove", !0],
        onPointerCancel: ["pointercancel", !0],
        onLostPointerCapture: ["lostpointercapture", !0],
      };
      function eO(e) {
        let { handlePointer: t } = (function (e) {
          function t(e) {
            return e.filter((e) =>
              ["Move", "Over", "Enter", "Out", "Leave"].some((t) => {
                var n;
                return null == (n = e.__r3f)
                  ? void 0
                  : n.handlers["onPointer" + t];
              }),
            );
          }
          function n(t) {
            let { internal: n } = e.getState();
            for (let e of n.hovered.values())
              if (
                !t.length ||
                !t.find(
                  (t) =>
                    t.object === e.object &&
                    t.index === e.index &&
                    t.instanceId === e.instanceId,
                )
              ) {
                let r = e.eventObject.__r3f,
                  i = null == r ? void 0 : r.handlers;
                if ((n.hovered.delete(Z(e)), null != r && r.eventCount)) {
                  let n = { ...e, intersections: t };
                  (null == i.onPointerOut || i.onPointerOut(n),
                    null == i.onPointerLeave || i.onPointerLeave(n));
                }
              }
          }
          function r(e, t) {
            for (let n = 0; n < t.length; n++) {
              let r = t[n].__r3f;
              null == r ||
                null == r.handlers.onPointerMissed ||
                r.handlers.onPointerMissed(e);
            }
          }
          return {
            handlePointer: function (i) {
              switch (i) {
                case "onPointerLeave":
                case "onPointerCancel":
                  return () => n([]);
                case "onLostPointerCapture":
                  return (t) => {
                    let { internal: r } = e.getState();
                    "pointerId" in t &&
                      r.capturedMap.has(t.pointerId) &&
                      requestAnimationFrame(() => {
                        r.capturedMap.has(t.pointerId) &&
                          (r.capturedMap.delete(t.pointerId), n([]));
                      });
                  };
              }
              return function (l) {
                let { onPointerMissed: o, internal: a } = e.getState();
                a.lastEvent.current = l;
                let s = "onPointerMove" === i,
                  c =
                    "onClick" === i ||
                    "onContextMenu" === i ||
                    "onDoubleClick" === i,
                  f = (function (t, n) {
                    let r = e.getState(),
                      i = new Set(),
                      l = [],
                      o = n
                        ? n(r.internal.interaction)
                        : r.internal.interaction;
                    for (let e = 0; e < o.length; e++) {
                      let t = D(o[e]);
                      t && (t.raycaster.camera = void 0);
                    }
                    r.previousRoot ||
                      null == r.events.compute ||
                      r.events.compute(t, r);
                    let a = o
                      .flatMap(function (e) {
                        let n = D(e);
                        if (
                          !n ||
                          !n.events.enabled ||
                          null === n.raycaster.camera
                        )
                          return [];
                        if (void 0 === n.raycaster.camera) {
                          var r;
                          (null == n.events.compute ||
                            n.events.compute(
                              t,
                              n,
                              null == (r = n.previousRoot)
                                ? void 0
                                : r.getState(),
                            ),
                            void 0 === n.raycaster.camera &&
                              (n.raycaster.camera = null));
                        }
                        return n.raycaster.camera
                          ? n.raycaster.intersectObject(e, !0)
                          : [];
                      })
                      .sort((e, t) => {
                        let n = D(e.object),
                          r = D(t.object);
                        return (
                          (n && r && r.events.priority - n.events.priority) ||
                          e.distance - t.distance
                        );
                      })
                      .filter((e) => {
                        let t = Z(e);
                        return !i.has(t) && (i.add(t), !0);
                      });
                    for (let e of (r.events.filter &&
                      (a = r.events.filter(a, r)),
                    a)) {
                      let t = e.object;
                      for (; t; ) {
                        var u;
                        (null != (u = t.__r3f) &&
                          u.eventCount &&
                          l.push({ ...e, eventObject: t }),
                          (t = t.parent));
                      }
                    }
                    if (
                      "pointerId" in t &&
                      r.internal.capturedMap.has(t.pointerId)
                    )
                      for (let e of r.internal.capturedMap
                        .get(t.pointerId)
                        .values())
                        i.has(Z(e.intersection)) || l.push(e.intersection);
                    return l;
                  })(l, s ? t : void 0),
                  d = c
                    ? (function (t) {
                        let { internal: n } = e.getState(),
                          r = t.offsetX - n.initialClick[0],
                          i = t.offsetY - n.initialClick[1];
                        return Math.round(Math.sqrt(r * r + i * i));
                      })(l)
                    : 0;
                ("onPointerDown" === i &&
                  ((a.initialClick = [l.offsetX, l.offsetY]),
                  (a.initialHits = f.map((e) => e.eventObject))),
                  c && !f.length && d <= 2 && (r(l, a.interaction), o && o(l)),
                  s && n(f),
                  (function (t, r, i, l) {
                    let o = e.getState();
                    if (t.length) {
                      let e = { stopped: !1 };
                      for (let a of t) {
                        let {
                            raycaster: s,
                            pointer: c,
                            camera: f,
                            internal: d,
                          } = D(a.object) || o,
                          p = new u.Vector3(c.x, c.y, 0).unproject(f),
                          h = (e) => {
                            var t, n;
                            return (
                              null !=
                                (t =
                                  null == (n = d.capturedMap.get(e))
                                    ? void 0
                                    : n.has(a.eventObject)) && t
                            );
                          },
                          g = (e) => {
                            let t = { intersection: a, target: r.target };
                            (d.capturedMap.has(e)
                              ? d.capturedMap.get(e).set(a.eventObject, t)
                              : d.capturedMap.set(
                                  e,
                                  new Map([[a.eventObject, t]]),
                                ),
                              r.target.setPointerCapture(e));
                          },
                          m = (e) => {
                            let t = d.capturedMap.get(e);
                            t && J(d.capturedMap, a.eventObject, t, e);
                          },
                          v = {};
                        for (let e in r) {
                          let t = r[e];
                          "function" != typeof t && (v[e] = t);
                        }
                        let b = {
                          ...a,
                          ...v,
                          pointer: c,
                          intersections: t,
                          stopped: e.stopped,
                          delta: i,
                          unprojectedPoint: p,
                          ray: s.ray,
                          camera: f,
                          stopPropagation() {
                            let i =
                              "pointerId" in r &&
                              d.capturedMap.get(r.pointerId);
                            (!i || i.has(a.eventObject)) &&
                              ((b.stopped = e.stopped = !0),
                              d.hovered.size &&
                                Array.from(d.hovered.values()).find(
                                  (e) => e.eventObject === a.eventObject,
                                ) &&
                                n([...t.slice(0, t.indexOf(a)), a]));
                          },
                          target: {
                            hasPointerCapture: h,
                            setPointerCapture: g,
                            releasePointerCapture: m,
                          },
                          currentTarget: {
                            hasPointerCapture: h,
                            setPointerCapture: g,
                            releasePointerCapture: m,
                          },
                          nativeEvent: r,
                        };
                        if ((l(b), !0 === e.stopped)) break;
                      }
                    }
                  })(f, l, d, function (e) {
                    let t = e.eventObject,
                      n = t.__r3f,
                      o = null == n ? void 0 : n.handlers;
                    if (null != n && n.eventCount) {
                      if (s) {
                        if (
                          o.onPointerOver ||
                          o.onPointerEnter ||
                          o.onPointerOut ||
                          o.onPointerLeave
                        ) {
                          let t = Z(e),
                            n = a.hovered.get(t);
                          n
                            ? n.stopped && e.stopPropagation()
                            : (a.hovered.set(t, e),
                              null == o.onPointerOver || o.onPointerOver(e),
                              null == o.onPointerEnter || o.onPointerEnter(e));
                        }
                        null == o.onPointerMove || o.onPointerMove(e);
                      } else {
                        let n = o[i];
                        n
                          ? (!c || a.initialHits.includes(t)) &&
                            (r(
                              l,
                              a.interaction.filter(
                                (e) => !a.initialHits.includes(e),
                              ),
                            ),
                            n(e))
                          : c &&
                            a.initialHits.includes(t) &&
                            r(
                              l,
                              a.interaction.filter(
                                (e) => !a.initialHits.includes(e),
                              ),
                            );
                      }
                    }
                  }));
              };
            },
          };
        })(e);
        return {
          priority: 1,
          enabled: !0,
          compute(e, t, n) {
            (t.pointer.set(
              (e.offsetX / t.size.width) * 2 - 1,
              -((e.offsetY / t.size.height) * 2) + 1,
            ),
              t.raycaster.setFromCamera(t.pointer, t.camera));
          },
          connected: void 0,
          handlers: Object.keys(eP).reduce((e, n) => ({ ...e, [n]: t(n) }), {}),
          update: () => {
            var t;
            let { events: n, internal: r } = e.getState();
            null != (t = r.lastEvent) &&
              t.current &&
              n.handlers &&
              n.handlers.onPointerMove(r.lastEvent.current);
          },
          connect: (t) => {
            var n;
            let { set: r, events: i } = e.getState();
            (null == i.disconnect || i.disconnect(),
              r((e) => ({ events: { ...e.events, connected: t } })),
              Object.entries(null != (n = i.handlers) ? n : []).forEach(
                ([e, n]) => {
                  let [r, i] = eP[e];
                  t.addEventListener(r, n, { passive: i });
                },
              ));
          },
          disconnect: () => {
            let { set: t, events: n } = e.getState();
            if (n.connected) {
              var r;
              (Object.entries(null != (r = n.handlers) ? r : []).forEach(
                ([e, t]) => {
                  if (n && n.connected instanceof HTMLElement) {
                    let [r] = eP[e];
                    n.connected.removeEventListener(r, t);
                  }
                },
              ),
                t((e) => ({ events: { ...e.events, connected: void 0 } })));
            }
          },
        };
      }
    },
    6755: function (e, t, n) {
      "use strict";
      n.d(t, {
        Xz: function () {
          return R;
        },
      });
      var r,
        i,
        l = n(3086),
        o = n(959),
        a = n(9892),
        u = n(1110),
        s = n.n(u),
        c = Object.defineProperty,
        f = Object.defineProperties,
        d = Object.getOwnPropertyDescriptors,
        p = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable,
        m = (e, t, n) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        v = (e, t) => {
          for (var n in t || (t = {})) h.call(t, n) && m(e, n, t[n]);
          if (p) for (var n of p(t)) g.call(t, n) && m(e, n, t[n]);
          return e;
        },
        b = (e, t) => f(e, d(t));
      function y(e) {
        try {
          return Object.defineProperties(e, {
            _currentRenderer: { get: () => null, set() {} },
            _currentRenderer2: { get: () => null, set() {} },
          });
        } catch (t) {
          return e;
        }
      }
      "undefined" != typeof window &&
      ((null == (r = window.document) ? void 0 : r.createElement) ||
        (null == (i = window.navigator) ? void 0 : i.product) === "ReactNative")
        ? o.useLayoutEffect
        : o.useEffect;
      let w = console.error;
      console.error = function () {
        let e = [...arguments].join("");
        if (
          (null == e ? void 0 : e.startsWith("Warning:")) &&
          e.includes("useContext")
        ) {
          console.error = w;
          return;
        }
        return w.apply(this, arguments);
      };
      let E = y(o.createContext(null));
      class x extends o.Component {
        render() {
          return o.createElement(
            E.Provider,
            { value: this._reactInternals },
            this.props.children,
          );
        }
      }
      var S = n(1527);
      (n(5259), n(7427), n(5297));
      let k = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        C = (e, t) => k.every((n) => e[n] === t[n]),
        _ = o.forwardRef(function (
          {
            children: e,
            fallback: t,
            resize: n,
            style: r,
            gl: i,
            events: u = l.c,
            eventSource: c,
            eventPrefix: f,
            shadows: d,
            linear: p,
            flat: h,
            legacy: g,
            orthographic: m,
            frameloop: w,
            dpr: k,
            performance: _,
            raycaster: R,
            camera: T,
            scene: P,
            onPointerMissed: O,
            onCreated: $,
            ...j
          },
          z,
        ) {
          o.useMemo(() => (0, l.e)(a), []);
          let M = (function () {
              let e = (function () {
                let e = (function () {
                    let e = o.useContext(E);
                    if (null === e)
                      throw Error(
                        "its-fine: useFiber must be called within a <FiberProvider />!",
                      );
                    let t = o.useId();
                    return o.useMemo(() => {
                      for (let n of [e, null == e ? void 0 : e.alternate]) {
                        if (!n) continue;
                        let e = (function e(t, n, r) {
                          if (!t) return;
                          if (!0 === r(t)) return t;
                          let i = n ? t.return : t.child;
                          for (; i; ) {
                            let t = e(i, n, r);
                            if (t) return t;
                            i = n ? null : i.sibling;
                          }
                        })(n, !1, (e) => {
                          let n = e.memoizedState;
                          for (; n; ) {
                            if (n.memoizedState === t) return !0;
                            n = n.next;
                          }
                        });
                        if (e) return e;
                      }
                    }, [e, t]);
                  })(),
                  [t] = o.useState(() => new Map());
                t.clear();
                let n = e;
                for (; n; ) {
                  if (n.type && "object" == typeof n.type) {
                    let e =
                      void 0 === n.type._context && n.type.Provider === n.type
                        ? n.type
                        : n.type._context;
                    e && e !== E && !t.has(e) && t.set(e, o.useContext(y(e)));
                  }
                  n = n.return;
                }
                return t;
              })();
              return o.useMemo(
                () =>
                  Array.from(e.keys()).reduce(
                    (t, n) => (r) =>
                      o.createElement(
                        t,
                        null,
                        o.createElement(
                          n.Provider,
                          b(v({}, r), { value: e.get(n) }),
                        ),
                      ),
                    (e) => o.createElement(x, v({}, e)),
                  ),
                [e],
              );
            })(),
            [N, I] = (function (
              { debounce: e, scroll: t, polyfill: n, offsetSize: r } = {
                debounce: 0,
                scroll: !1,
                offsetSize: !1,
              },
            ) {
              var i;
              let l =
                  n || ("undefined" != typeof window && window.ResizeObserver),
                [a, u] = (0, o.useState)({
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0,
                  bottom: 0,
                  right: 0,
                  x: 0,
                  y: 0,
                });
              if (!l)
                return (
                  (a.width = 1280),
                  (a.height = 800),
                  [() => {}, a, () => {}]
                );
              let c = (0, o.useRef)({
                  element: null,
                  scrollContainers: null,
                  resizeObserver: null,
                  lastBounds: a,
                  orientationHandler: null,
                }),
                f = e ? ("number" == typeof e ? e : e.scroll) : null,
                d = e ? ("number" == typeof e ? e : e.resize) : null,
                p = (0, o.useRef)(!1);
              (0, o.useEffect)(
                () => ((p.current = !0), () => void (p.current = !1)),
              );
              let [h, g, m] = (0, o.useMemo)(() => {
                let e = () => {
                  if (!c.current.element) return;
                  let {
                      left: e,
                      top: t,
                      width: n,
                      height: i,
                      bottom: l,
                      right: o,
                      x: a,
                      y: s,
                    } = c.current.element.getBoundingClientRect(),
                    f = {
                      left: e,
                      top: t,
                      width: n,
                      height: i,
                      bottom: l,
                      right: o,
                      x: a,
                      y: s,
                    };
                  (c.current.element instanceof HTMLElement &&
                    r &&
                    ((f.height = c.current.element.offsetHeight),
                    (f.width = c.current.element.offsetWidth)),
                    Object.freeze(f),
                    p.current &&
                      !C(c.current.lastBounds, f) &&
                      u((c.current.lastBounds = f)));
                };
                return [e, d ? s()(e, d) : e, f ? s()(e, f) : e];
              }, [u, r, f, d]);
              function v() {
                (c.current.scrollContainers &&
                  (c.current.scrollContainers.forEach((e) =>
                    e.removeEventListener("scroll", m, !0),
                  ),
                  (c.current.scrollContainers = null)),
                  c.current.resizeObserver &&
                    (c.current.resizeObserver.disconnect(),
                    (c.current.resizeObserver = null)),
                  c.current.orientationHandler &&
                    ("orientation" in screen &&
                    "removeEventListener" in screen.orientation
                      ? screen.orientation.removeEventListener(
                          "change",
                          c.current.orientationHandler,
                        )
                      : "onorientationchange" in window &&
                        window.removeEventListener(
                          "orientationchange",
                          c.current.orientationHandler,
                        )));
              }
              function b() {
                var e;
                c.current.element &&
                  ((c.current.resizeObserver = new l(g)),
                  null == (e = c.current.resizeObserver) ||
                    e.observe(c.current.element),
                  t &&
                    c.current.scrollContainers &&
                    c.current.scrollContainers.forEach((e) =>
                      e.addEventListener("scroll", m, {
                        capture: !0,
                        passive: !0,
                      }),
                    ),
                  (c.current.orientationHandler = () => {
                    m();
                  }),
                  "orientation" in screen &&
                  "addEventListener" in screen.orientation
                    ? screen.orientation.addEventListener(
                        "change",
                        c.current.orientationHandler,
                      )
                    : "onorientationchange" in window &&
                      window.addEventListener(
                        "orientationchange",
                        c.current.orientationHandler,
                      ));
              }
              return (
                (i = !!t),
                (0, o.useEffect)(() => {
                  if (i)
                    return (
                      window.addEventListener("scroll", m, {
                        capture: !0,
                        passive: !0,
                      }),
                      () => void window.removeEventListener("scroll", m, !0)
                    );
                }, [m, i]),
                (0, o.useEffect)(
                  () => (
                    window.addEventListener("resize", g),
                    () => void window.removeEventListener("resize", g)
                  ),
                  [g],
                ),
                (0, o.useEffect)(() => {
                  (v(), b());
                }, [t, m, g]),
                (0, o.useEffect)(() => v, []),
                [
                  (e) => {
                    e &&
                      e !== c.current.element &&
                      (v(),
                      (c.current.element = e),
                      (c.current.scrollContainers = (function e(t) {
                        let n = [];
                        if (!t || t === document.body) return n;
                        let {
                          overflow: r,
                          overflowX: i,
                          overflowY: l,
                        } = window.getComputedStyle(t);
                        return (
                          [r, i, l].some(
                            (e) => "auto" === e || "scroll" === e,
                          ) && n.push(t),
                          [...n, ...e(t.parentElement)]
                        );
                      })(e)),
                      b());
                  },
                  a,
                  h,
                ]
              );
            })({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...n }),
            L = o.useRef(null),
            D = o.useRef(null);
          o.useImperativeHandle(z, () => L.current);
          let A = (0, l.u)(O),
            [F, B] = o.useState(!1),
            [H, U] = o.useState(!1);
          if (F) throw F;
          if (H) throw H;
          let W = o.useRef(null);
          ((0, l.a)(() => {
            let t = L.current;
            I.width > 0 &&
              I.height > 0 &&
              t &&
              (W.current || (W.current = (0, l.b)(t)),
              W.current.configure({
                gl: i,
                events: u,
                shadows: d,
                linear: p,
                flat: h,
                legacy: g,
                orthographic: m,
                frameloop: w,
                dpr: k,
                performance: _,
                raycaster: R,
                camera: T,
                scene: P,
                size: I,
                onPointerMissed: (...e) =>
                  null == A.current ? void 0 : A.current(...e),
                onCreated: (e) => {
                  (null == e.events.connect ||
                    e.events.connect(
                      c ? ((0, l.i)(c) ? c.current : c) : D.current,
                    ),
                    f &&
                      e.setEvents({
                        compute: (e, t) => {
                          let n = e[f + "X"],
                            r = e[f + "Y"];
                          (t.pointer.set(
                            (n / t.size.width) * 2 - 1,
                            -((r / t.size.height) * 2) + 1,
                          ),
                            t.raycaster.setFromCamera(t.pointer, t.camera));
                        },
                      }),
                    null == $ || $(e));
                },
              }),
              W.current.render(
                (0, S.jsx)(M, {
                  children: (0, S.jsx)(l.E, {
                    set: U,
                    children: (0, S.jsx)(o.Suspense, {
                      fallback: (0, S.jsx)(l.B, { set: B }),
                      children: e,
                    }),
                  }),
                }),
              ));
          }),
            o.useEffect(() => {
              let e = L.current;
              if (e) return () => (0, l.d)(e);
            }, []));
          let V = c ? "none" : "auto";
          return (0, S.jsx)("div", {
            ref: D,
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              pointerEvents: V,
              ...r,
            },
            ...j,
            children: (0, S.jsx)("div", {
              ref: N,
              style: { width: "100%", height: "100%" },
              children: (0, S.jsx)("canvas", {
                ref: L,
                style: { display: "block" },
                children: t,
              }),
            }),
          });
        }),
        R = o.forwardRef(function (e, t) {
          return (0, S.jsx)(x, { children: (0, S.jsx)(_, { ...e, ref: t }) });
        });
    },
    7566: function (e) {
      "use strict";
      e.exports = function (e, t) {
        if (null == e)
          throw TypeError("expected first argument to be an object.");
        if (
          void 0 === t ||
          "undefined" == typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return e;
        for (
          var n = Object.prototype.propertyIsEnumerable,
            r = Object(e),
            i = arguments.length,
            l = 0;
          ++l < i;
        )
          for (
            var o = Object(arguments[l]),
              a = Object.getOwnPropertySymbols(o),
              u = 0;
            u < a.length;
            u++
          ) {
            var s = a[u];
            n.call(o, s) && (r[s] = o[s]);
          }
        return r;
      };
    },
    35: function (e, t) {
      "use strict";
      t.Z = function (e, t) {
        if (e && t) {
          var n = Array.isArray(t) ? t : t.split(",");
          if (0 === n.length) return !0;
          var r = e.name || "",
            i = (e.type || "").toLowerCase(),
            l = i.replace(/\/.*$/, "");
          return n.some(function (e) {
            var t = e.trim().toLowerCase();
            return "." === t.charAt(0)
              ? r.toLowerCase().endsWith(t)
              : t.endsWith("/*")
                ? l === t.replace(/\/.*$/, "")
                : i === t;
          });
        }
        return !0;
      };
    },
    1110: function (e) {
      function t(e, t, n) {
        function r() {
          var s = Date.now() - a;
          s < t && s >= 0
            ? (i = setTimeout(r, t - s))
            : ((i = null), n || ((u = e.apply(o, l)), (o = l = null)));
        }
        null == t && (t = 100);
        var i,
          l,
          o,
          a,
          u,
          s = function () {
            ((o = this), (l = arguments), (a = Date.now()));
            var s = n && !i;
            return (
              i || (i = setTimeout(r, t)),
              s && ((u = e.apply(o, l)), (o = l = null)),
              u
            );
          };
        return (
          (s.clear = function () {
            i && (clearTimeout(i), (i = null));
          }),
          (s.flush = function () {
            i &&
              ((u = e.apply(o, l)),
              (o = l = null),
              clearTimeout(i),
              (i = null));
          }),
          s
        );
      }
      ((t.debounce = t), (e.exports = t));
    },
    8396: function (e, t, n) {
      "use strict";
      var r = n(3566);
      e.exports = function (e) {
        r(e) || (e = {});
        for (var t = arguments.length, n = 1; n < t; n++) {
          var i = arguments[n];
          r(i) &&
            (function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, i);
        }
        return e;
      };
    },
    5582: function (e, t, n) {
      "use strict";
      var r = n(2723),
        i = n(7566);
      function l(e) {
        return (e && "object" == typeof e) || r(e);
      }
      e.exports =
        Object.assign ||
        function (e) {
          if (null == e)
            throw TypeError("Cannot convert undefined or null to object");
          l(e) || (e = {});
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            ((n = r) &&
              "string" == typeof n &&
              (r = (function (e) {
                var t = {};
                for (var n in e) t[n] = e[n];
                return t;
              })(r)),
              l(r) &&
                ((function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, r),
                i(e, r)));
          }
          return e;
        };
    },
    1603: function (e) {
      "use strict";
      e.exports = function (e, t, n) {
        for (var r in e) if (!1 === t.call(n, e[r], r, e)) break;
      };
    },
    3780: function (e) {
      e.exports = function (e, n, r, i, l) {
        var o;
        if (
          !(
            null !== (o = e) &&
            ("object" == typeof o || "function" == typeof o)
          ) ||
          !n
        )
          return e;
        if (
          ((n = t(n)),
          r && (n += "." + t(r)),
          i && (n += "." + t(i)),
          l && (n += "." + t(l)),
          n in e)
        )
          return e[n];
        for (var a = n.split("."), u = a.length, s = -1; e && ++s < u; ) {
          for (var c = a[s]; "\\" === c[c.length - 1]; )
            c = c.slice(0, -1) + "." + a[++s];
          e = e[c];
        }
        return e;
      };
      function t(e) {
        return e ? (Array.isArray(e) ? e.join(".") : e) : "";
      }
    },
    3566: function (e) {
      "use strict";
      e.exports = function (e) {
        return null != e && ("object" == typeof e || "function" == typeof e);
      };
    },
    2723: function (e, t, n) {
      "use strict";
      var r = n(6805);
      e.exports = function (e) {
        return r(e) || "function" == typeof e || Array.isArray(e);
      };
    },
    6805: function (e, t, n) {
      "use strict";
      var r = n(8646);
      function i(e) {
        return (
          !0 === r(e) && "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      e.exports = function (e) {
        var t, n;
        return (
          !1 !== i(e) &&
          "function" == typeof (t = e.constructor) &&
          !1 !== i((n = t.prototype)) &&
          !1 !== n.hasOwnProperty("isPrototypeOf")
        );
      };
    },
    8646: function (e) {
      "use strict";
      e.exports = function (e) {
        return null != e && "object" == typeof e && !1 === Array.isArray(e);
      };
    },
    1595: function (e, t, n) {
      "use strict";
      let r, i, l;
      n.d(t, {
        Zf: function () {
          return of;
        },
        LI: function () {
          return lB;
        },
        so: function () {
          return lA;
        },
        M4: function () {
          return od;
        },
      });
      var o = n(422),
        a = n(959);
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      let s = (0, a.forwardRef)((e, t) => {
        let { children: n, ...r } = e,
          i = a.Children.toArray(n),
          l = i.find(d);
        if (l) {
          let e = l.props.children,
            n = i.map((t) =>
              t !== l
                ? t
                : a.Children.count(e) > 1
                  ? a.Children.only(null)
                  : (0, a.isValidElement)(e)
                    ? e.props.children
                    : null,
            );
          return (0, a.createElement)(
            c,
            u({}, r, { ref: t }),
            (0, a.isValidElement)(e) ? (0, a.cloneElement)(e, void 0, n) : null,
          );
        }
        return (0, a.createElement)(c, u({}, r, { ref: t }), n);
      });
      s.displayName = "Slot";
      let c = (0, a.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, a.isValidElement)(n)
          ? (0, a.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let i = e[r],
                    l = t[r];
                  /^on[A-Z]/.test(r)
                    ? i && l
                      ? (n[r] = (...e) => {
                          (l(...e), i(...e));
                        })
                      : i && (n[r] = i)
                    : "style" === r
                      ? (n[r] = { ...i, ...l })
                      : "className" === r &&
                        (n[r] = [i, l].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: (function (...e) {
                return (t) =>
                  e.forEach((e) => {
                    "function" == typeof e
                      ? e(t)
                      : null != e && (e.current = t);
                  });
              })(t, n.ref),
            })
          : a.Children.count(n) > 1
            ? a.Children.only(null)
            : null;
      });
      c.displayName = "SlotClone";
      let f = ({ children: e }) => (0, a.createElement)(a.Fragment, null, e);
      function d(e) {
        return (0, a.isValidElement)(e) && e.type === f;
      }
      let p = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, a.forwardRef)((e, n) => {
            let { asChild: r, ...i } = e,
              l = r ? s : t;
            return (
              (0, a.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, a.createElement)(l, u({}, i, { ref: n }))
            );
          });
          return ((n.displayName = `Primitive.${t}`), { ...e, [t]: n });
        }, {}),
        h = (0, a.forwardRef)((e, t) => {
          var n;
          let {
            container: r = null == globalThis
              ? void 0
              : null === (n = globalThis.document) || void 0 === n
                ? void 0
                : n.body,
            ...i
          } = e;
          return r
            ? o.createPortal(
                (0, a.createElement)(p.div, u({}, i, { ref: t })),
                r,
              )
            : null;
        });
      var g = Object.prototype.hasOwnProperty;
      function m(e, t) {
        var n, r;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
          if (n === Date) return e.getTime() === t.getTime();
          if (n === RegExp) return e.toString() === t.toString();
          if (n === Array) {
            if ((r = e.length) === t.length) for (; r-- && m(e[r], t[r]); );
            return -1 === r;
          }
          if (!n || "object" == typeof e) {
            for (n in ((r = 0), e))
              if (
                (g.call(e, n) && ++r && !g.call(t, n)) ||
                !(n in t) ||
                !m(e[n], t[n])
              )
                return !1;
            return Object.keys(t).length === r;
          }
        }
        return e != e && t != t;
      }
      function v(e, t) {
        if (Object.is(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (let r = 0; r < n.length; r++)
          if (
            !Object.prototype.hasOwnProperty.call(t, n[r]) ||
            !Object.is(e[n[r]], t[n[r]])
          )
            return !1;
        return !0;
      }
      var b = function (e, t, n, r) {
        ((this.name = e), (this.fn = t), (this.args = n), (this.modifiers = r));
      };
      function y(e, t) {
        return (
          void 0 === t && (t = "simple"),
          "object" == typeof e ? e[t] : e
        );
      }
      function w(e, t, n) {
        if (!e.length) return y(t);
        var r = e.shift(),
          i = w(e, t, n);
        return r.perform(i, n);
      }
      ((b.prototype._test = function (e) {
        var t = this.fn;
        try {
          w(this.modifiers.slice(), t, this)(e);
        } catch (e) {
          t = function () {
            return !1;
          };
        }
        try {
          return w(this.modifiers.slice(), t, this)(e);
        } catch (e) {
          return !1;
        }
      }),
        (b.prototype._check = function (e) {
          try {
            w(this.modifiers.slice(), this.fn, this)(e);
          } catch (e) {
            if (
              w(
                this.modifiers.slice(),
                function (e) {
                  return e;
                },
                this,
              )(!1)
            )
              return;
          }
          if (!w(this.modifiers.slice(), this.fn, this)(e)) throw null;
        }),
        (b.prototype._testAsync = function (e) {
          var t = this;
          return new Promise(function (n, r) {
            (function e(t, n, r) {
              if (!t.length)
                return function (e) {
                  return Promise.resolve(y(n, "async")(e));
                };
              var i = t.shift(),
                l = e(t, n, r);
              return i.performAsync(l, r);
            })(
              t.modifiers.slice(),
              t.fn,
              t,
            )(e)
              .then(function (t) {
                t ? n(e) : r(null);
              })
              .catch(function (e) {
                return r(e);
              });
          });
        }));
      var E = function (e, t, n) {
          ((this.name = e), (this.perform = t), (this.performAsync = n));
        },
        x = (function (e) {
          function t(n, r, i, l) {
            for (var o = [], a = arguments.length - 4; a-- > 0; )
              o[a] = arguments[a + 4];
            (e.call(this, o),
              e.captureStackTrace && e.captureStackTrace(this, t),
              (this.rule = n),
              (this.value = r),
              (this.cause = i),
              (this.target = l));
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            t
          );
        })(Error),
        S = function (e, t) {
          (void 0 === e && (e = []),
            void 0 === t && (t = []),
            (this.chain = e),
            (this.nextRuleModifiers = t));
        };
      ((S.prototype._applyRule = function (e, t) {
        var n = this;
        return function () {
          for (var r = [], i = arguments.length; i--; ) r[i] = arguments[i];
          return (
            n.chain.push(new b(t, e.apply(n, r), r, n.nextRuleModifiers)),
            (n.nextRuleModifiers = []),
            n
          );
        };
      }),
        (S.prototype._applyModifier = function (e, t) {
          return (
            this.nextRuleModifiers.push(new E(t, e.simple, e.async)),
            this
          );
        }),
        (S.prototype._clone = function () {
          return new S(this.chain.slice(), this.nextRuleModifiers.slice());
        }),
        (S.prototype.test = function (e) {
          return this.chain.every(function (t) {
            return t._test(e);
          });
        }),
        (S.prototype.testAll = function (e) {
          var t = [];
          return (
            this.chain.forEach(function (n) {
              try {
                n._check(e);
              } catch (r) {
                t.push(new x(n, e, r));
              }
            }),
            t
          );
        }),
        (S.prototype.check = function (e) {
          this.chain.forEach(function (t) {
            try {
              t._check(e);
            } catch (n) {
              throw new x(t, e, n);
            }
          });
        }),
        (S.prototype.testAsync = function (e) {
          var t = this;
          return new Promise(function (n, r) {
            (function e(t, n, r, i) {
              if (n.length) {
                var l = n.shift();
                l._testAsync(t).then(
                  function () {
                    e(t, n, r, i);
                  },
                  function (e) {
                    i(new x(l, t, e));
                  },
                );
              } else r(t);
            })(e, t.chain.slice(), n, r);
          });
        }));
      var k = function (e, t) {
        return (
          (!!t && "string" == typeof e && 0 === e.trim().length) || null == e
        );
      };
      function C() {
        return "undefined" != typeof Proxy
          ? (function e(t) {
              return new Proxy(t, {
                get: function (n, r) {
                  if (r in n) return n[r];
                  var i = e(t._clone());
                  return r in R
                    ? i._applyModifier(R[r], r)
                    : r in _
                      ? i._applyRule(_[r], r)
                      : r in O
                        ? i._applyRule(O[r], r)
                        : void 0;
                },
              });
            })(new S())
          : (function e(t) {
              var n = function (t, n) {
                  return (
                    Object.keys(t).forEach(function (r) {
                      n[r] = function () {
                        for (var i = [], l = arguments.length; l--; )
                          i[l] = arguments[l];
                        return e(n._clone())
                          ._applyRule(t[r], r)
                          .apply(void 0, i);
                      };
                    }),
                    n
                  );
                },
                r = n(O, t),
                i = n(_, r);
              return (
                Object.keys(R).forEach(function (t) {
                  Object.defineProperty(i, t, {
                    get: function () {
                      return e(i._clone())._applyModifier(R[t], t);
                    },
                  });
                }),
                i
              );
            })(new S());
      }
      var _ = {};
      ((C.extend = function (e) {
        Object.assign(_, e);
      }),
        (C.clearCustomRules = function () {
          _ = {};
        }));
      var R = {
        not: {
          simple: function (e) {
            return function (t) {
              return !e(t);
            };
          },
          async: function (e) {
            return function (t) {
              return Promise.resolve(e(t))
                .then(function (e) {
                  return !e;
                })
                .catch(function () {
                  return !0;
                });
            };
          },
        },
        some: {
          simple: function (e) {
            return function (t) {
              return P(t).some(function (t) {
                try {
                  return e(t);
                } catch (e) {
                  return !1;
                }
              });
            };
          },
          async: function (e) {
            return function (t) {
              return Promise.all(
                P(t).map(function (t) {
                  try {
                    return e(t).catch(function () {
                      return !1;
                    });
                  } catch (e) {
                    return !1;
                  }
                }),
              ).then(function (e) {
                return e.some(Boolean);
              });
            };
          },
        },
        every: {
          simple: function (e) {
            return function (t) {
              return !1 !== t && P(t).every(e);
            };
          },
          async: function (e) {
            return function (t) {
              return Promise.all(P(t).map(e)).then(function (e) {
                return e.every(Boolean);
              });
            };
          },
        },
        strict: {
          simple: function (e, t) {
            return function (n) {
              return T(t) && n && "object" == typeof n
                ? Object.keys(t.args[0]).length === Object.keys(n).length &&
                    e(n)
                : e(n);
            };
          },
          async: function (e, t) {
            return function (n) {
              return Promise.resolve(e(n))
                .then(function (e) {
                  return T(t) && n && "object" == typeof n
                    ? Object.keys(t.args[0]).length === Object.keys(n).length &&
                        e
                    : e;
                })
                .catch(function () {
                  return !1;
                });
            };
          },
        },
      };
      function T(e) {
        return (
          e &&
          "schema" === e.name &&
          e.args.length > 0 &&
          "object" == typeof e.args[0]
        );
      }
      function P(e) {
        return "string" == typeof e ? e.split("") : e;
      }
      var O = {
        equal: function (e) {
          return function (t) {
            return t == e;
          };
        },
        exact: function (e) {
          return function (t) {
            return t === e;
          };
        },
        number: function (e) {
          return (
            void 0 === e && (e = !0),
            function (t) {
              return "number" == typeof t && (e || isFinite(t));
            }
          );
        },
        integer: function () {
          return function (e) {
            return (
              Number.isInteger ||
              function (e) {
                return (
                  "number" == typeof e && isFinite(e) && Math.floor(e) === e
                );
              }
            )(e);
          };
        },
        numeric: function () {
          return function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          };
        },
        string: function () {
          return $("string");
        },
        boolean: function () {
          return $("boolean");
        },
        undefined: function () {
          return $("undefined");
        },
        null: function () {
          return $("null");
        },
        array: function () {
          return $("array");
        },
        object: function () {
          return $("object");
        },
        instanceOf: function (e) {
          return function (t) {
            return t instanceof e;
          };
        },
        pattern: function (e) {
          return function (t) {
            return e.test(t);
          };
        },
        lowercase: function () {
          return function (e) {
            return (
              "boolean" == typeof e ||
              (e === e.toLowerCase() && "" !== e.trim())
            );
          };
        },
        uppercase: function () {
          return function (e) {
            return e === e.toUpperCase() && "" !== e.trim();
          };
        },
        vowel: function () {
          return function (e) {
            return /^[aeiou]+$/i.test(e);
          };
        },
        consonant: function () {
          return function (e) {
            return /^(?=[^aeiou])([a-z]+)$/i.test(e);
          };
        },
        first: function (e) {
          return function (t) {
            return t[0] == e;
          };
        },
        last: function (e) {
          return function (t) {
            return t[t.length - 1] == e;
          };
        },
        empty: function () {
          return function (e) {
            return 0 === e.length;
          };
        },
        length: function (e, t) {
          return function (n) {
            return n.length >= e && n.length <= (t || e);
          };
        },
        minLength: function (e) {
          return function (t) {
            return t.length >= e;
          };
        },
        maxLength: function (e) {
          return function (t) {
            return t.length <= e;
          };
        },
        negative: function () {
          return function (e) {
            return e < 0;
          };
        },
        positive: function () {
          return function (e) {
            return e >= 0;
          };
        },
        between: function (e, t) {
          return function (n) {
            return n >= e && n <= t;
          };
        },
        range: function (e, t) {
          return function (n) {
            return n >= e && n <= t;
          };
        },
        lessThan: function (e) {
          return function (t) {
            return t < e;
          };
        },
        lessThanOrEqual: function (e) {
          return function (t) {
            return t <= e;
          };
        },
        greaterThan: function (e) {
          return function (t) {
            return t > e;
          };
        },
        greaterThanOrEqual: function (e) {
          return function (t) {
            return t >= e;
          };
        },
        even: function () {
          return function (e) {
            return e % 2 == 0;
          };
        },
        odd: function () {
          return function (e) {
            return e % 2 != 0;
          };
        },
        includes: function (e) {
          return function (t) {
            return ~t.indexOf(e);
          };
        },
        schema: function (e) {
          return {
            simple: function (t) {
              var n = [];
              if (
                (Object.keys(e).forEach(function (r) {
                  var i = e[r];
                  try {
                    i.check((t || {})[r]);
                  } catch (e) {
                    ((e.target = r), n.push(e));
                  }
                }),
                n.length > 0)
              )
                throw n;
              return !0;
            },
            async: function (t) {
              var n = [];
              return Promise.all(
                Object.keys(e).map(function (r) {
                  return e[r].testAsync((t || {})[r]).catch(function (e) {
                    ((e.target = r), n.push(e));
                  });
                }),
              ).then(function () {
                if (n.length > 0) throw n;
                return !0;
              });
            },
          };
        },
        passesAnyOf: function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return function (t) {
            return e.some(function (e) {
              return e.test(t);
            });
          };
        },
        optional: function (e, t) {
          return (
            void 0 === t && (t = !1),
            {
              simple: function (n) {
                return k(n, t) || void 0 === e.check(n);
              },
              async: function (n) {
                return k(n, t) || e.testAsync(n);
              },
            }
          );
        },
      };
      function $(e) {
        return function (t) {
          return (
            (Array.isArray(t) && "array" === e) ||
            (null === t && "null" === e) ||
            typeof t === e
          );
        };
      }
      var j = "colors",
        z = "sizes",
        M = "space",
        N = {
          gap: M,
          gridGap: M,
          columnGap: M,
          gridColumnGap: M,
          rowGap: M,
          gridRowGap: M,
          inset: M,
          insetBlock: M,
          insetBlockEnd: M,
          insetBlockStart: M,
          insetInline: M,
          insetInlineEnd: M,
          insetInlineStart: M,
          margin: M,
          marginTop: M,
          marginRight: M,
          marginBottom: M,
          marginLeft: M,
          marginBlock: M,
          marginBlockEnd: M,
          marginBlockStart: M,
          marginInline: M,
          marginInlineEnd: M,
          marginInlineStart: M,
          padding: M,
          paddingTop: M,
          paddingRight: M,
          paddingBottom: M,
          paddingLeft: M,
          paddingBlock: M,
          paddingBlockEnd: M,
          paddingBlockStart: M,
          paddingInline: M,
          paddingInlineEnd: M,
          paddingInlineStart: M,
          top: M,
          right: M,
          bottom: M,
          left: M,
          scrollMargin: M,
          scrollMarginTop: M,
          scrollMarginRight: M,
          scrollMarginBottom: M,
          scrollMarginLeft: M,
          scrollMarginX: M,
          scrollMarginY: M,
          scrollMarginBlock: M,
          scrollMarginBlockEnd: M,
          scrollMarginBlockStart: M,
          scrollMarginInline: M,
          scrollMarginInlineEnd: M,
          scrollMarginInlineStart: M,
          scrollPadding: M,
          scrollPaddingTop: M,
          scrollPaddingRight: M,
          scrollPaddingBottom: M,
          scrollPaddingLeft: M,
          scrollPaddingX: M,
          scrollPaddingY: M,
          scrollPaddingBlock: M,
          scrollPaddingBlockEnd: M,
          scrollPaddingBlockStart: M,
          scrollPaddingInline: M,
          scrollPaddingInlineEnd: M,
          scrollPaddingInlineStart: M,
          fontSize: "fontSizes",
          background: j,
          backgroundColor: j,
          backgroundImage: j,
          borderImage: j,
          border: j,
          borderBlock: j,
          borderBlockEnd: j,
          borderBlockStart: j,
          borderBottom: j,
          borderBottomColor: j,
          borderColor: j,
          borderInline: j,
          borderInlineEnd: j,
          borderInlineStart: j,
          borderLeft: j,
          borderLeftColor: j,
          borderRight: j,
          borderRightColor: j,
          borderTop: j,
          borderTopColor: j,
          caretColor: j,
          color: j,
          columnRuleColor: j,
          fill: j,
          outline: j,
          outlineColor: j,
          stroke: j,
          textDecorationColor: j,
          fontFamily: "fonts",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          blockSize: z,
          minBlockSize: z,
          maxBlockSize: z,
          inlineSize: z,
          minInlineSize: z,
          maxInlineSize: z,
          width: z,
          minWidth: z,
          maxWidth: z,
          height: z,
          minHeight: z,
          maxHeight: z,
          flexBasis: z,
          gridTemplateColumns: z,
          gridTemplateRows: z,
          borderWidth: "borderWidths",
          borderTopWidth: "borderWidths",
          borderRightWidth: "borderWidths",
          borderBottomWidth: "borderWidths",
          borderLeftWidth: "borderWidths",
          borderStyle: "borderStyles",
          borderTopStyle: "borderStyles",
          borderRightStyle: "borderStyles",
          borderBottomStyle: "borderStyles",
          borderLeftStyle: "borderStyles",
          borderRadius: "radii",
          borderTopLeftRadius: "radii",
          borderTopRightRadius: "radii",
          borderBottomRightRadius: "radii",
          borderBottomLeftRadius: "radii",
          boxShadow: "shadows",
          textShadow: "shadows",
          transition: "transitions",
          zIndex: "zIndices",
        },
        I = (e, t) =>
          "function" == typeof t
            ? { "()": Function.prototype.toString.call(t) }
            : t,
        L = () => {
          let e = Object.create(null);
          return (t, n, ...r) => {
            let i = JSON.stringify(t, I);
            return i in e ? e[i] : (e[i] = n(t, ...r));
          };
        },
        D = Symbol.for("sxs.internal"),
        A = (e, t) =>
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
        F = (e) => {
          for (let t in e) return !0;
          return !1;
        },
        { hasOwnProperty: B } = Object.prototype,
        H = (e) =>
          e.includes("-")
            ? e
            : e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()),
        U = /\s+(?![^()]*\))/,
        W = (e) => (t) =>
          e(...("string" == typeof t ? String(t).split(U) : [t])),
        V = {
          appearance: (e) => ({ WebkitAppearance: e, appearance: e }),
          backfaceVisibility: (e) => ({
            WebkitBackfaceVisibility: e,
            backfaceVisibility: e,
          }),
          backdropFilter: (e) => ({
            WebkitBackdropFilter: e,
            backdropFilter: e,
          }),
          backgroundClip: (e) => ({
            WebkitBackgroundClip: e,
            backgroundClip: e,
          }),
          boxDecorationBreak: (e) => ({
            WebkitBoxDecorationBreak: e,
            boxDecorationBreak: e,
          }),
          clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }),
          content: (e) => ({
            content:
              e.includes('"') ||
              e.includes("'") ||
              /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
                e,
              )
                ? e
                : `"${e}"`,
          }),
          hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }),
          maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }),
          maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }),
          tabSize: (e) => ({ MozTabSize: e, tabSize: e }),
          textSizeAdjust: (e) => ({
            WebkitTextSizeAdjust: e,
            textSizeAdjust: e,
          }),
          userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }),
          marginBlock: W((e, t) => ({
            marginBlockStart: e,
            marginBlockEnd: t || e,
          })),
          marginInline: W((e, t) => ({
            marginInlineStart: e,
            marginInlineEnd: t || e,
          })),
          maxSize: W((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })),
          minSize: W((e, t) => ({ minBlockSize: e, minInlineSize: t || e })),
          paddingBlock: W((e, t) => ({
            paddingBlockStart: e,
            paddingBlockEnd: t || e,
          })),
          paddingInline: W((e, t) => ({
            paddingInlineStart: e,
            paddingInlineEnd: t || e,
          })),
        },
        Q = /([\d.]+)([^]*)/,
        G = (e, t) =>
          e.length
            ? e.reduce(
                (e, n) => (
                  e.push(
                    ...t.map((e) =>
                      e.includes("&")
                        ? e.replace(
                            /&/g,
                            /[ +>|~]/.test(n) && /&.*&/.test(e)
                              ? `:is(${n})`
                              : n,
                          )
                        : n + " " + e,
                    ),
                  ),
                  e
                ),
                [],
              )
            : t,
        q = (e, t) =>
          e in Y && "string" == typeof t
            ? t.replace(
                /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
                (t, n, r, i) =>
                  n +
                  ("stretch" === r
                    ? `-moz-available${i};${H(e)}:${n}-webkit-fill-available`
                    : `-moz-fit-content${i};${H(e)}:${n}fit-content`) +
                  i,
              )
            : String(t),
        Y = {
          blockSize: 1,
          height: 1,
          inlineSize: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          width: 1,
        },
        K = (e) => (e ? e + "-" : ""),
        X = (e, t, n) =>
          e.replace(
            /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
            (e, r, i, l, o) =>
              ("$" == l) == !!i
                ? e
                : (r || "--" == l ? "calc(" : "") +
                  "var(--" +
                  ("$" === l
                    ? K(t) +
                      (o.includes("$") ? "" : K(n)) +
                      o.replace(/\$/g, "-")
                    : o) +
                  ")" +
                  (r || "--" == l ? "*" + (r || "") + (i || "1") + ")" : ""),
          ),
        Z = /\s*,\s*(?![^()]*\))/,
        J = Object.prototype.toString,
        ee = (e, t, n, r, i) => {
          let l, o, a;
          let u = (e, t, n) => {
            let s, c;
            let f = (e) => {
              var d;
              for (s in e) {
                let p = 64 === s.charCodeAt(0);
                for (c of p && Array.isArray(e[s]) ? e[s] : [e[s]]) {
                  let e = /[A-Z]/.test((d = s))
                      ? d
                      : d.replace(/-[^]/g, (e) => e[1].toUpperCase()),
                    h =
                      "object" == typeof c &&
                      c &&
                      c.toString === J &&
                      (!r.utils[e] || !t.length);
                  if (e in r.utils && !h) {
                    let t = r.utils[e];
                    if (t !== o) {
                      ((o = t), f(t(c)), (o = null));
                      continue;
                    }
                  } else if (e in V) {
                    let t = V[e];
                    if (t !== a) {
                      ((a = t), f(t(c)), (a = null));
                      continue;
                    }
                  }
                  if (
                    (p &&
                      (s = (
                        s.slice(1) in r.media
                          ? "@media " + r.media[s.slice(1)]
                          : s
                      ).replace(
                        /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                        (e, t, n, r, i, l) => {
                          let o = Q.test(t),
                            a = 0.0625 * (o ? -1 : 1),
                            [u, s] = o ? [r, t] : [t, r];
                          return (
                            "(" +
                            ("=" === n[0]
                              ? ""
                              : (">" === n[0]) === o
                                ? "max-"
                                : "min-") +
                            u +
                            ":" +
                            ("=" !== n[0] && 1 === n.length
                              ? s.replace(
                                  Q,
                                  (e, t, r) =>
                                    Number(t) + a * (">" === n ? 1 : -1) + r,
                                )
                              : s) +
                            (i
                              ? ") and (" +
                                (">" === i[0] ? "min-" : "max-") +
                                u +
                                ":" +
                                (1 === i.length
                                  ? l.replace(
                                      Q,
                                      (e, t, n) =>
                                        Number(t) +
                                        a * (">" === i ? -1 : 1) +
                                        n,
                                    )
                                  : l)
                              : "") +
                            ")"
                          );
                        },
                      )),
                    h)
                  ) {
                    let e = p ? n.concat(s) : [...n],
                      r = p ? [...t] : G(t, s.split(Z));
                    (void 0 !== l && i(et(...l)), (l = void 0), u(c, r, e));
                  } else
                    (void 0 === l && (l = [[], t, n]),
                      (s =
                        p || 36 !== s.charCodeAt(0)
                          ? s
                          : `--${K(r.prefix)}${s.slice(1).replace(/\$/g, "-")}`),
                      (c = h
                        ? c
                        : "number" == typeof c
                          ? c && e in en
                            ? String(c) + "px"
                            : String(c)
                          : X(
                              q(e, null == c ? "" : c),
                              r.prefix,
                              r.themeMap[e],
                            )),
                      l[0].push(`${p ? `${s} ` : `${H(s)}:`}${c}`));
                }
              }
            };
            (f(e), void 0 !== l && i(et(...l)), (l = void 0));
          };
          u(e, t, n);
        },
        et = (e, t, n) =>
          `${n.map((e) => `${e}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`,
        en = {
          animationDelay: 1,
          animationDuration: 1,
          backgroundSize: 1,
          blockSize: 1,
          border: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockEndWidth: 1,
          borderBlockStart: 1,
          borderBlockStartWidth: 1,
          borderBlockWidth: 1,
          borderBottom: 1,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
          borderBottomWidth: 1,
          borderEndEndRadius: 1,
          borderEndStartRadius: 1,
          borderInlineEnd: 1,
          borderInlineEndWidth: 1,
          borderInlineStart: 1,
          borderInlineStartWidth: 1,
          borderInlineWidth: 1,
          borderLeft: 1,
          borderLeftWidth: 1,
          borderRadius: 1,
          borderRight: 1,
          borderRightWidth: 1,
          borderSpacing: 1,
          borderStartEndRadius: 1,
          borderStartStartRadius: 1,
          borderTop: 1,
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
          borderTopWidth: 1,
          borderWidth: 1,
          bottom: 1,
          columnGap: 1,
          columnRule: 1,
          columnRuleWidth: 1,
          columnWidth: 1,
          containIntrinsicSize: 1,
          flexBasis: 1,
          fontSize: 1,
          gap: 1,
          gridAutoColumns: 1,
          gridAutoRows: 1,
          gridTemplateColumns: 1,
          gridTemplateRows: 1,
          height: 1,
          inlineSize: 1,
          inset: 1,
          insetBlock: 1,
          insetBlockEnd: 1,
          insetBlockStart: 1,
          insetInline: 1,
          insetInlineEnd: 1,
          insetInlineStart: 1,
          left: 1,
          letterSpacing: 1,
          margin: 1,
          marginBlock: 1,
          marginBlockEnd: 1,
          marginBlockStart: 1,
          marginBottom: 1,
          marginInline: 1,
          marginInlineEnd: 1,
          marginInlineStart: 1,
          marginLeft: 1,
          marginRight: 1,
          marginTop: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          offsetDistance: 1,
          offsetRotate: 1,
          outline: 1,
          outlineOffset: 1,
          outlineWidth: 1,
          overflowClipMargin: 1,
          padding: 1,
          paddingBlock: 1,
          paddingBlockEnd: 1,
          paddingBlockStart: 1,
          paddingBottom: 1,
          paddingInline: 1,
          paddingInlineEnd: 1,
          paddingInlineStart: 1,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          perspective: 1,
          right: 1,
          rowGap: 1,
          scrollMargin: 1,
          scrollMarginBlock: 1,
          scrollMarginBlockEnd: 1,
          scrollMarginBlockStart: 1,
          scrollMarginBottom: 1,
          scrollMarginInline: 1,
          scrollMarginInlineEnd: 1,
          scrollMarginInlineStart: 1,
          scrollMarginLeft: 1,
          scrollMarginRight: 1,
          scrollMarginTop: 1,
          scrollPadding: 1,
          scrollPaddingBlock: 1,
          scrollPaddingBlockEnd: 1,
          scrollPaddingBlockStart: 1,
          scrollPaddingBottom: 1,
          scrollPaddingInline: 1,
          scrollPaddingInlineEnd: 1,
          scrollPaddingInlineStart: 1,
          scrollPaddingLeft: 1,
          scrollPaddingRight: 1,
          scrollPaddingTop: 1,
          shapeMargin: 1,
          textDecoration: 1,
          textDecorationThickness: 1,
          textIndent: 1,
          textUnderlineOffset: 1,
          top: 1,
          transitionDelay: 1,
          transitionDuration: 1,
          verticalAlign: 1,
          width: 1,
          wordSpacing: 1,
        },
        er = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)),
        ei = (e) =>
          ((e) => {
            let t,
              n = "";
            for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = er(t % 52) + n;
            return er(t % 52) + n;
          })(
            ((e, t) => {
              let n = t.length;
              for (; n; ) e = (33 * e) ^ t.charCodeAt(--n);
              return e;
            })(5381, JSON.stringify(e)) >>> 0,
          ),
        el = [
          "themed",
          "global",
          "styled",
          "onevar",
          "resonevar",
          "allvar",
          "inline",
        ],
        eo = (e) => {
          if (e.href && !e.href.startsWith(location.origin)) return !1;
          try {
            return !!e.cssRules;
          } catch (e) {
            return !1;
          }
        },
        ea = (e) => {
          let t;
          let n = () => {
              let { cssRules: e } = t.sheet;
              return [].map
                .call(e, (n, r) => {
                  let { cssText: i } = n,
                    l = "";
                  if (i.startsWith("--sxs")) return "";
                  if (e[r - 1] && (l = e[r - 1].cssText).startsWith("--sxs")) {
                    if (!n.cssRules.length) return "";
                    for (let e in t.rules)
                      if (t.rules[e].group === n)
                        return `--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;
                    return n.cssRules.length ? `${l}${i}` : "";
                  }
                  return i;
                })
                .join("");
            },
            r = () => {
              if (t) {
                let { rules: e, sheet: n } = t;
                if (!n.deleteRule) {
                  for (; 3 === Object(Object(n.cssRules)[0]).type; )
                    n.cssRules.splice(0, 1);
                  n.cssRules = [];
                }
                for (let t in e) delete e[t];
              }
              for (let i of Object(e).styleSheets || [])
                if (eo(i)) {
                  for (let e = 0, l = i.cssRules; l[e]; ++e) {
                    let o = Object(l[e]);
                    if (1 !== o.type) continue;
                    let a = Object(l[e + 1]);
                    if (4 !== a.type) continue;
                    ++e;
                    let { cssText: u } = o;
                    if (!u.startsWith("--sxs")) continue;
                    let s = u.slice(14, -3).trim().split(/\s+/),
                      c = el[s[0]];
                    c &&
                      (t ||
                        (t = { sheet: i, reset: r, rules: {}, toString: n }),
                      (t.rules[c] = { group: a, index: e, cache: new Set(s) }));
                  }
                  if (t) break;
                }
              if (!t) {
                let i = (e, t) => ({
                  type: t,
                  cssRules: [],
                  insertRule(e, t) {
                    this.cssRules.splice(
                      t,
                      0,
                      i(
                        e,
                        { import: 3, undefined: 1 }[
                          (e.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                        ] || 4,
                      ),
                    );
                  },
                  get cssText() {
                    return "@media{}" === e
                      ? `@media{${[].map.call(this.cssRules, (e) => e.cssText).join("")}}`
                      : e;
                  },
                });
                t = {
                  sheet: e
                    ? (e.head || e).appendChild(document.createElement("style"))
                        .sheet
                    : i("", "text/css"),
                  rules: {},
                  reset: r,
                  toString: n,
                };
              }
              let { sheet: i, rules: l } = t;
              for (let e = el.length - 1; e >= 0; --e) {
                let t = el[e];
                if (!l[t]) {
                  let n = el[e + 1],
                    r = l[n] ? l[n].index : i.cssRules.length;
                  (i.insertRule("@media{}", r),
                    i.insertRule(`--sxs{--sxs:${e}}`, r),
                    (l[t] = {
                      group: i.cssRules[r + 1],
                      index: r,
                      cache: new Set([e]),
                    }));
                }
                eu(l[t]);
              }
            };
          return (r(), t);
        },
        eu = (e) => {
          let t = e.group,
            n = t.cssRules.length;
          e.apply = (e) => {
            try {
              (t.insertRule(e, n), ++n);
            } catch (e) {}
          };
        },
        es = Symbol(),
        ec = L(),
        ef = (e, t) =>
          ec(e, () => (...n) => {
            let r = { type: null, composers: new Set() };
            for (let t of n)
              if (null != t) {
                if (t[D])
                  for (let e of (null == r.type && (r.type = t[D].type),
                  t[D].composers))
                    r.composers.add(e);
                else
                  t.constructor !== Object || t.$$typeof
                    ? null == r.type && (r.type = t)
                    : r.composers.add(ed(t, e));
              }
            return (
              null == r.type && (r.type = "span"),
              r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]),
              ep(e, r, t)
            );
          }),
        ed = (
          { variants: e, compoundVariants: t, defaultVariants: n, ...r },
          i,
        ) => {
          let l = `${K(i.prefix)}c-${ei(r)}`,
            o = [],
            a = [],
            u = Object.create(null),
            s = [];
          for (let e in n) u[e] = String(n[e]);
          if ("object" == typeof e && e)
            for (let t in e) {
              B.call(u, t) || (u[t] = "undefined");
              let n = e[t];
              for (let e in n) {
                let r = { [t]: String(e) };
                "undefined" === String(e) && s.push(t);
                let i = n[e],
                  l = [r, i, !F(i)];
                o.push(l);
              }
            }
          if ("object" == typeof t && t)
            for (let e of t) {
              let { css: t, ...n } = e;
              for (let e in ((t = ("object" == typeof t && t) || {}), n))
                n[e] = String(n[e]);
              let r = [n, t, !F(t)];
              a.push(r);
            }
          return [l, r, o, a, u, s];
        },
        ep = (e, t, n) => {
          let [r, i, l, o] = eh(t.composers),
            a =
              "function" == typeof t.type || t.type.$$typeof
                ? ((e) => {
                    function t() {
                      for (let n = 0; n < t[es].length; n++) {
                        let [r, i] = t[es][n];
                        e.rules[r].apply(i);
                      }
                      return ((t[es] = []), null);
                    }
                    return (
                      (t[es] = []),
                      (t.rules = {}),
                      el.forEach(
                        (e) =>
                          (t.rules[e] = { apply: (n) => t[es].push([e, n]) }),
                      ),
                      t
                    );
                  })(n)
                : null,
            u = (a || n).rules,
            s = `.${r}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`,
            c = (c) => {
              let { css: f, ...d } = (c = ("object" == typeof c && c) || em),
                p = {};
              for (let e in l)
                if ((delete d[e], e in c)) {
                  let t = c[e];
                  "object" == typeof t && t
                    ? (p[e] = { "@initial": l[e], ...t })
                    : ((t = String(t)),
                      (p[e] = "undefined" !== t || o.has(e) ? t : l[e]));
                } else p[e] = l[e];
              let h = new Set([...i]);
              for (let [r, i, l, o] of t.composers) {
                n.rules.styled.cache.has(r) ||
                  (n.rules.styled.cache.add(r),
                  ee(i, [`.${r}`], [], e, (e) => {
                    u.styled.apply(e);
                  }));
                let t = eg(l, p, e.media),
                  a = eg(o, p, e.media, !0);
                for (let i of t)
                  if (void 0 !== i)
                    for (let [t, l, o] of i) {
                      let i = `${r}-${ei(l)}-${t}`;
                      h.add(i);
                      let a = (o ? n.rules.resonevar : n.rules.onevar).cache,
                        s = o ? u.resonevar : u.onevar;
                      a.has(i) ||
                        (a.add(i),
                        ee(l, [`.${i}`], [], e, (e) => {
                          s.apply(e);
                        }));
                    }
                for (let t of a)
                  if (void 0 !== t)
                    for (let [i, l] of t) {
                      let t = `${r}-${ei(l)}-${i}`;
                      (h.add(t),
                        n.rules.allvar.cache.has(t) ||
                          (n.rules.allvar.cache.add(t),
                          ee(l, [`.${t}`], [], e, (e) => {
                            u.allvar.apply(e);
                          })));
                    }
              }
              if ("object" == typeof f && f) {
                let t = `${r}-i${ei(f)}-css`;
                (h.add(t),
                  n.rules.inline.cache.has(t) ||
                    (n.rules.inline.cache.add(t),
                    ee(f, [`.${t}`], [], e, (e) => {
                      u.inline.apply(e);
                    })));
              }
              for (let e of String(c.className || "")
                .trim()
                .split(/\s+/))
                e && h.add(e);
              let g = (d.className = [...h].join(" "));
              return {
                type: t.type,
                className: g,
                selector: s,
                props: d,
                toString: () => g,
                deferredInjector: a,
              };
            };
          return A(c, {
            className: r,
            selector: s,
            [D]: t,
            toString: () => (n.rules.styled.cache.has(r) || c(), r),
          });
        },
        eh = (e) => {
          let t = "",
            n = [],
            r = {},
            i = [];
          for (let [l, , , , o, a] of e)
            for (let e in ("" === t && (t = l), n.push(l), i.push(...a), o)) {
              let t = o[e];
              (void 0 === r[e] || "undefined" !== t || a.includes(t)) &&
                (r[e] = t);
            }
          return [t, n, r, new Set(i)];
        },
        eg = (e, t, n, r) => {
          let i = [];
          e: for (let [l, o, a] of e) {
            if (a) continue;
            let e,
              u = 0,
              s = !1;
            for (e in l) {
              let r = l[e],
                i = t[e];
              if (i !== r) {
                if ("object" != typeof i || !i) continue e;
                {
                  let e,
                    t,
                    l = 0;
                  for (let o in i) {
                    if (r === String(i[o])) {
                      if ("@initial" !== o) {
                        let e = o.slice(1);
                        ((t = t || []).push(
                          e in n ? n[e] : o.replace(/^@media ?/, ""),
                        ),
                          (s = !0));
                      }
                      ((u += l), (e = !0));
                    }
                    ++l;
                  }
                  if (
                    (t && t.length && (o = { ["@media " + t.join(", ")]: o }),
                    !e)
                  )
                    continue e;
                }
              }
            }
            (i[u] = i[u] || []).push([r ? "cv" : `${e}-${l[e]}`, o, s]);
          }
          return i;
        },
        em = {},
        ev = L(),
        eb = (e, t) =>
          ev(e, () => (...n) => {
            let r = () => {
              for (let r of n) {
                let n = ei((r = ("object" == typeof r && r) || {}));
                if (!t.rules.global.cache.has(n)) {
                  if ((t.rules.global.cache.add(n), "@import" in r)) {
                    let e =
                      [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) -
                      1;
                    for (let n of [].concat(r["@import"]))
                      ((n = n.includes('"') || n.includes("'") ? n : `"${n}"`),
                        t.sheet.insertRule(`@import ${n};`, e++));
                    delete r["@import"];
                  }
                  ee(r, [], [], e, (e) => {
                    t.rules.global.apply(e);
                  });
                }
              }
              return "";
            };
            return A(r, { toString: r });
          }),
        ey = L(),
        ew = (e, t) =>
          ey(e, () => (n) => {
            let r = `${K(e.prefix)}k-${ei(n)}`,
              i = () => {
                if (!t.rules.global.cache.has(r)) {
                  t.rules.global.cache.add(r);
                  let i = [];
                  ee(n, [], [], e, (e) => i.push(e));
                  let l = `@keyframes ${r}{${i.join("")}}`;
                  t.rules.global.apply(l);
                }
                return r;
              };
            return A(i, {
              get name() {
                return i();
              },
              toString: i,
            });
          }),
        eE = class {
          constructor(e, t, n, r) {
            ((this.token = null == e ? "" : String(e)),
              (this.value = null == t ? "" : String(t)),
              (this.scale = null == n ? "" : String(n)),
              (this.prefix = null == r ? "" : String(r)));
          }
          get computedValue() {
            return "var(" + this.variable + ")";
          }
          get variable() {
            return "--" + K(this.prefix) + K(this.scale) + this.token;
          }
          toString() {
            return this.computedValue;
          }
        },
        ex = L(),
        eS = (e, t) =>
          ex(e, () => (n, r) => {
            r = ("object" == typeof n && n) || Object(r);
            let i = `.${(n = (n = "string" == typeof n ? n : "") || `${K(e.prefix)}t-${ei(r)}`)}`,
              l = {},
              o = [];
            for (let t in r)
              for (let n in ((l[t] = {}), r[t])) {
                let i = `--${K(e.prefix)}${t}-${n}`,
                  a = X(String(r[t][n]), e.prefix, t);
                ((l[t][n] = new eE(n, a, t, e.prefix)), o.push(`${i}:${a}`));
              }
            let a = () => {
              if (o.length && !t.rules.themed.cache.has(n)) {
                t.rules.themed.cache.add(n);
                let i = `${r === e.theme ? ":root," : ""}.${n}{${o.join(";")}}`;
                t.rules.themed.apply(i);
              }
              return n;
            };
            return {
              ...l,
              get className() {
                return a();
              },
              selector: i,
              toString: a,
            };
          }),
        ek = L(),
        eC = L(),
        e_ = n(3771),
        eR = n(5061),
        eT = n(3079),
        eP = n(9650),
        eO = n(3190),
        e$ = n(4774),
        ej = n(9429),
        ez = (n(1120), n(4898)),
        eM = (e) => {
          let t, n;
          let { present: r, children: i } = e,
            l = (function (e) {
              var t, n;
              let [r, i] = a.useState(),
                l = a.useRef({}),
                o = a.useRef(e),
                u = a.useRef("none"),
                [s, c] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  a.useReducer((e, t) => n[e][t] ?? e, t));
              return (
                a.useEffect(() => {
                  let e = eN(l.current);
                  u.current = "mounted" === s ? e : "none";
                }, [s]),
                (0, ez.b)(() => {
                  let t = l.current,
                    n = o.current;
                  if (n !== e) {
                    let r = u.current,
                      i = eN(t);
                    (e
                      ? c("MOUNT")
                      : "none" === i || t?.display === "none"
                        ? c("UNMOUNT")
                        : n && r !== i
                          ? c("ANIMATION_OUT")
                          : c("UNMOUNT"),
                      (o.current = e));
                  }
                }, [e, c]),
                (0, ez.b)(() => {
                  if (r) {
                    let e;
                    let t = r.ownerDocument.defaultView ?? window,
                      n = (n) => {
                        let i = eN(l.current).includes(n.animationName);
                        if (
                          n.target === r &&
                          i &&
                          (c("ANIMATION_END"), !o.current)
                        ) {
                          let n = r.style.animationFillMode;
                          ((r.style.animationFillMode = "forwards"),
                            (e = t.setTimeout(() => {
                              "forwards" === r.style.animationFillMode &&
                                (r.style.animationFillMode = n);
                            })));
                        }
                      },
                      i = (e) => {
                        e.target === r && (u.current = eN(l.current));
                      };
                    return (
                      r.addEventListener("animationstart", i),
                      r.addEventListener("animationcancel", n),
                      r.addEventListener("animationend", n),
                      () => {
                        (t.clearTimeout(e),
                          r.removeEventListener("animationstart", i),
                          r.removeEventListener("animationcancel", n),
                          r.removeEventListener("animationend", n));
                      }
                    );
                  }
                  c("ANIMATION_END");
                }, [r, c]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(s),
                  ref: a.useCallback((e) => {
                    (e && (l.current = getComputedStyle(e)), i(e));
                  }, []),
                }
              );
            })(r),
            o =
              "function" == typeof i
                ? i({ present: l.isPresent })
                : a.Children.only(i),
            u = (0, eT.e)(
              l.ref,
              (t = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
                "isReactWarning" in t &&
                t.isReactWarning
                ? o.ref
                : (t = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
                    "isReactWarning" in t &&
                    t.isReactWarning
                  ? o.props.ref
                  : o.props.ref || o.ref,
            );
          return "function" == typeof i || l.isPresent
            ? a.cloneElement(o, { ref: u })
            : null;
        };
      function eN(e) {
        return e?.animationName || "none";
      }
      eM.displayName = "Presence";
      var eI = n(5176),
        eL = n(9310),
        eD = n(5611),
        eA = n(3409),
        eF = n(1527),
        [eB, eH] = (0, eP.b)("Tooltip", [ej.D7]),
        eU = (0, ej.D7)(),
        eW = "tooltip.open",
        [eV, eQ] = eB("TooltipProvider"),
        eG = "Tooltip",
        [eq, eY] = eB(eG),
        eK = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: i = !1,
              onOpenChange: l,
              disableHoverableContent: o,
              delayDuration: u,
            } = e,
            s = eQ(eG, e.__scopeTooltip),
            c = eU(t),
            [f, d] = a.useState(null),
            p = (0, e$.M)(),
            h = a.useRef(0),
            g = o ?? s.disableHoverableContent,
            m = u ?? s.delayDuration,
            v = a.useRef(!1),
            [b = !1, y] = (0, eD.T)({
              prop: r,
              defaultProp: i,
              onChange: (e) => {
                (e
                  ? (s.onOpen(), document.dispatchEvent(new CustomEvent(eW)))
                  : s.onClose(),
                  l?.(e));
              },
            }),
            w = a.useMemo(
              () =>
                b ? (v.current ? "delayed-open" : "instant-open") : "closed",
              [b],
            ),
            E = a.useCallback(() => {
              (window.clearTimeout(h.current), (v.current = !1), y(!0));
            }, [y]),
            x = a.useCallback(() => {
              (window.clearTimeout(h.current), y(!1));
            }, [y]),
            S = a.useCallback(() => {
              (window.clearTimeout(h.current),
                (h.current = window.setTimeout(() => {
                  ((v.current = !0), y(!0));
                }, m)));
            }, [m, y]);
          return (
            a.useEffect(() => () => window.clearTimeout(h.current), []),
            (0, eF.jsx)(ej.fC, {
              ...c,
              children: (0, eF.jsx)(eq, {
                scope: t,
                contentId: p,
                open: b,
                stateAttribute: w,
                trigger: f,
                onTriggerChange: d,
                onTriggerEnter: a.useCallback(() => {
                  s.isOpenDelayed ? S() : E();
                }, [s.isOpenDelayed, S, E]),
                onTriggerLeave: a.useCallback(() => {
                  g ? x() : window.clearTimeout(h.current);
                }, [x, g]),
                onOpen: E,
                onClose: x,
                disableHoverableContent: g,
                children: n,
              }),
            })
          );
        };
      eK.displayName = eG;
      var eX = "TooltipTrigger",
        eZ = a.forwardRef((e, t) => {
          let { __scopeTooltip: n, ...r } = e,
            i = eY(eX, n),
            l = eQ(eX, n),
            o = eU(n),
            u = a.useRef(null),
            s = (0, eT.e)(t, u, i.onTriggerChange),
            c = a.useRef(!1),
            f = a.useRef(!1),
            d = a.useCallback(() => (c.current = !1), []);
          return (
            a.useEffect(
              () => () => document.removeEventListener("pointerup", d),
              [d],
            ),
            (0, eF.jsx)(ej.ee, {
              asChild: !0,
              ...o,
              children: (0, eF.jsx)(eI.WV.button, {
                "aria-describedby": i.open ? i.contentId : void 0,
                "data-state": i.stateAttribute,
                ...r,
                ref: s,
                onPointerMove: (0, eR.M)(e.onPointerMove, (e) => {
                  "touch" === e.pointerType ||
                    f.current ||
                    l.isPointerInTransitRef.current ||
                    (i.onTriggerEnter(), (f.current = !0));
                }),
                onPointerLeave: (0, eR.M)(e.onPointerLeave, () => {
                  (i.onTriggerLeave(), (f.current = !1));
                }),
                onPointerDown: (0, eR.M)(e.onPointerDown, () => {
                  ((c.current = !0),
                    document.addEventListener("pointerup", d, { once: !0 }));
                }),
                onFocus: (0, eR.M)(e.onFocus, () => {
                  c.current || i.onOpen();
                }),
                onBlur: (0, eR.M)(e.onBlur, i.onClose),
                onClick: (0, eR.M)(e.onClick, i.onClose),
              }),
            })
          );
        });
      eZ.displayName = eX;
      var [eJ, e0] = eB("TooltipPortal", { forceMount: void 0 }),
        e1 = "TooltipContent",
        e2 = a.forwardRef((e, t) => {
          let n = e0(e1, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: i = "top", ...l } = e,
            o = eY(e1, e.__scopeTooltip);
          return (0, eF.jsx)(eM, {
            present: r || o.open,
            children: o.disableHoverableContent
              ? (0, eF.jsx)(e6, { side: i, ...l, ref: t })
              : (0, eF.jsx)(e3, { side: i, ...l, ref: t }),
          });
        }),
        e3 = a.forwardRef((e, t) => {
          let n = eY(e1, e.__scopeTooltip),
            r = eQ(e1, e.__scopeTooltip),
            i = a.useRef(null),
            l = (0, eT.e)(t, i),
            [o, u] = a.useState(null),
            { trigger: s, onClose: c } = n,
            f = i.current,
            { onPointerInTransitChange: d } = r,
            p = a.useCallback(() => {
              (u(null), d(!1));
            }, [d]),
            h = a.useCallback(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  i = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      i = Math.abs(t.right - e.x),
                      l = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, i, l)) {
                      case l:
                        return "left";
                      case i:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect());
                (u(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                            ? 1
                            : e.y < t.y
                              ? -1
                              : e.y > t.y
                                ? 1
                                : 0,
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t, n = 5) {
                      let r = [];
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n },
                          );
                          break;
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n },
                          );
                          break;
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n },
                          );
                          break;
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n },
                          );
                      }
                      return r;
                    })(r, i),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: i } = e;
                      return [
                        { x: i, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: i, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ]),
                ),
                  d(!0));
              },
              [d],
            );
          return (
            a.useEffect(() => () => p(), [p]),
            a.useEffect(() => {
              if (s && f) {
                let e = (e) => h(e, f),
                  t = (e) => h(e, s);
                return (
                  s.addEventListener("pointerleave", e),
                  f.addEventListener("pointerleave", t),
                  () => {
                    (s.removeEventListener("pointerleave", e),
                      f.removeEventListener("pointerleave", t));
                  }
                );
              }
            }, [s, f, h, p]),
            a.useEffect(() => {
              if (o) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r = s?.contains(t) || f?.contains(t),
                    i = !(function (e, t) {
                      let { x: n, y: r } = e,
                        i = !1;
                      for (let e = 0, l = t.length - 1; e < t.length; l = e++) {
                        let o = t[e].x,
                          a = t[e].y,
                          u = t[l].x,
                          s = t[l].y;
                        a > r != s > r &&
                          n < ((u - o) * (r - a)) / (s - a) + o &&
                          (i = !i);
                      }
                      return i;
                    })(n, o);
                  r ? p() : i && (p(), c());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [s, f, o, c, p]),
            (0, eF.jsx)(e6, { ...e, ref: l })
          );
        }),
        [e4, e5] = eB(eG, { isInside: !1 }),
        e6 = a.forwardRef((e, t) => {
          let {
              __scopeTooltip: n,
              children: r,
              "aria-label": i,
              onEscapeKeyDown: l,
              onPointerDownOutside: o,
              ...u
            } = e,
            s = eY(e1, n),
            c = eU(n),
            { onClose: f } = s;
          return (
            a.useEffect(
              () => (
                document.addEventListener(eW, f),
                () => document.removeEventListener(eW, f)
              ),
              [f],
            ),
            a.useEffect(() => {
              if (s.trigger) {
                let e = (e) => {
                  let t = e.target;
                  t?.contains(s.trigger) && f();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [s.trigger, f]),
            (0, eF.jsx)(eO.XB, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: o,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: f,
              children: (0, eF.jsxs)(ej.VY, {
                "data-state": s.stateAttribute,
                ...c,
                ...u,
                ref: t,
                style: {
                  ...u.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, eF.jsx)(eL.A4, { children: r }),
                  (0, eF.jsx)(e4, {
                    scope: n,
                    isInside: !0,
                    children: (0, eF.jsx)(eA.f, {
                      id: s.contentId,
                      role: "tooltip",
                      children: i || r,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      e2.displayName = e1;
      var e8 = "TooltipArrow",
        e9 = a.forwardRef((e, t) => {
          let { __scopeTooltip: n, ...r } = e,
            i = eU(n);
          return e5(e8, n).isInside
            ? null
            : (0, eF.jsx)(ej.Eh, { ...i, ...r, ref: t });
        });
      function e7(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            ((n = l[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
        }
        return i;
      }
      ((e9.displayName = e8),
        ((r2 = r || (r = {}))[(r2.UNSUPPORTED_INPUT = 0)] =
          "UNSUPPORTED_INPUT"),
        (r2[(r2.NO_COMPONENT_FOR_TYPE = 1)] = "NO_COMPONENT_FOR_TYPE"),
        (r2[(r2.UNKNOWN_INPUT = 2)] = "UNKNOWN_INPUT"),
        (r2[(r2.DUPLICATE_KEYS = 3)] = "DUPLICATE_KEYS"),
        (r2[(r2.ALREADY_REGISTERED_TYPE = 4)] = "ALREADY_REGISTERED_TYPE"),
        (r2[(r2.CLIPBOARD_ERROR = 5)] = "CLIPBOARD_ERROR"),
        (r2[(r2.THEME_ERROR = 6)] = "THEME_ERROR"),
        (r2[(r2.PATH_DOESNT_EXIST = 7)] = "PATH_DOESNT_EXIST"),
        (r2[(r2.INPUT_TYPE_OVERRIDE = 8)] = "INPUT_TYPE_OVERRIDE"),
        (r2[(r2.EMPTY_KEY = 9)] = "EMPTY_KEY"));
      let te = {
        [r.UNSUPPORTED_INPUT]: (e, t) => [
          `An input with type \`${e}\` input was found at path \`${t}\` but it's not supported yet.`,
        ],
        [r.NO_COMPONENT_FOR_TYPE]: (e, t) => [
          `Type \`${e}\` found at path \`${t}\` can't be displayed in panel because no component supports it yet.`,
        ],
        [r.UNKNOWN_INPUT]: (e, t) => [
          `input at path \`${e}\` is not recognized.`,
          t,
        ],
        [r.DUPLICATE_KEYS]: (e, t, n) => [
          `Key \`${e}\` of path \`${t}\` already exists at path \`${n}\`. Even nested keys need to be unique. Rename one of the keys.`,
        ],
        [r.ALREADY_REGISTERED_TYPE]: (e) => [
          `Type ${e} has already been registered. You can't register a component with the same type.`,
        ],
        [r.CLIPBOARD_ERROR]: (e) => ["Error copying the value", e],
        [r.THEME_ERROR]: (e, t) => [
          `Error accessing the theme \`${e}.${t}\` value.`,
        ],
        [r.PATH_DOESNT_EXIST]: (e) => [
          `Error getting the value at path \`${e}\`. There is probably an error in your \`render\` function.`,
        ],
        [r.PATH_DOESNT_EXIST]: (e) => [
          `Error accessing the value at path \`${e}\``,
        ],
        [r.INPUT_TYPE_OVERRIDE]: (e, t, n) => [
          `Input at path \`${e}\` already exists with type: \`${t}\`. Its type cannot be overridden with type \`${n}\`.`,
        ],
        [r.EMPTY_KEY]: () => [
          "Keys can not be empty, if you want to hide a label use whitespace.",
        ],
      };
      function tt(e, t, ...n) {
        let [r, ...i] = te[t](...n);
        console[e]("LEVA: " + r, ...i);
      }
      let tn = tt.bind(null, "warn"),
        tr = tt.bind(null, "log"),
        ti = ["value"],
        tl = ["schema"],
        to = ["value"],
        ta = [],
        tu = {};
      function ts(e) {
        let { value: t } = e,
          n = e7(e, ti);
        for (let e of ta) {
          let r = e(t, n);
          if (r) return r;
        }
      }
      function tc(e, t) {
        let { schema: n } = t,
          i = e7(t, tl);
        if (e in tu) {
          tn(r.ALREADY_REGISTERED_TYPE, e);
          return;
        }
        (ta.push((t, r) => n(t, r) && e), (tu[e] = i));
      }
      function tf(e, t, n, r) {
        let { normalize: i } = tu[e];
        if (i) return i(t, n, r);
        if ("object" != typeof t || !("value" in t)) return { value: t };
        let { value: l } = t;
        return { value: l, settings: e7(t, to) };
      }
      function td(e, t, n) {
        let { format: r } = tu[e];
        return r ? r(t, n) : t;
      }
      function tp(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function th(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tp(Object(n), !0).forEach(function (t) {
                var r;
                ((r = n[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tp(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      let tg = (e, t, n) => (e > n ? n : e < t ? t : e),
        tm = (e) => {
          if ("" === e || "number" == typeof e) return e;
          try {
            let t = (function e(t) {
              if (isNaN(Number(t))) {
                if (tx.test(t)) {
                  let n = t.replace(tx, (t, n) => String(e(n)));
                  return e(n);
                }
                if (tS.test(t))
                  return e(
                    t.replace(tS, (e, t, n) =>
                      String(Math.pow(Number(t), Number(n))),
                    ),
                  );
                if (tk.test(t))
                  return e(
                    t.replace(tk, (e, t, n) => String(Number(t) * Number(n))),
                  );
                if (tC.test(t))
                  return e(
                    t.replace(tC, (e, t, n) => {
                      if (0 != n) return String(Number(t) / Number(n));
                      throw Error("Division by zero");
                    }),
                  );
                else if (t_.test(t))
                  return e(
                    t.replace(t_, (e, t, n) => String(Number(t) + Number(n))),
                  );
                else if (tR.test(t))
                  return e(
                    t.replace(tR, (e, t, n) => String(Number(t) - Number(n))),
                  );
              }
              return Number(t);
            })(e);
            if (!isNaN(t)) return t;
          } catch (e) {}
          return parseFloat(e);
        },
        tv = Math.log(10);
      function tb(e) {
        let t = Math.abs(+String(e).replace(".", ""));
        if (0 === t) return 0.01;
        for (; 0 !== t && t % 10 == 0; ) t /= 10;
        return Math.max(
          Math.pow(
            10,
            Math.floor(Math.log10(Math.abs(e))) -
              (Math.floor(Math.log(t) / tv) + 1),
          ),
          0.001,
        );
      }
      let ty = (e, t, n) => (n === t ? 0 : (tg(e, t, n) - t) / (n - t)),
        tw = (e, t, n) => e * (n - t) + t,
        tE = () => "_" + Math.random().toString(36).substr(2, 9),
        tx = /\(([0-9+\-*/^ .]+)\)/,
        tS = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/,
        tk = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/,
        tC = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/,
        t_ = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/,
        tR = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;
      function tT(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      let tP = (e) => tT(e) && 0 === Object.keys(e).length;
      (((r3 = i || (i = {})).BUTTON = "BUTTON"),
        (r3.BUTTON_GROUP = "BUTTON_GROUP"),
        (r3.MONITOR = "MONITOR"),
        (r3.FOLDER = "FOLDER"),
        ((r4 = l || (l = {})).SELECT = "SELECT"),
        (r4.IMAGE = "IMAGE"),
        (r4.NUMBER = "NUMBER"),
        (r4.COLOR = "COLOR"),
        (r4.STRING = "STRING"),
        (r4.BOOLEAN = "BOOLEAN"),
        (r4.INTERVAL = "INTERVAL"),
        (r4.VECTOR3D = "VECTOR3D"),
        (r4.VECTOR2D = "VECTOR2D"));
      let tO = ["type", "__customInput"],
        t$ = [
          "render",
          "label",
          "optional",
          "order",
          "disabled",
          "hint",
          "onChange",
          "onEditStart",
          "onEditEnd",
          "transient",
        ],
        tj = ["type"];
      function tz(e, t, n, r, i) {
        let { value: l, type: o, settings: a } = e;
        ((e.value = tN({ type: o, value: l, settings: a }, t, n, r)),
          (e.fromPanel = i));
      }
      let tM = function (e, t, n) {
        ((this.type = "LEVA_ERROR"),
          (this.message = "LEVA: " + e),
          (this.previousValue = t),
          (this.error = n));
      };
      function tN({ type: e, value: t, settings: n }, r, i, l) {
        let o;
        let a = "SELECT" !== e && "function" == typeof r ? r(t) : r;
        try {
          o = (function (e, t, n, r, i, l) {
            let { sanitize: o } = tu[e];
            return o ? o(t, n, r, i, l) : t;
          })(e, a, n, t, i, l);
        } catch (e) {
          throw new tM(
            `The value \`${r}\` did not result in a correct value.`,
            t,
            e,
          );
        }
        return m(o, t) ? t : o;
      }
      let tI = (e, t, n = !1) => {
          let r = 0;
          return function () {
            let i = arguments,
              l = n && !r,
              o = () => e.apply(this, i);
            (window.clearTimeout(r), (r = window.setTimeout(o, t)), l && o());
          };
        },
        tL = (e) => (e.shiftKey ? 5 : e.altKey ? 0.2 : 1),
        tD = ["value"],
        tA = ["min", "max"],
        tF = (e, { min: t = -1 / 0, max: n = 1 / 0, suffix: r }) => {
          let i = parseFloat(e);
          if ("" === e || isNaN(i)) throw Error("Invalid number");
          let l = tg(i, t, n);
          return r ? l + r : l;
        },
        tB = (e) => {
          let { value: t } = e,
            n = e7(e, tD),
            { min: r = -1 / 0, max: i = 1 / 0 } = n,
            l = e7(n, tA),
            o = parseFloat(t),
            a = "string" == typeof t ? t.substring(("" + o).length) : void 0;
          o = tg(o, r, i);
          let u = n.step;
          !u &&
            (Number.isFinite(r)
              ? (u = Number.isFinite(i)
                  ? +(Math.abs(i - r) / 100).toPrecision(1)
                  : +(Math.abs(o - r) / 100).toPrecision(1))
              : Number.isFinite(i) &&
                (u = +(Math.abs(i - o) / 100).toPrecision(1)));
          let s = u ? 10 * tb(u) : tb(o);
          return {
            value: a ? o + a : o,
            settings: th(
              {
                initialValue: o,
                step: (u = u || s / 10),
                pad: Math.round(tg(Math.log10(1 / s), 0, 2)),
                min: r,
                max: i,
                suffix: a,
              },
              l,
            ),
          };
        },
        tH = (e, { step: t, initialValue: n }) =>
          n + Math.round((e - n) / t) * t;
      var tU = Object.freeze({
        __proto__: null,
        schema: (e) => {
          if ("number" == typeof e) return !0;
          if ("string" == typeof e) {
            let t = parseFloat(e);
            return !isNaN(t) && e.substring(("" + t).length).trim().length < 4;
          }
          return !1;
        },
        sanitize: tF,
        format: (e, { pad: t = 0, suffix: n }) => {
          let r = parseFloat(e).toFixed(t);
          return n ? r + n : r;
        },
        normalize: tB,
        sanitizeStep: tH,
      });
      function tW() {
        return (tW = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      let tV = (0, a.createContext)({});
      function tQ() {
        return (0, a.useContext)(tV);
      }
      let tG = (0, a.createContext)(null),
        tq = (0, a.createContext)(null),
        tY = (0, a.createContext)(null);
      function tK() {
        return (0, a.useContext)(tq);
      }
      let tX = () => ({
        colors: {
          elevation1: "#292d39",
          elevation2: "#181c20",
          elevation3: "#373c4b",
          accent1: "#0066dc",
          accent2: "#007bff",
          accent3: "#3c93ff",
          highlight1: "#535760",
          highlight2: "#8c92a4",
          highlight3: "#fefefe",
          vivid1: "#ffcc00",
          folderWidgetColor: "$highlight2",
          folderTextColor: "$highlight3",
          toolTipBackground: "$highlight3",
          toolTipText: "$elevation2",
        },
        radii: { xs: "2px", sm: "3px", lg: "10px" },
        space: {
          xs: "3px",
          sm: "6px",
          md: "10px",
          rowGap: "7px",
          colGap: "7px",
        },
        fonts: {
          mono: "ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace",
          sans: "system-ui, sans-serif",
        },
        fontSizes: { root: "11px", toolTip: "$root" },
        sizes: {
          rootWidth: "280px",
          controlWidth: "160px",
          numberInputMinWidth: "38px",
          scrubberWidth: "8px",
          scrubberHeight: "16px",
          rowHeight: "24px",
          folderTitleHeight: "20px",
          checkboxSize: "16px",
          joystickWidth: "100px",
          joystickHeight: "100px",
          colorPickerWidth: "$controlWidth",
          colorPickerHeight: "100px",
          imagePreviewWidth: "$controlWidth",
          imagePreviewHeight: "100px",
          monitorHeight: "60px",
          titleBarHeight: "39px",
        },
        shadows: {
          level1: "0 0 9px 0 #00000088",
          level2: "0 4px 14px #00000033",
        },
        borderWidths: {
          root: "0px",
          input: "1px",
          focus: "1px",
          hover: "1px",
          active: "1px",
          folder: "1px",
        },
        fontWeights: { label: "normal", folder: "normal", button: "normal" },
      });
      function tZ(e, t) {
        let [n, r] = e.split(" "),
          i = {};
        return (
          "none" !== n &&
            (i.boxShadow = `${t.inset ? "inset " : ""}0 0 0 $borderWidths${[t.key]} $colors${("default" !== n && n) || t.borderColor}`),
          r && (i.backgroundColor = r),
          i
        );
      }
      let tJ = {
          $inputStyle: () => (e) =>
            tZ(e, { key: "$input", borderColor: "$highlight1", inset: !0 }),
          $focusStyle: () => (e) =>
            tZ(e, { key: "$focus", borderColor: "$accent2" }),
          $hoverStyle: () => (e) =>
            tZ(e, { key: "$hover", borderColor: "$accent1", inset: !0 }),
          $activeStyle: () => (e) =>
            tZ(e, { key: "$active", borderColor: "$accent1", inset: !0 }),
        },
        {
          styled: t0,
          css: t1,
          createTheme: t2,
          globalCss: t3,
          keyframes: t4,
        } = ((e) => {
          let t = ((e) => {
            let t = !1,
              n = ek(e, (e) => {
                t = !0;
                let n =
                    "prefix" in (e = ("object" == typeof e && e) || {})
                      ? String(e.prefix)
                      : "",
                  r = ("object" == typeof e.media && e.media) || {},
                  i =
                    "object" == typeof e.root
                      ? e.root || null
                      : globalThis.document || null,
                  l = ("object" == typeof e.theme && e.theme) || {},
                  o = {
                    prefix: n,
                    media: r,
                    theme: l,
                    themeMap: ("object" == typeof e.themeMap && e.themeMap) || {
                      ...N,
                    },
                    utils: ("object" == typeof e.utils && e.utils) || {},
                  },
                  a = ea(i),
                  u = {
                    css: ef(o, a),
                    globalCss: eb(o, a),
                    keyframes: ew(o, a),
                    createTheme: eS(o, a),
                    reset() {
                      (a.reset(), u.theme.toString());
                    },
                    theme: {},
                    sheet: a,
                    config: o,
                    prefix: n,
                    getCssText: a.toString,
                    toString: a.toString,
                  };
                return (String((u.theme = u.createTheme(l))), u);
              });
            return (t || n.reset(), n);
          })(e);
          return (
            (t.styled = (({ config: e, sheet: t }) =>
              eC(e, () => {
                let n = ef(e, t);
                return (...e) => {
                  let t = n(...e),
                    r = t[D].type,
                    i = a.forwardRef((e, n) => {
                      let i = (e && e.as) || r,
                        { props: l, deferredInjector: o } = t(e);
                      return (
                        delete l.as,
                        (l.ref = n),
                        o
                          ? a.createElement(
                              a.Fragment,
                              null,
                              a.createElement(i, l),
                              a.createElement(o, null),
                            )
                          : a.createElement(i, l)
                      );
                    });
                  return (
                    (i.className = t.className),
                    (i.displayName = `Styled.${r.displayName || r.name || r}`),
                    (i.selector = t.selector),
                    (i.toString = () => t.selector),
                    (i[D] = t[D]),
                    i
                  );
                };
              }))(t)),
            t
          );
        })({
          prefix: "leva",
          theme: tX(),
          utils: th(
            th({}, tJ),
            {},
            {
              $flex: () => ({ display: "flex", alignItems: "center" }),
              $flexCenter: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }),
              $reset: () => ({
                outline: "none",
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
                fontFamily: "inherit",
                border: "none",
                backgroundColor: "transparent",
                appearance: "none",
              }),
              $draggable: () => ({
                touchAction: "none",
                WebkitUserDrag: "none",
                userSelect: "none",
              }),
              $focus: (e) => ({ "&:focus": tJ.$focusStyle()(e) }),
              $focusWithin: (e) => ({ "&:focus-within": tJ.$focusStyle()(e) }),
              $hover: (e) => ({ "&:hover": tJ.$hoverStyle()(e) }),
              $active: (e) => ({ "&:active": tJ.$activeStyle()(e) }),
            },
          ),
        }),
        t5 = t3({
          ".leva__panel__dragged": {
            WebkitUserDrag: "none",
            userSelect: "none",
            input: { userSelect: "none" },
            "*": { cursor: "ew-resize !important" },
          },
        });
      function t6(e, t) {
        let { theme: n } = (0, a.useContext)(tG);
        if (!(e in n) || !(t in n[e])) return (tn(r.THEME_ERROR, e, t), "");
        let i = t;
        for (;;) {
          let t = n[e][i];
          if ("string" != typeof t || "$" !== t.charAt(0)) return t;
          i = t.substr(1);
        }
      }
      let t8 = t0("input", {
          $reset: "",
          padding: "0 $sm",
          width: 0,
          minWidth: 0,
          flex: 1,
          height: "100%",
          variants: {
            levaType: { number: { textAlign: "right" } },
            as: { textarea: { padding: "$sm" } },
          },
        }),
        t9 = t0("div", {
          $draggable: "",
          height: "100%",
          $flexCenter: "",
          position: "relative",
          padding: "0 $xs",
          fontSize: "0.8em",
          opacity: 0.8,
          cursor: "default",
          touchAction: "none",
          [`& + ${t8}`]: { paddingLeft: 0 },
        }),
        t7 = t0(t9, {
          cursor: "ew-resize",
          marginRight: "-$xs",
          textTransform: "uppercase",
          opacity: 0.3,
          "&:hover": { opacity: 1 },
          variants: {
            dragging: { true: { backgroundColor: "$accent2", opacity: 1 } },
          },
        }),
        ne = t0("div", {
          $flex: "",
          position: "relative",
          borderRadius: "$sm",
          overflow: "hidden",
          color: "inherit",
          height: "$rowHeight",
          backgroundColor: "$elevation3",
          $inputStyle: "$elevation1",
          $hover: "",
          $focusWithin: "",
          variants: { textArea: { true: { height: "auto" } } },
        }),
        nt = [
          "innerLabel",
          "value",
          "onUpdate",
          "onChange",
          "onKeyDown",
          "type",
          "id",
          "inputType",
          "rows",
        ],
        nn = ["onUpdate"];
      function nr(e) {
        let {
            innerLabel: t,
            value: n,
            onUpdate: r,
            onChange: i,
            onKeyDown: l,
            type: o,
            id: u,
            inputType: s = "text",
            rows: c = 0,
          } = e,
          f = e7(e, nt),
          { id: d, emitOnEditStart: p, emitOnEditEnd: h, disabled: g } = tQ(),
          m = (0, a.useRef)(null),
          v = c > 0,
          b = (0, a.useCallback)(
            (e) => (t) => {
              e(t.currentTarget.value);
            },
            [],
          );
        a.useEffect(() => {
          let e = m.current,
            t = b((e) => {
              (r(e), h());
            });
          return (
            null == e || e.addEventListener("blur", t),
            () => (null == e ? void 0 : e.removeEventListener("blur", t))
          );
        }, [b, r, h]);
        let y = (0, a.useCallback)(
            (e) => {
              "Enter" === e.key && b(r)(e);
            },
            [b, r],
          ),
          w = Object.assign(
            { as: v ? "textarea" : "input" },
            v ? { rows: c } : {},
            f,
          );
        return a.createElement(
          ne,
          { textArea: v },
          t && "string" == typeof t ? a.createElement(t9, null, t) : t,
          a.createElement(
            t8,
            tW(
              {
                levaType: o,
                ref: m,
                id: u || d,
                type: s,
                autoComplete: "off",
                spellCheck: "false",
                value: n,
                onChange: b(i),
                onFocus: () => p(),
                onKeyPress: y,
                onKeyDown: l,
                disabled: g,
              },
              w,
            ),
          ),
        );
      }
      function ni(e) {
        let { onUpdate: t } = e,
          n = e7(e, nn),
          r = (0, a.useCallback)((e) => t(tm(e)), [t]),
          i = (0, a.useCallback)(
            (e) => {
              let n = "ArrowUp" === e.key ? 1 : "ArrowDown" === e.key ? -1 : 0;
              if (n) {
                e.preventDefault();
                let r = e.altKey ? 0.1 : e.shiftKey ? 10 : 1;
                t((e) => parseFloat(e) + n * r);
              }
            },
            [t],
          );
        return a.createElement(
          nr,
          tW({}, n, { onUpdate: r, onKeyDown: i, type: "number" }),
        );
      }
      let nl = t0("div", {}),
        no = t0("div", {
          position: "relative",
          background: "$elevation2",
          transition: "height 300ms ease",
          variants: {
            fill: { true: {}, false: {} },
            flat: { false: {}, true: {} },
            isRoot: {
              true: {},
              false: {
                paddingLeft: "$md",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "$borderWidths$folder",
                  height: "100%",
                  backgroundColor: "$folderWidgetColor",
                  opacity: 0.4,
                  transform: "translateX(-50%)",
                },
              },
            },
          },
          compoundVariants: [
            {
              isRoot: !0,
              fill: !1,
              css: {
                overflowY: "auto",
                maxHeight: "calc(100vh - 20px - $$titleBarHeight)",
              },
            },
            { isRoot: !0, flat: !1, css: { borderRadius: "$lg" } },
          ],
        }),
        na = t0("div", {
          $flex: "",
          color: "$folderTextColor",
          userSelect: "none",
          cursor: "pointer",
          height: "$folderTitleHeight",
          fontWeight: "$folder",
          "> svg": {
            marginLeft: -4,
            marginRight: 4,
            cursor: "pointer",
            fill: "$folderWidgetColor",
            opacity: 0.6,
          },
          "&:hover > svg": { fill: "$folderWidgetColor" },
          [`&:hover + ${no}::after`]: { opacity: 0.6 },
          [`${nl}:hover > & + ${no}::after`]: { opacity: 0.6 },
          [`${nl}:hover > & > svg`]: { opacity: 1 },
        }),
        nu = t0("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "100%",
          rowGap: "$rowGap",
          transition: "opacity 250ms ease",
          variants: {
            toggled: {
              true: { opacity: 1, transitionDelay: "250ms" },
              false: {
                opacity: 0,
                transitionDelay: "0ms",
                pointerEvents: "none",
              },
            },
            isRoot: {
              true: {
                "& > div": { paddingLeft: "$md", paddingRight: "$md" },
                "& > div:first-of-type": { paddingTop: "$sm" },
                "& > div:last-of-type": { paddingBottom: "$sm" },
                [`> ${nl}:not(:first-of-type)`]: {
                  paddingTop: "$sm",
                  marginTop: "$md",
                  borderTop: "$borderWidths$folder solid $colors$elevation1",
                },
              },
            },
          },
        }),
        ns = t0("div", {
          position: "relative",
          zIndex: 100,
          display: "grid",
          rowGap: "$rowGap",
          gridTemplateRows: "minmax($sizes$rowHeight, max-content)",
          alignItems: "center",
          color: "$highlight2",
          [`${nu} > &`]: {
            "&:first-of-type": { marginTop: "$rowGap" },
            "&:last-of-type": { marginBottom: "$rowGap" },
          },
          variants: {
            disabled: {
              true: { pointerEvents: "none" },
              false: { "&:hover,&:focus-within": { color: "$highlight3" } },
            },
          },
        }),
        nc = t0(ns, {
          gridTemplateColumns: "auto $sizes$controlWidth",
          columnGap: "$colGap",
        }),
        nf = t0("div", {
          $flex: "",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          "& > div": { marginLeft: "$colGap", padding: "0 $xs", opacity: 0.4 },
          "& > div:hover": { opacity: 0.8 },
          "& > div > svg": {
            display: "none",
            cursor: "pointer",
            width: 13,
            minWidth: 13,
            height: 13,
            backgroundColor: "$elevation2",
          },
          "&:hover > div > svg": { display: "block" },
          variants: {
            align: {
              top: {
                height: "100%",
                alignItems: "flex-start",
                paddingTop: "$sm",
              },
            },
          },
        }),
        nd = t0("input", {
          $reset: "",
          height: 0,
          width: 0,
          opacity: 0,
          margin: 0,
          "& + label": {
            position: "relative",
            $flexCenter: "",
            height: "100%",
            userSelect: "none",
            cursor: "pointer",
            paddingLeft: 2,
            paddingRight: "$sm",
            pointerEvents: "auto",
          },
          "& + label:after": {
            content: '""',
            width: 6,
            height: 6,
            backgroundColor: "$elevation3",
            borderRadius: "50%",
            $activeStyle: "",
          },
          "&:focus + label:after": { $focusStyle: "" },
          "& + label:active:after": {
            backgroundColor: "$accent1",
            $focusStyle: "",
          },
          "&:checked + label:after": { backgroundColor: "$accent1" },
        }),
        np = t0("label", {
          fontWeight: "$label",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          "& > svg": { display: "block" },
        }),
        nh = t0("div", {
          opacity: 1,
          variants: {
            disabled: {
              true: {
                opacity: 0.6,
                pointerEvents: "none",
                [`& ${np}`]: { pointerEvents: "auto" },
              },
            },
          },
        }),
        ng = t0("div", {
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1e3,
          userSelect: "none",
        }),
        nm = t0("div", {
          background: "$toolTipBackground",
          fontFamily: "$sans",
          fontSize: "$toolTip",
          padding: "$xs $sm",
          color: "$toolTipText",
          borderRadius: "$xs",
          boxShadow: "$level2",
          maxWidth: 260,
        }),
        nv = t0(e9, { fill: "$toolTipBackground" });
      function nb({ children: e }) {
        let { className: t } = (0, a.useContext)(tG);
        return a.createElement(h, { className: t }, e);
      }
      let ny = ["align"];
      function nw() {
        let { id: e, disable: t, disabled: n } = tQ();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(nd, {
            id: e + "__disable",
            type: "checkbox",
            checked: !n,
            onChange: () => t(!n),
          }),
          a.createElement("label", { htmlFor: e + "__disable" }),
        );
      }
      function nE(e) {
        let { id: t, optional: n, hint: r } = tQ(),
          i = e.htmlFor || (t ? { htmlFor: t } : null),
          l = r || "string" != typeof e.children ? null : { title: e.children };
        return a.createElement(
          a.Fragment,
          null,
          n && a.createElement(nw, null),
          void 0 !== r
            ? a.createElement(
                eK,
                null,
                a.createElement(
                  eZ,
                  { asChild: !0 },
                  a.createElement(np, tW({}, i, e)),
                ),
                a.createElement(
                  e2,
                  { side: "top", sideOffset: 2 },
                  a.createElement(nm, null, r, a.createElement(nv, null)),
                ),
              )
            : a.createElement(np, tW({}, i, l, e)),
        );
      }
      function nx(e) {
        let { align: t } = e,
          n = e7(e, ny),
          { value: i, label: l, key: o, disabled: u } = tQ(),
          { hideCopyButton: s } = (0, a.useContext)(tY),
          c = !s && void 0 !== o,
          [f, d] = (0, a.useState)(!1),
          p = async () => {
            try {
              (await navigator.clipboard.writeText(
                JSON.stringify({ [o]: null != i ? i : "" }),
              ),
                d(!0));
            } catch (e) {
              tn(r.CLIPBOARD_ERROR, { [o]: i });
            }
          };
        return a.createElement(
          nf,
          { align: t, onPointerLeave: () => d(!1) },
          a.createElement(nE, n),
          c &&
            !u &&
            a.createElement(
              "div",
              { title: `Click to copy ${"string" == typeof l ? l : o} value` },
              f
                ? a.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                    },
                    a.createElement("path", {
                      d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z",
                    }),
                    a.createElement("path", {
                      fillRule: "evenodd",
                      d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                      clipRule: "evenodd",
                    }),
                  )
                : a.createElement(
                    "svg",
                    {
                      onClick: p,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                    },
                    a.createElement("path", {
                      d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
                    }),
                    a.createElement("path", {
                      d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z",
                    }),
                  ),
            ),
        );
      }
      let nS = ["toggled"],
        nk = t0("svg", {
          fill: "currentColor",
          transition: "transform 350ms ease, fill 250ms ease",
        });
      function nC(e) {
        let { toggled: t } = e,
          n = e7(e, nS);
        return a.createElement(
          nk,
          tW(
            {
              width: "9",
              height: "5",
              viewBox: "0 0 9 5",
              xmlns: "http://www.w3.org/2000/svg",
              style: { transform: `rotate(${t ? 0 : -90}deg)` },
            },
            n,
          ),
          a.createElement("path", {
            d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z",
          }),
        );
      }
      let n_ = ["input"];
      function nR(e) {
        let { input: t } = e,
          n = e7(e, n_);
        return t ? a.createElement(nc, n) : a.createElement(ns, n);
      }
      function nT({ value: e, type: t, settings: n, setValue: r }) {
        let [i, l] = (0, a.useState)(td(t, e, n)),
          o = (0, a.useRef)(e),
          u = (0, a.useRef)(n);
        u.current = n;
        let s = (0, a.useCallback)((e) => l(td(t, e, u.current)), [t]),
          c = (0, a.useCallback)(
            (e) => {
              try {
                r(e);
              } catch (n) {
                let { type: e, previousValue: t } = n;
                if ("LEVA_ERROR" !== e) throw n;
                s(t);
              }
            },
            [s, r],
          );
        return (
          (0, a.useEffect)(() => {
            (m(e, o.current) || s(e), (o.current = e));
          }, [e, s]),
          { displayValue: i, onChange: l, onUpdate: c }
        );
      }
      function nP(e, t) {
        let { emitOnEditStart: n, emitOnEditEnd: r } = tQ();
        return (0, e_.useDrag)((t) => {
          t.first &&
            (document.body.classList.add("leva__panel__dragged"),
            null == n || n());
          let i = e(t);
          return (
            t.last &&
              (document.body.classList.remove("leva__panel__dragged"),
              null == r || r()),
            i
          );
        }, t);
      }
      function nO() {
        let e = (0, a.useRef)(null),
          t = (0, a.useRef)({ x: 0, y: 0 }),
          n = (0, a.useCallback)((n) => {
            (Object.assign(t.current, n),
              e.current &&
                (e.current.style.transform = `translate3d(${t.current.x}px, ${t.current.y}px, 0)`));
          }, []);
        return [e, n];
      }
      let n$ = ["__refCount"],
        nj = (e, t) => (e[t] ? e7(e[t], n$) : null),
        nz = t0("div", {
          variants: {
            hasRange: {
              true: {
                position: "relative",
                display: "grid",
                gridTemplateColumns: "auto $sizes$numberInputMinWidth",
                columnGap: "$colGap",
                alignItems: "center",
              },
            },
          },
        }),
        nM = t0("div", {
          position: "relative",
          width: "100%",
          height: 2,
          borderRadius: "$xs",
          backgroundColor: "$elevation1",
        }),
        nN = t0("div", {
          position: "absolute",
          width: "$scrubberWidth",
          height: "$scrubberHeight",
          borderRadius: "$xs",
          boxShadow: "0 0 0 2px $colors$elevation2",
          backgroundColor: "$accent2",
          cursor: "pointer",
          $active: "none $accent1",
          $hover: "none $accent3",
          variants: {
            position: {
              left: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                transform:
                  "translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))",
              },
              right: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                transform:
                  "translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))",
              },
            },
          },
        }),
        nI = t0("div", {
          position: "relative",
          $flex: "",
          height: "100%",
          cursor: "pointer",
          touchAction: "none",
        }),
        nL = t0("div", {
          position: "absolute",
          height: "100%",
          backgroundColor: "$accent2",
        });
      function nD({
        value: e,
        min: t,
        max: n,
        onDrag: r,
        step: i,
        initialValue: l,
      }) {
        let o = (0, a.useRef)(null),
          u = (0, a.useRef)(null),
          s = (0, a.useRef)(0),
          c = t6("sizes", "scrubberWidth"),
          f = nP(({ event: a, first: f, xy: [d], movement: [p], memo: h }) => {
            if (f) {
              let { width: r, left: i } = o.current.getBoundingClientRect();
              ((s.current = r - parseFloat(c)),
                (h =
                  (null == a ? void 0 : a.target) === u.current
                    ? e
                    : tw((d - i) / r, t, n)));
            }
            return (
              r(
                tH(h + tw(p / s.current, 0, n - t), {
                  step: i,
                  initialValue: l,
                }),
              ),
              h
            );
          }),
          d = ty(e, t, n);
        return a.createElement(
          nI,
          tW({ ref: o }, f()),
          a.createElement(
            nM,
            null,
            a.createElement(nL, {
              style: { left: 0, right: `${(1 - d) * 100}%` },
            }),
          ),
          a.createElement(nN, {
            ref: u,
            style: { left: `calc(${d} * (100% - ${c}))` },
          }),
        );
      }
      let nA = a.memo(
        ({ label: e, onUpdate: t, step: n, innerLabelTrim: r }) => {
          let [i, l] = (0, a.useState)(!1),
            o = nP(
              ({ active: e, delta: [r], event: i, memo: o = 0 }) => (
                l(e),
                Math.abs((o += r / 2)) >= 1 &&
                  (t((e) => parseFloat(e) + Math.floor(o) * n * tL(i)),
                  (o = 0)),
                o
              ),
            );
          return a.createElement(
            t7,
            tW({ dragging: i, title: e.length > 1 ? e : "" }, o()),
            e.slice(0, r),
          );
        },
      );
      function nF({
        label: e,
        id: t,
        displayValue: n,
        onUpdate: r,
        onChange: i,
        settings: l,
        innerLabelTrim: o = 1,
      }) {
        let u =
          o > 0 &&
          a.createElement(nA, {
            label: e,
            step: l.step,
            onUpdate: r,
            innerLabelTrim: o,
          });
        return a.createElement(ni, {
          id: t,
          value: String(n),
          onUpdate: r,
          onChange: i,
          innerLabel: u,
        });
      }
      let { sanitizeStep: nB } = tU;
      var nH = th(
          {
            component: function () {
              let e = tQ(),
                { label: t, value: n, onUpdate: r, settings: i, id: l } = e,
                { min: o, max: u } = i,
                s = u !== 1 / 0 && o !== -1 / 0;
              return a.createElement(
                nR,
                { input: !0 },
                a.createElement(nx, null, t),
                a.createElement(
                  nz,
                  { hasRange: s },
                  s &&
                    a.createElement(
                      nD,
                      tW({ value: parseFloat(n), onDrag: r }, i),
                    ),
                  a.createElement(
                    nF,
                    tW({}, e, {
                      id: l,
                      label: "value",
                      innerLabelTrim: s ? 0 : 1,
                    }),
                  ),
                ),
              );
            },
          },
          e7(tU, ["sanitizeStep"]),
        ),
        nU = Object.freeze({
          __proto__: null,
          schema: (e, t) =>
            C()
              .schema({ options: C().passesAnyOf(C().object(), C().array()) })
              .test(t),
          sanitize: (e, { values: t }) => {
            if (0 > t.indexOf(e))
              throw Error("Selected value doesn't match Select options");
            return e;
          },
          format: (e, { values: t }) => t.indexOf(e),
          normalize: (e) => {
            let t,
              n,
              { value: r, options: i } = e;
            return (
              Array.isArray(i)
                ? ((n = i), (t = i.map((e) => String(e))))
                : ((n = Object.values(i)), (t = Object.keys(i))),
              "value" in e
                ? n.includes(r) || (t.unshift(String(r)), n.unshift(r))
                : (r = n[0]),
              Object.values(i).includes(r) || (i[String(r)] = r),
              { value: r, settings: { keys: t, values: n } }
            );
          },
        });
      let nW = t0("div", {
          $flexCenter: "",
          position: "relative",
          "> svg": {
            pointerEvents: "none",
            position: "absolute",
            right: "$md",
          },
        }),
        nV = t0("select", {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
        }),
        nQ = t0("div", {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "$rowHeight",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          padding: "0 $sm",
          cursor: "pointer",
          [`${nV}:focus + &`]: { $focusStyle: "" },
          [`${nV}:hover + &`]: { $hoverStyle: "" },
        });
      function nG({
        displayValue: e,
        value: t,
        onUpdate: n,
        id: r,
        settings: i,
        disabled: l,
      }) {
        let { keys: o, values: u } = i,
          s = (0, a.useRef)();
        return (
          t === u[e] && (s.current = o[e]),
          a.createElement(
            nW,
            null,
            a.createElement(
              nV,
              {
                id: r,
                value: e,
                onChange: (e) => n(u[Number(e.currentTarget.value)]),
                disabled: l,
              },
              o.map((e, t) =>
                a.createElement("option", { key: e, value: t }, e),
              ),
            ),
            a.createElement(nQ, null, s.current),
            a.createElement(nC, { toggled: !0 }),
          )
        );
      }
      var nq = th(
          {
            component: function () {
              let {
                label: e,
                value: t,
                displayValue: n,
                onUpdate: r,
                id: i,
                disabled: l,
                settings: o,
              } = tQ();
              return a.createElement(
                nR,
                { input: !0 },
                a.createElement(nx, null, e),
                a.createElement(nG, {
                  id: i,
                  value: t,
                  displayValue: n,
                  onUpdate: r,
                  settings: o,
                  disabled: l,
                }),
              );
            },
          },
          nU,
        ),
        nY = Object.freeze({
          __proto__: null,
          schema: (e) => C().string().test(e),
          sanitize: (e) => {
            if ("string" != typeof e) throw Error("Invalid string");
            return e;
          },
          normalize: ({ value: e, editable: t = !0, rows: n = !1 }) => ({
            value: e,
            settings: {
              editable: t,
              rows: "number" == typeof n ? n : n ? 5 : 0,
            },
          }),
        });
      let nK = ["displayValue", "onUpdate", "onChange", "editable"],
        nX = t0("div", { whiteSpace: "pre-wrap" });
      function nZ(e) {
        let { displayValue: t, onUpdate: n, onChange: r, editable: i = !0 } = e,
          l = e7(e, nK);
        return i
          ? a.createElement(nr, tW({ value: t, onUpdate: n, onChange: r }, l))
          : a.createElement(nX, null, t);
      }
      var nJ = th(
          {
            component: function () {
              let {
                label: e,
                settings: t,
                displayValue: n,
                onUpdate: r,
                onChange: i,
              } = tQ();
              return a.createElement(
                nR,
                { input: !0 },
                a.createElement(nx, null, e),
                a.createElement(
                  nZ,
                  tW({ displayValue: n, onUpdate: r, onChange: i }, t),
                ),
              );
            },
          },
          nY,
        ),
        n0 = Object.freeze({
          __proto__: null,
          schema: (e) => C().boolean().test(e),
          sanitize: (e) => {
            if ("boolean" != typeof e) throw Error("Invalid boolean");
            return e;
          },
        });
      let n1 = t0("div", {
        position: "relative",
        $flex: "",
        height: "$rowHeight",
        input: { $reset: "", height: 0, width: 0, opacity: 0, margin: 0 },
        label: {
          position: "relative",
          $flexCenter: "",
          userSelect: "none",
          cursor: "pointer",
          height: "$checkboxSize",
          width: "$checkboxSize",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          $hover: "",
        },
        "input:focus + label": { $focusStyle: "" },
        "input:focus:checked + label, input:checked + label:hover": {
          $hoverStyle: "$accent3",
        },
        "input + label:active": { backgroundColor: "$accent1" },
        "input:checked + label:active": { backgroundColor: "$accent1" },
        "label > svg": {
          display: "none",
          width: "90%",
          height: "90%",
          stroke: "$highlight3",
        },
        "input:checked + label": { backgroundColor: "$accent2" },
        "input:checked + label > svg": { display: "block" },
      });
      function n2({ value: e, onUpdate: t, id: n, disabled: r }) {
        return a.createElement(
          n1,
          null,
          a.createElement("input", {
            id: n,
            type: "checkbox",
            checked: e,
            onChange: (e) => t(e.currentTarget.checked),
            disabled: r,
          }),
          a.createElement(
            "label",
            { htmlFor: n },
            a.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
              },
              a.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 13l4 4L19 7",
              }),
            ),
          ),
        );
      }
      var n3 = th(
        {
          component: function () {
            let { label: e, value: t, onUpdate: n, disabled: r, id: i } = tQ();
            return a.createElement(
              nR,
              { input: !0 },
              a.createElement(nx, null, e),
              a.createElement(n2, {
                value: t,
                onUpdate: n,
                id: i,
                disabled: r,
              }),
            );
          },
        },
        n0,
      );
      let n4 = ["locked"];
      function n5({
        value: e,
        id: t,
        valueKey: n,
        settings: r,
        onUpdate: i,
        innerLabelTrim: l,
      }) {
        let o = (0, a.useRef)(e[n]);
        o.current = e[n];
        let u = (0, a.useCallback)(
            (e) =>
              i({
                [n]: tN({ type: "NUMBER", value: o.current, settings: r }, e),
              }),
            [i, r, n],
          ),
          s = nT({ type: "NUMBER", value: e[n], settings: r, setValue: u });
        return a.createElement(nF, {
          id: t,
          label: n,
          value: e[n],
          displayValue: s.displayValue,
          onUpdate: s.onUpdate,
          onChange: s.onChange,
          settings: r,
          innerLabelTrim: l,
        });
      }
      let n6 = t0("div", {
        display: "grid",
        columnGap: "$colGap",
        gridAutoFlow: "column dense",
        alignItems: "center",
        variants: {
          withLock: {
            true: {
              gridTemplateColumns: "10px auto",
              "> svg": { cursor: "pointer" },
            },
          },
        },
      });
      function n8(e) {
        let { locked: t } = e,
          n = e7(e, n4);
        return a.createElement(
          "svg",
          tW(
            {
              width: "10",
              height: "10",
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n,
          ),
          t
            ? a.createElement("path", {
                d: "M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
              })
            : a.createElement("path", {
                d: "M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }),
        );
      }
      function n9({ value: e, onUpdate: t, settings: n, innerLabelTrim: r }) {
        let { id: i, setSettings: l } = tQ(),
          { lock: o, locked: u } = n;
        return a.createElement(
          n6,
          { withLock: o },
          o &&
            a.createElement(n8, {
              locked: u,
              onClick: () => l({ locked: !u }),
            }),
          Object.keys(e).map((l, o) =>
            a.createElement(n5, {
              id: 0 === o ? i : `${i}.${l}`,
              key: l,
              valueKey: l,
              value: e,
              settings: n[l],
              onUpdate: t,
              innerLabelTrim: r,
            }),
          ),
        );
      }
      let n7 = (e, t) => {
          let n = {},
            r = 0,
            i = 1 / 0;
          for (let l in (Object.entries(e).forEach(([e, l]) => {
            ((n[e] = tB(th({ value: l }, t[e])).settings),
              (r = Math.max(r, n[e].step)),
              (i = Math.min(i, n[e].pad)));
          }),
          n)) {
            let { step: e, min: o, max: a } = t[l] || {};
            isFinite(e) ||
              (isFinite(o) && isFinite(a)) ||
              ((n[l].step = r), (n[l].pad = i));
          }
          return n;
        },
        re = ["lock"],
        rt = ["value"];
      function rn(e, t, n) {
        return (Array.isArray(e) ? "array" : "object") === t
          ? e
          : "array" === t
            ? Object.values(e)
            : e.reduce((e, t, r) => Object.assign(e, { [n[r]]: t }), {});
      }
      let rr = (e, t, n) => {
          let r = rn(e, "object", t.keys);
          for (let e in r) r[e] = tF(r[e], t[e]);
          let i = Object.keys(r),
            l = {};
          if (i.length === t.keys.length) l = r;
          else {
            let e = rn(n, "object", t.keys);
            if (1 === i.length && t.locked) {
              let t = i[0],
                n = r[t],
                o = e[t],
                a = 0 !== o ? n / o : 1;
              for (let r in e) r === t ? (l[t] = n) : (l[r] = e[r] * a);
            } else l = th(th({}, e), r);
          }
          return rn(l, t.format, t.keys);
        },
        ri = (e, t) => rn(e, "object", t.keys),
        rl = (e) => !!e && ("step" in e || "min" in e || "max" in e);
      function ro(e) {
        return {
          schema: (function (e) {
            let t = C().array().length(e).every.number(),
              n = (t) => {
                if (!t || "object" != typeof t) return !1;
                let n = Object.values(t);
                return n.length === e && n.every((e) => isFinite(e));
              };
            return (e) => t.test(e) || n(e);
          })(e.length),
          normalize: (t) => {
            let { value: n } = t;
            return (function (e, t, n = []) {
              let { lock: r = !1 } = t,
                i = e7(t, re),
                l = Array.isArray(e) ? "array" : "object",
                o = "object" === l ? Object.keys(e) : n,
                a = rn(e, "object", o),
                u = n7(
                  a,
                  rl(i)
                    ? o.reduce((e, t) => Object.assign(e, { [t]: i }), {})
                    : i,
                );
              return {
                value: "array" === l ? e : a,
                settings: th(
                  th({}, u),
                  {},
                  { format: l, keys: o, lock: r, locked: !1 },
                ),
              };
            })(n, e7(t, rt), e);
          },
          format: (e, t) => ri(e, t),
          sanitize: (e, t, n) => rr(e, t, n),
        };
      }
      var ra = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
        ru = function (e) {
          return "string" == typeof e ? e.length > 0 : "number" == typeof e;
        },
        rs = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = Math.pow(10, t)),
            Math.round(n * e) / n + 0
          );
        },
        rc = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            e > n ? n : e > t ? e : t
          );
        },
        rf = function (e) {
          return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
        },
        rd = function (e) {
          return {
            r: rc(e.r, 0, 255),
            g: rc(e.g, 0, 255),
            b: rc(e.b, 0, 255),
            a: rc(e.a),
          };
        },
        rp = function (e) {
          return { r: rs(e.r), g: rs(e.g), b: rs(e.b), a: rs(e.a, 3) };
        },
        rh = /^#([0-9a-f]{3,8})$/i,
        rg = function (e) {
          var t = e.toString(16);
          return t.length < 2 ? "0" + t : t;
        },
        rm = function (e) {
          var t = e.r,
            n = e.g,
            r = e.b,
            i = e.a,
            l = Math.max(t, n, r),
            o = l - Math.min(t, n, r),
            a = o
              ? l === t
                ? (n - r) / o
                : l === n
                  ? 2 + (r - t) / o
                  : 4 + (t - n) / o
              : 0;
          return {
            h: 60 * (a < 0 ? a + 6 : a),
            s: l ? (o / l) * 100 : 0,
            v: (l / 255) * 100,
            a: i,
          };
        },
        rv = function (e) {
          var t = e.h,
            n = e.s,
            r = e.v,
            i = e.a;
          ((t = (t / 360) * 6), (n /= 100), (r /= 100));
          var l = Math.floor(t),
            o = r * (1 - n),
            a = r * (1 - (t - l) * n),
            u = r * (1 - (1 - t + l) * n),
            s = l % 6;
          return {
            r: 255 * [r, a, o, o, u, r][s],
            g: 255 * [u, r, r, a, o, o][s],
            b: 255 * [o, o, u, r, r, a][s],
            a: i,
          };
        },
        rb = function (e) {
          return {
            h: rf(e.h),
            s: rc(e.s, 0, 100),
            l: rc(e.l, 0, 100),
            a: rc(e.a),
          };
        },
        ry = function (e) {
          return { h: rs(e.h), s: rs(e.s), l: rs(e.l), a: rs(e.a, 3) };
        },
        rw = function (e) {
          var t, n;
          return rv(
            ((t = e.s),
            {
              h: e.h,
              s:
                (t *= ((n = e.l) < 50 ? n : 100 - n) / 100) > 0
                  ? ((2 * t) / (n + t)) * 100
                  : 0,
              v: n + t,
              a: e.a,
            }),
          );
        },
        rE = function (e) {
          var t, n, r, i;
          return {
            h: (t = rm(e)).h,
            s:
              (i = ((200 - (n = t.s)) * (r = t.v)) / 100) > 0 && i < 200
                ? ((n * r) / 100 / (i <= 100 ? i : 200 - i)) * 100
                : 0,
            l: i / 2,
            a: t.a,
          };
        },
        rx =
          /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        rS =
          /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        rk =
          /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        rC =
          /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        r_ = {
          string: [
            [
              function (e) {
                var t = rh.exec(e);
                return t
                  ? (e = t[1]).length <= 4
                    ? {
                        r: parseInt(e[0] + e[0], 16),
                        g: parseInt(e[1] + e[1], 16),
                        b: parseInt(e[2] + e[2], 16),
                        a:
                          4 === e.length
                            ? rs(parseInt(e[3] + e[3], 16) / 255, 2)
                            : 1,
                      }
                    : 6 === e.length || 8 === e.length
                      ? {
                          r: parseInt(e.substr(0, 2), 16),
                          g: parseInt(e.substr(2, 2), 16),
                          b: parseInt(e.substr(4, 2), 16),
                          a:
                            8 === e.length
                              ? rs(parseInt(e.substr(6, 2), 16) / 255, 2)
                              : 1,
                        }
                      : null
                  : null;
              },
              "hex",
            ],
            [
              function (e) {
                var t = rk.exec(e) || rC.exec(e);
                return t
                  ? t[2] !== t[4] || t[4] !== t[6]
                    ? null
                    : rd({
                        r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                        g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                        b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                        a:
                          void 0 === t[7] ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                      })
                  : null;
              },
              "rgb",
            ],
            [
              function (e) {
                var t,
                  n,
                  r = rx.exec(e) || rS.exec(e);
                return r
                  ? rw(
                      rb({
                        h:
                          ((t = r[1]),
                          void 0 === (n = r[2]) && (n = "deg"),
                          Number(t) * (ra[n] || 1)),
                        s: Number(r[3]),
                        l: Number(r[4]),
                        a:
                          void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1),
                      }),
                    )
                  : null;
              },
              "hsl",
            ],
          ],
          object: [
            [
              function (e) {
                var t = e.r,
                  n = e.g,
                  r = e.b,
                  i = e.a;
                return ru(t) && ru(n) && ru(r)
                  ? rd({
                      r: Number(t),
                      g: Number(n),
                      b: Number(r),
                      a: Number(void 0 === i ? 1 : i),
                    })
                  : null;
              },
              "rgb",
            ],
            [
              function (e) {
                var t = e.h,
                  n = e.s,
                  r = e.l,
                  i = e.a;
                return ru(t) && ru(n) && ru(r)
                  ? rw(
                      rb({
                        h: Number(t),
                        s: Number(n),
                        l: Number(r),
                        a: Number(void 0 === i ? 1 : i),
                      }),
                    )
                  : null;
              },
              "hsl",
            ],
            [
              function (e) {
                var t,
                  n = e.h,
                  r = e.s,
                  i = e.v,
                  l = e.a;
                return ru(n) && ru(r) && ru(i)
                  ? rv({
                      h: rf(
                        (t = {
                          h: Number(n),
                          s: Number(r),
                          v: Number(i),
                          a: Number(void 0 === l ? 1 : l),
                        }).h,
                      ),
                      s: rc(t.s, 0, 100),
                      v: rc(t.v, 0, 100),
                      a: rc(t.a),
                    })
                  : null;
              },
              "hsv",
            ],
          ],
        },
        rR = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n][0](e);
            if (r) return [r, t[n][1]];
          }
          return [null, void 0];
        },
        rT = function (e) {
          return "string" == typeof e
            ? rR(e.trim(), r_.string)
            : "object" == typeof e && null !== e
              ? rR(e, r_.object)
              : [null, void 0];
        },
        rP = function (e, t) {
          var n = rE(e);
          return { h: n.h, s: rc(n.s + 100 * t, 0, 100), l: n.l, a: n.a };
        },
        rO = function (e) {
          return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
        },
        r$ = function (e, t) {
          var n = rE(e);
          return { h: n.h, s: n.s, l: rc(n.l + 100 * t, 0, 100), a: n.a };
        },
        rj = (function () {
          function e(e) {
            ((this.parsed = rT(e)[0]),
              (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 }));
          }
          return (
            (e.prototype.isValid = function () {
              return null !== this.parsed;
            }),
            (e.prototype.brightness = function () {
              return rs(rO(this.rgba), 2);
            }),
            (e.prototype.isDark = function () {
              return 0.5 > rO(this.rgba);
            }),
            (e.prototype.isLight = function () {
              return rO(this.rgba) >= 0.5;
            }),
            (e.prototype.toHex = function () {
              var e, t, n, r, i, l;
              return (
                (t = (e = rp(this.rgba)).r),
                (n = e.g),
                (r = e.b),
                (l = (i = e.a) < 1 ? rg(rs(255 * i)) : ""),
                "#" + rg(t) + rg(n) + rg(r) + l
              );
            }),
            (e.prototype.toRgb = function () {
              return rp(this.rgba);
            }),
            (e.prototype.toRgbString = function () {
              var e, t, n, r, i;
              return (
                (t = (e = rp(this.rgba)).r),
                (n = e.g),
                (r = e.b),
                (i = e.a) < 1
                  ? "rgba(" + t + ", " + n + ", " + r + ", " + i + ")"
                  : "rgb(" + t + ", " + n + ", " + r + ")"
              );
            }),
            (e.prototype.toHsl = function () {
              return ry(rE(this.rgba));
            }),
            (e.prototype.toHslString = function () {
              var e, t, n, r, i;
              return (
                (t = (e = ry(rE(this.rgba))).h),
                (n = e.s),
                (r = e.l),
                (i = e.a) < 1
                  ? "hsla(" + t + ", " + n + "%, " + r + "%, " + i + ")"
                  : "hsl(" + t + ", " + n + "%, " + r + "%)"
              );
            }),
            (e.prototype.toHsv = function () {
              var e;
              return {
                h: rs((e = rm(this.rgba)).h),
                s: rs(e.s),
                v: rs(e.v),
                a: rs(e.a, 3),
              };
            }),
            (e.prototype.invert = function () {
              var e;
              return rz({
                r: 255 - (e = this.rgba).r,
                g: 255 - e.g,
                b: 255 - e.b,
                a: e.a,
              });
            }),
            (e.prototype.saturate = function (e) {
              return (void 0 === e && (e = 0.1), rz(rP(this.rgba, e)));
            }),
            (e.prototype.desaturate = function (e) {
              return (void 0 === e && (e = 0.1), rz(rP(this.rgba, -e)));
            }),
            (e.prototype.grayscale = function () {
              return rz(rP(this.rgba, -1));
            }),
            (e.prototype.lighten = function (e) {
              return (void 0 === e && (e = 0.1), rz(r$(this.rgba, e)));
            }),
            (e.prototype.darken = function (e) {
              return (void 0 === e && (e = 0.1), rz(r$(this.rgba, -e)));
            }),
            (e.prototype.rotate = function (e) {
              return (void 0 === e && (e = 15), this.hue(this.hue() + e));
            }),
            (e.prototype.alpha = function (e) {
              var t;
              return "number" == typeof e
                ? rz({ r: (t = this.rgba).r, g: t.g, b: t.b, a: e })
                : rs(this.rgba.a, 3);
            }),
            (e.prototype.hue = function (e) {
              var t = rE(this.rgba);
              return "number" == typeof e
                ? rz({ h: e, s: t.s, l: t.l, a: t.a })
                : rs(t.h);
            }),
            (e.prototype.isEqual = function (e) {
              return this.toHex() === rz(e).toHex();
            }),
            e
          );
        })(),
        rz = function (e) {
          return e instanceof rj ? e : new rj(e);
        },
        rM = [];
      function rN() {
        return (rN =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function rI(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          t.indexOf((n = l[r])) >= 0 || (i[n] = e[n]);
        return i;
      }
      function rL(e) {
        var t = (0, a.useRef)(e),
          n = (0, a.useRef)(function (e) {
            t.current && t.current(e);
          });
        return ((t.current = e), n.current);
      }
      var rD = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            e > n ? n : e < t ? t : e
          );
        },
        rA = function (e) {
          return "touches" in e;
        },
        rF = function (e) {
          return (e && e.ownerDocument.defaultView) || self;
        },
        rB = function (e, t, n) {
          var r = e.getBoundingClientRect(),
            i = rA(t)
              ? (function (e, t) {
                  for (var n = 0; n < e.length; n++)
                    if (e[n].identifier === t) return e[n];
                  return e[0];
                })(t.touches, n)
              : t;
          return {
            left: rD((i.pageX - (r.left + rF(e).pageXOffset)) / r.width),
            top: rD((i.pageY - (r.top + rF(e).pageYOffset)) / r.height),
          };
        },
        rH = function (e) {
          rA(e) || e.preventDefault();
        },
        rU = a.memo(function (e) {
          var t = e.onMove,
            n = e.onKey,
            r = rI(e, ["onMove", "onKey"]),
            i = (0, a.useRef)(null),
            l = rL(t),
            o = rL(n),
            u = (0, a.useRef)(null),
            s = (0, a.useRef)(!1),
            c = (0, a.useMemo)(
              function () {
                var e = function (e) {
                    (rH(e),
                      (rA(e) ? e.touches.length > 0 : e.buttons > 0) &&
                      i.current
                        ? l(rB(i.current, e, u.current))
                        : n(!1));
                  },
                  t = function () {
                    return n(!1);
                  };
                function n(n) {
                  var r = s.current,
                    l = rF(i.current),
                    o = n ? l.addEventListener : l.removeEventListener;
                  (o(r ? "touchmove" : "mousemove", e),
                    o(r ? "touchend" : "mouseup", t));
                }
                return [
                  function (e) {
                    var t = e.nativeEvent,
                      r = i.current;
                    if (r && (rH(t), (!s.current || rA(t)) && r)) {
                      if (rA(t)) {
                        s.current = !0;
                        var o = t.changedTouches || [];
                        o.length && (u.current = o[0].identifier);
                      }
                      (r.focus(), l(rB(r, t, u.current)), n(!0));
                    }
                  },
                  function (e) {
                    var t = e.which || e.keyCode;
                    t < 37 ||
                      t > 40 ||
                      (e.preventDefault(),
                      o({
                        left: 39 === t ? 0.05 : 37 === t ? -0.05 : 0,
                        top: 40 === t ? 0.05 : 38 === t ? -0.05 : 0,
                      }));
                  },
                  n,
                ];
              },
              [o, l],
            ),
            f = c[0],
            d = c[1],
            p = c[2];
          return (
            (0, a.useEffect)(
              function () {
                return p;
              },
              [p],
            ),
            a.createElement(
              "div",
              rN({}, r, {
                onTouchStart: f,
                onMouseDown: f,
                className: "react-colorful__interactive",
                ref: i,
                onKeyDown: d,
                tabIndex: 0,
                role: "slider",
              }),
            )
          );
        }),
        rW = function (e) {
          return e.filter(Boolean).join(" ");
        },
        rV = function (e) {
          var t = e.color,
            n = e.left,
            r = e.top,
            i = rW(["react-colorful__pointer", e.className]);
          return a.createElement(
            "div",
            {
              className: i,
              style: {
                top: 100 * (void 0 === r ? 0.5 : r) + "%",
                left: 100 * n + "%",
              },
            },
            a.createElement("div", {
              className: "react-colorful__pointer-fill",
              style: { backgroundColor: t },
            }),
          );
        },
        rQ = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = Math.pow(10, t)),
            Math.round(n * e) / n
          );
        },
        rG = function (e) {
          var t = e.s,
            n = e.v,
            r = e.a,
            i = ((200 - t) * n) / 100;
          return {
            h: rQ(e.h),
            s: rQ(
              i > 0 && i < 200
                ? ((t * n) / 100 / (i <= 100 ? i : 200 - i)) * 100
                : 0,
            ),
            l: rQ(i / 2),
            a: rQ(r, 2),
          };
        },
        rq = function (e) {
          var t = rG(e);
          return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
        },
        rY = function (e) {
          var t = rG(e);
          return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
        },
        rK = function (e) {
          var t = e.h,
            n = e.s,
            r = e.v,
            i = e.a;
          ((t = (t / 360) * 6), (n /= 100), (r /= 100));
          var l = Math.floor(t),
            o = r * (1 - n),
            a = r * (1 - (t - l) * n),
            u = r * (1 - (1 - t + l) * n),
            s = l % 6;
          return {
            r: rQ(255 * [r, a, o, o, u, r][s]),
            g: rQ(255 * [u, r, r, a, o, o][s]),
            b: rQ(255 * [o, o, u, r, r, a][s]),
            a: rQ(i, 2),
          };
        },
        rX = function (e) {
          var t = e.r,
            n = e.g,
            r = e.b,
            i = e.a,
            l = Math.max(t, n, r),
            o = l - Math.min(t, n, r),
            a = o
              ? l === t
                ? (n - r) / o
                : l === n
                  ? 2 + (r - t) / o
                  : 4 + (t - n) / o
              : 0;
          return {
            h: rQ(60 * (a < 0 ? a + 6 : a)),
            s: rQ(l ? (o / l) * 100 : 0),
            v: rQ((l / 255) * 100),
            a: i,
          };
        },
        rZ = a.memo(function (e) {
          var t = e.hue,
            n = e.onChange,
            r = rW(["react-colorful__hue", e.className]);
          return a.createElement(
            "div",
            { className: r },
            a.createElement(
              rU,
              {
                onMove: function (e) {
                  n({ h: 360 * e.left });
                },
                onKey: function (e) {
                  n({ h: rD(t + 360 * e.left, 0, 360) });
                },
                "aria-label": "Hue",
                "aria-valuenow": rQ(t),
                "aria-valuemax": "360",
                "aria-valuemin": "0",
              },
              a.createElement(rV, {
                className: "react-colorful__hue-pointer",
                left: t / 360,
                color: rq({ h: t, s: 100, v: 100, a: 1 }),
              }),
            ),
          );
        }),
        rJ = a.memo(function (e) {
          var t = e.hsva,
            n = e.onChange,
            r = { backgroundColor: rq({ h: t.h, s: 100, v: 100, a: 1 }) };
          return a.createElement(
            "div",
            { className: "react-colorful__saturation", style: r },
            a.createElement(
              rU,
              {
                onMove: function (e) {
                  n({ s: 100 * e.left, v: 100 - 100 * e.top });
                },
                onKey: function (e) {
                  n({
                    s: rD(t.s + 100 * e.left, 0, 100),
                    v: rD(t.v - 100 * e.top, 0, 100),
                  });
                },
                "aria-label": "Color",
                "aria-valuetext":
                  "Saturation " + rQ(t.s) + "%, Brightness " + rQ(t.v) + "%",
              },
              a.createElement(rV, {
                className: "react-colorful__saturation-pointer",
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: rq(t),
              }),
            ),
          );
        }),
        r0 = function (e, t) {
          if (e === t) return !0;
          for (var n in e) if (e[n] !== t[n]) return !1;
          return !0;
        };
      function r1(e, t, n) {
        var r = rL(n),
          i = (0, a.useState)(function () {
            return e.toHsva(t);
          }),
          l = i[0],
          o = i[1],
          u = (0, a.useRef)({ color: t, hsva: l });
        return (
          (0, a.useEffect)(
            function () {
              if (!e.equal(t, u.current.color)) {
                var n = e.toHsva(t);
                ((u.current = { hsva: n, color: t }), o(n));
              }
            },
            [t, e],
          ),
          (0, a.useEffect)(
            function () {
              var t;
              r0(l, u.current.hsva) ||
                e.equal((t = e.fromHsva(l)), u.current.color) ||
                ((u.current = { hsva: l, color: t }), r(t));
            },
            [l, e, r],
          ),
          [
            l,
            (0, a.useCallback)(function (e) {
              o(function (t) {
                return Object.assign({}, t, e);
              });
            }, []),
          ]
        );
      }
      var r2,
        r3,
        r4,
        r5,
        r6 = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        r8 = new Map(),
        r9 = function (e) {
          r6(function () {
            var t = e.current ? e.current.ownerDocument : document;
            if (void 0 !== t && !r8.has(t)) {
              var r = t.createElement("style");
              ((r.innerHTML =
                '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'),
                r8.set(t, r));
              var i = r5 || n.nc;
              (i && r.setAttribute("nonce", i), t.head.appendChild(r));
            }
          }, []);
        },
        r7 = function (e) {
          var t = e.className,
            n = e.colorModel,
            r = e.color,
            i = void 0 === r ? n.defaultColor : r,
            l = e.onChange,
            o = rI(e, ["className", "colorModel", "color", "onChange"]),
            u = (0, a.useRef)(null);
          r9(u);
          var s = r1(n, i, l),
            c = s[0],
            f = s[1],
            d = rW(["react-colorful", t]);
          return a.createElement(
            "div",
            rN({}, o, { ref: u, className: d }),
            a.createElement(rJ, { hsva: c, onChange: f }),
            a.createElement(rZ, {
              hue: c.h,
              onChange: f,
              className: "react-colorful__last-control",
            }),
          );
        },
        ie = function (e) {
          var t = e.className,
            n = e.hsva,
            r = e.onChange,
            i = {
              backgroundImage:
                "linear-gradient(90deg, " +
                rY(Object.assign({}, n, { a: 0 })) +
                ", " +
                rY(Object.assign({}, n, { a: 1 })) +
                ")",
            },
            l = rW(["react-colorful__alpha", t]),
            o = rQ(100 * n.a);
          return a.createElement(
            "div",
            { className: l },
            a.createElement("div", {
              className: "react-colorful__alpha-gradient",
              style: i,
            }),
            a.createElement(
              rU,
              {
                onMove: function (e) {
                  r({ a: e.left });
                },
                onKey: function (e) {
                  r({ a: rD(n.a + e.left) });
                },
                "aria-label": "Alpha",
                "aria-valuetext": o + "%",
                "aria-valuenow": o,
                "aria-valuemin": "0",
                "aria-valuemax": "100",
              },
              a.createElement(rV, {
                className: "react-colorful__alpha-pointer",
                left: n.a,
                color: rY(n),
              }),
            ),
          );
        },
        it = function (e) {
          var t = e.className,
            n = e.colorModel,
            r = e.color,
            i = void 0 === r ? n.defaultColor : r,
            l = e.onChange,
            o = rI(e, ["className", "colorModel", "color", "onChange"]),
            u = (0, a.useRef)(null);
          r9(u);
          var s = r1(n, i, l),
            c = s[0],
            f = s[1],
            d = rW(["react-colorful", t]);
          return a.createElement(
            "div",
            rN({}, o, { ref: u, className: d }),
            a.createElement(rJ, { hsva: c, onChange: f }),
            a.createElement(rZ, { hue: c.h, onChange: f }),
            a.createElement(ie, {
              hsva: c,
              onChange: f,
              className: "react-colorful__last-control",
            }),
          );
        },
        ir = {
          defaultColor: { r: 0, g: 0, b: 0, a: 1 },
          toHsva: rX,
          fromHsva: rK,
          equal: r0,
        },
        ii = function (e) {
          return a.createElement(it, rN({}, e, { colorModel: ir }));
        },
        il = {
          defaultColor: { r: 0, g: 0, b: 0 },
          toHsva: function (e) {
            return rX({ r: e.r, g: e.g, b: e.b, a: 1 });
          },
          fromHsva: function (e) {
            var t;
            return { r: (t = rK(e)).r, g: t.g, b: t.b };
          },
          equal: r0,
        },
        io = function (e) {
          return a.createElement(r7, rN({}, e, { colorModel: il }));
        },
        ia = n(507),
        iu = n.n(ia),
        is = n(6871),
        ic = new Map([
          ["aac", "audio/aac"],
          ["abw", "application/x-abiword"],
          ["arc", "application/x-freearc"],
          ["avif", "image/avif"],
          ["avi", "video/x-msvideo"],
          ["azw", "application/vnd.amazon.ebook"],
          ["bin", "application/octet-stream"],
          ["bmp", "image/bmp"],
          ["bz", "application/x-bzip"],
          ["bz2", "application/x-bzip2"],
          ["cda", "application/x-cdf"],
          ["csh", "application/x-csh"],
          ["css", "text/css"],
          ["csv", "text/csv"],
          ["doc", "application/msword"],
          [
            "docx",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ],
          ["eot", "application/vnd.ms-fontobject"],
          ["epub", "application/epub+zip"],
          ["gz", "application/gzip"],
          ["gif", "image/gif"],
          ["heic", "image/heic"],
          ["heif", "image/heif"],
          ["htm", "text/html"],
          ["html", "text/html"],
          ["ico", "image/vnd.microsoft.icon"],
          ["ics", "text/calendar"],
          ["jar", "application/java-archive"],
          ["jpeg", "image/jpeg"],
          ["jpg", "image/jpeg"],
          ["js", "text/javascript"],
          ["json", "application/json"],
          ["jsonld", "application/ld+json"],
          ["mid", "audio/midi"],
          ["midi", "audio/midi"],
          ["mjs", "text/javascript"],
          ["mp3", "audio/mpeg"],
          ["mp4", "video/mp4"],
          ["mpeg", "video/mpeg"],
          ["mpkg", "application/vnd.apple.installer+xml"],
          ["odp", "application/vnd.oasis.opendocument.presentation"],
          ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
          ["odt", "application/vnd.oasis.opendocument.text"],
          ["oga", "audio/ogg"],
          ["ogv", "video/ogg"],
          ["ogx", "application/ogg"],
          ["opus", "audio/opus"],
          ["otf", "font/otf"],
          ["png", "image/png"],
          ["pdf", "application/pdf"],
          ["php", "application/x-httpd-php"],
          ["ppt", "application/vnd.ms-powerpoint"],
          [
            "pptx",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          ],
          ["rar", "application/vnd.rar"],
          ["rtf", "application/rtf"],
          ["sh", "application/x-sh"],
          ["svg", "image/svg+xml"],
          ["swf", "application/x-shockwave-flash"],
          ["tar", "application/x-tar"],
          ["tif", "image/tiff"],
          ["tiff", "image/tiff"],
          ["ts", "video/mp2t"],
          ["ttf", "font/ttf"],
          ["txt", "text/plain"],
          ["vsd", "application/vnd.visio"],
          ["wav", "audio/wav"],
          ["weba", "audio/webm"],
          ["webm", "video/webm"],
          ["webp", "image/webp"],
          ["woff", "font/woff"],
          ["woff2", "font/woff2"],
          ["xhtml", "application/xhtml+xml"],
          ["xls", "application/vnd.ms-excel"],
          [
            "xlsx",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ],
          ["xml", "application/xml"],
          ["xul", "application/vnd.mozilla.xul+xml"],
          ["zip", "application/zip"],
          ["7z", "application/x-7z-compressed"],
          ["mkv", "video/x-matroska"],
          ["mov", "video/quicktime"],
          ["msg", "application/vnd.ms-outlook"],
        ]);
      function id(e, t) {
        var n = (function (e) {
          var t = e.name;
          if (t && -1 !== t.lastIndexOf(".") && !e.type) {
            var n = t.split(".").pop().toLowerCase(),
              r = ic.get(n);
            r &&
              Object.defineProperty(e, "type", {
                value: r,
                writable: !1,
                configurable: !1,
                enumerable: !0,
              });
          }
          return e;
        })(e);
        if ("string" != typeof n.path) {
          var r = e.webkitRelativePath;
          Object.defineProperty(n, "path", {
            value:
              "string" == typeof t
                ? t
                : "string" == typeof r && r.length > 0
                  ? r
                  : e.name,
            writable: !1,
            configurable: !1,
            enumerable: !0,
          });
        }
        return n;
      }
      var ip = [".DS_Store", "Thumbs.db"];
      function ih(e) {
        return "object" == typeof e && null !== e;
      }
      function ig(e) {
        return e.filter(function (e) {
          return -1 === ip.indexOf(e.name);
        });
      }
      function im(e) {
        if (null === e) return [];
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(r);
        }
        return t;
      }
      function iv(e) {
        if ("function" != typeof e.webkitGetAsEntry) return ib(e);
        var t = e.webkitGetAsEntry();
        return t && t.isDirectory ? iw(t) : ib(e);
      }
      function ib(e) {
        var t = e.getAsFile();
        return t
          ? Promise.resolve(id(t))
          : Promise.reject(e + " is not a File");
      }
      function iy(e) {
        return (0, is.mG)(this, void 0, void 0, function () {
          return (0, is.Jh)(this, function (t) {
            return [
              2,
              e.isDirectory
                ? iw(e)
                : (function (e) {
                    return (0, is.mG)(this, void 0, void 0, function () {
                      return (0, is.Jh)(this, function (t) {
                        return [
                          2,
                          new Promise(function (t, n) {
                            e.file(
                              function (n) {
                                t(id(n, e.fullPath));
                              },
                              function (e) {
                                n(e);
                              },
                            );
                          }),
                        ];
                      });
                    });
                  })(e),
            ];
          });
        });
      }
      function iw(e) {
        var t = e.createReader();
        return new Promise(function (e, n) {
          var r = [];
          !(function i() {
            var l = this;
            t.readEntries(
              function (t) {
                return (0, is.mG)(l, void 0, void 0, function () {
                  var l;
                  return (0, is.Jh)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (t.length) return [3, 5];
                        o.label = 1;
                      case 1:
                        return (o.trys.push([1, 3, , 4]), [4, Promise.all(r)]);
                      case 2:
                        return (e(o.sent()), [3, 4]);
                      case 3:
                        return (n(o.sent()), [3, 4]);
                      case 4:
                        return [3, 6];
                      case 5:
                        ((l = Promise.all(t.map(iy))),
                          r.push(l),
                          i(),
                          (o.label = 6));
                      case 6:
                        return [2];
                    }
                  });
                });
              },
              function (e) {
                n(e);
              },
            );
          })();
        });
      }
      var iE = n(35);
      function ix(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function iS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ix(Object(n), !0).forEach(function (t) {
                ik(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ix(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function ik(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function iC(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              i =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != i) {
              var l = [],
                o = !0,
                a = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (l.push(n.value), !t || l.length !== t);
                  o = !0
                );
              } catch (e) {
                ((a = !0), (r = e));
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (a) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return i_(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return i_(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function i_(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var iR = function (e) {
          var t = Array.isArray(
            (e = Array.isArray(e) && 1 === e.length ? e[0] : e),
          )
            ? "one of ".concat(e.join(", "))
            : e;
          return {
            code: "file-invalid-type",
            message: "File type must be ".concat(t),
          };
        },
        iT = function (e) {
          return {
            code: "file-too-large",
            message: "File is larger than "
              .concat(e, " ")
              .concat(1 === e ? "byte" : "bytes"),
          };
        },
        iP = function (e) {
          return {
            code: "file-too-small",
            message: "File is smaller than "
              .concat(e, " ")
              .concat(1 === e ? "byte" : "bytes"),
          };
        },
        iO = { code: "too-many-files", message: "Too many files" };
      function i$(e, t) {
        var n = "application/x-moz-file" === e.type || (0, iE.Z)(e, t);
        return [n, n ? null : iR(t)];
      }
      function ij(e, t, n) {
        if (iz(e.size)) {
          if (iz(t) && iz(n)) {
            if (e.size > n) return [!1, iT(n)];
            if (e.size < t) return [!1, iP(t)];
          } else if (iz(t) && e.size < t) return [!1, iP(t)];
          else if (iz(n) && e.size > n) return [!1, iT(n)];
        }
        return [!0, null];
      }
      function iz(e) {
        return null != e;
      }
      function iM(e) {
        return "function" == typeof e.isPropagationStopped
          ? e.isPropagationStopped()
          : void 0 !== e.cancelBubble && e.cancelBubble;
      }
      function iN(e) {
        return e.dataTransfer
          ? Array.prototype.some.call(e.dataTransfer.types, function (e) {
              return "Files" === e || "application/x-moz-file" === e;
            })
          : !!e.target && !!e.target.files;
      }
      function iI(e) {
        e.preventDefault();
      }
      function iL() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          for (
            var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          return t.some(function (t) {
            return (!iM(e) && t && t.apply(void 0, [e].concat(r)), iM(e));
          });
        };
      }
      var iD = ["children"],
        iA = ["open"],
        iF = [
          "refKey",
          "role",
          "onKeyDown",
          "onFocus",
          "onBlur",
          "onClick",
          "onDragEnter",
          "onDragOver",
          "onDragLeave",
          "onDrop",
        ],
        iB = ["refKey", "onChange", "onClick"];
      function iH(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              i =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != i) {
              var l = [],
                o = !0,
                a = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (l.push(n.value), !t || l.length !== t);
                  o = !0
                );
              } catch (e) {
                ((a = !0), (r = e));
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (a) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          iU(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function iU(e, t) {
        if (e) {
          if ("string" == typeof e) return iW(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return iW(e, t);
        }
      }
      function iW(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function iV(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function iQ(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? iV(Object(n), !0).forEach(function (t) {
                iG(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : iV(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function iG(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function iq(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            ((n = l[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
        }
        return i;
      }
      var iY = (0, a.forwardRef)(function (e, t) {
        var n = e.children,
          r = iZ(iq(e, iD)),
          i = r.open,
          l = iq(r, iA);
        return (
          (0, a.useImperativeHandle)(
            t,
            function () {
              return { open: i };
            },
            [i],
          ),
          a.createElement(a.Fragment, null, n(iQ(iQ({}, l), {}, { open: i })))
        );
      });
      iY.displayName = "Dropzone";
      var iK = {
        disabled: !1,
        getFilesFromEvent: function (e) {
          return (0, is.mG)(this, void 0, void 0, function () {
            return (0, is.Jh)(this, function (t) {
              return ih(e) && ih(e.dataTransfer)
                ? [
                    2,
                    (function (e, t) {
                      return (0, is.mG)(this, void 0, void 0, function () {
                        var n;
                        return (0, is.Jh)(this, function (r) {
                          switch (r.label) {
                            case 0:
                              if (null === e) return [2, []];
                              if (!e.items) return [3, 2];
                              if (
                                ((n = im(e.items).filter(function (e) {
                                  return "file" === e.kind;
                                })),
                                "drop" !== t)
                              )
                                return [2, n];
                              return [4, Promise.all(n.map(iv))];
                            case 1:
                              return [
                                2,
                                ig(
                                  (function e(t) {
                                    return t.reduce(function (t, n) {
                                      return (0, is.fl)(
                                        t,
                                        Array.isArray(n) ? e(n) : [n],
                                      );
                                    }, []);
                                  })(r.sent()),
                                ),
                              ];
                            case 2:
                              return [
                                2,
                                ig(
                                  im(e.files).map(function (e) {
                                    return id(e);
                                  }),
                                ),
                              ];
                          }
                        });
                      });
                    })(e.dataTransfer, e.type),
                  ]
                : ih(e) && ih(e.target)
                  ? [
                      2,
                      im(e.target.files).map(function (e) {
                        return id(e);
                      }),
                    ]
                  : Array.isArray(e) &&
                      e.every(function (e) {
                        return "getFile" in e && "function" == typeof e.getFile;
                      })
                    ? [
                        2,
                        (function (e) {
                          return (0, is.mG)(this, void 0, void 0, function () {
                            return (0, is.Jh)(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return [
                                    4,
                                    Promise.all(
                                      e.map(function (e) {
                                        return e.getFile();
                                      }),
                                    ),
                                  ];
                                case 1:
                                  return [
                                    2,
                                    t.sent().map(function (e) {
                                      return id(e);
                                    }),
                                  ];
                              }
                            });
                          });
                        })(e),
                      ]
                    : [2, []];
            });
          });
        },
        maxSize: 1 / 0,
        minSize: 0,
        multiple: !0,
        maxFiles: 0,
        preventDropOnDocument: !0,
        noClick: !1,
        noKeyboard: !1,
        noDrag: !1,
        noDragEventsBubbling: !1,
        validator: null,
        useFsAccessApi: !0,
      };
      ((iY.defaultProps = iK),
        (iY.propTypes = {
          children: iu().func,
          accept: iu().oneOfType([iu().string, iu().arrayOf(iu().string)]),
          multiple: iu().bool,
          preventDropOnDocument: iu().bool,
          noClick: iu().bool,
          noKeyboard: iu().bool,
          noDrag: iu().bool,
          noDragEventsBubbling: iu().bool,
          minSize: iu().number,
          maxSize: iu().number,
          maxFiles: iu().number,
          disabled: iu().bool,
          getFilesFromEvent: iu().func,
          onFileDialogCancel: iu().func,
          onFileDialogOpen: iu().func,
          useFsAccessApi: iu().bool,
          onDragEnter: iu().func,
          onDragLeave: iu().func,
          onDragOver: iu().func,
          onDrop: iu().func,
          onDropAccepted: iu().func,
          onDropRejected: iu().func,
          validator: iu().func,
        }));
      var iX = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: [],
      };
      function iZ() {
        var e,
          t,
          n,
          r,
          i,
          l,
          o,
          u =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          s = iQ(iQ({}, iK), u),
          c = s.accept,
          f = s.disabled,
          d = s.getFilesFromEvent,
          p = s.maxSize,
          h = s.minSize,
          g = s.multiple,
          m = s.maxFiles,
          v = s.onDragEnter,
          b = s.onDragLeave,
          y = s.onDragOver,
          w = s.onDrop,
          E = s.onDropAccepted,
          x = s.onDropRejected,
          S = s.onFileDialogCancel,
          k = s.onFileDialogOpen,
          C = s.useFsAccessApi,
          _ = s.preventDropOnDocument,
          R = s.noClick,
          T = s.noKeyboard,
          P = s.noDrag,
          O = s.noDragEventsBubbling,
          $ = s.validator,
          j = (0, a.useMemo)(
            function () {
              return "function" == typeof k ? k : i0;
            },
            [k],
          ),
          z = (0, a.useMemo)(
            function () {
              return "function" == typeof S ? S : i0;
            },
            [S],
          ),
          M = (0, a.useRef)(null),
          N = (0, a.useRef)(null),
          I = iH((0, a.useReducer)(iJ, iX), 2),
          L = I[0],
          D = I[1],
          A = L.isFocused,
          F = L.isFileDialogActive,
          B = L.draggedFiles,
          H = (0, a.useRef)(
            "undefined" != typeof window &&
              window.isSecureContext &&
              C &&
              "showOpenFilePicker" in window,
          ),
          U = function () {
            !H.current &&
              F &&
              setTimeout(function () {
                N.current &&
                  !N.current.files.length &&
                  (D({ type: "closeDialog" }), z());
              }, 300);
          };
        (0, a.useEffect)(
          function () {
            return (
              window.addEventListener("focus", U, !1),
              function () {
                window.removeEventListener("focus", U, !1);
              }
            );
          },
          [N, F, z, H],
        );
        var W = (0, a.useRef)([]),
          V = function (e) {
            (M.current && M.current.contains(e.target)) ||
              (e.preventDefault(), (W.current = []));
          };
        (0, a.useEffect)(
          function () {
            return (
              _ &&
                (document.addEventListener("dragover", iI, !1),
                document.addEventListener("drop", V, !1)),
              function () {
                _ &&
                  (document.removeEventListener("dragover", iI),
                  document.removeEventListener("drop", V));
              }
            );
          },
          [M, _],
        );
        var Q = (0, a.useCallback)(
            function (e) {
              var t;
              (e.preventDefault(),
                e.persist(),
                el(e),
                (W.current = [].concat(
                  (function (e) {
                    if (Array.isArray(e)) return iW(e);
                  })((t = W.current)) ||
                    (function (e) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != e[Symbol.iterator]) ||
                        null != e["@@iterator"]
                      )
                        return Array.from(e);
                    })(t) ||
                    iU(t) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(),
                  [e.target],
                )),
                iN(e) &&
                  Promise.resolve(d(e)).then(function (t) {
                    (!iM(e) || O) &&
                      (D({
                        draggedFiles: t,
                        isDragActive: !0,
                        type: "setDraggedFiles",
                      }),
                      v && v(e));
                  }));
            },
            [d, v, O],
          ),
          G = (0, a.useCallback)(
            function (e) {
              (e.preventDefault(), e.persist(), el(e));
              var t = iN(e);
              if (t && e.dataTransfer)
                try {
                  e.dataTransfer.dropEffect = "copy";
                } catch (e) {}
              return (t && y && y(e), !1);
            },
            [y, O],
          ),
          q = (0, a.useCallback)(
            function (e) {
              (e.preventDefault(), e.persist(), el(e));
              var t = W.current.filter(function (e) {
                  return M.current && M.current.contains(e);
                }),
                n = t.indexOf(e.target);
              (-1 !== n && t.splice(n, 1),
                (W.current = t),
                !(t.length > 0) &&
                  (D({
                    isDragActive: !1,
                    type: "setDraggedFiles",
                    draggedFiles: [],
                  }),
                  iN(e) && b && b(e)));
            },
            [M, b, O],
          ),
          Y = (0, a.useCallback)(
            function (e, t) {
              var n = [],
                r = [];
              (e.forEach(function (e) {
                var t = iH(i$(e, c), 2),
                  i = t[0],
                  l = t[1],
                  o = iH(ij(e, h, p), 2),
                  a = o[0],
                  u = o[1],
                  s = $ ? $(e) : null;
                if (i && a && !s) n.push(e);
                else {
                  var f = [l, u];
                  (s && (f = f.concat(s)),
                    r.push({
                      file: e,
                      errors: f.filter(function (e) {
                        return e;
                      }),
                    }));
                }
              }),
                ((!g && n.length > 1) || (g && m >= 1 && n.length > m)) &&
                  (n.forEach(function (e) {
                    r.push({ file: e, errors: [iO] });
                  }),
                  n.splice(0)),
                D({ acceptedFiles: n, fileRejections: r, type: "setFiles" }),
                w && w(n, r, t),
                r.length > 0 && x && x(r, t),
                n.length > 0 && E && E(n, t));
            },
            [D, g, c, h, p, m, w, E, x, $],
          ),
          K = (0, a.useCallback)(
            function (e) {
              (e.preventDefault(),
                e.persist(),
                el(e),
                (W.current = []),
                iN(e) &&
                  Promise.resolve(d(e)).then(function (t) {
                    (!iM(e) || O) && Y(t, e);
                  }),
                D({ type: "reset" }));
            },
            [d, Y, O],
          ),
          X = (0, a.useCallback)(
            function () {
              if (H.current) {
                (D({ type: "openDialog" }), j());
                var e,
                  t = {
                    multiple: g,
                    types: [
                      {
                        description: "everything",
                        accept: Array.isArray(
                          (e = "string" == typeof (e = c) ? e.split(",") : e),
                        )
                          ? e
                              .filter(function (e) {
                                return (
                                  "audio/*" === e ||
                                  "video/*" === e ||
                                  "image/*" === e ||
                                  "text/*" === e ||
                                  /\w+\/[-+.\w]+/g.test(e)
                                );
                              })
                              .reduce(function (e, t) {
                                return iS(iS({}, e), {}, ik({}, t, []));
                              }, {})
                          : {},
                      },
                    ],
                  };
                window
                  .showOpenFilePicker(t)
                  .then(function (e) {
                    return d(e);
                  })
                  .then(function (e) {
                    (Y(e, null), D({ type: "closeDialog" }));
                  })
                  .catch(function (e) {
                    e instanceof DOMException &&
                    ("AbortError" === e.name || e.code === e.ABORT_ERR)
                      ? (z(e), D({ type: "closeDialog" }))
                      : e instanceof DOMException &&
                        ("SecurityError" === e.name ||
                          e.code === e.SECURITY_ERR) &&
                        ((H.current = !1),
                        N.current &&
                          ((N.current.value = null), N.current.click()));
                  });
                return;
              }
              N.current &&
                (D({ type: "openDialog" }),
                j(),
                (N.current.value = null),
                N.current.click());
            },
            [D, j, z, C, Y, c, g],
          ),
          Z = (0, a.useCallback)(
            function (e) {
              M.current &&
                M.current.isEqualNode(e.target) &&
                (" " === e.key ||
                  "Enter" === e.key ||
                  32 === e.keyCode ||
                  13 === e.keyCode) &&
                (e.preventDefault(), X());
            },
            [M, X],
          ),
          J = (0, a.useCallback)(function () {
            D({ type: "focus" });
          }, []),
          ee = (0, a.useCallback)(function () {
            D({ type: "blur" });
          }, []),
          et = (0, a.useCallback)(
            function () {
              R ||
                ((function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : window.navigator.userAgent;
                  return (
                    -1 !== e.indexOf("MSIE") ||
                    -1 !== e.indexOf("Trident/") ||
                    -1 !== e.indexOf("Edge/")
                  );
                })()
                  ? setTimeout(X, 0)
                  : X());
            },
            [R, X],
          ),
          en = function (e) {
            return f ? null : e;
          },
          er = function (e) {
            return T ? null : en(e);
          },
          ei = function (e) {
            return P ? null : en(e);
          },
          el = function (e) {
            O && e.stopPropagation();
          },
          eo = (0, a.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.refKey,
                  n = e.role,
                  r = e.onKeyDown,
                  i = e.onFocus,
                  l = e.onBlur,
                  o = e.onClick,
                  a = e.onDragEnter,
                  u = e.onDragOver,
                  s = e.onDragLeave,
                  c = e.onDrop,
                  d = iq(e, iF);
                return iQ(
                  iQ(
                    iG(
                      {
                        onKeyDown: er(iL(r, Z)),
                        onFocus: er(iL(i, J)),
                        onBlur: er(iL(l, ee)),
                        onClick: en(iL(o, et)),
                        onDragEnter: ei(iL(a, Q)),
                        onDragOver: ei(iL(u, G)),
                        onDragLeave: ei(iL(s, q)),
                        onDrop: ei(iL(c, K)),
                        role: "string" == typeof n && "" !== n ? n : "button",
                      },
                      void 0 === t ? "ref" : t,
                      M,
                    ),
                    f || T ? {} : { tabIndex: 0 },
                  ),
                  d,
                );
              };
            },
            [M, Z, J, ee, et, Q, G, q, K, T, P, f],
          ),
          ea = (0, a.useCallback)(function (e) {
            e.stopPropagation();
          }, []),
          eu = (0, a.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.refKey,
                  n = e.onChange,
                  r = e.onClick,
                  i = iq(e, iB);
                return iQ(
                  iQ(
                    {},
                    iG(
                      {
                        accept: c,
                        multiple: g,
                        type: "file",
                        style: { display: "none" },
                        onChange: en(iL(n, K)),
                        onClick: en(iL(r, ea)),
                        tabIndex: -1,
                      },
                      void 0 === t ? "ref" : t,
                      N,
                    ),
                  ),
                  i,
                );
              };
            },
            [N, c, g, K, f],
          ),
          es = B.length,
          ec =
            es > 0 &&
            ((t = (e = {
              files: B,
              accept: c,
              minSize: h,
              maxSize: p,
              multiple: g,
              maxFiles: m,
            }).files),
            (n = e.accept),
            (r = e.minSize),
            (i = e.maxSize),
            (l = e.multiple),
            (o = e.maxFiles),
            (!!l || !(t.length > 1)) &&
              (!l || !(o >= 1) || !(t.length > o)) &&
              t.every(function (e) {
                var t = iC(i$(e, n), 1)[0],
                  l = iC(ij(e, r, i), 1)[0];
                return t && l;
              }));
        return iQ(
          iQ({}, L),
          {},
          {
            isDragAccept: ec,
            isDragReject: es > 0 && !ec,
            isFocused: A && !f,
            getRootProps: eo,
            getInputProps: eu,
            rootRef: M,
            inputRef: N,
            open: en(X),
          },
        );
      }
      function iJ(e, t) {
        switch (t.type) {
          case "focus":
            return iQ(iQ({}, e), {}, { isFocused: !0 });
          case "blur":
            return iQ(iQ({}, e), {}, { isFocused: !1 });
          case "openDialog":
            return iQ(iQ({}, iX), {}, { isFileDialogActive: !0 });
          case "closeDialog":
            return iQ(iQ({}, e), {}, { isFileDialogActive: !1 });
          case "setDraggedFiles":
            var n = t.isDragActive,
              r = t.draggedFiles;
            return iQ(iQ({}, e), {}, { draggedFiles: r, isDragActive: n });
          case "setFiles":
            return iQ(
              iQ({}, e),
              {},
              {
                acceptedFiles: t.acceptedFiles,
                fileRejections: t.fileRejections,
              },
            );
          case "reset":
            return iQ({}, iX);
          default:
            return e;
        }
      }
      function i0() {}
      var i1 = n(1171);
      (Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable);
      let i2 = (e) => (t, n, r) => {
        let i = r.subscribe;
        return (
          (r.subscribe = (e, t, n) => {
            let l = e;
            if (t) {
              let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                o = e(r.getState());
              ((l = (n) => {
                let r = e(n);
                if (!i(o, r)) {
                  let e = o;
                  t((o = r), e);
                }
              }),
                (null == n ? void 0 : n.fireImmediately) && t(o, o));
            }
            return i(l);
          }),
          e(t, n, r)
        );
      };
      (Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable);
      var i3 = n(1378),
        i4 = n.n(i3);
      let i5 = (...e) => e.filter(Boolean).join(".");
      function i6(e, t) {
        return (0, a.useMemo)(
          e,
          (function (e, t) {
            let n = (0, a.useRef)();
            return ((t ? m : v)(e, n.current) || (n.current = e), n.current);
          })(t, !0),
        );
      }
      let i8 = (e) => {
        let [t, n] = (0, a.useState)(e.getVisiblePaths());
        return (
          (0, a.useEffect)(() => {
            n(e.getVisiblePaths());
            let t = e.useStore.subscribe(e.getVisiblePaths, n, {
              equalityFn: v,
            });
            return () => t();
          }, [e]),
          t
        );
      };
      function i9(e = 3) {
        let t = (0, a.useRef)(null),
          n = (0, a.useRef)(null),
          [r, i] = (0, a.useState)(!1),
          l = (0, a.useCallback)(() => i(!0), []),
          o = (0, a.useCallback)(() => i(!1), []);
        return (
          (0, a.useLayoutEffect)(() => {
            if (r) {
              let {
                  bottom: r,
                  top: i,
                  left: l,
                } = t.current.getBoundingClientRect(),
                { height: o } = n.current.getBoundingClientRect(),
                a = r + o > window.innerHeight - 40 ? "up" : "down";
              ((n.current.style.position = "fixed"),
                (n.current.style.zIndex = "10000"),
                (n.current.style.left = l + "px"),
                "down" === a
                  ? (n.current.style.top = r + e + "px")
                  : (n.current.style.bottom =
                      window.innerHeight - i + e + "px"));
            }
          }, [e, r]),
          { popinRef: t, wrapperRef: n, shown: r, show: l, hide: o }
        );
      }
      !(function (e) {
        e.forEach(function (e) {
          0 > rM.indexOf(e) && (e(rj, r_), rM.push(e));
        });
      })([
        function (e, t) {
          var n = {
              white: "#ffffff",
              bisque: "#ffe4c4",
              blue: "#0000ff",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              azure: "#f0ffff",
              whitesmoke: "#f5f5f5",
              papayawhip: "#ffefd5",
              plum: "#dda0dd",
              blanchedalmond: "#ffebcd",
              black: "#000000",
              gold: "#ffd700",
              goldenrod: "#daa520",
              gainsboro: "#dcdcdc",
              cornsilk: "#fff8dc",
              cornflowerblue: "#6495ed",
              burlywood: "#deb887",
              aquamarine: "#7fffd4",
              beige: "#f5f5dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkkhaki: "#bdb76b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkgrey: "#a9a9a9",
              peachpuff: "#ffdab9",
              darkmagenta: "#8b008b",
              darkred: "#8b0000",
              darkorchid: "#9932cc",
              darkorange: "#ff8c00",
              darkslateblue: "#483d8b",
              gray: "#808080",
              darkslategray: "#2f4f4f",
              darkslategrey: "#2f4f4f",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              wheat: "#f5deb3",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              ghostwhite: "#f8f8ff",
              darkviolet: "#9400d3",
              magenta: "#ff00ff",
              green: "#008000",
              dodgerblue: "#1e90ff",
              grey: "#808080",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              blueviolet: "#8a2be2",
              forestgreen: "#228b22",
              lawngreen: "#7cfc00",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              fuchsia: "#ff00ff",
              brown: "#a52a2a",
              maroon: "#800000",
              mediumblue: "#0000cd",
              lightcoral: "#f08080",
              darkturquoise: "#00ced1",
              lightcyan: "#e0ffff",
              ivory: "#fffff0",
              lightyellow: "#ffffe0",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              linen: "#faf0e6",
              mediumaquamarine: "#66cdaa",
              lemonchiffon: "#fffacd",
              lime: "#00ff00",
              khaki: "#f0e68c",
              mediumseagreen: "#3cb371",
              limegreen: "#32cd32",
              mediumspringgreen: "#00fa9a",
              lightskyblue: "#87cefa",
              lightblue: "#add8e6",
              midnightblue: "#191970",
              lightpink: "#ffb6c1",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              mintcream: "#f5fffa",
              lightslategray: "#778899",
              lightslategrey: "#778899",
              navajowhite: "#ffdead",
              navy: "#000080",
              mediumvioletred: "#c71585",
              powderblue: "#b0e0e6",
              palegoldenrod: "#eee8aa",
              oldlace: "#fdf5e6",
              paleturquoise: "#afeeee",
              mediumturquoise: "#48d1cc",
              mediumorchid: "#ba55d3",
              rebeccapurple: "#663399",
              lightsteelblue: "#b0c4de",
              mediumslateblue: "#7b68ee",
              thistle: "#d8bfd8",
              tan: "#d2b48c",
              orchid: "#da70d6",
              mediumpurple: "#9370db",
              purple: "#800080",
              pink: "#ffc0cb",
              skyblue: "#87ceeb",
              springgreen: "#00ff7f",
              palegreen: "#98fb98",
              red: "#ff0000",
              yellow: "#ffff00",
              slateblue: "#6a5acd",
              lavenderblush: "#fff0f5",
              peru: "#cd853f",
              palevioletred: "#db7093",
              violet: "#ee82ee",
              teal: "#008080",
              slategray: "#708090",
              slategrey: "#708090",
              aliceblue: "#f0f8ff",
              darkseagreen: "#8fbc8f",
              darkolivegreen: "#556b2f",
              greenyellow: "#adff2f",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              tomato: "#ff6347",
              silver: "#c0c0c0",
              sienna: "#a0522d",
              lavender: "#e6e6fa",
              lightgreen: "#90ee90",
              orange: "#ffa500",
              orangered: "#ff4500",
              steelblue: "#4682b4",
              royalblue: "#4169e1",
              turquoise: "#40e0d0",
              yellowgreen: "#9acd32",
              salmon: "#fa8072",
              saddlebrown: "#8b4513",
              sandybrown: "#f4a460",
              rosybrown: "#bc8f8f",
              darksalmon: "#e9967a",
              lightgoldenrodyellow: "#fafad2",
              snow: "#fffafa",
              lightgrey: "#d3d3d3",
              lightgray: "#d3d3d3",
              dimgray: "#696969",
              dimgrey: "#696969",
              olivedrab: "#6b8e23",
              olive: "#808000",
            },
            r = {};
          for (var i in n) r[n[i]] = i;
          var l = {};
          ((e.prototype.toName = function (t) {
            if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
              return "transparent";
            var i,
              o = r[this.toHex()];
            if (o) return o;
            if (null == t ? void 0 : t.closest) {
              var a = this.toRgb(),
                u = 1 / 0,
                s = "black";
              if (!l.length) for (var c in n) l[c] = new e(n[c]).toRgb();
              for (var f in n) {
                var d =
                  ((i = l[f]),
                  Math.pow(a.r - i.r, 2) +
                    Math.pow(a.g - i.g, 2) +
                    Math.pow(a.b - i.b, 2));
                d < u && ((u = d), (s = f));
              }
              return s;
            }
          }),
            t.string.push([
              function (t) {
                var r = t.toLowerCase(),
                  i = "transparent" === r ? "#0000" : n[r];
                return i ? new e(i).toRgb() : null;
              },
              "name",
            ]));
        },
      ]);
      let i7 = { rgb: "toRgb", hsl: "toHsl", hsv: "toHsv", hex: "toHex" };
      function le(e, { format: t, hasAlpha: n, isString: r }) {
        let i = e[i7[t] + (r && "hex" !== t ? "String" : "")]();
        return "object" != typeof i || n
          ? i
          : (function (e, t) {
              let n = th({}, e);
              return (t.forEach((t) => t in e && delete n[t]), n);
            })(i, ["a"]);
      }
      C.extend({ color: () => (e) => rz(e).isValid() });
      let lt = (e, t) => {
        let n = rz(e);
        if (!n.isValid()) throw Error("Invalid color");
        return le(n, t);
      };
      var ln = Object.freeze({
        __proto__: null,
        schema: (e) => C().color().test(e),
        sanitize: lt,
        format: (e, t) =>
          le(rz(e), th(th({}, t), {}, { isString: !0, format: "hex" })),
        normalize: ({ value: e }) => {
          let t = rT(e)[1],
            n =
              "object" == typeof e
                ? "a" in e
                : ("hex" === t && 8 === e.length) ||
                  /^(rgba)|(hsla)|(hsva)/.test(e),
            r = {
              format: "name" === t ? "hex" : t,
              hasAlpha: n,
              isString: "string" == typeof e,
            };
          return { value: lt(e, r), settings: r };
        },
      });
      let lr = t0("div", {
          position: "relative",
          boxSizing: "border-box",
          borderRadius: "$sm",
          overflow: "hidden",
          cursor: "pointer",
          height: "$rowHeight",
          width: "$rowHeight",
          backgroundColor: "#fff",
          backgroundImage:
            'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
          $inputStyle: "",
          $hover: "",
          zIndex: 1,
          variants: { active: { true: { $inputStyle: "$accent1" } } },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "currentColor",
            zIndex: 1,
          },
        }),
        li = t0("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "$sizes$rowHeight auto",
          columnGap: "$colGap",
          alignItems: "center",
        }),
        ll = t0("div", {
          width: "$colorPickerWidth",
          height: "$colorPickerHeight",
          ".react-colorful": {
            width: "100%",
            height: "100%",
            boxShadow: "$level2",
            cursor: "crosshair",
          },
          ".react-colorful__saturation": { borderRadius: "$sm $sm 0 0" },
          ".react-colorful__alpha, .react-colorful__hue": { height: 10 },
          ".react-colorful__last-control": { borderRadius: "0 0 $sm $sm" },
          ".react-colorful__pointer": { height: 12, width: 12 },
        });
      function lo(e, t) {
        return "rgb" !== t ? rz(e).toRgb() : e;
      }
      function la({ value: e, displayValue: t, settings: n, onUpdate: r }) {
        let { emitOnEditStart: i, emitOnEditEnd: l } = tQ(),
          { format: o, hasAlpha: u } = n,
          { popinRef: s, wrapperRef: c, shown: f, show: d, hide: p } = i9(),
          h = (0, a.useRef)(0),
          [g, m] = (0, a.useState)(() => lo(e, o)),
          v = () => {
            (m(lo(e, o)), d(), i());
          },
          b = () => {
            (p(), l(), window.clearTimeout(h.current));
          },
          y = () => {
            h.current = window.setTimeout(b, 500);
          };
        return (
          (0, a.useEffect)(() => () => window.clearTimeout(h.current), []),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(lr, {
              ref: s,
              active: f,
              onClick: () => v(),
              style: { color: t },
            }),
            f &&
              a.createElement(
                nb,
                null,
                a.createElement(ng, { onPointerUp: b }),
                a.createElement(
                  ll,
                  {
                    ref: c,
                    onMouseEnter: () => window.clearTimeout(h.current),
                    onMouseLeave: (e) => 0 === e.buttons && y(),
                  },
                  a.createElement(u ? ii : io, { color: g, onChange: r }),
                ),
              ),
          )
        );
      }
      var lu = th(
          {
            component: function () {
              let {
                value: e,
                displayValue: t,
                label: n,
                onChange: r,
                onUpdate: i,
                settings: l,
              } = tQ();
              return a.createElement(
                nR,
                { input: !0 },
                a.createElement(nx, null, n),
                a.createElement(
                  li,
                  null,
                  a.createElement(la, {
                    value: e,
                    displayValue: t,
                    onChange: r,
                    onUpdate: i,
                    settings: l,
                  }),
                  a.createElement(nr, { value: t, onChange: r, onUpdate: i }),
                ),
              );
            },
          },
          ln,
        ),
        ls = th(
          {
            component: function () {
              let {
                label: e,
                displayValue: t,
                onUpdate: n,
                settings: r,
              } = tQ();
              return a.createElement(
                nR,
                { input: !0 },
                a.createElement(nx, null, e),
                a.createElement(n9, { value: t, settings: r, onUpdate: n }),
              );
            },
          },
          ro(["x", "y", "z"]),
        );
      let lc = t0("div", {
          $flexCenter: "",
          position: "relative",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          cursor: "pointer",
          height: "$rowHeight",
          width: "$rowHeight",
          touchAction: "none",
          $draggable: "",
          $hover: "",
          "&:active": { cursor: "none" },
          "&::after": {
            content: '""',
            backgroundColor: "$accent2",
            height: 4,
            width: 4,
            borderRadius: 2,
          },
        }),
        lf = t0("div", {
          $flexCenter: "",
          width: "$joystickWidth",
          height: "$joystickHeight",
          borderRadius: "$sm",
          boxShadow: "$level2",
          position: "fixed",
          zIndex: 1e4,
          overflow: "hidden",
          $draggable: "",
          transform: "translate(-50%, -50%)",
          variants: {
            isOutOfBounds: {
              true: { backgroundColor: "$elevation1" },
              false: { backgroundColor: "$elevation3" },
            },
          },
          "> div": {
            position: "absolute",
            $flexCenter: "",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "$highlight1",
            backgroundColor: "$elevation3",
            width: "80%",
            height: "80%",
            "&::after,&::before": {
              content: '""',
              position: "absolute",
              zindex: 10,
              backgroundColor: "$highlight1",
            },
            "&::before": { width: "100%", height: 1 },
            "&::after": { height: "100%", width: 1 },
          },
          "> span": {
            position: "relative",
            zindex: 100,
            width: 10,
            height: 10,
            backgroundColor: "$accent2",
            borderRadius: "50%",
          },
        });
      function ld({ value: e, settings: t, onUpdate: n }) {
        let r = (0, a.useRef)(),
          i = (0, a.useRef)(0),
          l = (0, a.useRef)(0),
          o = (0, a.useRef)(1),
          [u, s] = (0, a.useState)(!1),
          [c, f] = (0, a.useState)(!1),
          [d, p] = nO(),
          h = (0, a.useRef)(null),
          g = (0, a.useRef)(null);
        (0, a.useLayoutEffect)(() => {
          if (u) {
            let {
              top: e,
              left: t,
              width: n,
              height: r,
            } = h.current.getBoundingClientRect();
            ((g.current.style.left = t + n / 2 + "px"),
              (g.current.style.top = e + r / 2 + "px"));
          }
        }, [u]);
        let {
            keys: [m, v],
            joystick: b,
          } = t,
          y = "invertY" === b ? 1 : -1,
          {
            [m]: { step: w },
            [v]: { step: E },
          } = t,
          x = t6("sizes", "joystickWidth"),
          S = t6("sizes", "joystickHeight"),
          k = (0.8 * parseFloat(x)) / 2,
          C = (0.8 * parseFloat(S)) / 2,
          _ = (0, a.useCallback)(() => {
            r.current ||
              (f(!0),
              i.current && p({ x: i.current * k }),
              l.current && p({ y: -(l.current * C) }),
              (r.current = window.setInterval(() => {
                n((e) => {
                  let t = w * i.current * o.current,
                    n = y * E * l.current * o.current;
                  return Array.isArray(e)
                    ? { [m]: e[0] + t, [v]: e[1] + n }
                    : { [m]: e[m] + t, [v]: e[v] + n };
                });
              }, 16)));
          }, [k, C, n, p, w, E, m, v, y]),
          R = (0, a.useCallback)(() => {
            (window.clearTimeout(r.current), (r.current = void 0), f(!1));
          }, []);
        (0, a.useEffect)(() => {
          function e(e) {
            o.current = tL(e);
          }
          return (
            window.addEventListener("keydown", e),
            window.addEventListener("keyup", e),
            () => {
              (window.clearTimeout(r.current),
                window.removeEventListener("keydown", e),
                window.removeEventListener("keyup", e));
            }
          );
        }, []);
        let T = nP(
          ({ first: t, active: r, delta: [a, u], movement: [c, f] }) => {
            t && s(!0);
            let d = tg(c, -k, k),
              h = tg(f, -C, C);
            ((i.current = Math.abs(c) > Math.abs(d) ? Math.sign(c - d) : 0),
              (l.current = Math.abs(f) > Math.abs(h) ? Math.sign(h - f) : 0));
            let g = e[m],
              b = e[v];
            r
              ? (i.current || ((g += a * w * o.current), p({ x: d })),
                l.current || ((b -= y * u * E * o.current), p({ y: h })),
                i.current || l.current ? _() : R(),
                n({ [m]: g, [v]: b }))
              : (s(!1),
                (i.current = 0),
                (l.current = 0),
                p({ x: 0, y: 0 }),
                R());
          },
        );
        return a.createElement(
          lc,
          tW({ ref: h }, T()),
          u &&
            a.createElement(
              nb,
              null,
              a.createElement(
                lf,
                { ref: g, isOutOfBounds: c },
                a.createElement("div", null),
                a.createElement("span", { ref: d }),
              ),
            ),
        );
      }
      let lp = t0("div", {
          display: "grid",
          columnGap: "$colGap",
          variants: {
            withJoystick: {
              true: { gridTemplateColumns: "$sizes$rowHeight auto" },
              false: { gridTemplateColumns: "auto" },
            },
          },
        }),
        lh = ["joystick"],
        lg = ro(["x", "y"]);
      var lm = th(
          th(
            {
              component: function () {
                let {
                  label: e,
                  displayValue: t,
                  onUpdate: n,
                  settings: r,
                } = tQ();
                return a.createElement(
                  nR,
                  { input: !0 },
                  a.createElement(nx, null, e),
                  a.createElement(
                    lp,
                    { withJoystick: !!r.joystick },
                    r.joystick &&
                      a.createElement(ld, {
                        value: t,
                        settings: r,
                        onUpdate: n,
                      }),
                    a.createElement(n9, { value: t, settings: r, onUpdate: n }),
                  ),
                );
              },
            },
            lg,
          ),
          {},
          {
            normalize: (e) => {
              let { joystick: t = !0 } = e,
                n = e7(e, lh),
                { value: r, settings: i } = lg.normalize(n);
              return { value: r, settings: th(th({}, i), {}, { joystick: t }) };
            },
          },
        ),
        lv = Object.freeze({
          __proto__: null,
          sanitize: (e) => {
            if (void 0 !== e) {
              if (e instanceof File)
                try {
                  return URL.createObjectURL(e);
                } catch (e) {
                  return;
                }
              if ("string" == typeof e && 0 === e.indexOf("blob:")) return e;
              throw Error(`Invalid image format [undefined | blob |\xa0File].`);
            }
          },
          schema: (e, t) => "object" == typeof t && "image" in t,
          normalize: ({ image: e }) => ({ value: e }),
        });
      let lb = t0("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "$sizes$rowHeight auto 20px",
          columnGap: "$colGap",
          alignItems: "center",
        }),
        ly = t0("div", {
          $flexCenter: "",
          overflow: "hidden",
          height: "$rowHeight",
          background: "$elevation3",
          textAlign: "center",
          color: "inherit",
          borderRadius: "$sm",
          outline: "none",
          userSelect: "none",
          cursor: "pointer",
          $inputStyle: "",
          $hover: "",
          $focusWithin: "",
          $active: "$accent1 $elevation1",
          variants: {
            isDragAccept: {
              true: { $inputStyle: "$accent1", backgroundColor: "$elevation1" },
            },
          },
        }),
        lw = t0("div", {
          boxSizing: "border-box",
          borderRadius: "$sm",
          height: "$rowHeight",
          width: "$rowHeight",
          $inputStyle: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          variants: {
            hasImage: { true: { cursor: "pointer", $hover: "", $active: "" } },
          },
        }),
        lE = t0("div", {
          $flexCenter: "",
          width: "$imagePreviewWidth",
          height: "$imagePreviewHeight",
          borderRadius: "$sm",
          boxShadow: "$level2",
          pointerEvents: "none",
          $inputStyle: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
        lx = t0("div", {
          fontSize: "0.8em",
          height: "100%",
          padding: "$rowGap $md",
        }),
        lS = t0("div", {
          $flexCenter: "",
          top: "0",
          right: "0",
          marginRight: "$sm",
          height: "100%",
          cursor: "pointer",
          variants: {
            disabled: { true: { color: "$elevation3", cursor: "default" } },
          },
          "&::after,&::before": {
            content: '""',
            position: "absolute",
            height: 2,
            width: 10,
            borderRadius: 1,
            backgroundColor: "currentColor",
          },
          "&::after": { transform: "rotate(45deg)" },
          "&::before": { transform: "rotate(-45deg)" },
        });
      var lk = th(
        {
          component: function () {
            let { label: e, value: t, onUpdate: n, disabled: r } = tQ(),
              { popinRef: i, wrapperRef: l, shown: o, show: u, hide: s } = i9(),
              c = (0, a.useCallback)(
                (e) => {
                  e.length && n(e[0]);
                },
                [n],
              ),
              f = (0, a.useCallback)(
                (e) => {
                  (e.stopPropagation(), n(void 0));
                },
                [n],
              ),
              {
                getRootProps: d,
                getInputProps: p,
                isDragAccept: h,
              } = iZ({
                maxFiles: 1,
                accept: "image/*",
                onDrop: c,
                disabled: r,
              });
            return a.createElement(
              nR,
              { input: !0 },
              a.createElement(nx, null, e),
              a.createElement(
                lb,
                null,
                a.createElement(lw, {
                  ref: i,
                  hasImage: !!t,
                  onPointerDown: () => !!t && u(),
                  onPointerUp: s,
                  style: { backgroundImage: t ? `url(${t})` : "none" },
                }),
                o &&
                  !!t &&
                  a.createElement(
                    nb,
                    null,
                    a.createElement(ng, {
                      onPointerUp: s,
                      style: { cursor: "pointer" },
                    }),
                    a.createElement(lE, {
                      ref: l,
                      style: { backgroundImage: `url(${t})` },
                    }),
                  ),
                a.createElement(
                  ly,
                  d({ isDragAccept: h }),
                  a.createElement("input", p()),
                  a.createElement(lx, null, h ? "drop image" : "click or drop"),
                ),
                a.createElement(lS, { onClick: f, disabled: !t }),
              ),
            );
          },
        },
        lv,
      );
      let lC = C().number(),
        l_ = (e) => ({ min: e[0], max: e[1] }),
        lR = (e, { bounds: [t, n] }, r) => {
          let i = Array.isArray(e) ? l_(e) : e,
            { min: l, max: o } = th(th({}, { min: r[0], max: r[1] }), i);
          return [
            tg(Number(l), t, Math.max(t, o)),
            tg(Number(o), Math.min(n, l), n),
          ];
        };
      var lT = Object.freeze({
        __proto__: null,
        schema: (e, t) =>
          C().array().length(2).every.number().test(e) &&
          C().schema({ min: lC, max: lC }).test(t),
        format: l_,
        sanitize: lR,
        normalize: ({ value: e, min: t, max: n }) => {
          let r = { min: t, max: n },
            i = th(
              th({}, n7(l_(e), { min: r, max: r })),
              {},
              { bounds: [t, n] },
            );
          return { value: lR(l_(e), i, e), settings: i };
        },
      });
      let lP = ["value", "bounds", "onDrag"],
        lO = ["bounds"],
        l$ = t0("div", {
          display: "grid",
          columnGap: "$colGap",
          gridTemplateColumns:
            "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)",
        });
      function lj(e) {
        let {
            value: t,
            bounds: [n, r],
            onDrag: i,
          } = e,
          l = e7(e, lP),
          o = (0, a.useRef)(null),
          u = (0, a.useRef)(null),
          s = (0, a.useRef)(null),
          c = (0, a.useRef)(0),
          f = t6("sizes", "scrubberWidth"),
          d = nP(
            ({ event: e, first: a, xy: [d], movement: [p], memo: h = {} }) => {
              if (a) {
                let { width: i, left: l } = o.current.getBoundingClientRect();
                c.current = i - parseFloat(f);
                let a =
                  (null == e ? void 0 : e.target) === u.current ||
                  (null == e ? void 0 : e.target) === s.current;
                h.pos = tw((d - l) / i, n, r);
                let p = Math.abs(h.pos - t.min) - Math.abs(h.pos - t.max);
                ((h.key = p < 0 || (0 === p && h.pos <= t.min) ? "min" : "max"),
                  a && (h.pos = t[h.key]));
              }
              let g = h.pos + tw(p / c.current, 0, r - n);
              return (i({ [h.key]: nB(g, l[h.key]) }), h);
            },
          ),
          p = `calc(${ty(t.min, n, r)} * (100% - ${f} - 8px) + 4px)`,
          h = `calc(${1 - ty(t.max, n, r)} * (100% - ${f} - 8px) + 4px)`;
        return a.createElement(
          nI,
          tW({ ref: o }, d()),
          a.createElement(
            nM,
            null,
            a.createElement(nL, { style: { left: p, right: h } }),
          ),
          a.createElement(nN, { position: "left", ref: u, style: { left: p } }),
          a.createElement(nN, {
            position: "right",
            ref: s,
            style: { right: h },
          }),
        );
      }
      var lz = th(
        {
          component: function () {
            let { label: e, displayValue: t, onUpdate: n, settings: r } = tQ(),
              i = e7(r, lO);
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                nR,
                { input: !0 },
                a.createElement(nx, null, e),
                a.createElement(
                  l$,
                  null,
                  a.createElement(lj, tW({ value: t }, r, { onDrag: n })),
                  a.createElement(n9, {
                    value: t,
                    settings: i,
                    onUpdate: n,
                    innerLabelTrim: 0,
                  }),
                ),
              ),
            );
          },
        },
        lT,
      );
      let lM = () => {
          let e = new Map();
          return {
            on: (t, n) => {
              let r = e.get(t);
              (void 0 === r && ((r = new Set()), e.set(t, r)), r.add(n));
            },
            off: (t, n) => {
              let r = e.get(t);
              void 0 !== r && (r.delete(n), 0 === r.size && e.delete(t));
            },
            emit: (t, ...n) => {
              let r = e.get(t);
              if (void 0 !== r) for (let e of r) e(...n);
            },
          };
        },
        lN = ["type", "value"],
        lI = ["onChange", "transient", "onEditStart", "onEditEnd"],
        lL = new (function () {
          let e = (0, i1.Z)(i2(() => ({ data: {} }))),
            t = lM();
          ((this.storeId = tE()), (this.useStore = e));
          let n = {},
            l = new Set();
          ((this.getVisiblePaths = () => {
            let e = this.getData(),
              t = Object.keys(e),
              r = [];
            Object.entries(n).forEach(([e, n]) => {
              n.render &&
                t.some((t) => 0 === t.indexOf(e)) &&
                !n.render(this.get) &&
                r.push(e + ".");
            });
            let i = [];
            return (
              l.forEach((t) => {
                t in e &&
                  e[t].__refCount > 0 &&
                  r.every((e) => -1 === t.indexOf(e)) &&
                  (!e[t].render || e[t].render(this.get)) &&
                  i.push(t);
              }),
              i
            );
          }),
            (this.setOrderedPaths = (e) => {
              e.forEach((e) => l.add(e));
            }),
            (this.orderPaths = (e) => (this.setOrderedPaths(e), e)),
            (this.disposePaths = (t) => {
              e.setState((e) => {
                let n = e.data;
                return (
                  t.forEach((e) => {
                    if (e in n) {
                      let t = n[e];
                      (t.__refCount--,
                        0 === t.__refCount && t.type in i && delete n[e]);
                    }
                  }),
                  { data: n }
                );
              });
            }),
            (this.dispose = () => {
              e.setState(() => ({ data: {} }));
            }),
            (this.getFolderSettings = (e) => n[e] || {}),
            (this.getData = () => e.getState().data),
            (this.addData = (t, n) => {
              e.setState((e) => {
                let i = e.data;
                return (
                  Object.entries(t).forEach(([e, t]) => {
                    let l = i[e];
                    if (l) {
                      let { type: e, value: i } = t,
                        o = e7(t, lN);
                      e !== l.type
                        ? tn(r.INPUT_TYPE_OVERRIDE, e)
                        : ((0 === l.__refCount || n) && Object.assign(l, o),
                          l.__refCount++);
                    } else i[e] = th(th({}, t), {}, { __refCount: 1 });
                  }),
                  { data: i }
                );
              });
            }),
            (this.setValueAtPath = (t, n, r) => {
              e.setState((e) => {
                let i = e.data;
                return (tz(i[t], n, t, this, r), { data: i });
              });
            }),
            (this.setSettingsAtPath = (t, n) => {
              e.setState((e) => {
                let r = e.data;
                return (
                  (r[t].settings = th(th({}, r[t].settings), n)),
                  { data: r }
                );
              });
            }),
            (this.disableInputAtPath = (t, n) => {
              e.setState((e) => {
                let r = e.data;
                return ((r[t].disabled = n), { data: r });
              });
            }),
            (this.set = (t, n) => {
              e.setState((e) => {
                let r = e.data;
                return (
                  Object.entries(t).forEach(([e, t]) => {
                    try {
                      tz(r[e], t, void 0, void 0, n);
                    } catch (e) {}
                  }),
                  { data: r }
                );
              });
            }),
            (this.getInput = (e) => {
              try {
                return this.getData()[e];
              } catch (t) {
                tn(r.PATH_DOESNT_EXIST, e);
              }
            }),
            (this.get = (e) => {
              var t;
              return null === (t = this.getInput(e)) || void 0 === t
                ? void 0
                : t.value;
            }),
            (this.emitOnEditStart = (e) => {
              t.emit(
                `onEditStart:${e}`,
                this.get(e),
                e,
                th(th({}, this.getInput(e)), {}, { get: this.get }),
              );
            }),
            (this.emitOnEditEnd = (e) => {
              t.emit(
                `onEditEnd:${e}`,
                this.get(e),
                e,
                th(th({}, this.getInput(e)), {}, { get: this.get }),
              );
            }),
            (this.subscribeToEditStart = (e, n) => {
              let r = `onEditStart:${e}`;
              return (t.on(r, n), () => t.off(r, n));
            }),
            (this.subscribeToEditEnd = (e, n) => {
              let r = `onEditEnd:${e}`;
              return (t.on(r, n), () => t.off(r, n));
            }));
          let o = (e, t, l) => {
            let a = {};
            return (
              Object.entries(e).forEach(([e, u]) => {
                if ("" === e) return tn(r.EMPTY_KEY);
                let s = i5(t, e);
                if (u.type === i.FOLDER)
                  (Object.assign(a, o(u.schema, s, l)),
                    s in n || (n[s] = u.settings));
                else if (e in l) tn(r.DUPLICATE_KEYS, e, s, l[e].path);
                else {
                  let t = (function (e, t, n, r) {
                    let l = (function e(t, n, r = {}, l) {
                        var o, a;
                        if ("object" != typeof t || Array.isArray(t))
                          return {
                            type: l,
                            input: t,
                            options: th(
                              {
                                key: n,
                                label: n,
                                optional: !1,
                                disabled: !1,
                                order: 0,
                              },
                              r,
                            ),
                          };
                        if ("__customInput" in t) {
                          let { type: r, __customInput: i } = t;
                          return e(i, n, e7(t, tO), r);
                        }
                        let {
                            render: u,
                            label: s,
                            optional: c,
                            order: f = 0,
                            disabled: d,
                            hint: p,
                            onChange: h,
                            onEditStart: g,
                            onEditEnd: m,
                            transient: v,
                          } = t,
                          b = e7(t, t$),
                          y = th(
                            {
                              render: u,
                              key: n,
                              label: null != s ? s : n,
                              hint: p,
                              transient: null != v ? v : !!h,
                              onEditStart: g,
                              onEditEnd: m,
                              disabled: d,
                              optional: c,
                              order: f,
                            },
                            r,
                          ),
                          { type: w } = b,
                          E = e7(b, tj);
                        return (w = null != l ? l : w) in i
                          ? { type: w, input: E, options: y }
                          : {
                              type: w,
                              input:
                                l && tT(E) && "value" in E
                                  ? E.value
                                  : tP(E)
                                    ? void 0
                                    : E,
                              options: th(
                                th({}, y),
                                {},
                                {
                                  onChange: h,
                                  optional:
                                    null !== (o = y.optional) &&
                                    void 0 !== o &&
                                    o,
                                  disabled:
                                    null !== (a = y.disabled) &&
                                    void 0 !== a &&
                                    a,
                                },
                              ),
                            };
                      })(e, t),
                      { type: o, input: a, options: u } = l;
                    if (o)
                      return o in i
                        ? l
                        : { type: o, input: tf(o, a, n, r), options: u };
                    let s = ts(a);
                    return s
                      ? { type: s, input: tf(s, a, n, r), options: u }
                      : !!(s = ts({ value: a })) && {
                          type: s,
                          input: tf(s, { value: a }, n, r),
                          options: u,
                        };
                  })(u, e, s, a);
                  if (t) {
                    let { type: n, options: r, input: i } = t,
                      {
                        onChange: o,
                        transient: u,
                        onEditStart: c,
                        onEditEnd: f,
                      } = r,
                      d = e7(r, lI);
                    ((a[s] = th(
                      th(th({ type: n }, d), i),
                      {},
                      { fromPanel: !0 },
                    )),
                      (l[e] = {
                        path: s,
                        onChange: o,
                        transient: u,
                        onEditStart: c,
                        onEditEnd: f,
                      }));
                  } else tn(r.UNKNOWN_INPUT, s, u);
                }
              }),
              a
            );
          };
          this.getDataFromSchema = (e) => {
            let t = {};
            return [o(e, "", t), t];
          };
        })(),
        lD = { collapsed: !1 };
      function lA(e, t) {
        return { type: i.FOLDER, schema: e, settings: th(th({}, lD), t) };
      }
      let lF = { disabled: !1 };
      function lB(e, t) {
        return { type: i.BUTTON, onClick: e, settings: th(th({}, lF), t) };
      }
      let lH = (e) => "__levaInput" in e,
        lU = (e, t) => {
          let n = {},
            r = t ? t.toLowerCase() : null;
          return (
            e.forEach((e) => {
              let [t, i] = (function (e) {
                let t = e.split(".");
                return [t.pop(), t.join(".") || void 0];
              })(e);
              (!r || t.toLowerCase().indexOf(r) > -1) &&
                i4()(n, i, { [t]: { __levaInput: !0, path: e } });
            }),
            n
          );
        },
        lW = [
          "type",
          "label",
          "path",
          "valueKey",
          "value",
          "settings",
          "setValue",
          "disabled",
        ];
      function lV(e) {
        let {
            type: t,
            label: n,
            path: i,
            valueKey: l,
            value: o,
            settings: u,
            setValue: s,
            disabled: c,
          } = e,
          f = e7(e, lW),
          {
            displayValue: d,
            onChange: p,
            onUpdate: h,
          } = nT({ type: t, value: o, settings: u, setValue: s }),
          g = tu[t].component;
        return g
          ? a.createElement(
              tV.Provider,
              {
                value: th(
                  {
                    key: l,
                    path: i,
                    id: "" + i,
                    label: n,
                    displayValue: d,
                    value: o,
                    onChange: p,
                    onUpdate: h,
                    settings: u,
                    setValue: s,
                    disabled: c,
                  },
                  f,
                ),
              },
              a.createElement(nh, { disabled: c }, a.createElement(g, null)),
            )
          : (tn(r.NO_COMPONENT_FOR_TYPE, t, i), null);
      }
      let lQ = t0("button", {
          display: "block",
          $reset: "",
          fontWeight: "$button",
          height: "$rowHeight",
          borderStyle: "none",
          borderRadius: "$sm",
          backgroundColor: "$elevation1",
          color: "$highlight1",
          "&:not(:disabled)": {
            color: "$highlight3",
            backgroundColor: "$accent2",
            cursor: "pointer",
            $hover: "$accent3",
            $active: "$accent3 $accent1",
            $focus: "",
          },
        }),
        lG = t0("div", {
          $flex: "",
          justifyContent: "flex-end",
          gap: "$colGap",
        }),
        lq = t0("button", {
          $reset: "",
          cursor: "pointer",
          borderRadius: "$xs",
          "&:hover": { backgroundColor: "$elevation3" },
        }),
        lY = ({ label: e, opts: t }) => {
          let n = "string" == typeof e && "" === e.trim() ? null : e,
            r = t;
          return (
            "object" == typeof t.opts &&
              (void 0 !== r.label && (n = t.label), (r = t.opts)),
            { label: n, opts: r }
          );
        },
        lK = t0("canvas", {
          height: "$monitorHeight",
          width: "100%",
          display: "block",
          borderRadius: "$sm",
        }),
        lX = (0, a.forwardRef)(function ({ initialValue: e }, t) {
          let n = t6("colors", "highlight3"),
            r = t6("colors", "elevation2"),
            i = t6("colors", "highlight1"),
            [l, o] = (0, a.useMemo)(
              () => [
                rz(i).alpha(0.4).toRgbString(),
                rz(i).alpha(0.1).toRgbString(),
              ],
              [i],
            ),
            u = (0, a.useRef)([e]),
            s = (0, a.useRef)(e),
            c = (0, a.useRef)(e),
            f = (0, a.useRef)(),
            d = (0, a.useCallback)(
              (e, t) => {
                if (!e) return;
                let { width: i, height: a } = e,
                  f = new Path2D(),
                  d = i / 100,
                  p = 0.05 * a;
                for (let e = 0; e < u.current.length; e++) {
                  let t = ty(u.current[e], s.current, c.current),
                    n = d * e,
                    r = a - t * (a - 2 * p) - p;
                  f.lineTo(n, r);
                }
                t.clearRect(0, 0, i, a);
                let h = new Path2D(f);
                (h.lineTo(d * (u.current.length + 1), a),
                  h.lineTo(0, a),
                  h.lineTo(0, 0));
                let g = t.createLinearGradient(0, 0, 0, a);
                (g.addColorStop(0, l),
                  g.addColorStop(1, o),
                  (t.fillStyle = g),
                  t.fill(h),
                  (t.strokeStyle = r),
                  (t.lineJoin = "round"),
                  (t.lineWidth = 14),
                  t.stroke(f),
                  (t.strokeStyle = n),
                  (t.lineWidth = 2),
                  t.stroke(f));
              },
              [n, r, l, o],
            ),
            [p, h] = (function (e) {
              let t = (0, a.useRef)(null),
                n = (0, a.useRef)(null),
                r = (0, a.useRef)(!1);
              return (
                (0, a.useEffect)(() => {
                  let i = tI(() => {
                    ((t.current.width =
                      t.current.offsetWidth * window.devicePixelRatio),
                      (t.current.height =
                        t.current.offsetHeight * window.devicePixelRatio),
                      e(t.current, n.current));
                  }, 250);
                  return (
                    window.addEventListener("resize", i),
                    r.current || (i(), (r.current = !0)),
                    () => window.removeEventListener("resize", i)
                  );
                }, [e]),
                (0, a.useEffect)(() => {
                  n.current = t.current.getContext("2d");
                }, []),
                [t, n]
              );
            })(d);
          return (
            (0, a.useImperativeHandle)(
              t,
              () => ({
                frame: (e) => {
                  var t;
                  ((void 0 === s.current || e < s.current) && (s.current = e),
                    (void 0 === c.current || e > c.current) && (c.current = e),
                    (t = u.current).push(e),
                    t.length > 100 && t.shift(),
                    (f.current = requestAnimationFrame(() =>
                      d(p.current, h.current),
                    )));
                },
              }),
              [p, h, d],
            ),
            (0, a.useEffect)(() => () => cancelAnimationFrame(f.current), []),
            a.createElement(lK, { ref: p })
          );
        }),
        lZ = (e) => (Number.isFinite(e) ? e.toPrecision(2) : e.toString()),
        lJ = (0, a.forwardRef)(function ({ initialValue: e }, t) {
          let [n, r] = (0, a.useState)(lZ(e));
          return (
            (0, a.useImperativeHandle)(
              t,
              () => ({ frame: (e) => r(lZ(e)) }),
              [],
            ),
            a.createElement("div", null, n)
          );
        });
      function l0(e) {
        return "function" == typeof e ? e() : e.current;
      }
      let l1 = ["type", "label", "key"],
        l2 = {
          [i.BUTTON]: function ({ onClick: e, settings: t, label: n }) {
            let r = tK();
            return a.createElement(
              nR,
              null,
              a.createElement(
                lQ,
                { disabled: t.disabled, onClick: () => e(r.get) },
                n,
              ),
            );
          },
          [i.BUTTON_GROUP]: function (e) {
            let { label: t, opts: n } = lY(e),
              r = tK();
            return a.createElement(
              nR,
              { input: !!t },
              t && a.createElement(nx, null, t),
              a.createElement(
                lG,
                null,
                Object.entries(n).map(([e, t]) =>
                  a.createElement(lq, { key: e, onClick: () => t(r.get) }, e),
                ),
              ),
            );
          },
          [i.MONITOR]: function ({ label: e, objectOrFn: t, settings: n }) {
            let r = (0, a.useRef)(),
              i = (0, a.useRef)(l0(t));
            return (
              (0, a.useEffect)(() => {
                let e = window.setInterval(() => {
                  var e;
                  document.hidden ||
                    null === (e = r.current) ||
                    void 0 === e ||
                    e.frame(l0(t));
                }, n.interval);
                return () => window.clearInterval(e);
              }, [t, n.interval]),
              a.createElement(
                nR,
                { input: !0 },
                a.createElement(nx, { align: "top" }, e),
                n.graph
                  ? a.createElement(lX, { ref: r, initialValue: i.current })
                  : a.createElement(lJ, { ref: r, initialValue: i.current }),
              )
            );
          },
        },
        l3 = a.memo(({ path: e }) => {
          let [
            t,
            {
              set: n,
              setSettings: l,
              disable: o,
              storeId: u,
              emitOnEditStart: s,
              emitOnEditEnd: c,
            },
          ] = (function (e) {
            let t = tK(),
              [n, r] = (0, a.useState)(nj(t.getData(), e)),
              i = (0, a.useCallback)((n) => t.setValueAtPath(e, n, !0), [e, t]),
              l = (0, a.useCallback)((n) => t.setSettingsAtPath(e, n), [e, t]),
              o = (0, a.useCallback)((n) => t.disableInputAtPath(e, n), [e, t]),
              u = (0, a.useCallback)(() => t.emitOnEditStart(e), [e, t]),
              s = (0, a.useCallback)(() => t.emitOnEditEnd(e), [e, t]);
            return (
              (0, a.useEffect)(() => {
                r(nj(t.getData(), e));
                let n = t.useStore.subscribe((t) => nj(t.data, e), r, {
                  equalityFn: v,
                });
                return () => n();
              }, [t, e]),
              [
                n,
                {
                  set: i,
                  setSettings: l,
                  disable: o,
                  storeId: t.storeId,
                  emitOnEditStart: u,
                  emitOnEditEnd: s,
                },
              ]
            );
          })(e);
          if (!t) return null;
          let { type: f, label: d, key: p } = t,
            h = e7(t, l1);
          if (f in i) {
            let t = l2[f];
            return a.createElement(t, tW({ label: d, path: e }, h));
          }
          return f in tu
            ? a.createElement(
                lV,
                tW(
                  {
                    key: u + e,
                    type: f,
                    label: d,
                    storeId: u,
                    path: e,
                    valueKey: p,
                    setValue: n,
                    setSettings: l,
                    disable: o,
                    emitOnEditStart: s,
                    emitOnEditEnd: c,
                  },
                  h,
                ),
              )
            : (tr(r.UNSUPPORTED_INPUT, f, e), null);
        });
      function l4({ toggle: e, toggled: t, name: n }) {
        return a.createElement(
          na,
          { onClick: () => e() },
          a.createElement(nC, { toggled: t }),
          a.createElement("div", null, n),
        );
      }
      let l5 = ({ name: e, path: t, tree: n }) => {
          let r = tK(),
            i = i5(t, e),
            { collapsed: l, color: o } = r.getFolderSettings(i),
            [u, s] = (0, a.useState)(!l),
            c = (0, a.useRef)(null),
            f = t6("colors", "folderWidgetColor"),
            d = t6("colors", "folderTextColor");
          return (
            (0, a.useLayoutEffect)(() => {
              (c.current.style.setProperty(
                "--leva-colors-folderWidgetColor",
                o || f,
              ),
                c.current.style.setProperty(
                  "--leva-colors-folderTextColor",
                  o || d,
                ));
            }, [o, f, d]),
            a.createElement(
              nl,
              { ref: c },
              a.createElement(l4, {
                name: e,
                toggled: u,
                toggle: () => s((e) => !e),
              }),
              a.createElement(l6, { parent: i, tree: n, toggled: u }),
            )
          );
        },
        l6 = a.memo(
          ({
            isRoot: e = !1,
            fill: t = !1,
            flat: n = !1,
            parent: r,
            tree: i,
            toggled: l,
          }) => {
            let { wrapperRef: o, contentRef: u } = (function (e) {
                let t = (0, a.useRef)(null),
                  n = (0, a.useRef)(null),
                  r = (0, a.useRef)(!0);
                return (
                  (0, a.useLayoutEffect)(() => {
                    e ||
                      ((t.current.style.height = "0px"),
                      (t.current.style.overflow = "hidden"));
                  }, []),
                  (0, a.useEffect)(() => {
                    let i;
                    if (r.current) {
                      r.current = !1;
                      return;
                    }
                    let l = t.current,
                      o = () => {
                        e &&
                          (l.style.removeProperty("height"),
                          l.style.removeProperty("overflow"),
                          n.current.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          }));
                      };
                    l.addEventListener("transitionend", o, { once: !0 });
                    let { height: a } = n.current.getBoundingClientRect();
                    return (
                      (l.style.height = a + "px"),
                      e ||
                        ((l.style.overflow = "hidden"),
                        (i = window.setTimeout(
                          () => (l.style.height = "0px"),
                          50,
                        ))),
                      () => {
                        (l.removeEventListener("transitionend", o),
                          clearTimeout(i));
                      }
                    );
                  }, [e]),
                  { wrapperRef: t, contentRef: n }
                );
              })(l),
              s = tK(),
              c = ([e, t]) => {
                var n;
                return (
                  (lH(t)
                    ? null === (n = s.getInput(t.path)) || void 0 === n
                      ? void 0
                      : n.order
                    : s.getFolderSettings(i5(r, e)).order) || 0
                );
              },
              f = Object.entries(i).sort((e, t) => c(e) - c(t));
            return a.createElement(
              no,
              { ref: o, isRoot: e, fill: t, flat: n },
              a.createElement(
                nu,
                { ref: u, isRoot: e, toggled: l },
                f.map(([e, t]) =>
                  lH(t)
                    ? a.createElement(l3, {
                        key: t.path,
                        valueKey: t.valueKey,
                        path: t.path,
                      })
                    : a.createElement(l5, {
                        key: e,
                        name: e,
                        path: r,
                        tree: t,
                      }),
                ),
              ),
            );
          },
        ),
        l8 = t0("div", {
          position: "relative",
          fontFamily: "$mono",
          fontSize: "$root",
          color: "$rootText",
          backgroundColor: "$elevation1",
          variants: {
            fill: {
              false: {
                position: "fixed",
                top: "10px",
                right: "10px",
                zIndex: 1e3,
                width: "$rootWidth",
              },
              true: { position: "relative", width: "100%" },
            },
            flat: { false: { borderRadius: "$lg", boxShadow: "$level1" } },
            oneLineLabels: {
              true: {
                [`${nc}`]: {
                  gridTemplateColumns: "auto",
                  gridAutoColumns: "minmax(max-content, 1fr)",
                  gridAutoRows: "minmax($sizes$rowHeight), auto)",
                  rowGap: 0,
                  columnGap: 0,
                  marginTop: "$rowGap",
                },
              },
            },
            hideTitleBar: {
              true: { $$titleBarHeight: "0px" },
              false: { $$titleBarHeight: "$sizes$titleBarHeight" },
            },
          },
          "&,*,*:after,*:before": { boxSizing: "border-box" },
          "*::selection": { backgroundColor: "$accent2" },
        }),
        l9 = t0("i", {
          $flexCenter: "",
          width: 40,
          userSelect: "none",
          cursor: "pointer",
          "> svg": {
            fill: "$highlight1",
            transition: "transform 350ms ease, fill 250ms ease",
          },
          "&:hover > svg": { fill: "$highlight3" },
          variants: { active: { true: { "> svg": { fill: "$highlight2" } } } },
        }),
        l7 = t0("div", {
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          height: "$titleBarHeight",
          variants: { mode: { drag: { cursor: "grab" } } },
        }),
        oe = t0("div", {
          $flex: "",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          transition: "height 250ms ease",
          color: "$highlight3",
          paddingLeft: "$md",
          [`> ${l9}`]: { height: 30 },
          variants: { toggled: { true: { height: 30 }, false: { height: 0 } } },
        }),
        ot = t0("input", {
          $reset: "",
          flex: 1,
          position: "relative",
          height: 30,
          width: "100%",
          backgroundColor: "transparent",
          fontSize: "10px",
          borderRadius: "$root",
          "&:focus": {},
          "&::placeholder": { color: "$highlight2" },
        }),
        on = t0("div", {
          touchAction: "none",
          $flexCenter: "",
          flex: 1,
          "> svg": { fill: "$highlight1" },
          color: "$highlight1",
          variants: {
            drag: {
              true: {
                $draggable: "",
                "> svg": { transition: "fill 250ms ease" },
                "&:hover": { color: "$highlight3" },
                "&:hover > svg": { fill: "$highlight3" },
              },
            },
            filterEnabled: { false: { paddingRight: 40 } },
          },
        }),
        or = a.forwardRef(({ setFilter: e, toggle: t }, n) => {
          let [r, i] = (0, a.useState)(""),
            l = (0, a.useMemo)(() => tI(e, 250), [e]),
            o = () => {
              (e(""), i(""));
            };
          return (
            (0, a.useEffect)(() => {
              l(r);
            }, [r, l]),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(ot, {
                ref: n,
                value: r,
                placeholder: "[Open filter with CMD+SHIFT+L]",
                onPointerDown: (e) => e.stopPropagation(),
                onChange: (e) => {
                  let n = e.currentTarget.value;
                  (t(!0), i(n));
                },
              }),
              a.createElement(
                l9,
                {
                  onClick: () => o(),
                  style: { visibility: r ? "visible" : "hidden" },
                },
                a.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "14",
                    width: "14",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                  },
                  a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    clipRule: "evenodd",
                  }),
                ),
              ),
            )
          );
        });
      function oi({
        setFilter: e,
        onDrag: t,
        onDragStart: n,
        onDragEnd: r,
        toggle: i,
        toggled: l,
        title: o,
        drag: u,
        filterEnabled: s,
        from: c,
      }) {
        let [f, d] = (0, a.useState)(!1),
          p = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
          var e, t;
          f
            ? null === (e = p.current) || void 0 === e || e.focus()
            : null === (t = p.current) || void 0 === t || t.blur();
        }, [f]);
        let h = nP(
          ({ offset: [e, i], first: l, last: o }) => {
            (t({ x: e, y: i }), l && n({ x: e, y: i }), o && r({ x: e, y: i }));
          },
          {
            filterTaps: !0,
            from: ({ offset: [e, t] }) => [
              (null == c ? void 0 : c.x) || e,
              (null == c ? void 0 : c.y) || t,
            ],
          },
        );
        return (
          (0, a.useEffect)(() => {
            let e = (e) => {
              "L" === e.key && e.shiftKey && e.metaKey && d((e) => !e);
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, []),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              l7,
              { mode: u ? "drag" : void 0 },
              a.createElement(
                l9,
                { active: !l, onClick: () => i() },
                a.createElement(nC, { toggled: l, width: 12, height: 8 }),
              ),
              a.createElement(
                on,
                tW({}, u ? h() : {}, { drag: u, filterEnabled: s }),
                void 0 === o && u
                  ? a.createElement(
                      "svg",
                      {
                        width: "20",
                        height: "10",
                        viewBox: "0 0 28 14",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      a.createElement("circle", { cx: "2", cy: "2", r: "2" }),
                      a.createElement("circle", { cx: "14", cy: "2", r: "2" }),
                      a.createElement("circle", { cx: "26", cy: "2", r: "2" }),
                      a.createElement("circle", { cx: "2", cy: "12", r: "2" }),
                      a.createElement("circle", { cx: "14", cy: "12", r: "2" }),
                      a.createElement("circle", { cx: "26", cy: "12", r: "2" }),
                    )
                  : o,
              ),
              s &&
                a.createElement(
                  l9,
                  { active: f, onClick: () => d((e) => !e) },
                  a.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "20",
                      viewBox: "0 0 20 20",
                    },
                    a.createElement("path", {
                      d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z",
                    }),
                    a.createElement("path", {
                      fillRule: "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
                      clipRule: "evenodd",
                    }),
                  ),
                ),
            ),
            a.createElement(
              oe,
              { toggled: f },
              a.createElement(or, { ref: p, setFilter: e, toggle: i }),
            ),
          )
        );
      }
      let ol = ["store", "hidden", "theme", "collapsed"];
      function oo(e) {
        let { store: t, hidden: n = !1, theme: r, collapsed: i = !1 } = e,
          l = e7(e, ol),
          o = i6(
            () =>
              (function (e) {
                let t = tX();
                if (!e) return { theme: t, className: "" };
                Object.keys(e).forEach((n) => {
                  Object.assign(t[n], e[n]);
                });
                let n = t2(t);
                return { theme: t, className: n.className };
              })(r),
            [r],
          ),
          [u, s] = (0, a.useState)(!i),
          c = "object" == typeof i ? !i.collapsed : u,
          f = (0, a.useMemo)(
            () =>
              "object" == typeof i
                ? (e) => {
                    "function" == typeof e
                      ? i.onChange(!e(!i.collapsed))
                      : i.onChange(!e);
                  }
                : s,
            [i],
          );
        return !t || n
          ? null
          : a.createElement(
              tG.Provider,
              { value: o },
              a.createElement(
                oa,
                tW({ store: t }, l, {
                  toggled: c,
                  setToggle: f,
                  rootClass: o.className,
                }),
              ),
            );
      }
      let oa = a.memo(
          ({
            store: e,
            rootClass: t,
            fill: n = !1,
            flat: r = !1,
            neverHide: i = !1,
            oneLineLabels: l = !1,
            titleBar: o = {
              title: void 0,
              drag: !0,
              filter: !0,
              position: void 0,
              onDrag: void 0,
              onDragStart: void 0,
              onDragEnd: void 0,
            },
            hideCopyButton: u = !1,
            toggled: s,
            setToggle: c,
          }) => {
            var f, d;
            let p = i8(e),
              [h, g] = (0, a.useState)(""),
              m = (0, a.useMemo)(() => lU(p, h), [p, h]),
              [v, b] = nO(),
              y = i || p.length > 0,
              w = ("object" == typeof o && o.title) || void 0,
              E =
                "object" != typeof o ||
                null === (f = o.drag) ||
                void 0 === f ||
                f,
              x =
                "object" != typeof o ||
                null === (d = o.filter) ||
                void 0 === d ||
                d,
              S = ("object" == typeof o && o.position) || void 0,
              k = ("object" == typeof o && o.onDrag) || void 0,
              C = ("object" == typeof o && o.onDragStart) || void 0,
              _ = ("object" == typeof o && o.onDragEnd) || void 0;
            return (
              a.useEffect(() => {
                b({ x: null == S ? void 0 : S.x, y: null == S ? void 0 : S.y });
              }, [S, b]),
              t5(),
              a.createElement(
                tY.Provider,
                { value: { hideCopyButton: u } },
                a.createElement(
                  l8,
                  {
                    ref: v,
                    className: t,
                    fill: n,
                    flat: r,
                    oneLineLabels: l,
                    hideTitleBar: !o,
                    style: { display: y ? "block" : "none" },
                  },
                  o &&
                    a.createElement(oi, {
                      onDrag: (e) => {
                        (b(e), null == k || k(e));
                      },
                      onDragStart: (e) => (null == C ? void 0 : C(e)),
                      onDragEnd: (e) => (null == _ ? void 0 : _(e)),
                      setFilter: g,
                      toggle: (e) => c((t) => (null != e ? e : !t)),
                      toggled: s,
                      title: w,
                      drag: E,
                      filterEnabled: x,
                      from: S,
                    }),
                  y &&
                    a.createElement(
                      tq.Provider,
                      { value: e },
                      a.createElement(l6, {
                        isRoot: !0,
                        fill: n,
                        flat: r,
                        tree: m,
                        toggled: s,
                      }),
                    ),
                ),
              )
            );
          },
        ),
        ou = ["isRoot"],
        os = !1,
        oc = null;
      function of(e) {
        let { isRoot: t = !1 } = e,
          n = e7(e, ou);
        return (
          (0, a.useEffect)(
            () => (
              (os = !0),
              !t && oc && (oc.remove(), (oc = null)),
              () => {
                t || (os = !1);
              }
            ),
            [t],
          ),
          a.createElement(oo, tW({ store: lL }, n))
        );
      }
      function od(e, t, n, r, i) {
        var l;
        let u, s, c, f, d;
        let {
            folderName: p,
            schema: h,
            folderSettings: g,
            hookSettings: m,
            deps: b,
          } = ("string" == typeof e
            ? ((d = e),
              (u = t),
              Array.isArray(n)
                ? (f = n)
                : n &&
                  ("store" in n
                    ? ((c = n), (f = r))
                    : ((s = n),
                      Array.isArray(r) ? (f = r) : ((c = r), (f = i)))))
            : ((u = e), Array.isArray(t) ? (f = t) : ((c = t), (f = n))),
          {
            schema: u,
            folderName: d,
            folderSettings: s,
            hookSettings: c,
            deps: f || [],
          }),
          y = "function" == typeof h,
          w = (0, a.useRef)(!1),
          E = (0, a.useRef)(!0),
          x = i6(() => {
            w.current = !0;
            let e = "function" == typeof h ? h() : h;
            return p ? { [p]: lA(e, g) } : e;
          }, b);
        ((l = !(null != m && m.store)),
          (0, a.useEffect)(() => {
            l &&
              !os &&
              (!oc &&
                ((oc =
                  document.getElementById("leva__root") ||
                  Object.assign(document.createElement("div"), {
                    id: "leva__root",
                  })),
                document.body &&
                  (document.body.appendChild(oc),
                  (function (e, t) {
                    let n = console.error;
                    ((console.error = () => {}),
                      o.render(e, t),
                      (console.error = n));
                  })(a.createElement(of, { isRoot: !0 }), oc))),
              (os = !0));
          }, [l]));
        let [S] = (0, a.useState)(() => (null == m ? void 0 : m.store) || lL),
          [k, C] = (0, a.useMemo)(() => S.getDataFromSchema(x), [S, x]),
          [_, R, T, P, O] = (0, a.useMemo)(() => {
            let e = [],
              t = [],
              n = {},
              r = {},
              i = {};
            return (
              Object.values(C).forEach(
                ({
                  path: l,
                  onChange: o,
                  onEditStart: a,
                  onEditEnd: u,
                  transient: s,
                }) => {
                  (e.push(l),
                    o ? ((n[l] = o), s || t.push(l)) : t.push(l),
                    a && (r[l] = a),
                    u && (i[l] = u));
                },
              ),
              [e, t, n, r, i]
            );
          }, [C]),
          $ = (0, a.useMemo)(() => S.orderPaths(_), [_, S]),
          j = S.useStore((e) => {
            var t;
            return (
              (t = th(th({}, k), e.data)),
              Object.entries(
                R.reduce(
                  (e, n) => (t && t.hasOwnProperty(n) && (e[n] = t[n]), e),
                  {},
                ),
              ).reduce(
                (e, [, { value: t, disabled: n, key: r }]) => (
                  (e[r] = n ? void 0 : t),
                  e
                ),
                {},
              )
            );
          }, v),
          z = (0, a.useCallback)(
            (e) => {
              let t = Object.entries(e).reduce(
                (e, [t, n]) => Object.assign(e, { [C[t].path]: n }),
                {},
              );
              S.set(t, !1);
            },
            [S, C],
          ),
          M = (0, a.useCallback)((e) => S.get(C[e].path), [S, C]);
        return ((0, a.useEffect)(() => {
          let e = !E.current && w.current;
          return (
            S.addData(k, e),
            (E.current = !1),
            (w.current = !1),
            () => S.disposePaths($)
          );
        }, [S, $, k]),
        (0, a.useEffect)(() => {
          let e = [];
          return (
            Object.entries(T).forEach(([t, n]) => {
              n(S.get(t), t, th({ initial: !0, get: S.get }, S.getInput(t)));
              let r = S.useStore.subscribe(
                (e) => {
                  let n = e.data[t];
                  return [n.disabled ? void 0 : n.value, n];
                },
                ([e, r]) => n(e, t, th({ initial: !1, get: S.get }, r)),
                { equalityFn: v },
              );
              e.push(r);
            }),
            () => e.forEach((e) => e())
          );
        }, [S, T]),
        (0, a.useEffect)(() => {
          let e = [];
          return (
            Object.entries(P).forEach(([t, n]) =>
              e.push(S.subscribeToEditStart(t, n)),
            ),
            Object.entries(O).forEach(([t, n]) =>
              e.push(S.subscribeToEditEnd(t, n)),
            ),
            () => e.forEach((e) => e())
          );
        }, [P, O, S]),
        y)
          ? [j, z, M]
          : j;
      }
      (tc(l.SELECT, nq),
        tc(l.IMAGE, lk),
        tc(l.NUMBER, nH),
        tc(l.COLOR, lu),
        tc(l.STRING, nJ),
        tc(l.BOOLEAN, n3),
        tc(l.INTERVAL, lz),
        tc(l.VECTOR3D, ls),
        tc(l.VECTOR2D, lm));
    },
    7208: function (e, t, n) {
      var r = n(5697);
      e.exports = function (e, t) {
        return r(t, function (t) {
          return [t, e[t]];
        });
      };
    },
    6337: function (e, t, n) {
      var r = n(7208),
        i = n(1887),
        l = n(7523),
        o = n(694);
      e.exports = function (e) {
        return function (t) {
          var n = i(t);
          return "[object Map]" == n
            ? l(t)
            : "[object Set]" == n
              ? o(t)
              : r(t, e(t));
        };
      };
    },
    694: function (e) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = [e, e];
          }),
          n
        );
      };
    },
    8522: function (e, t, n) {
      e.exports = n(4936);
    },
    4936: function (e, t, n) {
      var r = n(6337)(n(579));
      e.exports = r;
    },
    1378: function (e, t, n) {
      "use strict";
      var r = n(2723),
        i = n(2793),
        l = n(3780),
        o = n(8930);
      e.exports = function (e, t, n) {
        if (!r(e)) throw TypeError("expected an object");
        if ("string" != typeof t || null == n) return i.apply(null, arguments);
        if ("string" == typeof n) return (o(e, t, n), e);
        var a = l(e, t);
        return (r(n) && r(a) && (n = i({}, a, n)), o(e, t, n), e);
      };
    },
    2793: function (e, t, n) {
      "use strict";
      var r = n(2723),
        i = n(1603);
      function l(e, t) {
        for (var n = arguments.length, r = 0; ++r < n; ) {
          var l = arguments[r];
          a(l) && i(l, o, e);
        }
        return e;
      }
      function o(e, t) {
        if ("__proto__" !== t && "constructor" !== t && "prototype" !== t) {
          var n = this[t];
          a(e) && a(n) ? l(n, e) : (this[t] = e);
        }
      }
      function a(e) {
        return r(e) && !Array.isArray(e);
      }
      e.exports = l;
    },
    4049: function (e, t, n) {
      "use strict";
      var r = n(6257);
      function i() {}
      function l() {}
      ((l.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, l, o) {
            if (o !== r) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: l,
            resetWarningCache: i,
          };
          return ((n.PropTypes = n), n);
        }));
    },
    507: function (e, t, n) {
      e.exports = n(4049)();
    },
    6257: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    3406: function (e, t) {
      "use strict";
      ((t.ConcurrentRoot = 1),
        (t.ContinuousEventPriority = 4),
        (t.DefaultEventPriority = 16),
        (t.DiscreteEventPriority = 1));
    },
    5658: function (e, t, n) {
      e.exports = function (e) {
        "use strict";
        var t,
          r,
          i,
          l,
          o,
          a = {},
          u = n(959),
          s = n(5297),
          c = Object.assign;
        function f(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var d = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          p = Symbol.for("react.element"),
          h = Symbol.for("react.portal"),
          g = Symbol.for("react.fragment"),
          m = Symbol.for("react.strict_mode"),
          v = Symbol.for("react.profiler"),
          b = Symbol.for("react.provider"),
          y = Symbol.for("react.context"),
          w = Symbol.for("react.forward_ref"),
          E = Symbol.for("react.suspense"),
          x = Symbol.for("react.suspense_list"),
          S = Symbol.for("react.memo"),
          k = Symbol.for("react.lazy");
        (Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"));
        var C = Symbol.for("react.offscreen");
        (Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker"));
        var _ = Symbol.iterator;
        function R(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (_ && e[_]) || e["@@iterator"])
              ? e
              : null;
        }
        function T(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case g:
              return "Fragment";
            case h:
              return "Portal";
            case v:
              return "Profiler";
            case m:
              return "StrictMode";
            case E:
              return "Suspense";
            case x:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case y:
                return (e.displayName || "Context") + ".Consumer";
              case b:
                return (e._context.displayName || "Context") + ".Provider";
              case w:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case S:
                return null !== (t = e.displayName || null)
                  ? t
                  : T(e.type) || "Memo";
              case k:
                ((t = e._payload), (e = e._init));
                try {
                  return T(e(t));
                } catch (e) {}
            }
          return null;
        }
        function P(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do (0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return));
            while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function O(e) {
          if (P(e) !== e) throw Error(f(188));
        }
        function $(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = P(e))) throw Error(f(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var i = n.return;
            if (null === i) break;
            var l = i.alternate;
            if (null === l) {
              if (null !== (r = i.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (i.child === l.child) {
              for (l = i.child; l; ) {
                if (l === n) return (O(i), e);
                if (l === r) return (O(i), t);
                l = l.sibling;
              }
              throw Error(f(188));
            }
            if (n.return !== r.return) ((n = i), (r = l));
            else {
              for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                  ((o = !0), (n = i), (r = l));
                  break;
                }
                if (a === r) {
                  ((o = !0), (r = i), (n = l));
                  break;
                }
                a = a.sibling;
              }
              if (!o) {
                for (a = l.child; a; ) {
                  if (a === n) {
                    ((o = !0), (n = l), (r = i));
                    break;
                  }
                  if (a === r) {
                    ((o = !0), (r = l), (n = i));
                    break;
                  }
                  a = a.sibling;
                }
                if (!o) throw Error(f(189));
              }
            }
            if (n.alternate !== r) throw Error(f(190));
          }
          if (3 !== n.tag) throw Error(f(188));
          return n.stateNode.current === n ? e : t;
        }
        function j(e) {
          return null !== (e = $(e))
            ? (function e(t) {
                if (5 === t.tag || 6 === t.tag) return t;
                for (t = t.child; null !== t; ) {
                  var n = e(t);
                  if (null !== n) return n;
                  t = t.sibling;
                }
                return null;
              })(e)
            : null;
        }
        var z,
          M = Array.isArray,
          N = e.getPublicInstance,
          I = e.getRootHostContext,
          L = e.getChildHostContext,
          D = e.prepareForCommit,
          A = e.resetAfterCommit,
          F = e.createInstance,
          B = e.appendInitialChild,
          H = e.finalizeInitialChildren,
          U = e.prepareUpdate,
          W = e.shouldSetTextContent,
          V = e.createTextInstance,
          Q = e.scheduleTimeout,
          G = e.cancelTimeout,
          q = e.noTimeout,
          Y = e.isPrimaryRenderer,
          K = e.supportsMutation,
          X = e.supportsPersistence,
          Z = e.supportsHydration,
          J = e.getInstanceFromNode,
          ee = e.preparePortalMount,
          et = e.getCurrentEventPriority,
          en = e.detachDeletedInstance,
          er = e.supportsMicrotasks,
          ei = e.scheduleMicrotask,
          el = e.supportsTestSelectors,
          eo = e.findFiberRoot,
          ea = e.getBoundingRect,
          eu = e.getTextContent,
          es = e.isHiddenSubtree,
          ec = e.matchAccessibilityRole,
          ef = e.setFocusIfFocusable,
          ed = e.setupIntersectionObserver,
          ep = e.appendChild,
          eh = e.appendChildToContainer,
          eg = e.commitTextUpdate,
          em = e.commitMount,
          ev = e.commitUpdate,
          eb = e.insertBefore,
          ey = e.insertInContainerBefore,
          ew = e.removeChild,
          eE = e.removeChildFromContainer,
          ex = e.resetTextContent,
          eS = e.hideInstance,
          ek = e.hideTextInstance,
          eC = e.unhideInstance,
          e_ = e.unhideTextInstance,
          eR = e.clearContainer,
          eT = e.cloneInstance,
          eP = e.createContainerChildSet,
          eO = e.appendChildToContainerChildSet,
          e$ = e.finalizeContainerChildren,
          ej = e.replaceContainerChildren,
          ez = e.cloneHiddenInstance,
          eM = e.cloneHiddenTextInstance,
          eN = e.canHydrateInstance,
          eI = e.canHydrateTextInstance,
          eL = e.canHydrateSuspenseInstance,
          eD = e.isSuspenseInstancePending,
          eA = e.isSuspenseInstanceFallback,
          eF = e.registerSuspenseInstanceRetry,
          eB = e.getNextHydratableSibling,
          eH = e.getFirstHydratableChild,
          eU = e.getFirstHydratableChildWithinContainer,
          eW = e.getFirstHydratableChildWithinSuspenseInstance,
          eV = e.hydrateInstance,
          eQ = e.hydrateTextInstance,
          eG = e.hydrateSuspenseInstance,
          eq = e.getNextHydratableInstanceAfterSuspenseInstance,
          eY = e.commitHydratedContainer,
          eK = e.commitHydratedSuspenseInstance,
          eX = e.clearSuspenseBoundary,
          eZ = e.clearSuspenseBoundaryFromContainer,
          eJ = e.shouldDeleteUnhydratedTailInstances,
          e0 = e.didNotMatchHydratedContainerTextInstance,
          e1 = e.didNotMatchHydratedTextInstance;
        function e2(e) {
          if (void 0 === z)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              z = (t && t[1]) || "";
            }
          return "\n" + z + e;
        }
        var e3 = !1;
        function e4(e, t) {
          if (!e || e3) return "";
          e3 = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t) {
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && "string" == typeof t.stack) {
              for (
                var i = t.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = i.length - 1,
                  a = l.length - 1;
                1 <= o && 0 <= a && i[o] !== l[a];
              )
                a--;
              for (; 1 <= o && 0 <= a; o--, a--)
                if (i[o] !== l[a]) {
                  if (1 !== o || 1 !== a)
                    do
                      if ((o--, 0 > --a || i[o] !== l[a])) {
                        var u = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    while (1 <= o && 0 <= a);
                  break;
                }
            }
          } finally {
            ((e3 = !1), (Error.prepareStackTrace = n));
          }
          return (e = e ? e.displayName || e.name : "") ? e2(e) : "";
        }
        var e5 = Object.prototype.hasOwnProperty,
          e6 = [],
          e8 = -1;
        function e9(e) {
          return { current: e };
        }
        function e7(e) {
          0 > e8 || ((e.current = e6[e8]), (e6[e8] = null), e8--);
        }
        function te(e, t) {
          ((e6[++e8] = e.current), (e.current = t));
        }
        var tt = {},
          tn = e9(tt),
          tr = e9(!1),
          ti = tt;
        function tl(e, t) {
          var n = e.type.contextTypes;
          if (!n) return tt;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            l = {};
          for (i in n) l[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function to(e) {
          return null != (e = e.childContextTypes);
        }
        function ta() {
          (e7(tr), e7(tn));
        }
        function tu(e, t, n) {
          if (tn.current !== tt) throw Error(f(168));
          (te(tn, t), te(tr, n));
        }
        function ts(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t))
              throw Error(
                f(
                  108,
                  (function (e) {
                    var t = e.type;
                    switch (e.tag) {
                      case 24:
                        return "Cache";
                      case 9:
                        return (t.displayName || "Context") + ".Consumer";
                      case 10:
                        return (
                          (t._context.displayName || "Context") + ".Provider"
                        );
                      case 18:
                        return "DehydratedFragment";
                      case 11:
                        return (
                          (e = (e = t.render).displayName || e.name || ""),
                          t.displayName ||
                            ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
                        );
                      case 7:
                        return "Fragment";
                      case 5:
                        return t;
                      case 4:
                        return "Portal";
                      case 3:
                        return "Root";
                      case 6:
                        return "Text";
                      case 16:
                        return T(t);
                      case 8:
                        return t === m ? "StrictMode" : "Mode";
                      case 22:
                        return "Offscreen";
                      case 12:
                        return "Profiler";
                      case 21:
                        return "Scope";
                      case 13:
                        return "Suspense";
                      case 19:
                        return "SuspenseList";
                      case 25:
                        return "TracingMarker";
                      case 1:
                      case 0:
                      case 17:
                      case 2:
                      case 14:
                      case 15:
                        if ("function" == typeof t)
                          return t.displayName || t.name || null;
                        if ("string" == typeof t) return t;
                    }
                    return null;
                  })(e) || "Unknown",
                  i,
                ),
              );
          return c({}, n, r);
        }
        function tc(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              tt),
            (ti = tn.current),
            te(tn, e),
            te(tr, tr.current),
            !0
          );
        }
        function tf(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(f(169));
          (n
            ? ((e = ts(e, t, ti)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              e7(tr),
              e7(tn),
              te(tn, e))
            : e7(tr),
            te(tr, n));
        }
        var td = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 == (e >>>= 0) ? 32 : (31 - ((tp(e) / th) | 0)) | 0;
              },
          tp = Math.log,
          th = Math.LN2,
          tg = 64,
          tm = 4194304;
        function tv(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function tb(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var a = o & ~i;
            0 !== a ? (r = tv(a)) : 0 != (l &= o) && (r = tv(l));
          } else 0 != (o = n & ~i) ? (r = tv(o)) : 0 !== l && (r = tv(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 == (t & i) &&
            ((i = r & -r) >= (l = t & -t) || (16 === i && 0 != (4194240 & l)))
          )
            return t;
          if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              ((i = 1 << (n = 31 - td(t))), (r |= e[n]), (t &= ~i));
          return r;
        }
        function ty(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function tw(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function tE(e, t, n) {
          ((e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - td(t))] = n));
        }
        function tx(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - td(n),
              i = 1 << r;
            ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
          }
        }
        var tS = 0;
        function tk(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 != (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var tC = s.unstable_scheduleCallback,
          t_ = s.unstable_cancelCallback,
          tR = s.unstable_shouldYield,
          tT = s.unstable_requestPaint,
          tP = s.unstable_now,
          tO = s.unstable_ImmediatePriority,
          t$ = s.unstable_UserBlockingPriority,
          tj = s.unstable_NormalPriority,
          tz = s.unstable_IdlePriority,
          tM = null,
          tN = null,
          tI =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          tL = null,
          tD = !1,
          tA = !1;
        function tF(e) {
          null === tL ? (tL = [e]) : tL.push(e);
        }
        function tB() {
          if (!tA && null !== tL) {
            tA = !0;
            var e = 0,
              t = tS;
            try {
              var n = tL;
              for (tS = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (null !== r);
              }
              ((tL = null), (tD = !1));
            } catch (t) {
              throw (null !== tL && (tL = tL.slice(e + 1)), tC(tO, tB), t);
            } finally {
              ((tS = t), (tA = !1));
            }
          }
          return null;
        }
        var tH = d.ReactCurrentBatchConfig;
        function tU(e, t) {
          if (tI(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!e5.call(t, i) || !tI(e[i], t[i])) return !1;
          }
          return !0;
        }
        function tW(e, t) {
          if (e && e.defaultProps)
            for (var n in ((t = c({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        var tV = e9(null),
          tQ = null,
          tG = null,
          tq = null;
        function tY() {
          tq = tG = tQ = null;
        }
        function tK(e, t, n) {
          Y
            ? (te(tV, t._currentValue), (t._currentValue = n))
            : (te(tV, t._currentValue2), (t._currentValue2 = n));
        }
        function tX(e) {
          var t = tV.current;
          (e7(tV), Y ? (e._currentValue = t) : (e._currentValue2 = t));
        }
        function tZ(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function tJ(e, t) {
          ((tQ = e),
            (tq = tG = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (r0 = !0), (e.firstContext = null)));
        }
        function t0(e) {
          var t = Y ? e._currentValue : e._currentValue2;
          if (tq !== e) {
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === tG)
            ) {
              if (null === tQ) throw Error(f(308));
              ((tG = e), (tQ.dependencies = { lanes: 0, firstContext: e }));
            } else tG = tG.next = e;
          }
          return t;
        }
        var t1 = null,
          t2 = !1;
        function t3(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function t4(e, t) {
          ((e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              }));
        }
        function t5(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function t6(e, t) {
          var n = e.updateQueue;
          null !== n &&
            ((n = n.shared),
            null !== iK && 0 != (1 & e.mode) && 0 == (2 & iY)
              ? (null === (e = n.interleaved)
                  ? ((t.next = t), null === t1 ? (t1 = [n]) : t1.push(n))
                  : ((t.next = e.next), (e.next = t)),
                (n.interleaved = t))
              : (null === (e = n.pending)
                  ? (t.next = t)
                  : ((t.next = e.next), (e.next = t)),
                (n.pending = t)));
        }
        function t8(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 != (4194240 & n))
          ) {
            var r = t.lanes;
            ((r &= e.pendingLanes), (n |= r), (t.lanes = n), tx(e, n));
          }
        }
        function t9(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                (null === l ? (i = l = o) : (l = l.next = o), (n = n.next));
              } while (null !== n);
              null === l ? (i = l = t) : (l = l.next = t);
            } else i = l = t;
            ((n = {
              baseState: r.baseState,
              firstBaseUpdate: i,
              lastBaseUpdate: l,
              shared: r.shared,
              effects: r.effects,
            }),
              (e.updateQueue = n));
            return;
          }
          (null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t));
        }
        function t7(e, t, n, r) {
          var i = e.updateQueue;
          t2 = !1;
          var l = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            a = i.shared.pending;
          if (null !== a) {
            i.shared.pending = null;
            var u = a,
              s = u.next;
            ((u.next = null), null === o ? (l = s) : (o.next = s), (o = u));
            var f = e.alternate;
            null !== f &&
              (a = (f = f.updateQueue).lastBaseUpdate) !== o &&
              (null === a ? (f.firstBaseUpdate = s) : (a.next = s),
              (f.lastBaseUpdate = u));
          }
          if (null !== l) {
            var d = i.baseState;
            for (o = 0, f = s = u = null, a = l; ; ) {
              var p = a.lane,
                h = a.eventTime;
              if ((r & p) === p) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null,
                    });
                t: {
                  var g = e,
                    m = a;
                  switch (((p = t), (h = n), m.tag)) {
                    case 1:
                      if ("function" == typeof (g = m.payload)) {
                        d = g.call(h, d, p);
                        break t;
                      }
                      d = g;
                      break t;
                    case 3:
                      g.flags = (-65537 & g.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (p =
                          "function" == typeof (g = m.payload)
                            ? g.call(h, d, p)
                            : g)
                      )
                        break t;
                      d = c({}, d, p);
                      break t;
                    case 2:
                      t2 = !0;
                  }
                }
                null !== a.callback &&
                  0 !== a.lane &&
                  ((e.flags |= 64),
                  null === (p = i.effects) ? (i.effects = [a]) : p.push(a));
              } else
                ((h = {
                  eventTime: h,
                  lane: p,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                }),
                  null === f ? ((s = f = h), (u = d)) : (f = f.next = h),
                  (o |= p));
              if (null === (a = a.next)) {
                if (null === (a = i.shared.pending)) break;
                ((a = (p = a).next),
                  (p.next = null),
                  (i.lastBaseUpdate = p),
                  (i.shared.pending = null));
              }
            }
            if (
              (null === f && (u = d),
              (i.baseState = u),
              (i.firstBaseUpdate = s),
              (i.lastBaseUpdate = f),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do ((o |= i.lane), (i = i.next));
              while (i !== t);
            } else null === l && (i.shared.lanes = 0);
            ((i3 |= o), (e.lanes = o), (e.memoizedState = d));
          }
        }
        function ne(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" != typeof i))
                  throw Error(f(191, i));
                i.call(r);
              }
            }
        }
        var nt = new u.Component().refs;
        function nn(e, t, n, r) {
          ((n = null == (n = n(r, (t = e.memoizedState))) ? t : c({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
        }
        var nr = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && P(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = lf(),
              i = ld(e),
              l = t5(r, i);
            ((l.payload = t),
              null != n && (l.callback = n),
              t6(e, l),
              null !== (t = lp(e, i, r)) && t8(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = lf(),
              i = ld(e),
              l = t5(r, i);
            ((l.tag = 1),
              (l.payload = t),
              null != n && (l.callback = n),
              t6(e, l),
              null !== (t = lp(e, i, r)) && t8(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = lf(),
              r = ld(e),
              i = t5(n, r);
            ((i.tag = 2),
              null != t && (i.callback = t),
              t6(e, i),
              null !== (t = lp(e, r, n)) && t8(t, e, r));
          },
        };
        function ni(e, t, n, r, i, l, o) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !tU(n, r) ||
                !tU(i, l);
        }
        function nl(e, t, n) {
          var r = !1,
            i = tt,
            l = t.contextType;
          return (
            "object" == typeof l && null !== l
              ? (l = t0(l))
              : ((i = to(t) ? ti : tn.current),
                (l = (r = null != (r = t.contextTypes)) ? tl(e, i) : tt)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = nr),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function no(e, t, n, r) {
          ((e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && nr.enqueueReplaceState(t, t.state, null));
        }
        function na(e, t, n, r) {
          var i = e.stateNode;
          ((i.props = n), (i.state = e.memoizedState), (i.refs = nt), t3(e));
          var l = t.contextType;
          ("object" == typeof l && null !== l
            ? (i.context = t0(l))
            : ((l = to(t) ? ti : tn.current), (i.context = tl(e, l))),
            (i.state = e.memoizedState),
            "function" == typeof (l = t.getDerivedStateFromProps) &&
              (nn(e, t, l, n), (i.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof i.getSnapshotBeforeUpdate ||
              ("function" != typeof i.UNSAFE_componentWillMount &&
                "function" != typeof i.componentWillMount) ||
              ((t = i.state),
              "function" == typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" == typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && nr.enqueueReplaceState(i, i.state, null),
              t7(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" == typeof i.componentDidMount && (e.flags |= 4194308));
        }
        var nu = [],
          ns = 0,
          nc = null,
          nf = 0,
          nd = [],
          np = 0,
          nh = null,
          ng = 1,
          nm = "";
        function nv(e, t) {
          ((nu[ns++] = nf), (nu[ns++] = nc), (nc = e), (nf = t));
        }
        function nb(e, t, n) {
          ((nd[np++] = ng), (nd[np++] = nm), (nd[np++] = nh), (nh = e));
          var r = ng;
          e = nm;
          var i = 32 - td(r) - 1;
          ((r &= ~(1 << i)), (n += 1));
          var l = 32 - td(t) + i;
          if (30 < l) {
            var o = i - (i % 5);
            ((l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (ng = (1 << (32 - td(t) + i)) | (n << i) | r),
              (nm = l + e));
          } else ((ng = (1 << l) | (n << i) | r), (nm = e));
        }
        function ny(e) {
          null !== e.return && (nv(e, 1), nb(e, 1, 0));
        }
        function nw(e) {
          for (; e === nc; )
            ((nc = nu[--ns]),
              (nu[ns] = null),
              (nf = nu[--ns]),
              (nu[ns] = null));
          for (; e === nh; )
            ((nh = nd[--np]),
              (nd[np] = null),
              (nm = nd[--np]),
              (nd[np] = null),
              (ng = nd[--np]),
              (nd[np] = null));
        }
        var nE = null,
          nx = null,
          nS = !1,
          nk = !1,
          nC = null;
        function n_(e, t) {
          var n = lA(5, null, null, 0);
          ((n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n));
        }
        function nR(e, t) {
          switch (e.tag) {
            case 5:
              return (
                null !== (t = eN(t, e.type, e.pendingProps)) &&
                ((e.stateNode = t), (nE = e), (nx = eH(t)), !0)
              );
            case 6:
              return (
                null !== (t = eI(t, e.pendingProps)) &&
                ((e.stateNode = t), (nE = e), (nx = null), !0)
              );
            case 13:
              if (null !== (t = eL(t))) {
                var n = null !== nh ? { id: ng, overflow: nm } : null;
                return (
                  (e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824,
                  }),
                  ((n = lA(18, null, null, 0)).stateNode = t),
                  (n.return = e),
                  (e.child = n),
                  (nE = e),
                  (nx = null),
                  !0
                );
              }
              return !1;
            default:
              return !1;
          }
        }
        function nT(e) {
          return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function nP(e) {
          if (nS) {
            var t = nx;
            if (t) {
              var n = t;
              if (!nR(e, t)) {
                if (nT(e)) throw Error(f(418));
                t = eB(n);
                var r = nE;
                t && nR(e, t)
                  ? n_(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (nS = !1), (nE = e));
              }
            } else {
              if (nT(e)) throw Error(f(418));
              ((e.flags = (-4097 & e.flags) | 2), (nS = !1), (nE = e));
            }
          }
        }
        function nO(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;
          )
            e = e.return;
          nE = e;
        }
        function n$(e) {
          if (!Z || e !== nE) return !1;
          if (!nS) return (nO(e), (nS = !0), !1);
          if (
            3 !== e.tag &&
            (5 !== e.tag || (eJ(e.type) && !W(e.type, e.memoizedProps)))
          ) {
            var t = nx;
            if (t) {
              if (nT(e)) {
                for (e = nx; e; ) e = eB(e);
                throw Error(f(418));
              }
              for (; t; ) (n_(e, t), (t = eB(t)));
            }
          }
          if ((nO(e), 13 === e.tag)) {
            if (!Z) throw Error(f(316));
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(f(317));
            nx = eq(e);
          } else nx = nE ? eB(e.stateNode) : null;
          return !0;
        }
        function nj() {
          Z && ((nx = nE = null), (nk = nS = !1));
        }
        function nz(e) {
          null === nC ? (nC = [e]) : nC.push(e);
        }
        function nM(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(f(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(f(147, e));
              var i = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : (((t = function (e) {
                    var t = i.refs;
                    (t === nt && (t = i.refs = {}),
                      null === e ? delete t[l] : (t[l] = e));
                  })._stringRef = l),
                  t);
            }
            if ("string" != typeof e) throw Error(f(284));
            if (!n._owner) throw Error(f(290, e));
          }
          return e;
        }
        function nN(e, t) {
          throw Error(
            f(
              31,
              "[object Object]" === (e = Object.prototype.toString.call(t))
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e,
            ),
          );
        }
        function nI(e) {
          return (0, e._init)(e._payload);
        }
        function nL(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) (t(n, r), (r = r.sibling));
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              (null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling));
            return e;
          }
          function i(e, t) {
            return (((e = lB(e, t)).index = 0), (e.sibling = null), e);
          }
          function l(t, n, r) {
            return ((t.index = r), e)
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags |= 2), n)
                  : r
                : ((t.flags |= 2), n)
              : ((t.flags |= 1048576), n);
          }
          function o(t) {
            return (e && null === t.alternate && (t.flags |= 2), t);
          }
          function a(e, t, n, r) {
            return (
              null === t || 6 !== t.tag
                ? ((t = lV(n, e.mode, r)).return = e)
                : ((t = i(t, n)).return = e),
              t
            );
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === g
              ? c(e, t, n.props.children, r, n.key)
              : (null !== t &&
                (t.elementType === l ||
                  ("object" == typeof l &&
                    null !== l &&
                    l.$$typeof === k &&
                    nI(l) === t.type))
                  ? ((r = i(t, n.props)).ref = nM(e, t, n))
                  : ((r = lH(n.type, n.key, n.props, null, e.mode, r)).ref = nM(
                      e,
                      t,
                      n,
                    )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return (
              null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
                ? ((t = lQ(n, e.mode, r)).return = e)
                : ((t = i(t, n.children || [])).return = e),
              t
            );
          }
          function c(e, t, n, r, l) {
            return (
              null === t || 7 !== t.tag
                ? ((t = lU(n, e.mode, r, l)).return = e)
                : ((t = i(t, n)).return = e),
              t
            );
          }
          function d(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return (((t = lV("" + t, e.mode, n)).return = e), t);
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case p:
                  return (
                    ((n = lH(t.type, t.key, t.props, null, e.mode, n)).ref = nM(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case h:
                  return (((t = lQ(t, e.mode, n)).return = e), t);
                case k:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (M(t) || R(t))
                return (((t = lU(t, e.mode, n, null)).return = e), t);
              nN(e, t);
            }
            return null;
          }
          function m(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return null !== i ? null : a(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case p:
                  return n.key === i ? u(e, t, n, r) : null;
                case h:
                  return n.key === i ? s(e, t, n, r) : null;
                case k:
                  return m(e, t, (i = n._init)(n._payload), r);
              }
              if (M(n) || R(n)) return null !== i ? null : c(e, t, n, r, null);
              nN(e, n);
            }
            return null;
          }
          function v(e, t, n, r, i) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return a(t, (e = e.get(n) || null), "" + r, i);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case p:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i,
                  );
                case h:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i,
                  );
                case k:
                  return v(e, t, n, (0, r._init)(r._payload), i);
              }
              if (M(r) || R(r)) return c(t, (e = e.get(n) || null), r, i, null);
              nN(t, r);
            }
            return null;
          }
          return function a(u, s, c, b) {
            if (
              ("object" == typeof c &&
                null !== c &&
                c.type === g &&
                null === c.key &&
                (c = c.props.children),
              "object" == typeof c && null !== c)
            ) {
              switch (c.$$typeof) {
                case p:
                  t: {
                    for (var y = c.key, w = s; null !== w; ) {
                      if (w.key === y) {
                        if ((y = c.type) === g) {
                          if (7 === w.tag) {
                            (n(u, w.sibling),
                              ((s = i(w, c.props.children)).return = u),
                              (u = s));
                            break t;
                          }
                        } else if (
                          w.elementType === y ||
                          ("object" == typeof y &&
                            null !== y &&
                            y.$$typeof === k &&
                            nI(y) === w.type)
                        ) {
                          (n(u, w.sibling),
                            ((s = i(w, c.props)).ref = nM(u, w, c)),
                            (s.return = u),
                            (u = s));
                          break t;
                        }
                        n(u, w);
                        break;
                      }
                      (t(u, w), (w = w.sibling));
                    }
                    c.type === g
                      ? (((s = lU(c.props.children, u.mode, b, c.key)).return =
                          u),
                        (u = s))
                      : (((b = lH(
                          c.type,
                          c.key,
                          c.props,
                          null,
                          u.mode,
                          b,
                        )).ref = nM(u, s, c)),
                        (b.return = u),
                        (u = b));
                  }
                  return o(u);
                case h:
                  t: {
                    for (w = c.key; null !== s; ) {
                      if (s.key === w) {
                        if (
                          4 === s.tag &&
                          s.stateNode.containerInfo === c.containerInfo &&
                          s.stateNode.implementation === c.implementation
                        ) {
                          (n(u, s.sibling),
                            ((s = i(s, c.children || [])).return = u),
                            (u = s));
                          break t;
                        }
                        n(u, s);
                        break;
                      }
                      (t(u, s), (s = s.sibling));
                    }
                    (((s = lQ(c, u.mode, b)).return = u), (u = s));
                  }
                  return o(u);
                case k:
                  return a(u, s, (w = c._init)(c._payload), b);
              }
              if (M(c))
                return (function (i, o, a, u) {
                  for (
                    var s = null, c = null, f = o, p = (o = 0), h = null;
                    null !== f && p < a.length;
                    p++
                  ) {
                    f.index > p ? ((h = f), (f = null)) : (h = f.sibling);
                    var g = m(i, f, a[p], u);
                    if (null === g) {
                      null === f && (f = h);
                      break;
                    }
                    (e && f && null === g.alternate && t(i, f),
                      (o = l(g, o, p)),
                      null === c ? (s = g) : (c.sibling = g),
                      (c = g),
                      (f = h));
                  }
                  if (p === a.length) return (n(i, f), nS && nv(i, p), s);
                  if (null === f) {
                    for (; p < a.length; p++)
                      null !== (f = d(i, a[p], u)) &&
                        ((o = l(f, o, p)),
                        null === c ? (s = f) : (c.sibling = f),
                        (c = f));
                    return (nS && nv(i, p), s);
                  }
                  for (f = r(i, f); p < a.length; p++)
                    null !== (h = v(f, i, p, a[p], u)) &&
                      (e &&
                        null !== h.alternate &&
                        f.delete(null === h.key ? p : h.key),
                      (o = l(h, o, p)),
                      null === c ? (s = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(i, e);
                      }),
                    nS && nv(i, p),
                    s
                  );
                })(u, s, c, b);
              if (R(c))
                return (function (i, o, a, u) {
                  var s = R(a);
                  if ("function" != typeof s) throw Error(f(150));
                  if (null == (a = s.call(a))) throw Error(f(151));
                  for (
                    var c = (s = null),
                      p = o,
                      h = (o = 0),
                      g = null,
                      b = a.next();
                    null !== p && !b.done;
                    h++, b = a.next()
                  ) {
                    p.index > h ? ((g = p), (p = null)) : (g = p.sibling);
                    var y = m(i, p, b.value, u);
                    if (null === y) {
                      null === p && (p = g);
                      break;
                    }
                    (e && p && null === y.alternate && t(i, p),
                      (o = l(y, o, h)),
                      null === c ? (s = y) : (c.sibling = y),
                      (c = y),
                      (p = g));
                  }
                  if (b.done) return (n(i, p), nS && nv(i, h), s);
                  if (null === p) {
                    for (; !b.done; h++, b = a.next())
                      null !== (b = d(i, b.value, u)) &&
                        ((o = l(b, o, h)),
                        null === c ? (s = b) : (c.sibling = b),
                        (c = b));
                    return (nS && nv(i, h), s);
                  }
                  for (p = r(i, p); !b.done; h++, b = a.next())
                    null !== (b = v(p, i, h, b.value, u)) &&
                      (e &&
                        null !== b.alternate &&
                        p.delete(null === b.key ? h : b.key),
                      (o = l(b, o, h)),
                      null === c ? (s = b) : (c.sibling = b),
                      (c = b));
                  return (
                    e &&
                      p.forEach(function (e) {
                        return t(i, e);
                      }),
                    nS && nv(i, h),
                    s
                  );
                })(u, s, c, b);
              nN(u, c);
            }
            return ("string" == typeof c && "" !== c) || "number" == typeof c
              ? ((c = "" + c),
                null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = i(s, c)).return = u))
                  : (n(u, s), ((s = lV(c, u.mode, b)).return = u)),
                o((u = s)))
              : n(u, s);
          };
        }
        var nD = nL(!0),
          nA = nL(!1),
          nF = {},
          nB = e9(nF),
          nH = e9(nF),
          nU = e9(nF);
        function nW(e) {
          if (e === nF) throw Error(f(174));
          return e;
        }
        function nV(e, t) {
          (te(nU, t), te(nH, e), te(nB, nF), (e = I(t)), e7(nB), te(nB, e));
        }
        function nQ() {
          (e7(nB), e7(nH), e7(nU));
        }
        function nG(e) {
          var t = nW(nU.current),
            n = nW(nB.current);
          ((t = L(n, e.type, t)), n !== t && (te(nH, e), te(nB, t)));
        }
        function nq(e) {
          nH.current === e && (e7(nB), e7(nH));
        }
        var nY = e9(0);
        function nK(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || eD(n) || eA(n)))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (128 & t.flags)) return t;
            } else if (null !== t.child) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        var nX = [];
        function nZ() {
          for (var e = 0; e < nX.length; e++) {
            var t = nX[e];
            Y
              ? (t._workInProgressVersionPrimary = null)
              : (t._workInProgressVersionSecondary = null);
          }
          nX.length = 0;
        }
        var nJ = d.ReactCurrentDispatcher,
          n0 = d.ReactCurrentBatchConfig,
          n1 = 0,
          n2 = null,
          n3 = null,
          n4 = null,
          n5 = !1,
          n6 = !1,
          n8 = 0,
          n9 = 0;
        function n7() {
          throw Error(f(321));
        }
        function re(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!tI(e[n], t[n])) return !1;
          return !0;
        }
        function rt(e, t, n, r, i, l) {
          if (
            ((n1 = l),
            (n2 = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (nJ.current = null === e || null === e.memoizedState ? rL : rD),
            (e = n(r, i)),
            n6)
          ) {
            l = 0;
            do {
              if (((n6 = !1), (n8 = 0), 25 <= l)) throw Error(f(301));
              ((l += 1),
                (n4 = n3 = null),
                (t.updateQueue = null),
                (nJ.current = rA),
                (e = n(r, i)));
            } while (n6);
          }
          if (
            ((nJ.current = rI),
            (t = null !== n3 && null !== n3.next),
            (n1 = 0),
            (n4 = n3 = n2 = null),
            (n5 = !1),
            t)
          )
            throw Error(f(300));
          return e;
        }
        function rn() {
          var e = 0 !== n8;
          return ((n8 = 0), e);
        }
        function rr() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === n4 ? (n2.memoizedState = n4 = e) : (n4 = n4.next = e),
            n4
          );
        }
        function ri() {
          if (null === n3) {
            var e = n2.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = n3.next;
          var t = null === n4 ? n2.memoizedState : n4.next;
          if (null !== t) ((n4 = t), (n3 = e));
          else {
            if (null === e) throw Error(f(310));
            ((e = {
              memoizedState: (n3 = e).memoizedState,
              baseState: n3.baseState,
              baseQueue: n3.baseQueue,
              queue: n3.queue,
              next: null,
            }),
              null === n4 ? (n2.memoizedState = n4 = e) : (n4 = n4.next = e));
          }
          return n4;
        }
        function rl(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function ro(e) {
          var t = ri(),
            n = t.queue;
          if (null === n) throw Error(f(311));
          n.lastRenderedReducer = e;
          var r = n3,
            i = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== i) {
              var o = i.next;
              ((i.next = l.next), (l.next = o));
            }
            ((r.baseQueue = i = l), (n.pending = null));
          }
          if (null !== i) {
            ((l = i.next), (r = r.baseState));
            var a = (o = null),
              u = null,
              s = l;
            do {
              var c = s.lane;
              if ((n1 & c) === c)
                (null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action)));
              else {
                var d = {
                  lane: c,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                (null === u ? ((a = u = d), (o = r)) : (u = u.next = d),
                  (n2.lanes |= c),
                  (i3 |= c));
              }
              s = s.next;
            } while (null !== s && s !== l);
            (null === u ? (o = r) : (u.next = a),
              tI(r, t.memoizedState) || (r0 = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r));
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do ((l = i.lane), (n2.lanes |= l), (i3 |= l), (i = i.next));
            while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ra(e) {
          var t = ri(),
            n = t.queue;
          if (null === n) throw Error(f(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            l = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var o = (i = i.next);
            do ((l = e(l, o.action)), (o = o.next));
            while (o !== i);
            (tI(l, t.memoizedState) || (r0 = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l));
          }
          return [l, r];
        }
        function ru() {}
        function rs(e, t) {
          var n = n2,
            r = ri(),
            i = t(),
            l = !tI(r.memoizedState, i);
          if (
            (l && ((r.memoizedState = i), (r0 = !0)),
            (r = r.queue),
            rw(rd.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== n4 && 1 & n4.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              rg(9, rf.bind(null, n, r, i, t), void 0, null),
              null === iK)
            )
              throw Error(f(349));
            0 != (30 & n1) || rc(n, t, i);
          }
          return i;
        }
        function rc(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = n2.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (n2.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function rf(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), rp(t) && lp(e, 1, -1));
        }
        function rd(e, t, n) {
          return n(function () {
            rp(t) && lp(e, 1, -1);
          });
        }
        function rp(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !tI(e, n);
          } catch (e) {
            return !0;
          }
        }
        function rh(e) {
          var t = rr();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: rl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = r$.bind(null, n2, e)),
            [t.memoizedState, e]
          );
        }
        function rg(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = n2.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (n2.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function rm() {
          return ri().memoizedState;
        }
        function rv(e, t, n, r) {
          var i = rr();
          ((n2.flags |= e),
            (i.memoizedState = rg(1 | t, n, void 0, void 0 === r ? null : r)));
        }
        function rb(e, t, n, r) {
          var i = ri();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== n3) {
            var o = n3.memoizedState;
            if (((l = o.destroy), null !== r && re(r, o.deps))) {
              i.memoizedState = rg(t, n, l, r);
              return;
            }
          }
          ((n2.flags |= e), (i.memoizedState = rg(1 | t, n, l, r)));
        }
        function ry(e, t) {
          return rv(8390656, 8, e, t);
        }
        function rw(e, t) {
          return rb(2048, 8, e, t);
        }
        function rE(e, t) {
          return rb(4, 2, e, t);
        }
        function rx(e, t) {
          return rb(4, 4, e, t);
        }
        function rS(e, t) {
          return "function" == typeof t
            ? (t((e = e())),
              function () {
                t(null);
              })
            : null != t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function rk(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            rb(4, 4, rS.bind(null, t, e), n)
          );
        }
        function rC() {}
        function r_(e, t) {
          var n = ri();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && re(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function rR(e, t) {
          var n = ri();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && re(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function rT(e, t) {
          var n = tS;
          ((tS = 0 !== n && 4 > n ? n : 4), e(!0));
          var r = n0.transition;
          n0.transition = {};
          try {
            (e(!1), t());
          } finally {
            ((tS = n), (n0.transition = r));
          }
        }
        function rP() {
          return ri().memoizedState;
        }
        function rO(e, t, n) {
          var r = ld(e);
          ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            rj(e)
              ? rz(t, n)
              : (rM(e, t, n),
                null !== (e = lp(e, r, (n = lf()))) && rN(e, t, r)));
        }
        function r$(e, t, n) {
          var r = ld(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rj(e)) rz(t, i);
          else {
            rM(e, t, i);
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  a = l(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = a), tI(a, o)))
                  return;
              } catch (e) {
              } finally {
              }
            null !== (e = lp(e, r, (n = lf()))) && rN(e, t, r);
          }
        }
        function rj(e) {
          var t = e.alternate;
          return e === n2 || (null !== t && t === n2);
        }
        function rz(e, t) {
          n6 = n5 = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t));
        }
        function rM(e, t, n) {
          null !== iK && 0 != (1 & e.mode) && 0 == (2 & iY)
            ? (null === (e = t.interleaved)
                ? ((n.next = n), null === t1 ? (t1 = [t]) : t1.push(t))
                : ((n.next = e.next), (e.next = n)),
              (t.interleaved = n))
            : (null === (e = t.pending)
                ? (n.next = n)
                : ((n.next = e.next), (e.next = n)),
              (t.pending = n));
        }
        function rN(e, t, n) {
          if (0 != (4194240 & n)) {
            var r = t.lanes;
            ((r &= e.pendingLanes), (n |= r), (t.lanes = n), tx(e, n));
          }
        }
        var rI = {
            readContext: t0,
            useCallback: n7,
            useContext: n7,
            useEffect: n7,
            useImperativeHandle: n7,
            useInsertionEffect: n7,
            useLayoutEffect: n7,
            useMemo: n7,
            useReducer: n7,
            useRef: n7,
            useState: n7,
            useDebugValue: n7,
            useDeferredValue: n7,
            useTransition: n7,
            useMutableSource: n7,
            useSyncExternalStore: n7,
            useId: n7,
            unstable_isNewReconciler: !1,
          },
          rL = {
            readContext: t0,
            useCallback: function (e, t) {
              return ((rr().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: t0,
            useEffect: ry,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                rv(4194308, 4, rS.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return rv(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return rv(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = rr();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = rr();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = rO.bind(null, n2, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (rr().memoizedState = e));
            },
            useState: rh,
            useDebugValue: rC,
            useDeferredValue: function (e) {
              var t = rh(e),
                n = t[0],
                r = t[1];
              return (
                ry(
                  function () {
                    var t = n0.transition;
                    n0.transition = {};
                    try {
                      r(e);
                    } finally {
                      n0.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = rh(!1),
                t = e[0];
              return (
                (e = rT.bind(null, e[1])),
                (rr().memoizedState = e),
                [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = n2,
                i = rr();
              if (nS) {
                if (void 0 === n) throw Error(f(407));
                n = n();
              } else {
                if (((n = t()), null === iK)) throw Error(f(349));
                0 != (30 & n1) || rc(r, t, n);
              }
              i.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (i.queue = l),
                ry(rd.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                rg(9, rf.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = rr(),
                t = iK.identifierPrefix;
              if (nS) {
                var n = nm,
                  r = ng;
                ((t =
                  ":" +
                  t +
                  "R" +
                  (n = (r & ~(1 << (32 - td(r) - 1))).toString(32) + n)),
                  0 < (n = n8++) && (t += "H" + n.toString(32)),
                  (t += ":"));
              } else t = ":" + t + "r" + (n = n9++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          rD = {
            readContext: t0,
            useCallback: r_,
            useContext: t0,
            useEffect: rw,
            useImperativeHandle: rk,
            useInsertionEffect: rE,
            useLayoutEffect: rx,
            useMemo: rR,
            useReducer: ro,
            useRef: rm,
            useState: function () {
              return ro(rl);
            },
            useDebugValue: rC,
            useDeferredValue: function (e) {
              var t = ro(rl),
                n = t[0],
                r = t[1];
              return (
                rw(
                  function () {
                    var t = n0.transition;
                    n0.transition = {};
                    try {
                      r(e);
                    } finally {
                      n0.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              return [ro(rl)[0], ri().memoizedState];
            },
            useMutableSource: ru,
            useSyncExternalStore: rs,
            useId: rP,
            unstable_isNewReconciler: !1,
          },
          rA = {
            readContext: t0,
            useCallback: r_,
            useContext: t0,
            useEffect: rw,
            useImperativeHandle: rk,
            useInsertionEffect: rE,
            useLayoutEffect: rx,
            useMemo: rR,
            useReducer: ra,
            useRef: rm,
            useState: function () {
              return ra(rl);
            },
            useDebugValue: rC,
            useDeferredValue: function (e) {
              var t = ra(rl),
                n = t[0],
                r = t[1];
              return (
                rw(
                  function () {
                    var t = n0.transition;
                    n0.transition = {};
                    try {
                      r(e);
                    } finally {
                      n0.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              return [ra(rl)[0], ri().memoizedState];
            },
            useMutableSource: ru,
            useSyncExternalStore: rs,
            useId: rP,
            unstable_isNewReconciler: !1,
          };
        function rF(e, t) {
          try {
            var n = "",
              r = t;
            do
              ((n += (function (e) {
                switch (e.tag) {
                  case 5:
                    return e2(e.type);
                  case 16:
                    return e2("Lazy");
                  case 13:
                    return e2("Suspense");
                  case 19:
                    return e2("SuspenseList");
                  case 0:
                  case 2:
                  case 15:
                    return (e = e4(e.type, !1));
                  case 11:
                    return (e = e4(e.type.render, !1));
                  case 1:
                    return (e = e4(e.type, !0));
                  default:
                    return "";
                }
              })(r)),
                (r = r.return));
            while (r);
            var i = n;
          } catch (e) {
            i = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: i };
        }
        function rB(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var rH = "function" == typeof WeakMap ? WeakMap : Map;
        function rU(e, t, n) {
          (((n = t5(-1, n)).tag = 3), (n.payload = { element: null }));
          var r = t.value;
          return (
            (n.callback = function () {
              (lt || ((lt = !0), (ln = r)), rB(e, t));
            }),
            n
          );
        }
        function rW(e, t, n) {
          (n = t5(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var i = t.value;
            ((n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                rB(e, t);
              }));
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" == typeof l.componentDidCatch &&
              (n.callback = function () {
                (rB(e, t),
                  "function" != typeof r &&
                    (null === lr ? (lr = new Set([this])) : lr.add(this)));
                var n = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== n ? n : "",
                });
              }),
            n
          );
        }
        function rV(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new rH();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = lM.bind(null, e, t, n)), t.then(e, e));
        }
        function rQ(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function rG(e, t, n, r, i) {
          return (
            0 == (1 & e.mode)
              ? e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = t5(-1, 1)).tag = 2), t6(n, t))),
                  (n.lanes |= 1))
              : ((e.flags |= 65536), (e.lanes = i)),
            e
          );
        }
        function rq(e) {
          e.flags |= 4;
        }
        function rY(e, t) {
          if (null !== e && e.child === t.child) return !0;
          if (0 != (16 & t.flags)) return !1;
          for (e = t.child; null !== e; ) {
            if (0 != (12854 & e.flags) || 0 != (12854 & e.subtreeFlags))
              return !1;
            e = e.sibling;
          }
          return !0;
        }
        if (K)
          ((t = function (e, t) {
            for (var n = t.child; null !== n; ) {
              if (5 === n.tag || 6 === n.tag) B(e, n.stateNode);
              else if (4 !== n.tag && null !== n.child) {
                ((n.child.return = n), (n = n.child));
                continue;
              }
              if (n === t) break;
              for (; null === n.sibling; ) {
                if (null === n.return || n.return === t) return;
                n = n.return;
              }
              ((n.sibling.return = n.return), (n = n.sibling));
            }
          }),
            (r = function () {}),
            (i = function (e, t, n, r, i) {
              (e = e.memoizedProps) !== r &&
                ((n = U(t.stateNode, n, e, r, i, nW(nB.current))),
                (t.updateQueue = n) && rq(t));
            }),
            (l = function (e, t, n, r) {
              n !== r && rq(t);
            }));
        else if (X) {
          t = function (e, n, r, i) {
            for (var l = n.child; null !== l; ) {
              if (5 === l.tag) {
                var o = l.stateNode;
                (r && i && (o = ez(o, l.type, l.memoizedProps, l)), B(e, o));
              } else if (6 === l.tag)
                ((o = l.stateNode),
                  r && i && (o = eM(o, l.memoizedProps, l)),
                  B(e, o));
              else if (4 !== l.tag) {
                if (22 === l.tag && null !== l.memoizedState)
                  (null !== (o = l.child) && (o.return = l), t(e, l, !0, !0));
                else if (null !== l.child) {
                  ((l.child.return = l), (l = l.child));
                  continue;
                }
              }
              if (l === n) break;
              for (; null === l.sibling; ) {
                if (null === l.return || l.return === n) return;
                l = l.return;
              }
              ((l.sibling.return = l.return), (l = l.sibling));
            }
          };
          var rK = function (e, t, n, r) {
            for (var i = t.child; null !== i; ) {
              if (5 === i.tag) {
                var l = i.stateNode;
                (n && r && (l = ez(l, i.type, i.memoizedProps, i)), eO(e, l));
              } else if (6 === i.tag)
                ((l = i.stateNode),
                  n && r && (l = eM(l, i.memoizedProps, i)),
                  eO(e, l));
              else if (4 !== i.tag) {
                if (22 === i.tag && null !== i.memoizedState)
                  (null !== (l = i.child) && (l.return = i), rK(e, i, !0, !0));
                else if (null !== i.child) {
                  ((i.child.return = i), (i = i.child));
                  continue;
                }
              }
              if (i === t) break;
              for (; null === i.sibling; ) {
                if (null === i.return || i.return === t) return;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
          };
          ((r = function (e, t) {
            var n = t.stateNode;
            if (!rY(e, t)) {
              var r = eP((e = n.containerInfo));
              (rK(r, t, !1, !1), (n.pendingChildren = r), rq(t), e$(e, r));
            }
          }),
            (i = function (e, n, r, i, l) {
              var o = e.stateNode,
                a = e.memoizedProps;
              if ((e = rY(e, n)) && a === i) n.stateNode = o;
              else {
                var u = n.stateNode,
                  s = nW(nB.current),
                  c = null;
                (a !== i && (c = U(u, r, a, i, l, s)),
                  e && null === c
                    ? (n.stateNode = o)
                    : (H((o = eT(o, c, r, a, i, n, e, u)), r, i, l, s) && rq(n),
                      (n.stateNode = o),
                      e ? rq(n) : t(o, n, !1, !1)));
              }
            }),
            (l = function (e, t, n, r) {
              n !== r
                ? ((e = nW(nU.current)),
                  (n = nW(nB.current)),
                  (t.stateNode = V(r, e, n, t)),
                  rq(t))
                : (t.stateNode = e.stateNode);
            }));
        } else
          ((r = function () {}), (i = function () {}), (l = function () {}));
        function rX(e, t) {
          if (!nS)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  (null !== n.alternate && (r = n), (n = n.sibling));
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function rZ(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              ((n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling));
          else
            for (i = e.child; null !== i; )
              ((n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        var rJ = d.ReactCurrentOwner,
          r0 = !1;
        function r1(e, t, n, r) {
          t.child = null === e ? nA(t, null, n, r) : nD(t, e.child, n, r);
        }
        function r2(e, t, n, r, i) {
          n = n.render;
          var l = t.ref;
          return (tJ(t, i),
          (r = rt(e, t, n, r, l, i)),
          (n = rn()),
          null === e || r0)
            ? (nS && n && ny(t), (t.flags |= 1), r1(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              id(e, t, i));
        }
        function r3(e, t, n, r, i) {
          if (null === e) {
            var l = n.type;
            return "function" != typeof l ||
              lF(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = lH(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), r4(e, t, l, r, i));
          }
          if (((l = e.child), 0 == (e.lanes & i))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : tU)(o, r) &&
              e.ref === t.ref
            )
              return id(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = lB(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function r4(e, t, n, r, i) {
          if (null !== e && tU(e.memoizedProps, r) && e.ref === t.ref) {
            if (((r0 = !1), 0 == (e.lanes & i)))
              return ((t.lanes = e.lanes), id(e, t, i));
            0 != (131072 & e.flags) && (r0 = !0);
          }
          return r8(e, t, n, r, i);
        }
        function r5(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode) {
            if (0 == (1 & t.mode))
              ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                te(i0, iJ),
                (iJ |= n));
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null }),
                  (t.updateQueue = null),
                  te(i0, iJ),
                  (iJ |= e),
                  null
                );
              ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                (r = null !== l ? l.baseLanes : n),
                te(i0, iJ),
                (iJ |= r));
            }
          } else
            (null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              te(i0, iJ),
              (iJ |= r));
          return (r1(e, t, i, n), t.child);
        }
        function r6(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function r8(e, t, n, r, i) {
          var l = to(n) ? ti : tn.current;
          return ((l = tl(t, l)),
          tJ(t, i),
          (n = rt(e, t, n, r, l, i)),
          (r = rn()),
          null === e || r0)
            ? (nS && r && ny(t), (t.flags |= 1), r1(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              id(e, t, i));
        }
        function r9(e, t, n, r, i) {
          if (to(n)) {
            var l = !0;
            tc(t);
          } else l = !1;
          if ((tJ(t, i), null === t.stateNode))
            (null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              nl(t, n, r),
              na(t, n, r, i),
              (r = !0));
          else if (null === e) {
            var o = t.stateNode,
              a = t.memoizedProps;
            o.props = a;
            var u = o.context,
              s = n.contextType;
            s =
              "object" == typeof s && null !== s
                ? t0(s)
                : tl(t, (s = to(n) ? ti : tn.current));
            var c = n.getDerivedStateFromProps,
              f =
                "function" == typeof c ||
                "function" == typeof o.getSnapshotBeforeUpdate;
            (f ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((a !== r || u !== s) && no(t, o, r, s)),
              (t2 = !1));
            var d = t.memoizedState;
            ((o.state = d),
              t7(t, r, o, i),
              (u = t.memoizedState),
              a !== r || d !== u || tr.current || t2
                ? ("function" == typeof c &&
                    (nn(t, n, c, r), (u = t.memoizedState)),
                  (a = t2 || ni(t, n, a, r, d, u, s))
                    ? (f ||
                        ("function" != typeof o.UNSAFE_componentWillMount &&
                          "function" != typeof o.componentWillMount) ||
                        ("function" == typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" == typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" == typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = a))
                : ("function" == typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1)));
          } else {
            ((o = t.stateNode),
              t4(e, t),
              (a = t.memoizedProps),
              (s = t.type === t.elementType ? a : tW(t.type, a)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              (u =
                "object" == typeof (u = n.contextType) && null !== u
                  ? t0(u)
                  : tl(t, (u = to(n) ? ti : tn.current))));
            var p = n.getDerivedStateFromProps;
            ((c =
              "function" == typeof p ||
              "function" == typeof o.getSnapshotBeforeUpdate) ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((a !== f || d !== u) && no(t, o, r, u)),
              (t2 = !1),
              (d = t.memoizedState),
              (o.state = d),
              t7(t, r, o, i));
            var h = t.memoizedState;
            a !== f || d !== h || tr.current || t2
              ? ("function" == typeof p &&
                  (nn(t, n, p, r), (h = t.memoizedState)),
                (s = t2 || ni(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" != typeof o.UNSAFE_componentWillUpdate &&
                        "function" != typeof o.componentWillUpdate) ||
                      ("function" == typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" == typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof o.componentDidUpdate ||
                      (a === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof o.getSnapshotBeforeUpdate ||
                      (a === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" != typeof o.componentDidUpdate ||
                  (a === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate ||
                  (a === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return r7(e, t, n, r, l, i);
        }
        function r7(e, t, n, r, i, l) {
          r6(e, t);
          var o = 0 != (128 & t.flags);
          if (!r && !o) return (i && tf(t, n, !1), id(e, t, l));
          ((r = t.stateNode), (rJ.current = t));
          var a =
            o && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = nD(t, e.child, null, l)),
                (t.child = nD(t, null, a, l)))
              : r1(e, t, a, l),
            (t.memoizedState = r.state),
            i && tf(t, n, !0),
            t.child
          );
        }
        function ie(e) {
          var t = e.stateNode;
          (t.pendingContext
            ? tu(e, t.pendingContext, t.pendingContext !== t.context)
            : t.context && tu(e, t.context, !1),
            nV(e, t.containerInfo));
        }
        function it(e, t, n, r, i) {
          return (nj(), nz(i), (t.flags |= 256), r1(e, t, n, r), t.child);
        }
        var ir = { dehydrated: null, treeContext: null, retryLane: 0 };
        function ii(e) {
          return { baseLanes: e, cachePool: null };
        }
        function il(e, t, n) {
          var r,
            i,
            l,
            o,
            a,
            u,
            s,
            c,
            d,
            p,
            h,
            g,
            m,
            v,
            b = t.pendingProps,
            y = nY.current,
            w = !1,
            E = 0 != (128 & t.flags);
          if (
            ((v = E) ||
              (v = (null === e || null !== e.memoizedState) && 0 != (2 & y)),
            v
              ? ((w = !0), (t.flags &= -129))
              : (null === e || null !== e.memoizedState) && (y |= 1),
            te(nY, 1 & y),
            null === e)
          )
            return (nP(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated))
              ? (0 == (1 & t.mode)
                  ? (t.lanes = 1)
                  : eA(e)
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                null)
              : ((y = b.children),
                (e = b.fallback),
                w
                  ? ((b = t.mode),
                    (w = t.child),
                    (y = { mode: "hidden", children: y }),
                    0 == (1 & b) && null !== w
                      ? ((w.childLanes = 0), (w.pendingProps = y))
                      : (w = lW(y, b, 0, null)),
                    (e = lU(e, b, n, null)),
                    (w.return = t),
                    (e.return = t),
                    (w.sibling = e),
                    (t.child = w),
                    (t.child.memoizedState = ii(n)),
                    (t.memoizedState = ir),
                    e)
                  : io(t, y));
          if (null !== (y = e.memoizedState) && null !== (v = y.dehydrated)) {
            if (E)
              return 256 & t.flags
                ? ((t.flags &= -257), ia(e, t, n, Error(f(422))))
                : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((w = b.fallback),
                    (y = t.mode),
                    (b = lW(
                      { mode: "visible", children: b.children },
                      y,
                      0,
                      null,
                    )),
                    (w = lU(w, y, n, null)),
                    (w.flags |= 2),
                    (b.return = t),
                    (w.return = t),
                    (b.sibling = w),
                    (t.child = b),
                    0 != (1 & t.mode) && nD(t, e.child, null, n),
                    (t.child.memoizedState = ii(n)),
                    (t.memoizedState = ir),
                    w);
            if (0 == (1 & t.mode)) t = ia(e, t, n, null);
            else if (eA(v)) t = ia(e, t, n, Error(f(419)));
            else if (((b = 0 != (n & e.childLanes)), r0 || b)) {
              if (null !== (b = iK)) {
                switch (n & -n) {
                  case 4:
                    w = 2;
                    break;
                  case 16:
                    w = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    w = 32;
                    break;
                  case 536870912:
                    w = 268435456;
                    break;
                  default:
                    w = 0;
                }
                0 !== (b = 0 != (w & (b.suspendedLanes | n)) ? 0 : w) &&
                  b !== y.retryLane &&
                  ((y.retryLane = b), lp(e, b, -1));
              }
              (l_(), (t = ia(e, t, n, Error(f(421)))));
            } else
              eD(v)
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  eF(v, (t = lI.bind(null, e))),
                  (t = null))
                : ((n = y.treeContext),
                  Z &&
                    ((nx = eW(v)),
                    (nE = t),
                    (nS = !0),
                    (nC = null),
                    (nk = !1),
                    null !== n &&
                      ((nd[np++] = ng),
                      (nd[np++] = nm),
                      (nd[np++] = nh),
                      (ng = n.id),
                      (nm = n.overflow),
                      (nh = t))),
                  (t = io(t, t.pendingProps.children)),
                  (t.flags |= 4096));
            return t;
          }
          return w
            ? ((r = e),
              (i = t),
              (l = b.children),
              (o = b.fallback),
              (a = n),
              (u = i.mode),
              (s = (r = r.child).sibling),
              (c = { mode: "hidden", children: l }),
              0 == (1 & u) && i.child !== r
                ? (((l = i.child).childLanes = 0),
                  (l.pendingProps = c),
                  (i.deletions = null))
                : ((l = lB(r, c)).subtreeFlags = 14680064 & r.subtreeFlags),
              null !== s
                ? (o = lB(s, o))
                : ((o = lU(o, u, a, null)), (o.flags |= 2)),
              (o.return = i),
              (l.return = i),
              (l.sibling = o),
              (i.child = l),
              (b = o),
              (w = t.child),
              (y = e.child.memoizedState),
              (w.memoizedState =
                null === y
                  ? ii(n)
                  : { baseLanes: y.baseLanes | n, cachePool: null }),
              (w.childLanes = e.childLanes & ~n),
              (t.memoizedState = ir),
              b)
            : ((d = e),
              (p = t),
              (h = b.children),
              (g = n),
              (d = (m = d.child).sibling),
              (h = lB(m, { mode: "visible", children: h })),
              0 == (1 & p.mode) && (h.lanes = g),
              (h.return = p),
              (h.sibling = null),
              null !== d &&
                (null === (g = p.deletions)
                  ? ((p.deletions = [d]), (p.flags |= 16))
                  : g.push(d)),
              (n = p.child = h),
              (t.memoizedState = null),
              n);
        }
        function io(e, t) {
          return (
            ((t = lW(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function ia(e, t, n, r) {
          return (
            null !== r && nz(r),
            nD(t, e.child, null, n),
            (e = io(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function iu(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), tZ(e.return, t, n));
        }
        function is(e, t, n, r, i) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = i));
        }
        function ic(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            l = r.tail;
          if ((r1(e, t, r.children, n), 0 != (2 & (r = nY.current))))
            ((r = (1 & r) | 2), (t.flags |= 128));
          else {
            if (null !== e && 0 != (128 & e.flags))
              t: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && iu(e, n, t);
                else if (19 === e.tag) iu(e, n, t);
                else if (null !== e.child) {
                  ((e.child.return = e), (e = e.child));
                  continue;
                }
                if (e === t) break;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break t;
                  e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
              }
            r &= 1;
          }
          if ((te(nY, r), 0 == (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (i = null, n = t.child; null !== n; )
                  (null !== (e = n.alternate) && null === nK(e) && (i = n),
                    (n = n.sibling));
                (null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  is(t, !1, i, n, l));
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === nK(e)) {
                    t.child = i;
                    break;
                  }
                  ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                is(t, !0, n, null, l);
                break;
              case "together":
                is(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function id(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (i3 |= t.lanes),
            0 == (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(f(153));
          if (null !== t.child) {
            for (
              n = lB((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;
            )
              ((e = e.sibling),
                ((n = n.sibling = lB(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        var ip = !1,
          ih = !1,
          ig = "function" == typeof WeakSet ? WeakSet : Set,
          im = null;
        function iv(e, t) {
          var n = e.ref;
          if (null !== n) {
            if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                lz(e, t, n);
              }
            else n.current = null;
          }
        }
        function ib(e, t, n) {
          try {
            n();
          } catch (n) {
            lz(e, t, n);
          }
        }
        var iy = !1;
        function iw(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var l = i.destroy;
                ((i.destroy = void 0), void 0 !== l && ib(t, n, l));
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function iE(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ix(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            ((e = 5 === e.tag ? N(n) : n),
              "function" == typeof t ? t(e) : (t.current = e));
          }
        }
        function iS(e, t, n) {
          if (tN && "function" == typeof tN.onCommitFiberUnmount)
            try {
              tN.onCommitFiberUnmount(tM, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var r = (e = e.next);
                do {
                  var i = r,
                    l = i.destroy;
                  ((i = i.tag),
                    void 0 !== l &&
                      (0 != (2 & i)
                        ? ib(t, n, l)
                        : 0 != (4 & i) && ib(t, n, l)),
                    (r = r.next));
                } while (r !== e);
              }
              break;
            case 1:
              if (
                (iv(t, n),
                "function" == typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  ((e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount());
                } catch (e) {
                  lz(t, n, e);
                }
              break;
            case 5:
              iv(t, n);
              break;
            case 4:
              K
                ? iT(e, t, n)
                : X &&
                  X &&
                  ((n = eP((t = t.stateNode.containerInfo))), ej(t, n));
          }
        }
        function ik(e, t, n) {
          for (var r = t; ; )
            if ((iS(e, r, n), null === r.child || (K && 4 === r.tag))) {
              if (r === t) break;
              for (; null === r.sibling; ) {
                if (null === r.return || r.return === t) return;
                r = r.return;
              }
              ((r.sibling.return = r.return), (r = r.sibling));
            } else ((r.child.return = r), (r = r.child));
        }
        function iC(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function i_(e) {
          t: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iC(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
            ) {
              if (2 & e.flags || null === e.child || 4 === e.tag) continue t;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function iR(e) {
          if (K) {
            t: {
              for (var t = e.return; null !== t; ) {
                if (iC(t)) break t;
                t = t.return;
              }
              throw Error(f(160));
            }
            var n = t;
            switch (n.tag) {
              case 5:
                ((t = n.stateNode),
                  32 & n.flags && (ex(t), (n.flags &= -33)),
                  (n = i_(e)),
                  (function e(t, n, r) {
                    var i = t.tag;
                    if (5 === i || 6 === i)
                      ((t = t.stateNode), n ? eb(r, t, n) : ep(r, t));
                    else if (4 !== i && null !== (t = t.child))
                      for (e(t, n, r), t = t.sibling; null !== t; )
                        (e(t, n, r), (t = t.sibling));
                  })(e, n, t));
                break;
              case 3:
              case 4:
                ((t = n.stateNode.containerInfo),
                  (n = i_(e)),
                  (function e(t, n, r) {
                    var i = t.tag;
                    if (5 === i || 6 === i)
                      ((t = t.stateNode), n ? ey(r, t, n) : eh(r, t));
                    else if (4 !== i && null !== (t = t.child))
                      for (e(t, n, r), t = t.sibling; null !== t; )
                        (e(t, n, r), (t = t.sibling));
                  })(e, n, t));
                break;
              default:
                throw Error(f(161));
            }
          }
        }
        function iT(e, t, n) {
          for (var r, i, l = t, o = !1; ; ) {
            if (!o) {
              o = l.return;
              t: for (;;) {
                if (null === o) throw Error(f(160));
                switch (((r = o.stateNode), o.tag)) {
                  case 5:
                    i = !1;
                    break t;
                  case 3:
                  case 4:
                    ((r = r.containerInfo), (i = !0));
                    break t;
                }
                o = o.return;
              }
              o = !0;
            }
            if (5 === l.tag || 6 === l.tag)
              (ik(e, l, n), i ? eE(r, l.stateNode) : ew(r, l.stateNode));
            else if (18 === l.tag) i ? eZ(r, l.stateNode) : eX(r, l.stateNode);
            else if (4 === l.tag) {
              if (null !== l.child) {
                ((r = l.stateNode.containerInfo),
                  (i = !0),
                  (l.child.return = l),
                  (l = l.child));
                continue;
              }
            } else if ((iS(e, l, n), null !== l.child)) {
              ((l.child.return = l), (l = l.child));
              continue;
            }
            if (l === t) break;
            for (; null === l.sibling; ) {
              if (null === l.return || l.return === t) return;
              4 === (l = l.return).tag && (o = !1);
            }
            ((l.sibling.return = l.return), (l = l.sibling));
          }
        }
        function iP(e, t) {
          if (K) {
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (iw(3, t, t.return), iE(3, t), iw(5, t, t.return));
                return;
              case 1:
              case 12:
              case 17:
                return;
              case 5:
                var n = t.stateNode;
                if (null != n) {
                  var r = t.memoizedProps;
                  e = null !== e ? e.memoizedProps : r;
                  var i = t.type,
                    l = t.updateQueue;
                  ((t.updateQueue = null), null !== l && ev(n, l, i, e, r, t));
                }
                return;
              case 6:
                if (null === t.stateNode) throw Error(f(162));
                ((n = t.memoizedProps),
                  eg(t.stateNode, null !== e ? e.memoizedProps : n, n));
                return;
              case 3:
                Z &&
                  null !== e &&
                  e.memoizedState.isDehydrated &&
                  eY(t.stateNode.containerInfo);
                return;
              case 13:
              case 19:
                iO(t);
                return;
            }
            throw Error(f(163));
          }
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (iw(3, t, t.return), iE(3, t), iw(5, t, t.return));
              return;
            case 12:
            case 22:
            case 23:
              return;
            case 13:
            case 19:
              iO(t);
              return;
            case 3:
              Z &&
                null !== e &&
                e.memoizedState.isDehydrated &&
                eY(t.stateNode.containerInfo);
          }
          t: if (X) {
            switch (t.tag) {
              case 1:
              case 5:
              case 6:
                break t;
              case 3:
              case 4:
                ej((t = t.stateNode).containerInfo, t.pendingChildren);
                break t;
            }
            throw Error(f(163));
          }
        }
        function iO(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            (null === n && (n = e.stateNode = new ig()),
              t.forEach(function (t) {
                var r = lL.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              }));
          }
        }
        function i$(e) {
          for (; null !== im; ) {
            var t = im;
            if (0 != (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 != (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ih || iE(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !ih) {
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : tW(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      }
                      var l = t.updateQueue;
                      null !== l && ne(t, l, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                              n = N(t.child.stateNode);
                              break;
                            case 1:
                              n = t.child.stateNode;
                          }
                        ne(t, o, n);
                      }
                      break;
                    case 5:
                      var a = t.stateNode;
                      null === n &&
                        4 & t.flags &&
                        em(a, t.type, t.memoizedProps, t);
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (Z && null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var s = u.memoizedState;
                          if (null !== s) {
                            var c = s.dehydrated;
                            null !== c && eK(c);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(f(163));
                  }
                ih || (512 & t.flags && ix(t));
              } catch (e) {
                lz(t, t.return, e);
              }
            }
            if (t === e) {
              im = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              ((n.return = t.return), (im = n));
              break;
            }
            im = t.return;
          }
        }
        function ij(e) {
          for (; null !== im; ) {
            var t = im;
            if (t === e) {
              im = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              ((n.return = t.return), (im = n));
              break;
            }
            im = t.return;
          }
        }
        function iz(e) {
          for (; null !== im; ) {
            var t = im;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    iE(4, t);
                  } catch (e) {
                    lz(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      lz(t, i, e);
                    }
                  }
                  var l = t.return;
                  try {
                    ix(t);
                  } catch (e) {
                    lz(t, l, e);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    ix(t);
                  } catch (e) {
                    lz(t, o, e);
                  }
              }
            } catch (e) {
              lz(t, t.return, e);
            }
            if (t === e) {
              im = null;
              break;
            }
            var a = t.sibling;
            if (null !== a) {
              ((a.return = t.return), (im = a));
              break;
            }
            im = t.return;
          }
        }
        var iM = 0,
          iN = 1,
          iI = 2,
          iL = 3,
          iD = 4;
        if ("function" == typeof Symbol && Symbol.for) {
          var iA = Symbol.for;
          ((iM = iA("selector.component")),
            (iN = iA("selector.has_pseudo_class")),
            (iI = iA("selector.role")),
            (iL = iA("selector.test_id")),
            (iD = iA("selector.text")));
        }
        function iF(e) {
          var t = J(e);
          if (null != t) {
            if ("string" != typeof t.memoizedProps["data-testname"])
              throw Error(f(364));
            return t;
          }
          if (null === (e = eo(e))) throw Error(f(362));
          return e.stateNode.current;
        }
        function iB(e, t) {
          switch (t.$$typeof) {
            case iM:
              if (e.type === t.value) return !0;
              break;
            case iN:
              t: {
                ((t = t.value), (e = [e, 0]));
                for (var n = 0; n < e.length; ) {
                  var r = e[n++],
                    i = e[n++],
                    l = t[i];
                  if (5 !== r.tag || !es(r)) {
                    for (; null != l && iB(r, l); ) l = t[++i];
                    if (i === t.length) {
                      t = !0;
                      break t;
                    }
                    for (r = r.child; null !== r; )
                      (e.push(r, i), (r = r.sibling));
                  }
                }
                t = !1;
              }
              return t;
            case iI:
              if (5 === e.tag && ec(e.stateNode, t.value)) return !0;
              break;
            case iD:
              if (
                (5 === e.tag || 6 === e.tag) &&
                null !== (e = eu(e)) &&
                0 <= e.indexOf(t.value)
              )
                return !0;
              break;
            case iL:
              if (
                5 === e.tag &&
                "string" == typeof (e = e.memoizedProps["data-testname"]) &&
                e.toLowerCase() === t.value.toLowerCase()
              )
                return !0;
              break;
            default:
              throw Error(f(365));
          }
          return !1;
        }
        function iH(e) {
          switch (e.$$typeof) {
            case iM:
              return "<" + (T(e.value) || "Unknown") + ">";
            case iN:
              return ":has(" + (iH(e) || "") + ")";
            case iI:
              return '[role="' + e.value + '"]';
            case iD:
              return '"' + e.value + '"';
            case iL:
              return '[data-testname="' + e.value + '"]';
            default:
              throw Error(f(365));
          }
        }
        function iU(e, t) {
          var n = [];
          e = [e, 0];
          for (var r = 0; r < e.length; ) {
            var i = e[r++],
              l = e[r++],
              o = t[l];
            if (5 !== i.tag || !es(i)) {
              for (; null != o && iB(i, o); ) o = t[++l];
              if (l === t.length) n.push(i);
              else
                for (i = i.child; null !== i; ) (e.push(i, l), (i = i.sibling));
            }
          }
          return n;
        }
        function iW(e, t) {
          if (!el) throw Error(f(363));
          ((e = iU((e = iF(e)), t)), (t = []), (e = Array.from(e)));
          for (var n = 0; n < e.length; ) {
            var r = e[n++];
            if (5 === r.tag) es(r) || t.push(r.stateNode);
            else for (r = r.child; null !== r; ) (e.push(r), (r = r.sibling));
          }
          return t;
        }
        var iV = Math.ceil,
          iQ = d.ReactCurrentDispatcher,
          iG = d.ReactCurrentOwner,
          iq = d.ReactCurrentBatchConfig,
          iY = 0,
          iK = null,
          iX = null,
          iZ = 0,
          iJ = 0,
          i0 = e9(0),
          i1 = 0,
          i2 = null,
          i3 = 0,
          i4 = 0,
          i5 = 0,
          i6 = null,
          i8 = null,
          i9 = 0,
          i7 = 1 / 0;
        function le() {
          i7 = tP() + 500;
        }
        var lt = !1,
          ln = null,
          lr = null,
          li = !1,
          ll = null,
          lo = 0,
          la = 0,
          lu = null,
          ls = -1,
          lc = 0;
        function lf() {
          return 0 != (6 & iY) ? tP() : -1 !== ls ? ls : (ls = tP());
        }
        function ld(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & iY) && 0 !== iZ
              ? iZ & -iZ
              : null !== tH.transition
                ? (0 === lc &&
                    ((e = tg),
                    0 == (4194240 & (tg <<= 1)) && (tg = 64),
                    (lc = e)),
                  lc)
                : 0 !== (e = tS)
                  ? e
                  : et();
        }
        function lp(e, t, n) {
          if (50 < la) throw ((la = 0), (lu = null), Error(f(185)));
          var r = lh(e, t);
          return null === r
            ? null
            : (tE(r, t, n),
              (0 == (2 & iY) || r !== iK) &&
                (r === iK &&
                  (0 == (2 & iY) && (i4 |= t), 4 === i1 && ly(r, iZ)),
                lg(r, n),
                1 === t && 0 === iY && 0 == (1 & e.mode) && (le(), tD && tB())),
              r);
        }
        function lh(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            ((e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return));
          return 3 === n.tag ? n.stateNode : null;
        }
        function lg(e, t) {
          var n,
            r = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;
            ) {
              var o = 31 - td(l),
                a = 1 << o,
                u = i[o];
              (-1 === u
                ? (0 == (a & n) || 0 != (a & r)) &&
                  (i[o] = (function (e, t) {
                    switch (e) {
                      case 1:
                      case 2:
                      case 4:
                        return t + 250;
                      case 8:
                      case 16:
                      case 32:
                      case 64:
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                        return t + 5e3;
                      default:
                        return -1;
                    }
                  })(a, t))
                : u <= t && (e.expiredLanes |= a),
                (l &= ~a));
            }
          })(e, t);
          var i = tb(e, e === iK ? iZ : 0);
          if (0 === i)
            (null !== r && t_(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else if (((t = i & -i), e.callbackPriority !== t)) {
            if ((null != r && t_(r), 1 === t))
              (0 === e.tag
                ? ((n = lw.bind(null, e)), (tD = !0), tF(n))
                : tF(lw.bind(null, e)),
                er
                  ? ei(function () {
                      0 === iY && tB();
                    })
                  : tC(tO, tB),
                (r = null));
            else {
              switch (tk(i)) {
                case 1:
                  r = tO;
                  break;
                case 4:
                  r = t$;
                  break;
                case 16:
                default:
                  r = tj;
                  break;
                case 536870912:
                  r = tz;
              }
              r = tC(r, lm.bind(null, e));
            }
            ((e.callbackPriority = t), (e.callbackNode = r));
          }
        }
        function lm(e, t) {
          if (((ls = -1), (lc = 0), 0 != (6 & iY))) throw Error(f(327));
          var n = e.callbackNode;
          if (l$() && e.callbackNode !== n) return null;
          var r = tb(e, e === iK ? iZ : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = lR(e, r);
          else {
            t = r;
            var i = iY;
            iY |= 2;
            var l = lC();
            for ((iK !== e || iZ !== t) && (le(), lS(e, t)); ; )
              try {
                !(function () {
                  for (; null !== iX && !tR(); ) lT(iX);
                })();
                break;
              } catch (t) {
                lk(e, t);
              }
            (tY(),
              (iQ.current = l),
              (iY = i),
              null !== iX ? (t = 0) : ((iK = null), (iZ = 0), (t = i1)));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = ty(e)) && ((r = i), (t = lv(e, i))),
              1 === t)
            )
              throw ((n = i2), lS(e, 0), ly(e, r), lg(e, tP()), n);
            if (6 === t) ly(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 == (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              l = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!tI(l(), i)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        ((n.return = t), (t = n));
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        ((t.sibling.return = t.return), (t = t.sibling));
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = lR(e, r)) &&
                    0 !== (l = ty(e)) &&
                    ((r = l), (t = lv(e, l))),
                  1 === t))
              )
                throw ((n = i2), lS(e, 0), ly(e, r), lg(e, tP()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(f(345));
                case 2:
                case 5:
                  lO(e, i8);
                  break;
                case 3:
                  if (
                    (ly(e, r),
                    (130023424 & r) === r && 10 < (t = i9 + 500 - tP()))
                  ) {
                    if (0 !== tb(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      (lf(), (e.pingedLanes |= e.suspendedLanes & i));
                      break;
                    }
                    e.timeoutHandle = Q(lO.bind(null, e, i8), t);
                    break;
                  }
                  lO(e, i8);
                  break;
                case 4:
                  if ((ly(e, r), (4194240 & r) === r)) break;
                  for (i = -1, t = e.eventTimes; 0 < r; ) {
                    var o = 31 - td(r);
                    ((l = 1 << o), (o = t[o]) > i && (i = o), (r &= ~l));
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = tP() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * iV(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = Q(lO.bind(null, e, i8), r);
                    break;
                  }
                  lO(e, i8);
                  break;
                default:
                  throw Error(f(329));
              }
            }
          }
          return (lg(e, tP()), e.callbackNode === n ? lm.bind(null, e) : null);
        }
        function lv(e, t) {
          var n = i6;
          return (
            e.current.memoizedState.isDehydrated && (lS(e, t).flags |= 256),
            2 !== (e = lR(e, t)) && ((t = i8), (i8 = n), null !== t && lb(t)),
            e
          );
        }
        function lb(e) {
          null === i8 ? (i8 = e) : i8.push.apply(i8, e);
        }
        function ly(e, t) {
          for (
            t &= ~i5,
              t &= ~i4,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;
          ) {
            var n = 31 - td(t),
              r = 1 << n;
            ((e[n] = -1), (t &= ~r));
          }
        }
        function lw(e) {
          if (0 != (6 & iY)) throw Error(f(327));
          l$();
          var t = tb(e, 0);
          if (0 == (1 & t)) return (lg(e, tP()), null);
          var n = lR(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ty(e);
            0 !== r && ((t = r), (n = lv(e, r)));
          }
          if (1 === n) throw ((n = i2), lS(e, 0), ly(e, t), lg(e, tP()), n);
          if (6 === n) throw Error(f(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            lO(e, i8),
            lg(e, tP()),
            null
          );
        }
        function lE(e) {
          null !== ll && 0 === ll.tag && 0 == (6 & iY) && l$();
          var t = iY;
          iY |= 1;
          var n = iq.transition,
            r = tS;
          try {
            if (((iq.transition = null), (tS = 1), e)) return e();
          } finally {
            ((tS = r), (iq.transition = n), 0 == (6 & (iY = t)) && tB());
          }
        }
        function lx() {
          ((iJ = i0.current), e7(i0));
        }
        function lS(e, t) {
          ((e.finishedWork = null), (e.finishedLanes = 0));
          var n = e.timeoutHandle;
          if ((n !== q && ((e.timeoutHandle = q), G(n)), null !== iX))
            for (n = iX.return; null !== n; ) {
              var r = n;
              switch ((nw(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && ta();
                  break;
                case 3:
                  (nQ(), e7(tr), e7(tn), nZ());
                  break;
                case 5:
                  nq(r);
                  break;
                case 4:
                  nQ();
                  break;
                case 13:
                case 19:
                  e7(nY);
                  break;
                case 10:
                  tX(r.type._context);
                  break;
                case 22:
                case 23:
                  lx();
              }
              n = n.return;
            }
          if (
            ((iK = e),
            (iX = e = lB(e.current, null)),
            (iZ = iJ = t),
            (i1 = 0),
            (i2 = null),
            (i5 = i4 = i3 = 0),
            (i8 = i6 = null),
            null !== t1)
          ) {
            for (t = 0; t < t1.length; t++)
              if (null !== (r = (n = t1[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  ((l.next = i), (r.next = o));
                }
                n.pending = r;
              }
            t1 = null;
          }
          return e;
        }
        function lk(e, t) {
          for (;;) {
            var n = iX;
            try {
              if ((tY(), (nJ.current = rI), n5)) {
                for (var r = n2.memoizedState; null !== r; ) {
                  var i = r.queue;
                  (null !== i && (i.pending = null), (r = r.next));
                }
                n5 = !1;
              }
              if (
                ((n1 = 0),
                (n4 = n3 = n2 = null),
                (n6 = !1),
                (n8 = 0),
                (iG.current = null),
                null === n || null === n.return)
              ) {
                ((i1 = 1), (i2 = t), (iX = null));
                break;
              }
              t: {
                var l = e,
                  o = n.return,
                  a = n,
                  u = t;
                if (
                  ((t = iZ),
                  (a.flags |= 32768),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var s = u,
                    c = a,
                    d = c.tag;
                  if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = c.alternate;
                    p
                      ? ((c.updateQueue = p.updateQueue),
                        (c.memoizedState = p.memoizedState),
                        (c.lanes = p.lanes))
                      : ((c.updateQueue = null), (c.memoizedState = null));
                  }
                  var h = rQ(o);
                  if (null !== h) {
                    ((h.flags &= -257),
                      rG(h, o, a, l, t),
                      1 & h.mode && rV(l, s, t),
                      (t = h),
                      (u = s));
                    var g = t.updateQueue;
                    if (null === g) {
                      var m = new Set();
                      (m.add(u), (t.updateQueue = m));
                    } else g.add(u);
                    break t;
                  }
                  if (0 == (1 & t)) {
                    (rV(l, s, t), l_());
                    break t;
                  }
                  u = Error(f(426));
                } else if (nS && 1 & a.mode) {
                  var v = rQ(o);
                  if (null !== v) {
                    (0 == (65536 & v.flags) && (v.flags |= 256),
                      rG(v, o, a, l, t),
                      nz(u));
                    break t;
                  }
                }
                ((l = u),
                  4 !== i1 && (i1 = 2),
                  null === i6 ? (i6 = [l]) : i6.push(l),
                  (u = rF(u, a)),
                  (a = o));
                do {
                  switch (a.tag) {
                    case 3:
                      ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                      var b = rU(a, u, t);
                      t9(a, b);
                      break t;
                    case 1:
                      l = u;
                      var y = a.type,
                        w = a.stateNode;
                      if (
                        0 == (128 & a.flags) &&
                        ("function" == typeof y.getDerivedStateFromError ||
                          (null !== w &&
                            "function" == typeof w.componentDidCatch &&
                            (null === lr || !lr.has(w))))
                      ) {
                        ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                        var E = rW(a, l, t);
                        t9(a, E);
                        break t;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              lP(n);
            } catch (e) {
              ((t = e), iX === n && null !== n && (iX = n = n.return));
              continue;
            }
            break;
          }
        }
        function lC() {
          var e = iQ.current;
          return ((iQ.current = rI), null === e ? rI : e);
        }
        function l_() {
          ((0 === i1 || 3 === i1 || 2 === i1) && (i1 = 4),
            null === iK ||
              (0 == (268435455 & i3) && 0 == (268435455 & i4)) ||
              ly(iK, iZ));
        }
        function lR(e, t) {
          var n = iY;
          iY |= 2;
          var r = lC();
          for ((iK === e && iZ === t) || lS(e, t); ; )
            try {
              !(function () {
                for (; null !== iX; ) lT(iX);
              })();
              break;
            } catch (t) {
              lk(e, t);
            }
          if ((tY(), (iY = n), (iQ.current = r), null !== iX))
            throw Error(f(261));
          return ((iK = null), (iZ = 0), i1);
        }
        function lT(e) {
          var t = o(e.alternate, e, iJ);
          ((e.memoizedProps = e.pendingProps),
            null === t ? lP(e) : (iX = t),
            (iG.current = null));
        }
        function lP(e) {
          var n = e;
          do {
            var o = n.alternate;
            if (((e = n.return), 0 == (32768 & n.flags))) {
              if (
                null !==
                (o = (function (e, n, o) {
                  var a = n.pendingProps;
                  switch ((nw(n), n.tag)) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                      return (rZ(n), null);
                    case 1:
                    case 17:
                      return (to(n.type) && ta(), rZ(n), null);
                    case 3:
                      return (
                        (a = n.stateNode),
                        nQ(),
                        e7(tr),
                        e7(tn),
                        nZ(),
                        a.pendingContext &&
                          ((a.context = a.pendingContext),
                          (a.pendingContext = null)),
                        (null === e || null === e.child) &&
                          (n$(n)
                            ? rq(n)
                            : null === e ||
                              (e.memoizedState.isDehydrated &&
                                0 == (256 & n.flags)) ||
                              ((n.flags |= 1024),
                              null !== nC && (lb(nC), (nC = null)))),
                        r(e, n),
                        rZ(n),
                        null
                      );
                    case 5:
                      (nq(n), (o = nW(nU.current)));
                      var u = n.type;
                      if (null !== e && null != n.stateNode)
                        (i(e, n, u, a, o),
                          e.ref !== n.ref &&
                            ((n.flags |= 512), (n.flags |= 2097152)));
                      else {
                        if (!a) {
                          if (null === n.stateNode) throw Error(f(166));
                          return (rZ(n), null);
                        }
                        if (((e = nW(nB.current)), n$(n))) {
                          if (!Z) throw Error(f(175));
                          ((e = eV(
                            n.stateNode,
                            n.type,
                            n.memoizedProps,
                            o,
                            e,
                            n,
                            !nk,
                          )),
                            (n.updateQueue = e),
                            null !== e && rq(n));
                        } else {
                          var s = F(u, a, o, e, n);
                          (t(s, n, !1, !1),
                            (n.stateNode = s),
                            H(s, u, a, o, e) && rq(n));
                        }
                        null !== n.ref &&
                          ((n.flags |= 512), (n.flags |= 2097152));
                      }
                      return (rZ(n), null);
                    case 6:
                      if (e && null != n.stateNode) l(e, n, e.memoizedProps, a);
                      else {
                        if ("string" != typeof a && null === n.stateNode)
                          throw Error(f(166));
                        if (
                          ((e = nW(nU.current)), (o = nW(nB.current)), n$(n))
                        ) {
                          if (!Z) throw Error(f(176));
                          if (
                            (o = eQ(
                              (e = n.stateNode),
                              (a = n.memoizedProps),
                              n,
                              !nk,
                            )) &&
                            null !== (u = nE)
                          )
                            switch (((s = 0 != (1 & u.mode)), u.tag)) {
                              case 3:
                                e0(u.stateNode.containerInfo, e, a, s);
                                break;
                              case 5:
                                e1(
                                  u.type,
                                  u.memoizedProps,
                                  u.stateNode,
                                  e,
                                  a,
                                  s,
                                );
                            }
                          o && rq(n);
                        } else n.stateNode = V(a, e, o, n);
                      }
                      return (rZ(n), null);
                    case 13:
                      if (
                        (e7(nY),
                        (a = n.memoizedState),
                        nS &&
                          null !== nx &&
                          0 != (1 & n.mode) &&
                          0 == (128 & n.flags))
                      ) {
                        for (e = nx; e; ) e = eB(e);
                        return (nj(), (n.flags |= 98560), n);
                      }
                      if (null !== a && null !== a.dehydrated) {
                        if (((a = n$(n)), null === e)) {
                          if (!a) throw Error(f(318));
                          if (!Z) throw Error(f(344));
                          if (
                            !(e =
                              null !== (e = n.memoizedState)
                                ? e.dehydrated
                                : null)
                          )
                            throw Error(f(317));
                          eG(e, n);
                        } else
                          (nj(),
                            0 == (128 & n.flags) && (n.memoizedState = null),
                            (n.flags |= 4));
                        return (rZ(n), null);
                      }
                      if (
                        (null !== nC && (lb(nC), (nC = null)),
                        0 != (128 & n.flags))
                      )
                        return ((n.lanes = o), n);
                      return (
                        (a = null !== a),
                        (o = !1),
                        null === e ? n$(n) : (o = null !== e.memoizedState),
                        a &&
                          !o &&
                          ((n.child.flags |= 8192),
                          0 != (1 & n.mode) &&
                            (null === e || 0 != (1 & nY.current)
                              ? 0 === i1 && (i1 = 3)
                              : l_())),
                        null !== n.updateQueue && (n.flags |= 4),
                        rZ(n),
                        null
                      );
                    case 4:
                      return (
                        nQ(),
                        r(e, n),
                        null === e && ee(n.stateNode.containerInfo),
                        rZ(n),
                        null
                      );
                    case 10:
                      return (tX(n.type._context), rZ(n), null);
                    case 19:
                      if ((e7(nY), null === (u = n.memoizedState)))
                        return (rZ(n), null);
                      if (
                        ((a = 0 != (128 & n.flags)), null === (s = u.rendering))
                      ) {
                        if (a) rX(u, !1);
                        else {
                          if (0 !== i1 || (null !== e && 0 != (128 & e.flags)))
                            for (e = n.child; null !== e; ) {
                              if (null !== (s = nK(e))) {
                                for (
                                  n.flags |= 128,
                                    rX(u, !1),
                                    null !== (e = s.updateQueue) &&
                                      ((n.updateQueue = e), (n.flags |= 4)),
                                    n.subtreeFlags = 0,
                                    e = o,
                                    a = n.child;
                                  null !== a;
                                )
                                  ((o = a),
                                    (u = e),
                                    (o.flags &= 14680066),
                                    null === (s = o.alternate)
                                      ? ((o.childLanes = 0),
                                        (o.lanes = u),
                                        (o.child = null),
                                        (o.subtreeFlags = 0),
                                        (o.memoizedProps = null),
                                        (o.memoizedState = null),
                                        (o.updateQueue = null),
                                        (o.dependencies = null),
                                        (o.stateNode = null))
                                      : ((o.childLanes = s.childLanes),
                                        (o.lanes = s.lanes),
                                        (o.child = s.child),
                                        (o.subtreeFlags = 0),
                                        (o.deletions = null),
                                        (o.memoizedProps = s.memoizedProps),
                                        (o.memoizedState = s.memoizedState),
                                        (o.updateQueue = s.updateQueue),
                                        (o.type = s.type),
                                        (u = s.dependencies),
                                        (o.dependencies =
                                          null === u
                                            ? null
                                            : {
                                                lanes: u.lanes,
                                                firstContext: u.firstContext,
                                              })),
                                    (a = a.sibling));
                                return (te(nY, (1 & nY.current) | 2), n.child);
                              }
                              e = e.sibling;
                            }
                          null !== u.tail &&
                            tP() > i7 &&
                            ((n.flags |= 128),
                            (a = !0),
                            rX(u, !1),
                            (n.lanes = 4194304));
                        }
                      } else {
                        if (!a) {
                          if (null !== (e = nK(s))) {
                            if (
                              ((n.flags |= 128),
                              (a = !0),
                              null !== (e = e.updateQueue) &&
                                ((n.updateQueue = e), (n.flags |= 4)),
                              rX(u, !0),
                              null === u.tail &&
                                "hidden" === u.tailMode &&
                                !s.alternate &&
                                !nS)
                            )
                              return (rZ(n), null);
                          } else
                            2 * tP() - u.renderingStartTime > i7 &&
                              1073741824 !== o &&
                              ((n.flags |= 128),
                              (a = !0),
                              rX(u, !1),
                              (n.lanes = 4194304));
                        }
                        u.isBackwards
                          ? ((s.sibling = n.child), (n.child = s))
                          : (null !== (e = u.last)
                              ? (e.sibling = s)
                              : (n.child = s),
                            (u.last = s));
                      }
                      if (null !== u.tail)
                        return (
                          (n = u.tail),
                          (u.rendering = n),
                          (u.tail = n.sibling),
                          (u.renderingStartTime = tP()),
                          (n.sibling = null),
                          (e = nY.current),
                          te(nY, a ? (1 & e) | 2 : 1 & e),
                          n
                        );
                      return (rZ(n), null);
                    case 22:
                    case 23:
                      return (
                        lx(),
                        (a = null !== n.memoizedState),
                        null !== e &&
                          (null !== e.memoizedState) !== a &&
                          (n.flags |= 8192),
                        a && 0 != (1 & n.mode)
                          ? 0 != (1073741824 & iJ) &&
                            (rZ(n),
                            K && 6 & n.subtreeFlags && (n.flags |= 8192))
                          : rZ(n),
                        null
                      );
                    case 24:
                    case 25:
                      return null;
                  }
                  throw Error(f(156, n.tag));
                })(o, n, iJ))
              ) {
                iX = o;
                return;
              }
            } else {
              if (
                null !==
                (o = (function (e, t) {
                  switch ((nw(t), t.tag)) {
                    case 1:
                      return (
                        to(t.type) && ta(),
                        65536 & (e = t.flags)
                          ? ((t.flags = (-65537 & e) | 128), t)
                          : null
                      );
                    case 3:
                      return (
                        nQ(),
                        e7(tr),
                        e7(tn),
                        nZ(),
                        0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                          ? ((t.flags = (-65537 & e) | 128), t)
                          : null
                      );
                    case 5:
                      return (nq(t), null);
                    case 13:
                      if (
                        (e7(nY),
                        null !== (e = t.memoizedState) && null !== e.dehydrated)
                      ) {
                        if (null === t.alternate) throw Error(f(340));
                        nj();
                      }
                      return 65536 & (e = t.flags)
                        ? ((t.flags = (-65537 & e) | 128), t)
                        : null;
                    case 19:
                      return (e7(nY), null);
                    case 4:
                      return (nQ(), null);
                    case 10:
                      return (tX(t.type._context), null);
                    case 22:
                    case 23:
                      return (lx(), null);
                    default:
                      return null;
                  }
                })(o, n))
              ) {
                ((o.flags &= 32767), (iX = o));
                return;
              }
              if (null !== e)
                ((e.flags |= 32768),
                  (e.subtreeFlags = 0),
                  (e.deletions = null));
              else {
                ((i1 = 6), (iX = null));
                return;
              }
            }
            if (null !== (n = n.sibling)) {
              iX = n;
              return;
            }
            iX = n = e;
          } while (null !== n);
          0 === i1 && (i1 = 5);
        }
        function lO(e, t) {
          var n = tS,
            r = iq.transition;
          try {
            ((iq.transition = null),
              (tS = 1),
              (function (e, t, n) {
                do l$();
                while (null !== ll);
                if (0 != (6 & iY)) throw Error(f(327));
                var r = e.finishedWork,
                  i = e.finishedLanes;
                if (null !== r) {
                  if (
                    ((e.finishedWork = null),
                    (e.finishedLanes = 0),
                    r === e.current)
                  )
                    throw Error(f(177));
                  ((e.callbackNode = null), (e.callbackPriority = 0));
                  var l = r.lanes | r.childLanes;
                  if (
                    ((function (e, t) {
                      var n = e.pendingLanes & ~t;
                      ((e.pendingLanes = t),
                        (e.suspendedLanes = 0),
                        (e.pingedLanes = 0),
                        (e.expiredLanes &= t),
                        (e.mutableReadLanes &= t),
                        (e.entangledLanes &= t),
                        (t = e.entanglements));
                      var r = e.eventTimes;
                      for (e = e.expirationTimes; 0 < n; ) {
                        var i = 31 - td(n),
                          l = 1 << i;
                        ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l));
                      }
                    })(e, l),
                    e === iK && ((iX = iK = null), (iZ = 0)),
                    (0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags)) ||
                      li ||
                      ((li = !0),
                      (o = tj),
                      (a = function () {
                        return (l$(), null);
                      }),
                      tC(o, a)),
                    (l = 0 != (15990 & r.flags)),
                    0 != (15990 & r.subtreeFlags) || l)
                  ) {
                    ((l = iq.transition), (iq.transition = null));
                    var o,
                      a,
                      u,
                      s,
                      c = tS;
                    tS = 1;
                    var d = iY;
                    ((iY |= 4),
                      (iG.current = null),
                      (function (e, t) {
                        for (D(e.containerInfo), im = t; null !== im; )
                          if (
                            ((t = (e = im).child),
                            0 != (1028 & e.subtreeFlags) && null !== t)
                          )
                            ((t.return = e), (im = t));
                          else
                            for (; null !== im; ) {
                              e = im;
                              try {
                                var n = e.alternate;
                                if (0 != (1024 & e.flags))
                                  switch (e.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 6:
                                    case 4:
                                    case 17:
                                      break;
                                    case 1:
                                      if (null !== n) {
                                        var r = n.memoizedProps,
                                          i = n.memoizedState,
                                          l = e.stateNode,
                                          o = l.getSnapshotBeforeUpdate(
                                            e.elementType === e.type
                                              ? r
                                              : tW(e.type, r),
                                            i,
                                          );
                                        l.__reactInternalSnapshotBeforeUpdate =
                                          o;
                                      }
                                      break;
                                    case 3:
                                      K && eR(e.stateNode.containerInfo);
                                      break;
                                    default:
                                      throw Error(f(163));
                                  }
                              } catch (t) {
                                lz(e, e.return, t);
                              }
                              if (null !== (t = e.sibling)) {
                                ((t.return = e.return), (im = t));
                                break;
                              }
                              im = e.return;
                            }
                        ((n = iy), (iy = !1));
                      })(e, r),
                      (function (e, t) {
                        for (im = t; null !== im; ) {
                          var n = (t = im).deletions;
                          if (null !== n)
                            for (var r = 0; r < n.length; r++) {
                              var i = n[r];
                              try {
                                var l = e;
                                K ? iT(l, i, t) : ik(l, i, t);
                                var o = i.alternate;
                                (null !== o && (o.return = null),
                                  (i.return = null));
                              } catch (e) {
                                lz(i, t, e);
                              }
                            }
                          if (
                            ((n = t.child),
                            0 != (12854 & t.subtreeFlags) && null !== n)
                          )
                            ((n.return = t), (im = n));
                          else
                            for (; null !== im; ) {
                              t = im;
                              try {
                                var a = t.flags;
                                if ((32 & a && K && ex(t.stateNode), 512 & a)) {
                                  var u = t.alternate;
                                  if (null !== u) {
                                    var s = u.ref;
                                    null !== s &&
                                      ("function" == typeof s
                                        ? s(null)
                                        : (s.current = null));
                                  }
                                }
                                if (8192 & a)
                                  switch (t.tag) {
                                    case 13:
                                      if (null !== t.memoizedState) {
                                        var c = t.alternate;
                                        (null === c ||
                                          null === c.memoizedState) &&
                                          (i9 = tP());
                                      }
                                      break;
                                    case 22:
                                      var f = null !== t.memoizedState,
                                        d = t.alternate,
                                        p =
                                          null !== d &&
                                          null !== d.memoizedState;
                                      if (((n = t), K)) {
                                        t: if (
                                          ((r = n), (i = f), (l = null), K)
                                        )
                                          for (var h = r; ; ) {
                                            if (5 === h.tag) {
                                              if (null === l) {
                                                l = h;
                                                var g = h.stateNode;
                                                i
                                                  ? eS(g)
                                                  : eC(
                                                      h.stateNode,
                                                      h.memoizedProps,
                                                    );
                                              }
                                            } else if (6 === h.tag) {
                                              if (null === l) {
                                                var m = h.stateNode;
                                                i
                                                  ? ek(m)
                                                  : e_(m, h.memoizedProps);
                                              }
                                            } else if (
                                              ((22 !== h.tag && 23 !== h.tag) ||
                                                null === h.memoizedState ||
                                                h === r) &&
                                              null !== h.child
                                            ) {
                                              ((h.child.return = h),
                                                (h = h.child));
                                              continue;
                                            }
                                            if (h === r) break;
                                            for (; null === h.sibling; ) {
                                              if (
                                                null === h.return ||
                                                h.return === r
                                              )
                                                break t;
                                              (l === h && (l = null),
                                                (h = h.return));
                                            }
                                            (l === h && (l = null),
                                              (h.sibling.return = h.return),
                                              (h = h.sibling));
                                          }
                                      }
                                      if (f && !p && 0 != (1 & n.mode)) {
                                        im = n;
                                        for (var v = n.child; null !== v; ) {
                                          for (n = im = v; null !== im; ) {
                                            var b = (r = im).child;
                                            switch (r.tag) {
                                              case 0:
                                              case 11:
                                              case 14:
                                              case 15:
                                                iw(4, r, r.return);
                                                break;
                                              case 1:
                                                iv(r, r.return);
                                                var y = r.stateNode;
                                                if (
                                                  "function" ==
                                                  typeof y.componentWillUnmount
                                                ) {
                                                  var w = r.return;
                                                  try {
                                                    ((y.props =
                                                      r.memoizedProps),
                                                      (y.state =
                                                        r.memoizedState),
                                                      y.componentWillUnmount());
                                                  } catch (e) {
                                                    lz(r, w, e);
                                                  }
                                                }
                                                break;
                                              case 5:
                                                iv(r, r.return);
                                                break;
                                              case 22:
                                                if (null !== r.memoizedState) {
                                                  ij(n);
                                                  continue;
                                                }
                                            }
                                            null !== b
                                              ? ((b.return = r), (im = b))
                                              : ij(n);
                                          }
                                          v = v.sibling;
                                        }
                                      }
                                  }
                                switch (4102 & a) {
                                  case 2:
                                    (iR(t), (t.flags &= -3));
                                    break;
                                  case 6:
                                    (iR(t),
                                      (t.flags &= -3),
                                      iP(t.alternate, t));
                                    break;
                                  case 4096:
                                    t.flags &= -4097;
                                    break;
                                  case 4100:
                                    ((t.flags &= -4097), iP(t.alternate, t));
                                    break;
                                  case 4:
                                    iP(t.alternate, t);
                                }
                              } catch (e) {
                                lz(t, t.return, e);
                              }
                              if (null !== (n = t.sibling)) {
                                ((n.return = t.return), (im = n));
                                break;
                              }
                              im = t.return;
                            }
                        }
                      })(e, r, i),
                      A(e.containerInfo),
                      (e.current = r),
                      (u = r),
                      (s = e),
                      (im = u),
                      (function e(t, n, r) {
                        for (var i = 0 != (1 & t.mode); null !== im; ) {
                          var l = im,
                            o = l.child;
                          if (22 === l.tag && i) {
                            var a = null !== l.memoizedState || ip;
                            if (!a) {
                              var u = l.alternate,
                                s =
                                  (null !== u && null !== u.memoizedState) ||
                                  ih;
                              u = ip;
                              var c = ih;
                              if (((ip = a), (ih = s) && !c))
                                for (im = l; null !== im; )
                                  ((s = (a = im).child),
                                    22 === a.tag && null !== a.memoizedState
                                      ? iz(l)
                                      : null !== s
                                        ? ((s.return = a), (im = s))
                                        : iz(l));
                              for (; null !== o; )
                                ((im = o), e(o, n, r), (o = o.sibling));
                              ((im = l), (ip = u), (ih = c));
                            }
                            i$(t, n, r);
                          } else
                            0 != (8772 & l.subtreeFlags) && null !== o
                              ? ((o.return = l), (im = o))
                              : i$(t, n, r);
                        }
                      })(u, s, i),
                      tT(),
                      (iY = d),
                      (tS = c),
                      (iq.transition = l));
                  } else e.current = r;
                  if (
                    (li && ((li = !1), (ll = e), (lo = i)),
                    0 === (l = e.pendingLanes) && (lr = null),
                    (function (e) {
                      if (tN && "function" == typeof tN.onCommitFiberRoot)
                        try {
                          tN.onCommitFiberRoot(
                            tM,
                            e,
                            void 0,
                            128 == (128 & e.current.flags),
                          );
                        } catch (e) {}
                    })(r.stateNode, n),
                    lg(e, tP()),
                    null !== t)
                  )
                    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
                      n(t[r]);
                  if (lt) throw ((lt = !1), (e = ln), (ln = null), e);
                  (0 != (1 & lo) && 0 !== e.tag && l$(),
                    0 != (1 & (l = e.pendingLanes))
                      ? e === lu
                        ? la++
                        : ((la = 0), (lu = e))
                      : (la = 0),
                    tB());
                }
              })(e, t, n));
          } finally {
            ((iq.transition = r), (tS = n));
          }
          return null;
        }
        function l$() {
          if (null !== ll) {
            var e = tk(lo),
              t = iq.transition,
              n = tS;
            try {
              if (((iq.transition = null), (tS = 16 > e ? 16 : e), null === ll))
                var r = !1;
              else {
                if (((e = ll), (ll = null), (lo = 0), 0 != (6 & iY)))
                  throw Error(f(331));
                var i = iY;
                for (iY |= 4, im = e.current; null !== im; ) {
                  var l = im,
                    o = l.child;
                  if (0 != (16 & im.flags)) {
                    var a = l.deletions;
                    if (null !== a) {
                      for (var u = 0; u < a.length; u++) {
                        var s = a[u];
                        for (im = s; null !== im; ) {
                          var c = im;
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              iw(8, c, l);
                          }
                          var d = c.child;
                          if (null !== d) ((d.return = c), (im = d));
                          else
                            for (; null !== im; ) {
                              var p = (c = im).sibling,
                                h = c.return;
                              if (
                                (!(function e(t) {
                                  var n = t.alternate;
                                  (null !== n && ((t.alternate = null), e(n)),
                                    (t.child = null),
                                    (t.deletions = null),
                                    (t.sibling = null),
                                    5 === t.tag &&
                                      null !== (n = t.stateNode) &&
                                      en(n),
                                    (t.stateNode = null),
                                    (t.return = null),
                                    (t.dependencies = null),
                                    (t.memoizedProps = null),
                                    (t.memoizedState = null),
                                    (t.pendingProps = null),
                                    (t.stateNode = null),
                                    (t.updateQueue = null));
                                })(c),
                                c === s)
                              ) {
                                im = null;
                                break;
                              }
                              if (null !== p) {
                                ((p.return = h), (im = p));
                                break;
                              }
                              im = h;
                            }
                        }
                      }
                      var g = l.alternate;
                      if (null !== g) {
                        var m = g.child;
                        if (null !== m) {
                          g.child = null;
                          do {
                            var v = m.sibling;
                            ((m.sibling = null), (m = v));
                          } while (null !== m);
                        }
                      }
                      im = l;
                    }
                  }
                  if (0 != (2064 & l.subtreeFlags) && null !== o)
                    ((o.return = l), (im = o));
                  else
                    for (; null !== im; ) {
                      if (((l = im), 0 != (2048 & l.flags)))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            iw(9, l, l.return);
                        }
                      var b = l.sibling;
                      if (null !== b) {
                        ((b.return = l.return), (im = b));
                        break;
                      }
                      im = l.return;
                    }
                }
                var y = e.current;
                for (im = y; null !== im; ) {
                  var w = (o = im).child;
                  if (0 != (2064 & o.subtreeFlags) && null !== w)
                    ((w.return = o), (im = w));
                  else
                    for (o = y; null !== im; ) {
                      if (((a = im), 0 != (2048 & a.flags)))
                        try {
                          switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                              iE(9, a);
                          }
                        } catch (e) {
                          lz(a, a.return, e);
                        }
                      if (a === o) {
                        im = null;
                        break;
                      }
                      var E = a.sibling;
                      if (null !== E) {
                        ((E.return = a.return), (im = E));
                        break;
                      }
                      im = a.return;
                    }
                }
                if (
                  ((iY = i),
                  tB(),
                  tN && "function" == typeof tN.onPostCommitFiberRoot)
                )
                  try {
                    tN.onPostCommitFiberRoot(tM, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              ((tS = n), (iq.transition = t));
            }
          }
          return !1;
        }
        function lj(e, t, n) {
          ((t = rU(e, (t = rF(n, t)), 1)),
            t6(e, t),
            (t = lf()),
            null !== (e = lh(e, 1)) && (tE(e, 1, t), lg(e, t)));
        }
        function lz(e, t, n) {
          if (3 === e.tag) lj(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                lj(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === lr || !lr.has(r)))
                ) {
                  ((e = rW(t, (e = rF(n, e)), 1)),
                    t6(t, e),
                    (e = lf()),
                    null !== (t = lh(t, 1)) && (tE(t, 1, e), lg(t, e)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function lM(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (t = lf()),
            (e.pingedLanes |= e.suspendedLanes & n),
            iK === e &&
              (iZ & n) === n &&
              (4 === i1 ||
              (3 === i1 && (130023424 & iZ) === iZ && 500 > tP() - i9)
                ? lS(e, 0)
                : (i5 |= n)),
            lg(e, t));
        }
        function lN(e, t) {
          0 === t &&
            (0 == (1 & e.mode)
              ? (t = 1)
              : ((t = tm), 0 == (130023424 & (tm <<= 1)) && (tm = 4194304)));
          var n = lf();
          null !== (e = lh(e, t)) && (tE(e, t, n), lg(e, n));
        }
        function lI(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), lN(e, n));
        }
        function lL(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(f(314));
          }
          (null !== r && r.delete(t), lN(e, n));
        }
        function lD(e, t, n, r) {
          ((this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function lA(e, t, n, r) {
          return new lD(e, t, n, r);
        }
        function lF(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function lB(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = lA(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function lH(e, t, n, r, i, l) {
          var o = 2;
          if (((r = e), "function" == typeof e)) lF(e) && (o = 1);
          else if ("string" == typeof e) o = 5;
          else
            t: switch (e) {
              case g:
                return lU(n.children, i, l, t);
              case m:
                ((o = 8), (i |= 8));
                break;
              case v:
                return (
                  ((e = lA(12, n, t, 2 | i)).elementType = v),
                  (e.lanes = l),
                  e
                );
              case E:
                return (
                  ((e = lA(13, n, t, i)).elementType = E),
                  (e.lanes = l),
                  e
                );
              case x:
                return (
                  ((e = lA(19, n, t, i)).elementType = x),
                  (e.lanes = l),
                  e
                );
              case C:
                return lW(n, i, l, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case b:
                      o = 10;
                      break t;
                    case y:
                      o = 9;
                      break t;
                    case w:
                      o = 11;
                      break t;
                    case S:
                      o = 14;
                      break t;
                    case k:
                      ((o = 16), (r = null));
                      break t;
                  }
                throw Error(f(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = lA(o, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function lU(e, t, n, r) {
          return (((e = lA(7, e, r, t)).lanes = n), e);
        }
        function lW(e, t, n, r) {
          return (
            ((e = lA(22, e, r, t)).elementType = C),
            (e.lanes = n),
            (e.stateNode = {}),
            e
          );
        }
        function lV(e, t, n) {
          return (((e = lA(6, e, null, t)).lanes = n), e);
        }
        function lQ(e, t, n) {
          return (
            ((t = lA(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function lG(e, t, n, r, i) {
          ((this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = q),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = tw(0)),
            (this.expirationTimes = tw(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = tw(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            Z && (this.mutableSourceEagerHydrationData = null));
        }
        function lq(e, t, n, r, i, l, o, a, u) {
          return (
            (e = new lG(e, t, n, a, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = lA(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
            }),
            t3(l),
            e
          );
        }
        function lY(e) {
          if (!e) return tt;
          e = e._reactInternals;
          t: {
            if (P(e) !== e || 1 !== e.tag) throw Error(f(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break t;
                case 1:
                  if (to(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(f(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (to(n)) return ts(e, n, t);
          }
          return t;
        }
        function lK(e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(f(188));
            throw Error(f(268, (e = Object.keys(e).join(","))));
          }
          return null === (e = j(t)) ? null : e.stateNode;
        }
        function lX(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function lZ(e, t) {
          (lX(e, t), (e = e.alternate) && lX(e, t));
        }
        function lJ(e) {
          return null === (e = j(e)) ? null : e.stateNode;
        }
        function l0() {
          return null;
        }
        return (
          (o = function (e, t, n) {
            if (null !== e) {
              if (e.memoizedProps !== t.pendingProps || tr.current) r0 = !0;
              else {
                if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                  return (
                    (r0 = !1),
                    (function (e, t, n) {
                      switch (t.tag) {
                        case 3:
                          (ie(t), nj());
                          break;
                        case 5:
                          nG(t);
                          break;
                        case 1:
                          to(t.type) && tc(t);
                          break;
                        case 4:
                          nV(t, t.stateNode.containerInfo);
                          break;
                        case 10:
                          tK(t, t.type._context, t.memoizedProps.value);
                          break;
                        case 13:
                          var r = t.memoizedState;
                          if (null !== r) {
                            if (null !== r.dehydrated)
                              return (
                                te(nY, 1 & nY.current),
                                (t.flags |= 128),
                                null
                              );
                            if (0 != (n & t.child.childLanes))
                              return il(e, t, n);
                            return (
                              te(nY, 1 & nY.current),
                              null !== (e = id(e, t, n)) ? e.sibling : null
                            );
                          }
                          te(nY, 1 & nY.current);
                          break;
                        case 19:
                          if (
                            ((r = 0 != (n & t.childLanes)),
                            0 != (128 & e.flags))
                          ) {
                            if (r) return ic(e, t, n);
                            t.flags |= 128;
                          }
                          var i = t.memoizedState;
                          if (
                            (null !== i &&
                              ((i.rendering = null),
                              (i.tail = null),
                              (i.lastEffect = null)),
                            te(nY, nY.current),
                            !r)
                          )
                            return null;
                          break;
                        case 22:
                        case 23:
                          return ((t.lanes = 0), r5(e, t, n));
                      }
                      return id(e, t, n);
                    })(e, t, n)
                  );
                r0 = 0 != (131072 & e.flags);
              }
            } else
              ((r0 = !1), nS && 0 != (1048576 & t.flags) && nb(t, nf, t.index));
            switch (((t.lanes = 0), t.tag)) {
              case 2:
                var r = t.type;
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                  (e = t.pendingProps));
                var i = tl(t, tn.current);
                (tJ(t, n), (i = rt(null, t, r, e, i, n)));
                var l = rn();
                return (
                  (t.flags |= 1),
                  "object" == typeof i &&
                  null !== i &&
                  "function" == typeof i.render &&
                  void 0 === i.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      to(r) ? ((l = !0), tc(t)) : (l = !1),
                      (t.memoizedState =
                        null !== i.state && void 0 !== i.state
                          ? i.state
                          : null),
                      t3(t),
                      (i.updater = nr),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      na(t, r, e, n),
                      (t = r7(null, t, r, !0, l, n)))
                    : ((t.tag = 0),
                      nS && l && ny(t),
                      r1(null, t, i, n),
                      (t = t.child)),
                  t
                );
              case 16:
                r = t.elementType;
                t: {
                  switch (
                    (null !== e &&
                      ((e.alternate = null),
                      (t.alternate = null),
                      (t.flags |= 2)),
                    (e = t.pendingProps),
                    (r = (i = r._init)(r._payload)),
                    (t.type = r),
                    (i = t.tag =
                      (function (e) {
                        if ("function" == typeof e) return lF(e) ? 1 : 0;
                        if (null != e) {
                          if ((e = e.$$typeof) === w) return 11;
                          if (e === S) return 14;
                        }
                        return 2;
                      })(r)),
                    (e = tW(r, e)),
                    i)
                  ) {
                    case 0:
                      t = r8(null, t, r, e, n);
                      break t;
                    case 1:
                      t = r9(null, t, r, e, n);
                      break t;
                    case 11:
                      t = r2(null, t, r, e, n);
                      break t;
                    case 14:
                      t = r3(null, t, r, tW(r.type, e), n);
                      break t;
                  }
                  throw Error(f(306, r, ""));
                }
                return t;
              case 0:
                return (
                  (r = t.type),
                  (i = t.pendingProps),
                  (i = t.elementType === r ? i : tW(r, i)),
                  r8(e, t, r, i, n)
                );
              case 1:
                return (
                  (r = t.type),
                  (i = t.pendingProps),
                  (i = t.elementType === r ? i : tW(r, i)),
                  r9(e, t, r, i, n)
                );
              case 3:
                t: {
                  if ((ie(t), null === e)) throw Error(f(387));
                  ((r = t.pendingProps),
                    (i = (l = t.memoizedState).element),
                    t4(e, t),
                    t7(t, r, null, n));
                  var o = t.memoizedState;
                  if (((r = o.element), Z && l.isDehydrated)) {
                    if (
                      ((l = {
                        element: r,
                        isDehydrated: !1,
                        cache: o.cache,
                        transitions: o.transitions,
                      }),
                      (t.updateQueue.baseState = l),
                      (t.memoizedState = l),
                      256 & t.flags)
                    ) {
                      t = it(e, t, r, n, (i = Error(f(423))));
                      break t;
                    }
                    if (r !== i) {
                      t = it(e, t, r, n, (i = Error(f(424))));
                      break t;
                    }
                    for (
                      Z &&
                        ((nx = eU(t.stateNode.containerInfo)),
                        (nE = t),
                        (nS = !0),
                        (nC = null),
                        (nk = !1)),
                        n = nA(t, null, r, n),
                        t.child = n;
                      n;
                    )
                      ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                  } else {
                    if ((nj(), r === i)) {
                      t = id(e, t, n);
                      break t;
                    }
                    r1(e, t, r, n);
                  }
                  t = t.child;
                }
                return t;
              case 5:
                return (
                  nG(t),
                  null === e && nP(t),
                  (r = t.type),
                  (i = t.pendingProps),
                  (l = null !== e ? e.memoizedProps : null),
                  (o = i.children),
                  W(r, i)
                    ? (o = null)
                    : null !== l && W(r, l) && (t.flags |= 32),
                  r6(e, t),
                  r1(e, t, o, n),
                  t.child
                );
              case 6:
                return (null === e && nP(t), null);
              case 13:
                return il(e, t, n);
              case 4:
                return (
                  nV(t, t.stateNode.containerInfo),
                  (r = t.pendingProps),
                  null === e ? (t.child = nD(t, null, r, n)) : r1(e, t, r, n),
                  t.child
                );
              case 11:
                return (
                  (r = t.type),
                  (i = t.pendingProps),
                  (i = t.elementType === r ? i : tW(r, i)),
                  r2(e, t, r, i, n)
                );
              case 7:
                return (r1(e, t, t.pendingProps, n), t.child);
              case 8:
              case 12:
                return (r1(e, t, t.pendingProps.children, n), t.child);
              case 10:
                t: {
                  if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (l = t.memoizedProps),
                    tK(t, r, (o = i.value)),
                    null !== l)
                  ) {
                    if (tI(l.value, o)) {
                      if (l.children === i.children && !tr.current) {
                        t = id(e, t, n);
                        break t;
                      }
                    } else
                      for (
                        null !== (l = t.child) && (l.return = t);
                        null !== l;
                      ) {
                        var a = l.dependencies;
                        if (null !== a) {
                          o = l.child;
                          for (var u = a.firstContext; null !== u; ) {
                            if (u.context === r) {
                              if (1 === l.tag) {
                                (u = t5(-1, n & -n)).tag = 2;
                                var s = l.updateQueue;
                                if (null !== s) {
                                  var c = (s = s.shared).pending;
                                  (null === c
                                    ? (u.next = u)
                                    : ((u.next = c.next), (c.next = u)),
                                    (s.pending = u));
                                }
                              }
                              ((l.lanes |= n),
                                null !== (u = l.alternate) && (u.lanes |= n),
                                tZ(l.return, n, t),
                                (a.lanes |= n));
                              break;
                            }
                            u = u.next;
                          }
                        } else if (10 === l.tag)
                          o = l.type === t.type ? null : l.child;
                        else if (18 === l.tag) {
                          if (null === (o = l.return)) throw Error(f(341));
                          ((o.lanes |= n),
                            null !== (a = o.alternate) && (a.lanes |= n),
                            tZ(o, n, t),
                            (o = l.sibling));
                        } else o = l.child;
                        if (null !== o) o.return = l;
                        else
                          for (o = l; null !== o; ) {
                            if (o === t) {
                              o = null;
                              break;
                            }
                            if (null !== (l = o.sibling)) {
                              ((l.return = o.return), (o = l));
                              break;
                            }
                            o = o.return;
                          }
                        l = o;
                      }
                  }
                  (r1(e, t, i.children, n), (t = t.child));
                }
                return t;
              case 9:
                return (
                  (i = t.type),
                  (r = t.pendingProps.children),
                  tJ(t, n),
                  (r = r((i = t0(i)))),
                  (t.flags |= 1),
                  r1(e, t, r, n),
                  t.child
                );
              case 14:
                return (
                  (i = tW((r = t.type), t.pendingProps)),
                  (i = tW(r.type, i)),
                  r3(e, t, r, i, n)
                );
              case 15:
                return r4(e, t, t.type, t.pendingProps, n);
              case 17:
                return (
                  (r = t.type),
                  (i = t.pendingProps),
                  (i = t.elementType === r ? i : tW(r, i)),
                  null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (t.tag = 1),
                  to(r) ? ((e = !0), tc(t)) : (e = !1),
                  tJ(t, n),
                  nl(t, r, i),
                  na(t, r, i, n),
                  r7(null, t, r, !0, e, n)
                );
              case 19:
                return ic(e, t, n);
              case 22:
                return r5(e, t, n);
            }
            throw Error(f(156, t.tag));
          }),
          (a.attemptContinuousHydration = function (e) {
            13 === e.tag && (lp(e, 134217728, lf()), lZ(e, 134217728));
          }),
          (a.attemptHydrationAtCurrentPriority = function (e) {
            if (13 === e.tag) {
              var t = lf(),
                n = ld(e);
              (lp(e, n, t), lZ(e, n));
            }
          }),
          (a.attemptSynchronousHydration = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = tv(t.pendingLanes);
                  0 !== n &&
                    (tx(t, 1 | n), lg(t, tP()), 0 == (6 & iY) && (le(), tB()));
                }
                break;
              case 13:
                var r = lf();
                (lE(function () {
                  return lp(e, 1, r);
                }),
                  lZ(e, 1));
            }
          }),
          (a.batchedUpdates = function (e, t) {
            var n = iY;
            iY |= 1;
            try {
              return e(t);
            } finally {
              0 === (iY = n) && (le(), tD && tB());
            }
          }),
          (a.createComponentSelector = function (e) {
            return { $$typeof: iM, value: e };
          }),
          (a.createContainer = function (e, t, n, r, i, l, o) {
            return lq(e, t, !1, null, n, r, i, l, o);
          }),
          (a.createHasPseudoClassSelector = function (e) {
            return { $$typeof: iN, value: e };
          }),
          (a.createHydrationContainer = function (e, t, n, r, i, l, o, a, u) {
            return (
              ((e = lq(n, r, !0, e, i, l, o, a, u)).context = lY(null)),
              (n = e.current),
              ((l = t5((r = lf()), (i = ld(n)))).callback =
                null != t ? t : null),
              t6(n, l),
              (e.current.lanes = i),
              tE(e, i, r),
              lg(e, r),
              e
            );
          }),
          (a.createPortal = function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: h,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          }),
          (a.createRoleSelector = function (e) {
            return { $$typeof: iI, value: e };
          }),
          (a.createTestNameSelector = function (e) {
            return { $$typeof: iL, value: e };
          }),
          (a.createTextSelector = function (e) {
            return { $$typeof: iD, value: e };
          }),
          (a.deferredUpdates = function (e) {
            var t = tS,
              n = iq.transition;
            try {
              return ((iq.transition = null), (tS = 16), e());
            } finally {
              ((tS = t), (iq.transition = n));
            }
          }),
          (a.discreteUpdates = function (e, t, n, r, i) {
            var l = tS,
              o = iq.transition;
            try {
              return ((iq.transition = null), (tS = 1), e(t, n, r, i));
            } finally {
              ((tS = l), (iq.transition = o), 0 === iY && le());
            }
          }),
          (a.findAllNodes = iW),
          (a.findBoundingRects = function (e, t) {
            if (!el) throw Error(f(363));
            ((t = iW(e, t)), (e = []));
            for (var n = 0; n < t.length; n++) e.push(ea(t[n]));
            for (t = e.length - 1; 0 < t; t--) {
              n = e[t];
              for (
                var r = n.x,
                  i = r + n.width,
                  l = n.y,
                  o = l + n.height,
                  a = t - 1;
                0 <= a;
                a--
              )
                if (t !== a) {
                  var u = e[a],
                    s = u.x,
                    c = s + u.width,
                    d = u.y,
                    p = d + u.height;
                  if (r >= s && l >= d && i <= c && o <= p) {
                    e.splice(t, 1);
                    break;
                  }
                  if (r !== s || n.width !== u.width || p < l || d > o) {
                    if (!(l !== d || n.height !== u.height || c < r || s > i)) {
                      (s > r && ((u.width += s - r), (u.x = r)),
                        c < i && (u.width = i - s),
                        e.splice(t, 1));
                      break;
                    }
                  } else {
                    (d > l && ((u.height += d - l), (u.y = l)),
                      p < o && (u.height = o - d),
                      e.splice(t, 1));
                    break;
                  }
                }
            }
            return e;
          }),
          (a.findHostInstance = lK),
          (a.findHostInstanceWithNoPortals = function (e) {
            return null ===
              (e =
                null !== (e = $(e))
                  ? (function e(t) {
                      if (5 === t.tag || 6 === t.tag) return t;
                      for (t = t.child; null !== t; ) {
                        if (4 !== t.tag) {
                          var n = e(t);
                          if (null !== n) return n;
                        }
                        t = t.sibling;
                      }
                      return null;
                    })(e)
                  : null)
              ? null
              : e.stateNode;
          }),
          (a.findHostInstanceWithWarning = function (e) {
            return lK(e);
          }),
          (a.flushControlled = function (e) {
            var t = iY;
            iY |= 1;
            var n = iq.transition,
              r = tS;
            try {
              ((iq.transition = null), (tS = 1), e());
            } finally {
              ((tS = r), (iq.transition = n), 0 === (iY = t) && (le(), tB()));
            }
          }),
          (a.flushPassiveEffects = l$),
          (a.flushSync = lE),
          (a.focusWithin = function (e, t) {
            if (!el) throw Error(f(363));
            for (
              t = Array.from((t = iU((e = iF(e)), t))), e = 0;
              e < t.length;
            ) {
              var n = t[e++];
              if (!es(n)) {
                if (5 === n.tag && ef(n.stateNode)) return !0;
                for (n = n.child; null !== n; ) (t.push(n), (n = n.sibling));
              }
            }
            return !1;
          }),
          (a.getCurrentUpdatePriority = function () {
            return tS;
          }),
          (a.getFindAllNodesFailureDescription = function (e, t) {
            if (!el) throw Error(f(363));
            var n = 0,
              r = [];
            e = [iF(e), 0];
            for (var i = 0; i < e.length; ) {
              var l = e[i++],
                o = e[i++],
                a = t[o];
              if (
                (5 !== l.tag || !es(l)) &&
                (iB(l, a) && (r.push(iH(a)), ++o > n && (n = o)), o < t.length)
              )
                for (l = l.child; null !== l; ) (e.push(l, o), (l = l.sibling));
            }
            if (n < t.length) {
              for (e = []; n < t.length; n++) e.push(iH(t[n]));
              return (
                "findAllNodes was able to match part of the selector:\n  " +
                r.join(" > ") +
                "\n\nNo matching component was found for:\n  " +
                e.join(" > ")
              );
            }
            return null;
          }),
          (a.getPublicRootInstance = function (e) {
            return (e = e.current).child
              ? 5 === e.child.tag
                ? N(e.child.stateNode)
                : e.child.stateNode
              : null;
          }),
          (a.injectIntoDevTools = function (e) {
            if (
              ((e = {
                bundleType: e.bundleType,
                version: e.version,
                rendererPackageName: e.rendererPackageName,
                rendererConfig: e.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: d.ReactCurrentDispatcher,
                findHostInstanceByFiber: lJ,
                findFiberByHostInstance: e.findFiberByHostInstance || l0,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.0.0-fc46dba67-20220329",
              }),
              "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
            )
              e = !1;
            else {
              var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (t.isDisabled || !t.supportsFiber) e = !0;
              else {
                try {
                  ((tM = t.inject(e)), (tN = t));
                } catch (e) {}
                e = !!t.checkDCE;
              }
            }
            return e;
          }),
          (a.isAlreadyRendering = function () {
            return !1;
          }),
          (a.observeVisibleRects = function (e, t, n, r) {
            if (!el) throw Error(f(363));
            var i = ed((e = iW(e, t)), n, r).disconnect;
            return {
              disconnect: function () {
                i();
              },
            };
          }),
          (a.registerMutableSourceForHydration = function (e, t) {
            var n = t._getVersion;
            ((n = n(t._source)),
              null == e.mutableSourceEagerHydrationData
                ? (e.mutableSourceEagerHydrationData = [t, n])
                : e.mutableSourceEagerHydrationData.push(t, n));
          }),
          (a.runWithPriority = function (e, t) {
            var n = tS;
            try {
              return ((tS = e), t());
            } finally {
              tS = n;
            }
          }),
          (a.shouldError = function () {
            return null;
          }),
          (a.shouldSuspend = function () {
            return !1;
          }),
          (a.updateContainer = function (e, t, n, r) {
            var i = t.current,
              l = lf(),
              o = ld(i);
            return (
              (n = lY(n)),
              null === t.context ? (t.context = n) : (t.pendingContext = n),
              ((t = t5(l, o)).payload = { element: e }),
              null !== (r = void 0 === r ? null : r) && (t.callback = r),
              t6(i, t),
              null !== (e = lp(i, o, l)) && t8(e, i, o),
              o
            );
          }),
          a
        );
      };
    },
    5259: function (e, t, n) {
      "use strict";
      e.exports = n(3406);
    },
    7427: function (e, t, n) {
      "use strict";
      e.exports = n(5658);
    },
    247: function (e, t) {
      "use strict";
      function n(e, t) {
        var n = e.length;
        for (e.push(t); 0 < n; ) {
          var r = (n - 1) >>> 1,
            i = e[r];
          if (0 < l(i, t)) ((e[r] = t), (e[n] = i), (n = r));
          else break;
        }
      }
      function r(e) {
        return 0 === e.length ? null : e[0];
      }
      function i(e) {
        if (0 === e.length) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
            var a = 2 * (r + 1) - 1,
              u = e[a],
              s = a + 1,
              c = e[s];
            if (0 > l(u, n))
              s < i && 0 > l(c, u)
                ? ((e[r] = c), (e[s] = n), (r = s))
                : ((e[r] = u), (e[a] = n), (r = a));
            else if (s < i && 0 > l(c, n)) ((e[r] = c), (e[s] = n), (r = s));
            else break;
          }
        }
        return t;
      }
      function l(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var o,
          a = performance;
        t.unstable_now = function () {
          return a.now();
        };
      } else {
        var u = Date,
          s = u.now();
        t.unstable_now = function () {
          return u.now() - s;
        };
      }
      var c = [],
        f = [],
        d = 1,
        p = null,
        h = 3,
        g = !1,
        m = !1,
        v = !1,
        b = "function" == typeof setTimeout ? setTimeout : null,
        y = "function" == typeof clearTimeout ? clearTimeout : null,
        w = "undefined" != typeof setImmediate ? setImmediate : null;
      function E(e) {
        for (var t = r(f); null !== t; ) {
          if (null === t.callback) i(f);
          else if (t.startTime <= e)
            (i(f), (t.sortIndex = t.expirationTime), n(c, t));
          else break;
          t = r(f);
        }
      }
      function x(e) {
        if (((v = !1), E(e), !m)) {
          if (null !== r(c)) ((m = !0), z(S));
          else {
            var t = r(f);
            null !== t && M(x, t.startTime - e);
          }
        }
      }
      function S(e, n) {
        ((m = !1), v && ((v = !1), y(_), (_ = -1)), (g = !0));
        var l = h;
        try {
          for (
            E(n), p = r(c);
            null !== p && (!(p.expirationTime > n) || (e && !P()));
          ) {
            var o = p.callback;
            if ("function" == typeof o) {
              ((p.callback = null), (h = p.priorityLevel));
              var a = o(p.expirationTime <= n);
              ((n = t.unstable_now()),
                "function" == typeof a ? (p.callback = a) : p === r(c) && i(c),
                E(n));
            } else i(c);
            p = r(c);
          }
          if (null !== p) var u = !0;
          else {
            var s = r(f);
            (null !== s && M(x, s.startTime - n), (u = !1));
          }
          return u;
        } finally {
          ((p = null), (h = l), (g = !1));
        }
      }
      "undefined" != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var k = !1,
        C = null,
        _ = -1,
        R = 5,
        T = -1;
      function P() {
        return !(t.unstable_now() - T < R);
      }
      function O() {
        if (null !== C) {
          var e = t.unstable_now();
          T = e;
          var n = !0;
          try {
            n = C(!0, e);
          } finally {
            n ? o() : ((k = !1), (C = null));
          }
        } else k = !1;
      }
      if ("function" == typeof w)
        o = function () {
          w(O);
        };
      else if ("undefined" != typeof MessageChannel) {
        var $ = new MessageChannel(),
          j = $.port2;
        (($.port1.onmessage = O),
          (o = function () {
            j.postMessage(null);
          }));
      } else
        o = function () {
          b(O, 0);
        };
      function z(e) {
        ((C = e), k || ((k = !0), o()));
      }
      function M(e, n) {
        _ = b(function () {
          e(t.unstable_now());
        }, n);
      }
      ((t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          m || g || ((m = !0), z(S));
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : (R = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return h;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(c);
        }),
        (t.unstable_next = function (e) {
          switch (h) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = h;
          }
          var n = h;
          h = t;
          try {
            return e();
          } finally {
            h = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = h;
          h = e;
          try {
            return t();
          } finally {
            h = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, i, l) {
          var o = t.unstable_now();
          switch (
            ((l =
              "object" == typeof l &&
              null !== l &&
              "number" == typeof (l = l.delay) &&
              0 < l
                ? o + l
                : o),
            e)
          ) {
            case 1:
              var a = -1;
              break;
            case 2:
              a = 250;
              break;
            case 5:
              a = 1073741823;
              break;
            case 4:
              a = 1e4;
              break;
            default:
              a = 5e3;
          }
          return (
            (a = l + a),
            (e = {
              id: d++,
              callback: i,
              priorityLevel: e,
              startTime: l,
              expirationTime: a,
              sortIndex: -1,
            }),
            l > o
              ? ((e.sortIndex = l),
                n(f, e),
                null === r(c) &&
                  e === r(f) &&
                  (v ? (y(_), (_ = -1)) : (v = !0), M(x, l - o)))
              : ((e.sortIndex = a), n(c, e), m || g || ((m = !0), z(S))),
            e
          );
        }),
        (t.unstable_shouldYield = P),
        (t.unstable_wrapCallback = function (e) {
          var t = h;
          return function () {
            var n = h;
            h = t;
            try {
              return e.apply(this, arguments);
            } finally {
              h = n;
            }
          };
        }));
    },
    5297: function (e, t, n) {
      "use strict";
      e.exports = n(247);
    },
    8930: function (e, t, n) {
      "use strict";
      var r = n(9593),
        i = n(8396),
        l = n(6805),
        o = n(3566);
      function a(e) {
        return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
      }
      e.exports = function (e, t, n) {
        if (
          !o(e) ||
          (Array.isArray(t) && (t = [].concat.apply([], t).join(".")),
          "string" != typeof t)
        )
          return e;
        for (
          var u = r(t, { sep: ".", brackets: !0 }).filter(a),
            s = u.length,
            c = -1,
            f = e;
          ++c < s;
        ) {
          var d = u[c];
          if (c !== s - 1) {
            (o(f[d]) || (f[d] = {}), (f = f[d]));
            continue;
          }
          l(f[d]) && l(n) ? (f[d] = i({}, f[d], n)) : (f[d] = n);
        }
        return e;
      };
    },
    9593: function (e, t, n) {
      "use strict";
      var r = n(5582);
      function i(e, t, n, r) {
        var l = e.indexOf(t, n);
        return "\\" === e.charAt(l - 1) ? i(e, t, l + 1) : l;
      }
      e.exports = function (e, t, n) {
        if ("string" != typeof e) throw TypeError("expected a string");
        ("function" == typeof t && ((n = t), (t = null)),
          "string" == typeof t && (t = { sep: t }));
        var l,
          o,
          a = r({ sep: "." }, t),
          u = a.quotes || ['"', "'", "`"];
        !0 === a.brackets
          ? (l = { "<": ">", "(": ")", "[": "]", "{": "}" })
          : a.brackets && (l = a.brackets);
        var s = [],
          c = [],
          f = [""],
          d = a.sep,
          p = e.length,
          h = -1;
        function g() {
          if (l && c.length) return l[c[c.length - 1]];
        }
        for (; ++h < p; ) {
          var m,
            v,
            b = e[h],
            y = e[h + 1],
            w = { val: b, idx: h, arr: f, str: e };
          if ((s.push(w), "\\" === b)) {
            ((w.val =
              !0 ===
              ((m = h),
              "function" == typeof a.keepEscaping
                ? a.keepEscaping(e, m)
                : !0 === a.keepEscaping || "\\" === e[m + 1])
                ? b + y
                : y),
              (w.escaped = !0),
              "function" == typeof n && n(w),
              (f[f.length - 1] += w.val),
              h++);
            continue;
          }
          if (l && l[b]) {
            c.push(b);
            var E = g(),
              x = h + 1;
            if (-1 !== e.indexOf(E, x + 1))
              for (; c.length && x < p; ) {
                var S = e[++x];
                if ("\\" === S) {
                  S++;
                  continue;
                }
                if (-1 !== u.indexOf(S)) {
                  x = i(e, S, x + 1);
                  continue;
                }
                if (((E = g()), c.length && -1 === e.indexOf(E, x + 1))) break;
                if (l[S]) {
                  c.push(S);
                  continue;
                }
                E === S && c.pop();
              }
            if (-1 === (o = x)) {
              f[f.length - 1] += b;
              continue;
            }
            ((b = e.slice(h, o + 1)), (w.val = b), (w.idx = h = o));
          }
          if (-1 !== u.indexOf(b)) {
            if (-1 === (o = i(e, b, h + 1))) {
              f[f.length - 1] += b;
              continue;
            }
            ((b =
              !0 ===
              ((v = b),
              (!0 === a.keepDoubleQuotes && '"' === v) ||
                (!0 === a.keepSingleQuotes && "'" === v) ||
                a.keepQuotes)
                ? e.slice(h, o + 1)
                : e.slice(h + 1, o)),
              (w.val = b),
              (w.idx = h = o));
          }
          if (
            ("function" == typeof n && (n(w, s), (b = w.val), (h = w.idx)),
            w.val === d && !1 !== w.split)
          ) {
            f.push("");
            continue;
          }
          f[f.length - 1] += w.val;
        }
        return f;
      };
    },
    1171: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(959);
      let i =
        "undefined" == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? r.useEffect
          : r.useLayoutEffect;
      function l(e) {
        let t =
            "function" == typeof e
              ? (function (e) {
                  let t;
                  let n = new Set(),
                    r = (e, r) => {
                      let i = "function" == typeof e ? e(t) : e;
                      if (i !== t) {
                        let e = t;
                        ((t = r ? i : Object.assign({}, t, i)),
                          n.forEach((n) => n(t, e)));
                      }
                    },
                    i = () => t,
                    l = (e, r = i, l = Object.is) => {
                      console.warn(
                        "[DEPRECATED] Please use `subscribeWithSelector` middleware",
                      );
                      let o = r(t);
                      function a() {
                        let n = r(t);
                        if (!l(o, n)) {
                          let t = o;
                          e((o = n), t);
                        }
                      }
                      return (n.add(a), () => n.delete(a));
                    },
                    o = {
                      setState: r,
                      getState: i,
                      subscribe: (e, t, r) =>
                        t || r ? l(e, t, r) : (n.add(e), () => n.delete(e)),
                      destroy: () => n.clear(),
                    };
                  return ((t = e(r, i, o)), o);
                })(e)
              : e,
          n = (e = t.getState, n = Object.is) => {
            let l;
            let [, o] = (0, r.useReducer)((e) => e + 1, 0),
              a = t.getState(),
              u = (0, r.useRef)(a),
              s = (0, r.useRef)(e),
              c = (0, r.useRef)(n),
              f = (0, r.useRef)(!1),
              d = (0, r.useRef)();
            void 0 === d.current && (d.current = e(a));
            let p = !1;
            ((u.current !== a ||
              s.current !== e ||
              c.current !== n ||
              f.current) &&
              ((l = e(a)), (p = !n(d.current, l))),
              i(() => {
                (p && (d.current = l),
                  (u.current = a),
                  (s.current = e),
                  (c.current = n),
                  (f.current = !1));
              }));
            let h = (0, r.useRef)(a);
            i(() => {
              let e = () => {
                  try {
                    let e = t.getState(),
                      n = s.current(e);
                    c.current(d.current, n) ||
                      ((u.current = e), (d.current = n), o());
                  } catch (e) {
                    ((f.current = !0), o());
                  }
                },
                n = t.subscribe(e);
              return (t.getState() !== h.current && e(), n);
            }, []);
            let g = p ? l : d.current;
            return ((0, r.useDebugValue)(g), g);
          };
        return (
          Object.assign(n, t),
          (n[Symbol.iterator] = function () {
            console.warn(
              "[useStore, api] = create() is deprecated and will be removed in v4",
            );
            let e = [n, t];
            return {
              next() {
                let t = e.length <= 0;
                return { value: e.shift(), done: t };
              },
            };
          }),
          n
        );
      }
    },
    8401: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return i;
        },
      });
      var r = n(7691);
      let i = (0, n(1573).p1)(r.rk, { blendFunction: r.YQ.ADD });
    },
    8453: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return a;
        },
      });
      var r = n(1527),
        i = n(3086),
        l = n(7691),
        o = n(959);
      let a = (0, o.forwardRef)(function (
        { lut: e, tetrahedralInterpolation: t, ...n },
        a,
      ) {
        let u = (0, o.useMemo)(() => new l.CI(e, n), [e, n]),
          s = (0, i.D)((e) => e.invalidate);
        return (
          (0, o.useLayoutEffect)(() => {
            (t && (u.tetrahedralInterpolation = t), e && (u.lut = e), s());
          }, [u, s, e, t]),
          (0, r.jsx)("primitive", { ref: a, object: u, dispose: null })
        );
      });
    },
    9224: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return i;
        },
      });
      var r = n(7691);
      let i = (0, n(1573).p1)(r.xV, { blendFunction: r.YQ.COLOR_DODGE });
    },
    3204: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var r = n(7691);
      let i = (0, n(1573).p1)(r.fY);
    },
    3624: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return o;
        },
      });
      var r = n(1527),
        i = n(7691),
        l = n(959);
      let o = (0, l.forwardRef)(function (
        {
          blendFunction: e,
          adaptive: t,
          mode: n,
          resolution: o,
          maxLuminance: a,
          whitePoint: u,
          middleGrey: s,
          minLuminance: c,
          averageLuminance: f,
          adaptationRate: d,
          ...p
        },
        h,
      ) {
        let g = (0, l.useMemo)(
          () =>
            new i.M4({
              blendFunction: e,
              adaptive: t,
              mode: n,
              resolution: o,
              maxLuminance: a,
              whitePoint: u,
              middleGrey: s,
              minLuminance: c,
              averageLuminance: f,
              adaptationRate: d,
            }),
          [e, t, n, o, a, u, s, c, f, d],
        );
        return (
          (0, l.useEffect)(() => {
            g.dispose();
          }, [g]),
          (0, r.jsx)("primitive", {
            ...p,
            ref: h,
            object: g,
            attributes: i.VB.CONVOLUTION,
          })
        );
      });
    },
    1573: function (e, t, n) {
      "use strict";
      n.d(t, {
        p1: function () {
          return u;
        },
      });
      var r = n(1527),
        i = n(959),
        l = n(3086);
      let o = 0,
        a = new WeakMap(),
        u = (e, t) =>
          i.forwardRef(function (
            {
              blendFunction: n = null == t ? void 0 : t.blendFunction,
              opacity: u = null == t ? void 0 : t.opacity,
              ...s
            },
            c,
          ) {
            let f = a.get(e);
            if (!f) {
              let t = `@react-three/postprocessing/${e.name}-${o++}`;
              ((0, l.e)({ [t]: e }), a.set(e, (f = t)));
            }
            let d = (0, l.D)((e) => e.camera),
              p = i.useMemo(() => {
                var e, n;
                return [
                  ...(null != (e = null == t ? void 0 : t.args) ? e : []),
                  ...(null != (n = s.args) ? n : [{ ...t, ...s }]),
                ];
              }, [JSON.stringify(s)]);
            return (0, r.jsx)(f, {
              camera: d,
              "blendMode-blendFunction": n,
              "blendMode-opacity-value": u,
              ...s,
              ref: c,
              args: p,
            });
          });
    },
    1583: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return o;
        },
      });
      var r = Object.defineProperty,
        i = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        l = (e, t, n) => (i(e, "symbol" != typeof t ? t + "" : t, n), n);
      class o {
        constructor(e = Math) {
          (l(this, "grad3", [
            [1, 1, 0],
            [-1, 1, 0],
            [1, -1, 0],
            [-1, -1, 0],
            [1, 0, 1],
            [-1, 0, 1],
            [1, 0, -1],
            [-1, 0, -1],
            [0, 1, 1],
            [0, -1, 1],
            [0, 1, -1],
            [0, -1, -1],
          ]),
            l(this, "grad4", [
              [0, 1, 1, 1],
              [0, 1, 1, -1],
              [0, 1, -1, 1],
              [0, 1, -1, -1],
              [0, -1, 1, 1],
              [0, -1, 1, -1],
              [0, -1, -1, 1],
              [0, -1, -1, -1],
              [1, 0, 1, 1],
              [1, 0, 1, -1],
              [1, 0, -1, 1],
              [1, 0, -1, -1],
              [-1, 0, 1, 1],
              [-1, 0, 1, -1],
              [-1, 0, -1, 1],
              [-1, 0, -1, -1],
              [1, 1, 0, 1],
              [1, 1, 0, -1],
              [1, -1, 0, 1],
              [1, -1, 0, -1],
              [-1, 1, 0, 1],
              [-1, 1, 0, -1],
              [-1, -1, 0, 1],
              [-1, -1, 0, -1],
              [1, 1, 1, 0],
              [1, 1, -1, 0],
              [1, -1, 1, 0],
              [1, -1, -1, 0],
              [-1, 1, 1, 0],
              [-1, 1, -1, 0],
              [-1, -1, 1, 0],
              [-1, -1, -1, 0],
            ]),
            l(this, "p", []),
            l(this, "perm", []),
            l(this, "simplex", [
              [0, 1, 2, 3],
              [0, 1, 3, 2],
              [0, 0, 0, 0],
              [0, 2, 3, 1],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [1, 2, 3, 0],
              [0, 2, 1, 3],
              [0, 0, 0, 0],
              [0, 3, 1, 2],
              [0, 3, 2, 1],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [1, 3, 2, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [1, 2, 0, 3],
              [0, 0, 0, 0],
              [1, 3, 0, 2],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [2, 3, 0, 1],
              [2, 3, 1, 0],
              [1, 0, 2, 3],
              [1, 0, 3, 2],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [2, 0, 3, 1],
              [0, 0, 0, 0],
              [2, 1, 3, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [2, 0, 1, 3],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [3, 0, 1, 2],
              [3, 0, 2, 1],
              [0, 0, 0, 0],
              [3, 1, 2, 0],
              [2, 1, 0, 3],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [3, 1, 0, 2],
              [0, 0, 0, 0],
              [3, 2, 0, 1],
              [3, 2, 1, 0],
            ]),
            l(this, "dot", (e, t, n) => e[0] * t + e[1] * n),
            l(this, "dot3", (e, t, n, r) => e[0] * t + e[1] * n + e[2] * r),
            l(
              this,
              "dot4",
              (e, t, n, r, i) => e[0] * t + e[1] * n + e[2] * r + e[3] * i,
            ),
            l(this, "noise", (e, t) => {
              let n, r, i;
              let l = 0.5 * (Math.sqrt(3) - 1) * (e + t),
                o = Math.floor(e + l),
                a = Math.floor(t + l),
                u = (3 - Math.sqrt(3)) / 6,
                s = (o + a) * u,
                c = e - (o - s),
                f = t - (a - s),
                d = 0,
                p = 1;
              c > f && ((d = 1), (p = 0));
              let h = c - d + u,
                g = f - p + u,
                m = c - 1 + 2 * u,
                v = f - 1 + 2 * u,
                b = 255 & o,
                y = 255 & a,
                w = this.perm[b + this.perm[y]] % 12,
                E = this.perm[b + d + this.perm[y + p]] % 12,
                x = this.perm[b + 1 + this.perm[y + 1]] % 12,
                S = 0.5 - c * c - f * f;
              S < 0
                ? (n = 0)
                : ((S *= S), (n = S * S * this.dot(this.grad3[w], c, f)));
              let k = 0.5 - h * h - g * g;
              k < 0
                ? (r = 0)
                : ((k *= k), (r = k * k * this.dot(this.grad3[E], h, g)));
              let C = 0.5 - m * m - v * v;
              return (
                C < 0
                  ? (i = 0)
                  : ((C *= C), (i = C * C * this.dot(this.grad3[x], m, v))),
                70 * (n + r + i)
              );
            }),
            l(this, "noise3d", (e, t, n) => {
              let r, i, l, o, a, u, s, c, f, d;
              let p = (1 / 3) * (e + t + n),
                h = Math.floor(e + p),
                g = Math.floor(t + p),
                m = Math.floor(n + p),
                v = (1 / 6) * (h + g + m),
                b = e - (h - v),
                y = t - (g - v),
                w = n - (m - v);
              b >= y
                ? y >= w
                  ? ((a = 1), (u = 0), (s = 0), (c = 1), (f = 1), (d = 0))
                  : (b >= w
                      ? ((a = 1), (u = 0), (s = 0))
                      : ((a = 0), (u = 0), (s = 1)),
                    (c = 1),
                    (f = 0),
                    (d = 1))
                : y < w
                  ? ((a = 0), (u = 0), (s = 1), (c = 0), (f = 1), (d = 1))
                  : b < w
                    ? ((a = 0), (u = 1), (s = 0), (c = 0), (f = 1), (d = 1))
                    : ((a = 0), (u = 1), (s = 0), (c = 1), (f = 1), (d = 0));
              let E = b - a + 1 / 6,
                x = y - u + 1 / 6,
                S = w - s + 1 / 6,
                k = b - c + (1 / 6) * 2,
                C = y - f + (1 / 6) * 2,
                _ = w - d + (1 / 6) * 2,
                R = b - 1 + (1 / 6) * 3,
                T = y - 1 + (1 / 6) * 3,
                P = w - 1 + (1 / 6) * 3,
                O = 255 & h,
                $ = 255 & g,
                j = 255 & m,
                z = this.perm[O + this.perm[$ + this.perm[j]]] % 12,
                M = this.perm[O + a + this.perm[$ + u + this.perm[j + s]]] % 12,
                N = this.perm[O + c + this.perm[$ + f + this.perm[j + d]]] % 12,
                I = this.perm[O + 1 + this.perm[$ + 1 + this.perm[j + 1]]] % 12,
                L = 0.6 - b * b - y * y - w * w;
              L < 0
                ? (r = 0)
                : ((L *= L), (r = L * L * this.dot3(this.grad3[z], b, y, w)));
              let D = 0.6 - E * E - x * x - S * S;
              D < 0
                ? (i = 0)
                : ((D *= D), (i = D * D * this.dot3(this.grad3[M], E, x, S)));
              let A = 0.6 - k * k - C * C - _ * _;
              A < 0
                ? (l = 0)
                : ((A *= A), (l = A * A * this.dot3(this.grad3[N], k, C, _)));
              let F = 0.6 - R * R - T * T - P * P;
              return (
                F < 0
                  ? (o = 0)
                  : ((F *= F), (o = F * F * this.dot3(this.grad3[I], R, T, P))),
                32 * (r + i + l + o)
              );
            }),
            l(this, "noise4d", (e, t, n, r) => {
              let i, l, o, a, u, s, c, f, d, p, h, g, m, v, b, y, w;
              let E = this.grad4,
                x = this.simplex,
                S = this.perm,
                k = (5 - Math.sqrt(5)) / 20,
                C = ((Math.sqrt(5) - 1) / 4) * (e + t + n + r),
                _ = Math.floor(e + C),
                R = Math.floor(t + C),
                T = Math.floor(n + C),
                P = Math.floor(r + C),
                O = (_ + R + T + P) * k,
                $ = e - (_ - O),
                j = t - (R - O),
                z = n - (T - O),
                M = r - (P - O),
                N =
                  ($ > j ? 32 : 0) +
                  ($ > z ? 16 : 0) +
                  (j > z ? 8 : 0) +
                  ($ > M ? 4 : 0) +
                  (j > M ? 2 : 0) +
                  (z > M ? 1 : 0);
              ((s = x[N][0] >= 3 ? 1 : 0),
                (c = x[N][1] >= 3 ? 1 : 0),
                (f = x[N][2] >= 3 ? 1 : 0),
                (d = x[N][3] >= 3 ? 1 : 0),
                (p = x[N][0] >= 2 ? 1 : 0),
                (h = x[N][1] >= 2 ? 1 : 0),
                (g = x[N][2] >= 2 ? 1 : 0),
                (m = x[N][3] >= 2 ? 1 : 0),
                (v = x[N][0] >= 1 ? 1 : 0),
                (b = x[N][1] >= 1 ? 1 : 0),
                (y = x[N][2] >= 1 ? 1 : 0),
                (w = x[N][3] >= 1 ? 1 : 0));
              let I = $ - s + k,
                L = j - c + k,
                D = z - f + k,
                A = M - d + k,
                F = $ - p + 2 * k,
                B = j - h + 2 * k,
                H = z - g + 2 * k,
                U = M - m + 2 * k,
                W = $ - v + 3 * k,
                V = j - b + 3 * k,
                Q = z - y + 3 * k,
                G = M - w + 3 * k,
                q = $ - 1 + 4 * k,
                Y = j - 1 + 4 * k,
                K = z - 1 + 4 * k,
                X = M - 1 + 4 * k,
                Z = 255 & _,
                J = 255 & R,
                ee = 255 & T,
                et = 255 & P,
                en = S[Z + S[J + S[ee + S[et]]]] % 32,
                er = S[Z + s + S[J + c + S[ee + f + S[et + d]]]] % 32,
                ei = S[Z + p + S[J + h + S[ee + g + S[et + m]]]] % 32,
                el = S[Z + v + S[J + b + S[ee + y + S[et + w]]]] % 32,
                eo = S[Z + 1 + S[J + 1 + S[ee + 1 + S[et + 1]]]] % 32,
                ea = 0.6 - $ * $ - j * j - z * z - M * M;
              ea < 0
                ? (i = 0)
                : ((ea *= ea), (i = ea * ea * this.dot4(E[en], $, j, z, M)));
              let eu = 0.6 - I * I - L * L - D * D - A * A;
              eu < 0
                ? (l = 0)
                : ((eu *= eu), (l = eu * eu * this.dot4(E[er], I, L, D, A)));
              let es = 0.6 - F * F - B * B - H * H - U * U;
              es < 0
                ? (o = 0)
                : ((es *= es), (o = es * es * this.dot4(E[ei], F, B, H, U)));
              let ec = 0.6 - W * W - V * V - Q * Q - G * G;
              ec < 0
                ? (a = 0)
                : ((ec *= ec), (a = ec * ec * this.dot4(E[el], W, V, Q, G)));
              let ef = 0.6 - q * q - Y * Y - K * K - X * X;
              return (
                ef < 0
                  ? (u = 0)
                  : ((ef *= ef), (u = ef * ef * this.dot4(E[eo], q, Y, K, X))),
                27 * (i + l + o + a + u)
              );
            }));
          for (let t = 0; t < 256; t++)
            this.p[t] = Math.floor(256 * e.random());
          for (let e = 0; e < 512; e++) this.perm[e] = this.p[255 & e];
        }
      }
    },
    6511: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return i;
        },
      });
      var r = n(9892);
      class i {
        constructor(e, t, n) {
          ((this.variables = []), (this.currentTextureIndex = 0));
          let i = r.FloatType,
            l = new r.Scene(),
            o = new r.Camera();
          o.position.z = 1;
          let a = { passThruTexture: { value: null } },
            u = f(
              "uniform sampler2D passThruTexture;\n\nvoid main() {\n\n	vec2 uv = gl_FragCoord.xy / resolution.xy;\n\n	gl_FragColor = texture2D( passThruTexture, uv );\n\n}\n",
              a,
            ),
            s = new r.Mesh(new r.PlaneGeometry(2, 2), u);
          function c(n) {
            n.defines.resolution =
              "vec2( " + e.toFixed(1) + ", " + t.toFixed(1) + " )";
          }
          function f(e, t) {
            t = t || {};
            let n = new r.ShaderMaterial({
              uniforms: t,
              vertexShader:
                "void main()	{\n\n	gl_Position = vec4( position, 1.0 );\n\n}\n",
              fragmentShader: e,
            });
            return (c(n), n);
          }
          (l.add(s),
            (this.setDataType = function (e) {
              return ((i = e), this);
            }),
            (this.addVariable = function (e, t, n) {
              let i = {
                name: e,
                initialValueTexture: n,
                material: this.createShaderMaterial(t),
                dependencies: null,
                renderTargets: [],
                wrapS: null,
                wrapT: null,
                minFilter: r.NearestFilter,
                magFilter: r.NearestFilter,
              };
              return (this.variables.push(i), i);
            }),
            (this.setVariableDependencies = function (e, t) {
              e.dependencies = t;
            }),
            (this.init = function () {
              if (
                !1 === n.capabilities.isWebGL2 &&
                !1 === n.extensions.has("OES_texture_float")
              )
                return "No OES_texture_float support for float textures.";
              if (0 === n.capabilities.maxVertexTextures)
                return "No support for vertex shader textures.";
              for (let n = 0; n < this.variables.length; n++) {
                let r = this.variables[n];
                ((r.renderTargets[0] = this.createRenderTarget(
                  e,
                  t,
                  r.wrapS,
                  r.wrapT,
                  r.minFilter,
                  r.magFilter,
                )),
                  (r.renderTargets[1] = this.createRenderTarget(
                    e,
                    t,
                    r.wrapS,
                    r.wrapT,
                    r.minFilter,
                    r.magFilter,
                  )),
                  this.renderTexture(r.initialValueTexture, r.renderTargets[0]),
                  this.renderTexture(
                    r.initialValueTexture,
                    r.renderTargets[1],
                  ));
                let i = r.material,
                  l = i.uniforms;
                if (null !== r.dependencies)
                  for (let e = 0; e < r.dependencies.length; e++) {
                    let t = r.dependencies[e];
                    if (t.name !== r.name) {
                      let e = !1;
                      for (let n = 0; n < this.variables.length; n++)
                        if (t.name === this.variables[n].name) {
                          e = !0;
                          break;
                        }
                      if (!e)
                        return (
                          "Variable dependency not found. Variable=" +
                          r.name +
                          ", dependency=" +
                          t.name
                        );
                    }
                    ((l[t.name] = { value: null }),
                      (i.fragmentShader =
                        "\nuniform sampler2D " +
                        t.name +
                        ";\n" +
                        i.fragmentShader));
                  }
              }
              return ((this.currentTextureIndex = 0), null);
            }),
            (this.compute = function () {
              let e = this.currentTextureIndex,
                t = 0 === this.currentTextureIndex ? 1 : 0;
              for (let n = 0, r = this.variables.length; n < r; n++) {
                let r = this.variables[n];
                if (null !== r.dependencies) {
                  let t = r.material.uniforms;
                  for (let n = 0, i = r.dependencies.length; n < i; n++) {
                    let i = r.dependencies[n];
                    t[i.name].value = i.renderTargets[e].texture;
                  }
                }
                this.doRenderTarget(r.material, r.renderTargets[t]);
              }
              this.currentTextureIndex = t;
            }),
            (this.getCurrentRenderTarget = function (e) {
              return e.renderTargets[this.currentTextureIndex];
            }),
            (this.getAlternateRenderTarget = function (e) {
              return e.renderTargets[0 === this.currentTextureIndex ? 1 : 0];
            }),
            (this.dispose = function () {
              (s.geometry.dispose(), s.material.dispose());
              let e = this.variables;
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                n.initialValueTexture && n.initialValueTexture.dispose();
                let r = n.renderTargets;
                for (let e = 0; e < r.length; e++) r[e].dispose();
              }
            }),
            (this.addResolutionDefine = c),
            (this.createShaderMaterial = f),
            (this.createRenderTarget = function (n, l, o, a, u, s) {
              return (
                (n = n || e),
                (l = l || t),
                (o = o || r.ClampToEdgeWrapping),
                (a = a || r.ClampToEdgeWrapping),
                (u = u || r.NearestFilter),
                (s = s || r.NearestFilter),
                new r.WebGLRenderTarget(n, l, {
                  wrapS: o,
                  wrapT: a,
                  minFilter: u,
                  magFilter: s,
                  format: r.RGBAFormat,
                  type: i,
                  depthBuffer: !1,
                })
              );
            }),
            (this.createTexture = function () {
              let n = new Float32Array(e * t * 4),
                i = new r.DataTexture(n, e, t, r.RGBAFormat, r.FloatType);
              return ((i.needsUpdate = !0), i);
            }),
            (this.renderTexture = function (e, t) {
              ((a.passThruTexture.value = e),
                this.doRenderTarget(u, t),
                (a.passThruTexture.value = null));
            }),
            (this.doRenderTarget = function (e, t) {
              let i = n.getRenderTarget(),
                a = n.xr.enabled,
                c = n.shadowMap.autoUpdate,
                f = n.outputColorSpace,
                d = n.toneMapping;
              ((n.xr.enabled = !1),
                (n.shadowMap.autoUpdate = !1),
                "outputColorSpace" in n
                  ? (n.outputColorSpace = "srgb-linear")
                  : (n.encoding = 3e3),
                (n.toneMapping = r.NoToneMapping),
                (s.material = e),
                n.setRenderTarget(t),
                n.render(l, o),
                (s.material = u),
                (n.xr.enabled = a),
                (n.shadowMap.autoUpdate = c),
                (n.outputColorSpace = f),
                (n.toneMapping = d),
                n.setRenderTarget(i));
            }));
        }
      }
    },
    9195: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return g;
        },
      });
      var r = n(9892),
        i = n(2394),
        l = n(1935),
        o = n(7494),
        a = Object.defineProperty,
        u = (e, t, n) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        s = (e, t, n) => (u(e, "symbol" != typeof t ? t + "" : t, n), n);
      class c extends o.w {
        constructor(e, t) {
          (super(),
            s(this, "scene"),
            s(this, "camera"),
            s(this, "inverse"),
            (this.scene = e),
            (this.camera = t),
            (this.clear = !0),
            (this.needsSwap = !1),
            (this.inverse = !1));
        }
        render(e, t, n) {
          let r, i;
          let l = e.getContext(),
            o = e.state;
          (o.buffers.color.setMask(!1),
            o.buffers.depth.setMask(!1),
            o.buffers.color.setLocked(!0),
            o.buffers.depth.setLocked(!0),
            this.inverse ? ((r = 0), (i = 1)) : ((r = 1), (i = 0)),
            o.buffers.stencil.setTest(!0),
            o.buffers.stencil.setOp(l.REPLACE, l.REPLACE, l.REPLACE),
            o.buffers.stencil.setFunc(l.ALWAYS, r, 4294967295),
            o.buffers.stencil.setClear(i),
            o.buffers.stencil.setLocked(!0),
            e.setRenderTarget(n),
            this.clear && e.clear(),
            e.render(this.scene, this.camera),
            e.setRenderTarget(t),
            this.clear && e.clear(),
            e.render(this.scene, this.camera),
            o.buffers.color.setLocked(!1),
            o.buffers.depth.setLocked(!1),
            o.buffers.stencil.setLocked(!1),
            o.buffers.stencil.setFunc(l.EQUAL, 1, 4294967295),
            o.buffers.stencil.setOp(l.KEEP, l.KEEP, l.KEEP),
            o.buffers.stencil.setLocked(!0));
        }
      }
      class f extends o.w {
        constructor() {
          (super(), (this.needsSwap = !1));
        }
        render(e) {
          (e.state.buffers.stencil.setLocked(!1),
            e.state.buffers.stencil.setTest(!1));
        }
      }
      var d = Object.defineProperty,
        p = (e, t, n) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        h = (e, t, n) => (p(e, "symbol" != typeof t ? t + "" : t, n), n);
      class g {
        constructor(e, t) {
          if (
            (h(this, "renderer"),
            h(this, "_pixelRatio"),
            h(this, "_width"),
            h(this, "_height"),
            h(this, "renderTarget1"),
            h(this, "renderTarget2"),
            h(this, "writeBuffer"),
            h(this, "readBuffer"),
            h(this, "renderToScreen"),
            h(this, "passes", []),
            h(this, "copyPass"),
            h(this, "clock"),
            (this.renderer = e),
            void 0 === t)
          ) {
            let n = {
                minFilter: r.LinearFilter,
                magFilter: r.LinearFilter,
                format: r.RGBAFormat,
              },
              i = e.getSize(new r.Vector2());
            ((this._pixelRatio = e.getPixelRatio()),
              (this._width = i.width),
              (this._height = i.height),
              ((t = new r.WebGLRenderTarget(
                this._width * this._pixelRatio,
                this._height * this._pixelRatio,
                n,
              )).texture.name = "EffectComposer.rt1"));
          } else
            ((this._pixelRatio = 1),
              (this._width = t.width),
              (this._height = t.height));
          ((this.renderTarget1 = t),
            (this.renderTarget2 = t.clone()),
            (this.renderTarget2.texture.name = "EffectComposer.rt2"),
            (this.writeBuffer = this.renderTarget1),
            (this.readBuffer = this.renderTarget2),
            (this.renderToScreen = !0),
            void 0 === i.C &&
              console.error("THREE.EffectComposer relies on CopyShader"),
            void 0 === l.T &&
              console.error("THREE.EffectComposer relies on ShaderPass"),
            (this.copyPass = new l.T(i.C)),
            (this.copyPass.material.blending = r.NoBlending),
            (this.clock = new r.Clock()));
        }
        swapBuffers() {
          let e = this.readBuffer;
          ((this.readBuffer = this.writeBuffer), (this.writeBuffer = e));
        }
        addPass(e) {
          (this.passes.push(e),
            e.setSize(
              this._width * this._pixelRatio,
              this._height * this._pixelRatio,
            ));
        }
        insertPass(e, t) {
          (this.passes.splice(t, 0, e),
            e.setSize(
              this._width * this._pixelRatio,
              this._height * this._pixelRatio,
            ));
        }
        removePass(e) {
          let t = this.passes.indexOf(e);
          -1 !== t && this.passes.splice(t, 1);
        }
        isLastEnabledPass(e) {
          for (let t = e + 1; t < this.passes.length; t++)
            if (this.passes[t].enabled) return !1;
          return !0;
        }
        render(e) {
          void 0 === e && (e = this.clock.getDelta());
          let t = this.renderer.getRenderTarget(),
            n = !1,
            r = this.passes.length;
          for (let t = 0; t < r; t++) {
            let r = this.passes[t];
            if (!1 !== r.enabled) {
              if (
                ((r.renderToScreen =
                  this.renderToScreen && this.isLastEnabledPass(t)),
                r.render(
                  this.renderer,
                  this.writeBuffer,
                  this.readBuffer,
                  e,
                  n,
                ),
                r.needsSwap)
              ) {
                if (n) {
                  let t = this.renderer.getContext(),
                    n = this.renderer.state.buffers.stencil;
                  (n.setFunc(t.NOTEQUAL, 1, 4294967295),
                    this.copyPass.render(
                      this.renderer,
                      this.writeBuffer,
                      this.readBuffer,
                      e,
                    ),
                    n.setFunc(t.EQUAL, 1, 4294967295));
                }
                this.swapBuffers();
              }
              void 0 !== c &&
                (r instanceof c ? (n = !0) : r instanceof f && (n = !1));
            }
          }
          this.renderer.setRenderTarget(t);
        }
        reset(e) {
          if (void 0 === e) {
            let t = this.renderer.getSize(new r.Vector2());
            ((this._pixelRatio = this.renderer.getPixelRatio()),
              (this._width = t.width),
              (this._height = t.height),
              (e = this.renderTarget1.clone()).setSize(
                this._width * this._pixelRatio,
                this._height * this._pixelRatio,
              ));
          }
          (this.renderTarget1.dispose(),
            this.renderTarget2.dispose(),
            (this.renderTarget1 = e),
            (this.renderTarget2 = e.clone()),
            (this.writeBuffer = this.renderTarget1),
            (this.readBuffer = this.renderTarget2));
        }
        setSize(e, t) {
          ((this._width = e), (this._height = t));
          let n = this._width * this._pixelRatio,
            r = this._height * this._pixelRatio;
          (this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r));
          for (let e = 0; e < this.passes.length; e++)
            this.passes[e].setSize(n, r);
        }
        setPixelRatio(e) {
          ((this._pixelRatio = e), this.setSize(this._width, this._height));
        }
        dispose() {
          (this.renderTarget1.dispose(),
            this.renderTarget2.dispose(),
            this.copyPass.dispose());
        }
      }
    },
    7494: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return u;
        },
        w: function () {
          return a;
        },
      });
      var r = n(9892),
        i = Object.defineProperty,
        l = (e, t, n) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        o = (e, t, n) => (l(e, "symbol" != typeof t ? t + "" : t, n), n);
      class a {
        constructor() {
          (o(this, "enabled", !0),
            o(this, "needsSwap", !0),
            o(this, "clear", !1),
            o(this, "renderToScreen", !1));
        }
        setSize(e, t) {}
        render(e, t, n, r, i) {
          console.error(
            "THREE.Pass: .render() must be implemented in derived pass.",
          );
        }
        dispose() {}
      }
      class u {
        constructor(e) {
          (o(this, "camera", new r.OrthographicCamera(-1, 1, 1, -1, 0, 1)),
            o(this, "geometry", new r.PlaneGeometry(2, 2)),
            o(this, "mesh"),
            (this.mesh = new r.Mesh(this.geometry, e)));
        }
        get material() {
          return this.mesh.material;
        }
        set material(e) {
          this.mesh.material = e;
        }
        dispose() {
          this.mesh.geometry.dispose();
        }
        render(e) {
          e.render(this.mesh, this.camera);
        }
      }
    },
    7370: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return u;
        },
      });
      var r = n(9892),
        i = n(7494),
        l = Object.defineProperty,
        o = (e, t, n) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        a = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      class u extends i.w {
        constructor(e, t, n, i, l = 0) {
          (super(),
            a(this, "scene"),
            a(this, "camera"),
            a(this, "overrideMaterial"),
            a(this, "clearColor"),
            a(this, "clearAlpha"),
            a(this, "clearDepth", !1),
            a(this, "_oldClearColor", new r.Color()),
            (this.scene = e),
            (this.camera = t),
            (this.overrideMaterial = n),
            (this.clearColor = i),
            (this.clearAlpha = l),
            (this.clear = !0),
            (this.needsSwap = !1));
        }
        render(e, t, n) {
          let r,
            i = e.autoClear;
          e.autoClear = !1;
          let l = null;
          (void 0 !== this.overrideMaterial &&
            ((l = this.scene.overrideMaterial),
            (this.scene.overrideMaterial = this.overrideMaterial)),
            this.clearColor &&
              (e.getClearColor(this._oldClearColor),
              (r = e.getClearAlpha()),
              e.setClearColor(this.clearColor, this.clearAlpha)),
            this.clearDepth && e.clearDepth(),
            e.setRenderTarget(this.renderToScreen ? null : n),
            this.clear &&
              e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            e.render(this.scene, this.camera),
            this.clearColor && e.setClearColor(this._oldClearColor, r),
            void 0 !== this.overrideMaterial &&
              (this.scene.overrideMaterial = l),
            (e.autoClear = i));
        }
      }
    },
    1935: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return u;
        },
      });
      var r = n(9892),
        i = n(7494),
        l = Object.defineProperty,
        o = (e, t, n) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        a = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      class u extends i.w {
        constructor(e, t = "tDiffuse") {
          (super(),
            a(this, "textureID"),
            a(this, "uniforms"),
            a(this, "material"),
            a(this, "fsQuad"),
            (this.textureID = t),
            e instanceof r.ShaderMaterial
              ? ((this.uniforms = e.uniforms), (this.material = e))
              : ((this.uniforms = r.UniformsUtils.clone(e.uniforms)),
                (this.material = new r.ShaderMaterial({
                  defines: Object.assign({}, e.defines),
                  uniforms: this.uniforms,
                  vertexShader: e.vertexShader,
                  fragmentShader: e.fragmentShader,
                }))),
            (this.fsQuad = new i.T(this.material)));
        }
        render(e, t, n) {
          (this.uniforms[this.textureID] &&
            (this.uniforms[this.textureID].value = n.texture),
            (this.fsQuad.material = this.material),
            this.renderToScreen
              ? e.setRenderTarget(null)
              : (e.setRenderTarget(t),
                this.clear &&
                  e.clear(
                    e.autoClearColor,
                    e.autoClearDepth,
                    e.autoClearStencil,
                  )),
            this.fsQuad.render(e));
        }
        dispose() {
          (this.fsQuad.dispose(), this.material.dispose());
        }
      }
    },
    2394: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return r;
        },
      });
      let r = {
        uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
        vertexShader:
          "varying vec2 vUv;\nvoid main() {\n	vUv = uv;\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        fragmentShader:
          "uniform float opacity;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texel = texture2D( tDiffuse, vUv );\n	gl_FragColor = opacity * texel;\n}",
      };
    },
    2974: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return Math.max(t, Math.min(n, e));
      }
      n.d(t, {
        uZ: function () {
          return r;
        },
      });
    },
  },
]);
//# sourceMappingURL=906.e4a334a8c1a520ac.js.map
