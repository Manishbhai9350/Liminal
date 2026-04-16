"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [504],
  {
    5504: function (e, t, n) {
      (n.r(t),
        n.d(t, {
          default: function () {
            return e8;
          },
        }));
      var i = n(1527),
        a = n(1519),
        r = n(6755),
        o = n(1595),
        s = n(6912),
        l = n(959),
        u = n(3086),
        c = n(3771),
        m = n(4970),
        p = n(7489),
        f = n.n(p),
        v = n(4358),
        d = n(169),
        h = n(2974),
        g = n(4485);
      m.ZP.parseEase();
      let x = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return Math.max(t, Math.min(n, e));
        },
        w = (e, t, n) => (1 - n) * e + n * t,
        y = (e, t) => 1 - Math.exp(Math.log(1 - e) * t),
        b = (e) => C(e, 0.96),
        C = (e, t) => Math.exp(Math.log(e) * t),
        S = (e) => y(e, 0.96),
        _ = (e, t, n) => w(e, t, S(n)),
        M = function (e, t, n) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1 / 0,
            a = _(e, t, n),
            r = 0.96 * i,
            o = x(a - e, -r, r);
          return e + o;
        },
        P = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = Math.pow(10, t);
          return Math.round(e * n) / n;
        },
        R = (e, t, n, i, a) => i + ((e - t) * (a - i)) / (n - t),
        D = (e, t, n, i, a) =>
          R(x(e, Math.min(t, n), Math.max(t, n)), t, n, i, a);
      var z = n(4937),
        T = n(989),
        F = (e) => {
          let t = eD((e) => e.scroll),
            n = (0, l.useRef)(null),
            { context: r, contextSafe: o } = (0, d.V)(() => {}, { scope: n }),
            u = (0, l.useRef)(null),
            c = (0, l.useRef)(0),
            p = (0, g.mU)(),
            f = (0, l.useCallback)(() => {
              ((c.current = _(c.current, t.progress, 0.12)),
                m.ZP.set(u.current, { scaleY: c.current }));
            }, [t]);
          (0, l.useEffect)(
            () => (
              m.ZP.ticker.add(f),
              () => {
                m.ZP.ticker.remove(f);
              }
            ),
            [f],
          );
          let v = o(() => {
            var e, t, n;
            let i =
                null === (e = r.selector) || void 0 === e
                  ? void 0
                  : e.call(r, "[data-motion-bar]"),
              a =
                null === (t = r.selector) || void 0 === t
                  ? void 0
                  : t.call(r, "[data-motion-dot-top]"),
              o =
                null === (n = r.selector) || void 0 === n
                  ? void 0
                  : n.call(r, "[data-motion-dot-bottom]"),
              s = (0, h.uZ)(window.innerWidth / 1440, 1, 1.15),
              l = (((0, z.G)() ? 438 : 278) + 48) * 0.5 * s;
            return m.ZP.timeline()
              .fromTo(
                a,
                { y: l, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.6, ease: "power3.inOut" },
                0,
              )
              .fromTo(
                o,
                { y: -l, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.6, ease: "power3.inOut" },
                0.2,
              )
              .fromTo(
                i,
                { scaleY: 0 },
                { scaleY: 1, duration: 1.6, ease: "power3.inOut" },
                0.4,
              );
          });
          return (
            (0, a.Z)(() => {
              let e = s.U2.subscribe(
                (e) => e.compiled,
                (t) => {
                  t && (e(), p.add(v(), 2.4));
                },
              );
              return () => {
                e();
              };
            }, []),
            (0, i.jsxs)("div", {
              ref: n,
              className: (0, T.cn)([
                "absolute right-margin top-0 h-full w-[0.2rem] md:mr-[1.3rem]",
                "flex flex-col justify-center",
              ]),
              ...e,
              children: [
                (0, i.jsx)("span", {
                  className: "flex h-[.2rem] w-[.2rem] bg-surface-primary-dark",
                  "data-motion-dot-top": !0,
                }),
                (0, i.jsxs)("div", {
                  className:
                    "relative my-spacing-sm h-full max-h-[27.8rem] w-full md:max-h-[43.8rem]",
                  children: [
                    (0, i.jsx)("span", {
                      className:
                        "absolute left-0 top-0 h-full w-full bg-surface-primary-dark/10",
                      "data-motion-bar": !0,
                    }),
                    (0, i.jsx)("div", {
                      ref: u,
                      className:
                        "absolute left-0 top-0 h-full w-full origin-top-left bg-surface-primary-dark",
                    }),
                  ],
                }),
                (0, i.jsx)("span", {
                  className: "flex h-[.2rem] w-[.2rem] bg-surface-primary-dark",
                  "data-motion-dot-bottom": !0,
                }),
              ],
            })
          );
        },
        U = n(7965),
        N = n(410),
        I = n(4576),
        j = n(217),
        A = n(4543),
        k = n(8061),
        V = n(9892),
        W = n(9195),
        E = n(7370),
        L = n(3819),
        Z = n(3759),
        Y = n(5636),
        G = n.n(Y),
        B = (e) => {
          let {
              minFov: t = 34,
              maxFov: n = 24,
              pointerMove: i = !0,
              cameraShake: r = !0,
            } = e,
            [o] = (0, l.useState)(new V.Vector3()),
            [s] = (0, l.useState)(() => new V.Vector3()),
            m = (0, u.D)((e) => e.get),
            p = (0, l.useCallback)(() => {
              let e = window.innerWidth / window.innerHeight,
                i = m().camera;
              ((i.fov = e < 1 ? t : n),
                (i.aspect = e),
                i.updateProjectionMatrix());
            }, [m, t, n]);
          return (
            (0, u.F)((e, t) => {
              let { camera: n } = e;
              i &&
                (s.setZ(n.position.z),
                n.position.lerp(s, G()(t, 0, 1 / 30)),
                n.lookAt(o));
            }),
            (0, c.useGesture)(
              {
                onMove: (e) => {
                  let { xy: t } = e,
                    n = 1.5 * D(t[0], 0, window.innerWidth, -1, 1),
                    i = 1.5 * D(t[1], 0, window.innerHeight, 1, -1);
                  s.set(n, i, 0);
                },
              },
              { target: document.body, eventOptions: { passive: !1 } },
            ),
            (0, a.Z)(() => p(), [p]),
            (0, Z.Z)("resize", p),
            null
          );
        };
      let O = (e) => (
          (e.wrapS = V.RepeatWrapping),
          (e.wrapT = V.RepeatWrapping),
          (e.magFilter = V.LinearFilter),
          (e.minFilter = V.LinearFilter),
          (e.type = V.HalfFloatType),
          (e.generateMipmaps = !1),
          e
        ),
        q = (e) => (
          (e.magFilter = V.LinearFilter),
          (e.minFilter = V.LinearFilter),
          (e.flipY = !1),
          (e.generateMipmaps = !1),
          e
        ),
        X = (e) => (
          (e.wrapS = V.RepeatWrapping),
          (e.wrapT = V.RepeatWrapping),
          (e.type = V.HalfFloatType),
          (e.generateMipmaps = !1),
          e
        );
      class H extends V.ShaderMaterial {
        constructor() {
          (super({
            uniforms: {
              tNoise: new V.Uniform(null),
              uNoiseIntensity: new V.Uniform(0.04),
              uNoiseScale: new V.Uniform(1.5),
              uNoiseSpeed: new V.Uniform(0.12),
              uTime: new V.Uniform(0),
            },
            vertexShader:
              "\n  varying vec2 vUv;\n\n  void main() {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n  }\n",
            fragmentShader:
              "\n  uniform sampler2D tNoise;\n\n  uniform float uNoiseScale;\n  uniform float uNoiseSpeed;\n  uniform float uNoiseIntensity;\n  uniform float uTime;\n\n  varying vec2 vUv;\n\n  void main() {\n    vec2 uv = vUv;\n    float time = uTime * uNoiseSpeed;\n    \n    uv -= 0.5;\n    uv *= uNoiseScale;\n    uv += 0.5;\n\n    float noise = texture2D(tNoise, uv * vec2(1.0, 0.46) + vec2(time, time * 0.323)).r;\n    noise += texture2D(tNoise, uv * vec2(0.5, 0.25) + vec2(-time * 0.77, -time * 0.414)).r;\n\n    float circularGradient = 0.0 - clamp(length(uv - 0.5) * 1.0, 0.0, 1.0);\n    circularGradient = pow(circularGradient, 2.0);\n\n    vec3 color = vec3(1.0);\n    float alpha = circularGradient * noise * uNoiseIntensity;\n\n    gl_FragColor = vec4(color, alpha);\n  }\n",
          }),
            (this.transparent = !0),
            (this.depthWrite = !1),
            (this.blending = V.AdditiveBlending));
        }
      }
      var Q = () => {
        let [e] = (0, l.useState)(() => new H()),
          t = X((0, s.iW)("perlin-noise")),
          n = (0, l.useRef)(null);
        return (
          (0, u.F)((n) => {
            let { clock: i } = n,
              a = i.getElapsedTime();
            ((e.uniforms.uTime.value = a), (e.uniforms.tNoise.value = t));
          }),
          (0, o.M4)(
            "Smoke",
            {
              noiseScale: {
                value: 1.5,
                min: 0,
                max: 3,
                step: 0.01,
                onChange: (e) => {
                  n.current.material.uniforms.uNoiseScale.value = e;
                },
              },
              noiseIntensity: {
                value: 0.04,
                min: 0,
                max: 0.1,
                step: 0.01,
                onChange: (e) => {
                  n.current.material.uniforms.uNoiseIntensity.value = e;
                },
              },
              noiseSpeed: {
                value: 0.12,
                min: 0,
                max: 1,
                step: 0.01,
                onChange: (e) => {
                  n.current.material.uniforms.uNoiseSpeed.value = e;
                },
              },
            },
            { collapsed: !0 },
          ),
          (0, i.jsx)("mesh", {
            ref: n,
            material: e,
            children: (0, i.jsx)("planeGeometry", { args: [2, 2] }),
          })
        );
      };
      class K extends V.ShaderMaterial {
        constructor() {
          (super({
            uniforms: {
              tNoise: new V.Uniform(null),
              tSim: new V.Uniform(null),
              uTime: new V.Uniform(0),
              uNoiseScale: new V.Uniform(0.25),
              uNoiseSpeed: new V.Uniform(0.08),
              uNoiseIntensity: new V.Uniform(0.5),
              uResolution: new V.Uniform(new V.Vector2()),
              uCenterFade: new V.Uniform(0.5),
              uCameraFade: new V.Uniform(0.25),
              uSize: new V.Uniform(0.03),
            },
            vertexShader:
              "\n  uniform sampler2D tNoise;\n\n  uniform float uSize;\n  uniform float uTime;\n  uniform float uNoiseScale;\n  uniform float uNoiseSpeed;\n  uniform float uNoiseIntensity;\n  uniform vec2 uResolution;\n\n  attribute float aSize;\n  \n  varying vec2 vUv;\n  varying vec3 vPos;\n  varying vec4 vMvPos;\n\n  void main () {\n    float time = uTime;\n    vec3 pos = position;\n    vec2 uv = normalize(pos).xy;\n\n    // Noise\n    uv += time * uNoiseSpeed;\n    vec3 noise = texture2D(tNoise, uv * uNoiseScale).rgb;\n    pos += (-1.0 + noise * 2.0) * uNoiseIntensity;\n\n    // Final position\n    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n\n    gl_PointSize = aSize * uSize * uResolution.y;\n    gl_PointSize *= (1.0 / - viewPosition.z);\n\n    vUv = uv;\n    vPos = pos;\n    vMvPos = modelViewMatrix * vec4(position, 1.0);\n  }\n",
            fragmentShader:
              "\n  uniform sampler2D tNoise;\n  \n  uniform float uCenterFade;\n  uniform float uCameraFade;\n  uniform float uTime;\n\n  varying vec2 vUv;\n  varying vec3 vPos;\n  varying vec4 vMvPos;\n\n  void main () {\n    vec3 color = vec3(1.0);\n    float alpha = 1.0;\n    \n    // fade near camera\n    alpha *= smoothstep(length(vMvPos), uCameraFade, 1.0);\n\n    // fade near center\n    alpha *= smoothstep(uCenterFade, 1.0, length(vPos));\n\n    float shape = 1.0 - length(gl_PointCoord - 0.5) * 2.0;\n    alpha *= shape;\n\n    alpha = clamp(alpha, 0.0, 1.0);\n\n    gl_FragColor = vec4(color, alpha);\n\n    #include <tonemapping_fragment>\n    #include <colorspace_fragment>\n  }\n",
          }),
            (this.transparent = !0),
            (this.depthWrite = !1));
        }
      }
      var J = () => {
          let e = (0, u.D)((e) => {
              let { gl: t } = e;
              return t;
            }),
            t = (0, l.useRef)(null),
            n = O((0, s.iW)("simplex-noise")),
            [r] = (0, l.useState)(() => new K()),
            [c] = (0, l.useState)(() => {
              let e = new Float32Array(900),
                t = new Float32Array(300);
              for (let n = 299; n >= 0; --n)
                ((e[3 * n + 0] = 6 * Math.random() - 3),
                  (e[3 * n + 1] = 6 * Math.random() - 3),
                  (e[3 * n + 2] = 6 * Math.random() - 3),
                  (t[n] = Math.random()));
              let n = new V.BufferGeometry();
              return (
                n.setDrawRange(0, 300),
                n.setAttribute("position", new V.BufferAttribute(e, 3)),
                n.setAttribute("aSize", new V.BufferAttribute(t, 1)),
                n
              );
            }),
            m = (0, l.useCallback)(() => {
              let n = e.getPixelRatio(),
                i = window.innerWidth * n,
                a = window.innerHeight * n;
              t.current.material.uniforms.uResolution.value.set(i, a);
            }, [e]);
          return (
            (0, u.F)((e) => {
              let { clock: t } = e,
                i = t.getElapsedTime();
              ((r.uniforms.uTime.value = i), (r.uniforms.tNoise.value = n));
            }),
            (0, a.Z)(() => m(), [m]),
            (0, Z.Z)("resize", m),
            (0, o.M4)(
              "Sparkles",
              {
                centerFade: {
                  value: 0.5,
                  min: 0,
                  max: 2,
                  step: 0.01,
                  onChange: (e) => {
                    t.current.material.uniforms.uCenterFade.value = e;
                  },
                },
                cameraFade: {
                  value: 0.25,
                  min: 0,
                  max: 2,
                  step: 0.01,
                  onChange: (e) => {
                    t.current.material.uniforms.uCameraFade.value = e;
                  },
                },
                noise: (0, o.so)({
                  scale: {
                    value: 0.25,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    onChange: (e) => {
                      t.current.material.uniforms.uNoiseScale.value = e;
                    },
                  },
                  intensity: {
                    value: 0.5,
                    min: 0,
                    max: 3,
                    step: 0.01,
                    onChange: (e) => {
                      t.current.material.uniforms.uNoiseIntensity.value = e;
                    },
                  },
                  speed: {
                    value: 0.08,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      t.current.material.uniforms.uNoiseSpeed.value = e;
                    },
                  },
                }),
              },
              { collapsed: !0 },
            ),
            (0, i.jsx)("points", {
              ref: t,
              geometry: c,
              material: r,
              frustumCulled: !1,
            })
          );
        },
        $ = n(6511);
      class ee {
        update() {
          requestAnimationFrame(this._update);
          let e = this._clock.getElapsedTime(),
            t = e - this._previousTime;
          ((this._previousTime = e),
            (this._particlesVariable.material.uniforms.uTime.value = e),
            (this._particlesVariable.material.uniforms.uDeltaTime.value = t),
            (this._particlesVariable.material.uniforms.uFlowFieldInfluence.value =
              this._influence),
            (this._particlesVariable.material.uniforms.uFlowFieldStrength.value =
              this._strength),
            (this._particlesVariable.material.uniforms.uFlowFieldFrequency.value =
              this._frequency),
            (this._particlesVariable.material.uniforms.uFlowFieldThreshold.value =
              this._threshold),
            this._computation.compute());
        }
        getParticlesVariableRenderTarget() {
          return this._computation.getCurrentRenderTarget(
            this._particlesVariable,
          );
        }
        get influence() {
          return this._influence;
        }
        set influence(e) {
          this._influence = e;
        }
        get strength() {
          return this._strength;
        }
        set strength(e) {
          this._strength = e;
        }
        get frequency() {
          return this._frequency;
        }
        set frequency(e) {
          this._frequency = e;
        }
        get threshold() {
          return this._threshold;
        }
        set threshold(e) {
          this._threshold = e;
        }
        get count() {
          return this._count;
        }
        get sizeX() {
          return this._sizeX;
        }
        get sizeY() {
          return this._sizeY;
        }
        static getInstance(e) {
          return this._instance || (this._instance = new this(e));
        }
        constructor(e) {
          ((this._clock = new V.Clock()),
            (this._previousTime = 0),
            (this._influence = 0),
            (this._threshold = 0),
            (this._strength = 0.26),
            (this._frequency = 0.92),
            (this._sizeX = 256),
            (this._sizeY = 256),
            (this._count = 0),
            (this._size = 0),
            (this._update = this.update.bind(this)),
            (this._renderer = e),
            (this._count = this._sizeX * this._sizeY),
            (this._computation = new $.n(this._sizeX, this._sizeY, e)));
          let t = new V.SphereGeometry(0.5, this._sizeX, this._sizeY),
            n = this._computation.createTexture(),
            i = t.attributes.position;
          this._count = i.count;
          for (let e = 0; e < this._count; e++) {
            let t = 4 * e,
              i = (Math.random() - 0.5) * Math.PI,
              a = Math.random() * Math.PI * 2;
            ((n.image.data[t + 0] = 1.2 * Math.cos(a) * Math.cos(i)),
              (n.image.data[t + 1] = 1.2 * Math.sin(i)),
              (n.image.data[t + 2] = 1.2 * Math.sin(a) * Math.cos(i)),
              (n.image.data[t + 3] = Math.random()));
          }
          ((this._particlesVariable = this._computation.addVariable(
            "uParticles",
            "\n  //	Simplex 4D Noise \n  //	by Ian McEwan, Ashima Arts\n  //\n  vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n  float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\n  float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\n  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n  float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}\n\n  vec4 grad4(float j, vec4 ip){\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; \n\n    return p;\n  }\n\n  #define F4 0.309016994374947451\n\n  float simplexNoise4d(vec4 v){\n    const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4\n                          0.309016994374947451); // (sqrt(5) - 1)/4   F4\n  // First corner\n    vec4 i  = floor(v + dot(v, C.yyyy) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n  // Other corners\n\n  // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n    vec4 i0;\n\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n  //  i0.x = dot( isX, vec3( 1.0 ) );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n\n  //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    // i0 now contains the unique values 0,1,2,3 in each channel\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    //  x0 = x0 - 0.0 + 0.0 * C \n    vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\n    vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\n    vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\n    vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;\n\n  // Permutations\n    i = mod(i, 289.0); \n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n              i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n  // Gradients\n  // ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)\n  // 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n  // Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n  // Mix contributions from the five corners\n    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n    m0 = m0 * m0;\n    m1 = m1 * m1;\n    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n  }\n\n  vec4 snoise4 (vec4 v) { // simplexNoiseDerivatives\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n              i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    return vec4(dx, dy, dz, dw) * 49.0;\n  }\n\n  vec3 curl(in vec3 p, in float noiseTime, in float persistence) {\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 3; ++i) {\n      float twoPowI = pow(2.0, float(i));\n      float scale = 0.5 * twoPowI * pow(persistence, float(i));\n\n      xNoisePotentialDerivatives += snoise4(vec4(p * twoPowI, noiseTime)) * scale;\n      yNoisePotentialDerivatives += snoise4(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n      zNoisePotentialDerivatives += snoise4(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n      zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2],\n      xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],\n      yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]\n    );\n  }\n\n  uniform float uTime;\n  uniform float uDeltaTime;\n  uniform sampler2D uBase;\n  uniform float uFlowFieldInfluence;\n  uniform float uFlowFieldStrength;\n  uniform float uFlowFieldFrequency;\n  uniform float uFlowFieldThreshold;\n\n  void main () {\n    float time = uTime * 0.2;\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\n    vec4 particle = texture(uParticles, uv);\n    vec4 base = texture(uBase, uv);\n    \n    // Dead\n    if(particle.a >= 1.0)\n    {\n        particle.a = mod(particle.a, 1.0);\n        particle.xyz = base.xyz;\n    }\n\n    // Alive\n    else\n    {\n        // Strength\n        float strength = simplexNoise4d(vec4(particle.xyz, time + 1.0));\n        float influence = (uFlowFieldInfluence - 0.5) * (- 2.0);\n        strength = smoothstep(influence, 1.0, strength);\n\n        // Flow field\n        vec3 flowField = vec3(\n            simplexNoise4d(vec4(particle.xyz * uFlowFieldFrequency + 0.0, time)),\n            simplexNoise4d(vec4(particle.xyz * uFlowFieldFrequency + 1.0, time)),\n            simplexNoise4d(vec4(particle.xyz * uFlowFieldFrequency + 2.0, time))\n        );\n        flowField = normalize(flowField);\n        particle.xyz += flowField * uDeltaTime * strength * uFlowFieldStrength;\n\n        // Decay\n        particle.a += uDeltaTime * 0.3;\n    }\n    \n    gl_FragColor = particle;\n  }\n\n  /* void main () {\n    float time = uTime * 0.05;\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\n    vec4 particle = texture2D(uParticles, uv);\n    vec4 base = texture2D(uBase, uv);\n\n    // Dead\n    if (particle.a >= 1.0) {\n\n      particle.a = mod(particle.a, 1.0);\n      particle.xyz = base.xyz;\n\n    // Alive\n    } else {\n      // Strength\n      float strength = simplexNoise4d(vec4(base.xyz * 2.0, time + 1.0));\n      float influence = (uFlowFieldInfluence - 0.5) * (- 2.0);\n      strength = smoothstep(influence, 1.0, strength);\n      strength = 1.0;\n\n      // Flow field\n      vec3 flowField = vec3(\n          simplexNoise4d(vec4(particle.xyz * uFlowFieldFrequency + 0.0, time)),\n          simplexNoise4d(vec4(particle.xyz * uFlowFieldFrequency + 1.0, time)),\n          simplexNoise4d(vec4(particle.xyz * uFlowFieldFrequency + 2.0, time))\n      );\n      flowField = normalize(flowField);\n      particle.xyz += flowField * uDeltaTime * strength * uFlowFieldStrength;\n\n      // Decay\n      particle.a += uDeltaTime * 0.3;\n    }\n    \n    gl_FragColor = particle;\n  } */\n",
            n,
          )),
            this._computation.setVariableDependencies(this._particlesVariable, [
              this._particlesVariable,
            ]),
            (this._particlesVariable.material.uniforms.uTime = new V.Uniform(
              0,
            )),
            (this._particlesVariable.material.uniforms.uDeltaTime =
              new V.Uniform(0)),
            (this._particlesVariable.material.uniforms.uBase = new V.Uniform(
              n,
            )),
            (this._particlesVariable.material.uniforms.uFlowFieldInfluence =
              new V.Uniform(0)),
            (this._particlesVariable.material.uniforms.uFlowFieldStrength =
              new V.Uniform(0.26)),
            (this._particlesVariable.material.uniforms.uFlowFieldFrequency =
              new V.Uniform(0.92)),
            (this._particlesVariable.material.uniforms.uFlowFieldThreshold =
              new V.Uniform(0)),
            this._computation.init(),
            this.update());
        }
      }
      let et = () => {
        let e = (0, u.D)((e) => {
            let { gl: t } = e;
            return t;
          }),
          [t] = (0, l.useState)(() => ee.getInstance(e));
        return t;
      };
      class en extends V.ShaderMaterial {
        constructor() {
          (super({
            uniforms: {
              tParticles: new V.Uniform(null),
              uResolution: new V.Uniform(new V.Vector2()),
              uLightPos: new V.Uniform(new V.Vector3()),
              uLight: new V.Uniform(new V.Vector4()),
              uSize: new V.Uniform(0.005),
            },
            vertexShader:
              "\n  uniform sampler2D tParticles;\n  \n  uniform vec2 uResolution;\n  uniform float uSize;\n\n  attribute vec2 aParticlesUv;\n  attribute float aSize;\n\n  varying vec3 vColor;\n  varying vec4 vMvPos;\n\n  void main () {\n    vec4 particle = texture2D(tParticles, aParticlesUv);\n\n    // Final position\n    vec4 modelPosition = modelMatrix * vec4(particle.xyz, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n\n    // Point size\n    float sizeIn = smoothstep(0.0, 0.1, particle.a);\n    float sizeOut = 1.0 - smoothstep(0.7, 1.0, particle.a);\n    float size = min(sizeIn, sizeOut);\n\n    gl_PointSize = size * aSize * uSize * uResolution.y;\n    // gl_PointSize *= (1.0 / - viewPosition.z);\n\n    // Varyings\n    vColor = vec3(particle.a * 1.0);\n    vMvPos = modelPosition;\n  }\n",
            fragmentShader:
              "\n  uniform vec3 uLightPos;\n  uniform vec4 uLight;\n\n  varying vec3 vColor;\n  varying vec4 vMvPos;\n\n  float efit (float x,float a1,float a2,float b1,float b2) {\n    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);\n  }\n\n  float fit (float x,float a1,float a2,float b1,float b2) {\n    return clamp(efit(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2));\n  }\n\n  void main () {\n    vec3 color = vColor;\n    float alpha = 1.0;\n\n    float dist = distance(vMvPos.xyz, uLightPos);\n    dist = efit(dist, uLight.x, uLight.y, uLight.z, uLight.w);\n\n    float shape = 1.0 - length(gl_PointCoord - 0.5) * 2.0;\n    alpha *= shape;\n    alpha *= dist;\n\n    alpha = clamp(alpha, 0.0, 1.0);\n\n    gl_FragColor = vec4(color, alpha);\n\n    #include <tonemapping_fragment>\n    #include <colorspace_fragment>\n  }\n",
          }),
            (this.transparent = !0),
            (this.depthWrite = !1));
        }
      }
      var ei = () => {
        let e = (0, u.D)((e) => {
            let { gl: t } = e;
            return t;
          }),
          t = et(),
          n = (0, l.useRef)(null),
          { scene: r } = (0, s.iW)("neutrino-scene"),
          c = (0, s.G)("neutrino-light", r),
          [m] = (0, l.useState)(() => new en()),
          [p] = (0, l.useState)(() => {
            let e = t.count,
              n = new Float32Array(2 * e),
              i = new Float32Array(e);
            for (let a = e - 1; a >= 0; --a)
              ((n[3 * a + 0] = (a % t.sizeX) / t.sizeX),
                (n[3 * a + 1] = ~~(a / t.sizeX) / t.sizeY),
                (i[a] = Math.random()));
            let a = new V.BufferGeometry();
            return (
              a.setDrawRange(0, e),
              a.setAttribute("aParticlesUv", new V.BufferAttribute(n, 2)),
              a.setAttribute("aSize", new V.BufferAttribute(i, 1)),
              a
            );
          }),
          f = (0, l.useCallback)(() => {
            let t = e.getPixelRatio(),
              i = window.innerWidth,
              a = window.innerHeight;
            n.current.material.uniforms.uResolution.value.set(i * t, a * t);
          }, [e]);
        return (
          (0, u.F)(() => {
            ((n.current.material.uniforms.tParticles.value =
              t.getParticlesVariableRenderTarget().texture),
              n.current.material.uniforms.uLightPos.value.copy(c.position));
          }),
          (0, a.Z)(() => f(), [f]),
          (0, Z.Z)("resize", f),
          (0, o.M4)(
            "Simulations",
            {
              FlowField: (0, o.so)({
                threshold: {
                  value: 0,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  onChange: (e) => {
                    t.threshold = e;
                  },
                },
                influence: {
                  value: 1,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  onChange: (e) => {
                    t.influence = e;
                  },
                },
                strength: {
                  value: 0.47,
                  min: 0,
                  max: 5,
                  step: 0.01,
                  onChange: (e) => {
                    t.strength = e;
                  },
                },
                frequency: {
                  value: 1,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  onChange: (e) => {
                    t.frequency = e;
                  },
                },
                light: (0, o.so)({
                  v1: {
                    value: 0,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    onChange: (e) => {
                      n.current.material.uniforms.uLight.value.setX(e);
                    },
                  },
                  v2: {
                    value: 2,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    onChange: (e) => {
                      n.current.material.uniforms.uLight.value.setY(e);
                    },
                  },
                  v3: {
                    value: 0.5,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      n.current.material.uniforms.uLight.value.setZ(e);
                    },
                  },
                  v4: {
                    value: 1,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      n.current.material.uniforms.uLight.value.setW(e);
                    },
                  },
                }),
              }),
            },
            { collapsed: !0 },
          ),
          (0, i.jsx)("points", {
            ref: n,
            geometry: p,
            material: m,
            frustumCulled: !1,
          })
        );
      };
      class ea extends V.ShaderMaterial {
        constructor() {
          (super({
            uniforms: {
              tNoise: new V.Uniform(null),
              uTime: new V.Uniform(0),
              uNoiseScale: new V.Uniform(0),
              uNoiseSpeed: new V.Uniform(0.3),
              uNoiseIntensity: new V.Uniform(0.01),
              uResolution: new V.Uniform(new V.Vector2()),
              uLightPos: new V.Uniform(new V.Vector3()),
              uLight: new V.Uniform(new V.Vector4(0.3, 0.7, 0, 1)),
              uSize: new V.Uniform(0.012),
            },
            vertexShader:
              "\n  uniform sampler2D tNoise;\n\n  uniform float uSize;\n  uniform float uTime;\n  uniform float uNoiseScale;\n  uniform float uNoiseSpeed;\n  uniform float uNoiseIntensity;\n  uniform vec2 uResolution;\n\n  attribute float aIndex;\n  attribute float aSize;\n\n  varying vec2 vUv;\n  varying vec4 vMvPos;\n\n  #define R(x) fract(sin(dot(x,vec2(12.9898,78.233))) * 43758.5453)\n  #define PI 3.14159265\n\n  // linear wiggle function\n  float wiggle(float t, float frequency, float seed) {\n    t *= frequency;\n    float a = R(vec2(floor(t), seed)) * 2.0 - 1.0;\n    float b = R(vec2(ceil(t), seed)) * 2.0 - 1.0;\n    t -= floor(t);\n    return mix(a, b, t);\n  }\n\n  // linear wiggle function that allows details by increasing the octaves parameter\n  float wiggle(float t, float frequency, int octaves, float seed) {\n    float w = 0.0;\n    for(int i = 1; i <= octaves; i++) {\n      float f = float(i * i);\n      w += wiggle(t, frequency * f, seed) / f;\n    }\n    return w;\n  }\n\n  float smoothwiggle(float t, float frequency, float seed) {\n    t *= frequency;\n    float a = R(vec2(floor(t), seed)) * 2.0 - 1.0;\n    float b = R(vec2(ceil(t), seed)) * 2.0 - 1.0;\n    t -= floor(t);\n    return mix(a, b, smoothstep(0.0, 1.0, t));\n  }\n\n  float efit (float x,float a1,float a2,float b1,float b2) {\n    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);\n  }\n\n  float fit (float x,float a1,float a2,float b1,float b2) {\n    return clamp(efit(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2));\n  }\n  \n  void main () {\n    float time = 999. + uTime;\n    float index = aIndex;\n    vec3 pos = position;\n    vec2 uv = normalize(pos).xy;\n\n    // Noise\n    float seed = 128.0;\n\n    pos.x += smoothwiggle(time * uNoiseSpeed, 10.0 + index, seed) * uNoiseIntensity;\n    pos.z += smoothwiggle(time * uNoiseSpeed, 20.0 + index, seed) * uNoiseIntensity;\n    \n    // Final position\n    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n    // modelPosition.xyz += (-1.0 + noise * 2.0) * uNoiseIntensity;\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n\n    gl_PointSize = aSize * uSize * uResolution.y;\n    gl_PointSize *= (1.0 / - viewPosition.z);\n\n    vUv = uv;\n    vMvPos = modelPosition;\n  }\n",
            fragmentShader:
              "\n  uniform vec3 uLightPos;\n  uniform vec4 uLight;\n\n  varying vec2 vUv;\n  varying vec4 vMvPos;\n\n  float efit (float x,float a1,float a2,float b1,float b2) {\n    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);\n  }\n\n  float fit (float x,float a1,float a2,float b1,float b2) {\n    return clamp(efit(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2));\n  }\n\n  void main () {\n    vec2 uv = vUv;\n    float alpha = 1.0;\n\n    vec3 color = vec3(1.0);\n\n    float dist = distance(vMvPos.xyz, uLightPos);\n    dist = fit(dist, uLight.x, uLight.y, uLight.z, uLight.w);\n\n    float shape = 1.0 - length(gl_PointCoord - 0.5) * 2.0;\n    alpha *= shape;\n    alpha *= pow(dist, 2.0);\n\n    alpha = clamp(alpha, 0.0, 1.0);\n\n    gl_FragColor = vec4(color, alpha);\n\n    #include <tonemapping_fragment>\n    #include <colorspace_fragment>\n  }\n",
          }),
            (this.transparent = !0),
            (this.depthWrite = !1));
        }
      }
      let er = (e) => {
        let { bounding: t = [], offsets: n = [], ...r } = e,
          c = (0, u.D)((e) => {
            let { gl: t } = e;
            return t;
          }),
          { scene: m } = (0, s.iW)("neutrino-scene"),
          p = (0, s.G)("neutrino-light", m),
          f = (0, l.useRef)(null),
          v = O((0, s.iW)("perlin-noise")),
          [d] = (0, l.useState)(() => new ea()),
          [h] = (0, l.useState)(() => {
            let e = t.length,
              i = 2e3 * e,
              a = new Float32Array(3 * i),
              r = new Float32Array(i),
              o = new Float32Array(i);
            for (let s = i - 1; s >= 0; --s) {
              let i = s % e,
                l = t[i],
                u = n[i];
              ((a[3 * s + 0] =
                V.MathUtils.randFloat(-(0.5 * l[0]), 0.5 * l[0]) + u[0]),
                (a[3 * s + 1] =
                  V.MathUtils.randFloat(-(0.5 * l[1]), 0.5 * l[1]) + u[1]),
                (a[3 * s + 2] =
                  V.MathUtils.randFloat(-(0.5 * l[2]), 0.5 * l[2]) + u[2]),
                (r[s] = Math.random()),
                (o[s] = Math.random()));
            }
            let s = new V.BufferGeometry();
            return (
              s.setDrawRange(0, i),
              s.setAttribute("position", new V.BufferAttribute(a, 3)),
              s.setAttribute("aIndex", new V.BufferAttribute(r, 1)),
              s.setAttribute("aSize", new V.BufferAttribute(o, 1)),
              s
            );
          }),
          g = (0, l.useCallback)(() => {
            let e = c.getPixelRatio(),
              t = window.innerWidth * e,
              n = window.innerHeight * e;
            f.current.material.uniforms.uResolution.value.set(t, n);
          }, [c]);
        return (
          (0, u.F)((e) => {
            let { clock: t } = e,
              n = t.getElapsedTime();
            ((d.uniforms.uTime.value = n),
              (d.uniforms.tNoise.value = v),
              d.uniforms.uLightPos.value.copy(p.position));
          }),
          (0, a.Z)(() => g(), [g]),
          (0, Z.Z)("resize", g),
          (0, o.M4)("Scenes", {
            Neutrino: (0, o.so)({
              Particles: (0, o.so)({
                noise: (0, o.so)({
                  scale: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      f.current.material.uniforms.uNoiseScale.value = e;
                    },
                  },
                  intensity: {
                    value: 0.01,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      f.current.material.uniforms.uNoiseIntensity.value = e;
                    },
                  },
                  speed: {
                    value: 0.3,
                    min: 0,
                    max: 2,
                    step: 0.01,
                    onChange: (e) => {
                      f.current.material.uniforms.uNoiseSpeed.value = e;
                    },
                  },
                }),
                light: (0, o.so)({
                  v1: {
                    value: 0.7,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    onChange: (e) => {
                      f.current.material.uniforms.uLight.value.setX(e);
                    },
                  },
                  v2: {
                    value: 1,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    onChange: (e) => {
                      f.current.material.uniforms.uLight.value.setY(e);
                    },
                  },
                  v3: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      f.current.material.uniforms.uLight.value.setZ(e);
                    },
                  },
                  v4: {
                    value: 0.5,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      f.current.material.uniforms.uLight.value.setW(e);
                    },
                  },
                }),
              }),
            }),
          }),
          (0, i.jsx)("points", {
            ref: f,
            geometry: h,
            material: d,
            frustumCulled: !1,
            ...r,
          })
        );
      };
      var eo = () =>
          (0, i.jsxs)("group", {
            position: [0.001, -0.001, -0.005],
            rotation: [0.5 * Math.PI, 0, 0],
            children: [
              (0, i.jsx)(er, {
                bounding: [
                  [0.083, 0.083, 0.682],
                  [0.097, 0.083, 0.682],
                ],
                offsets: [
                  [-0.28, 0, 0],
                  [0.275, 0, 0],
                ],
              }),
              (0, i.jsx)(er, {
                bounding: [[0.097, 0.083, 0.793]],
                offsets: [[-0.01, 0, -0.01]],
                rotation: [0, V.MathUtils.degToRad(41), 0],
              }),
            ],
          }),
        es = (0, l.memo)(() => {
          let { get: e } = (0, u.D)(),
            { scene: t, animations: n } = (0, s.iW)(e().scene.name),
            [r] = (0, l.useState)(new V.Vector3()),
            [o] = (0, l.useState)(() => new V.AnimationMixer(t)),
            c = (0, l.useRef)(null),
            m = (0, s.G)("bk-lines-bold", t),
            p = (0, s.G)("bk-lines-thin", t),
            v = (0, s.G)("bk-lines-medium", t),
            d = (0, l.useRef)(0.05),
            h = (0, l.useRef)(0.1),
            g = (0, l.useRef)(0.2);
          return (
            (0, a.Z)(() => {
              let e = (0, s.iW)("lines-medium").clone();
              ((e.wrapS = V.RepeatWrapping),
                (e.wrapT = V.RepeatWrapping),
                (v.material.alphaMap = e),
                (v.material.transparent = !0),
                (v.material.depthWrite = !1),
                (v.material.emissiveIntensity = 4));
              let t = (0, s.iW)("lines-bold").clone();
              ((t.wrapS = V.RepeatWrapping),
                (t.wrapT = V.RepeatWrapping),
                (m.material.alphaMap = t),
                (m.material.transparent = !0),
                (m.material.depthWrite = !1),
                (m.material.emissiveIntensity = 4.96));
              let n = (0, s.iW)("lines-thin").clone();
              ((n.wrapS = V.RepeatWrapping),
                (n.wrapT = V.RepeatWrapping),
                (p.material.alphaMap = n),
                (p.material.transparent = !0),
                (p.material.depthWrite = !1));
            }, []),
            (0, a.Z)(() => {
              f()(n, (e) => {
                "bk-camera-group-anim" === e.name &&
                  ((c.current = o.clipAction(e, t)),
                  (c.current.play().paused = !0));
              });
            }, []),
            (0, u.F)((e, t) => {
              let { scene: n, camera: i } = e;
              if (
                (o.update(t),
                i.lookAt(r),
                (v.material.alphaMap.offset.y += t * h.current),
                (m.material.alphaMap.offset.y += t * d.current),
                (p.material.alphaMap.offset.y += t * g.current),
                !s.U2.getState().ready)
              )
                return;
              let a = c.current,
                l = a.getClip().duration,
                u = n.userData.progress;
              a.time = l * u;
            }),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)("primitive", {
                object: t,
                children: (0, i.jsx)(B, {
                  minFov: 33.99,
                  maxFov: 23.99,
                  cameraShake: !0,
                  pointerMove: !1,
                }),
              }),
            })
          );
        });
      class el extends V.ShaderMaterial {
        constructor() {
          (super({
            uniforms: { uTime: new V.Uniform(0) },
            vertexShader:
              "\n  varying vec2 vUv;\n\n  void main() {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n  }\n",
            fragmentShader:
              "\n  varying vec2 vUv;\n\n  void main() {\n    vec3 color = vec3(0.0);\n    gl_FragColor = vec4(color, 1.0);\n  }\n",
          }),
            (this.transparent = !0),
            (this.depthWrite = !1));
        }
      }
      var eu = () => {
          let [e] = (0, l.useState)(() => new el());
          return (0, i.jsx)("mesh", {
            material: e,
            children: (0, i.jsx)("planeGeometry", { args: [2, 2] }),
          });
        },
        ec = n(1583);
      let em = [
          {
            uuid: "hero",
            height: 3,
            Scene: () => {
              let { scene: e, animations: t } = (0, s.iW)("hero-scene"),
                [n] = (0, l.useState)(new V.Vector3()),
                r = (0, s.U2)((e) => e.complete),
                c = eb(),
                p = (0, g.mU)(),
                d = (0, v.useRouter)(),
                [h] = (0, l.useState)(() => new V.AnimationMixer(e)),
                x = (0, l.useRef)(null),
                w = (0, l.useRef)(null),
                y = (0, s.G)("hero-light", e),
                b = (0, s.G)("hero-lines-bold", e),
                C = (0, s.G)("hero-lines-thin", e),
                S = (0, s.G)("hero-lines-medium", e),
                _ = (0, l.useRef)(0.05),
                M = (0, l.useRef)(0.1),
                P = (0, l.useRef)(0.2);
              ((0, a.Z)(() => {
                let e = (0, s.iW)("lines-medium").clone();
                ((e.wrapS = V.RepeatWrapping),
                  (e.wrapT = V.RepeatWrapping),
                  (S.material.alphaMap = e));
                let t = (0, s.iW)("lines-bold").clone();
                ((t.wrapS = V.RepeatWrapping),
                  (t.wrapT = V.RepeatWrapping),
                  (b.material.alphaMap = t));
                let n = (0, s.iW)("lines-thin").clone();
                ((n.wrapS = V.RepeatWrapping),
                  (n.wrapT = V.RepeatWrapping),
                  (C.material.alphaMap = n));
              }, []),
                (0, a.Z)(() => {
                  f()(t, (t) => {
                    "bake-hero-light" === t.name
                      ? ((x.current = h.clipAction(t, e)), x.current.play())
                      : "bake-hero-camera-group" === t.name &&
                        ((w.current = h.clipAction(t, e)),
                        (w.current.play().paused = !0));
                  });
                }, []),
                (0, u.F)((t, i) => {
                  var a;
                  let { scene: r, camera: o } = t;
                  if (
                    !r.userData.isSceneVisible ||
                    (h.update(i),
                    o.lookAt(n),
                    (S.material.alphaMap.offset.y += i * M.current),
                    (b.material.alphaMap.offset.y += i * _.current),
                    (C.material.alphaMap.offset.y += i * P.current),
                    !s.U2.getState().ready)
                  )
                    return;
                  let l = w.current,
                    u = l.getClip().duration,
                    c =
                      (null === (a = e.parent) || void 0 === a
                        ? void 0
                        : a.userData.progress) || 0;
                  l.time = u * c;
                }));
              let R = (0, l.useCallback)(() => {
                let e = w.current,
                  t = e.getClip().duration;
                return m.ZP.timeline().fromTo(
                  e,
                  { time: 0.75 * t },
                  { time: 0.25 * t, duration: 4, ease: "power1.inOut" },
                  0,
                );
              }, []);
              return (
                (0, a.Z)(() => {
                  let e = s.U2.subscribe(
                    (e) => e.compiled,
                    (t) => {
                      t && (e(), "/" === d.asPath ? p.add(R(), 0) : r());
                    },
                  );
                  return () => {
                    e();
                  };
                }, [p]),
                (0, o.M4)(
                  "Scenes",
                  {
                    Hero: (0, o.so)({
                      camera: (0, o.so)({
                        progress: {
                          value: 0,
                          min: 0,
                          max: 1,
                          step: 0.01,
                          onChange: (e) => {
                            w.current.time = w.current.getClip().duration * e;
                          },
                        },
                      }),
                      light: (0, o.so)({
                        intensity: {
                          value: 6,
                          min: 0,
                          max: 20,
                          step: 0.01,
                          onChange: (e) => {
                            y.intensity = e;
                          },
                        },
                        decay: {
                          value: 1,
                          min: 0,
                          max: 10,
                          step: 0.01,
                          onChange: (e) => {
                            y.decay = e;
                          },
                        },
                        color: {
                          value: "#b1c2c2",
                          onChange: (e) => {
                            y.color.set(e);
                          },
                        },
                      }),
                      lines: (0, o.so)(
                        {
                          bold: (0, o.so)({
                            emissiveBold: {
                              value: "#e9ffff",
                              onChange: (e) => {
                                b.material.emissive.set(e);
                              },
                            },
                            intensityBold: {
                              value: 1.8,
                              min: 0,
                              max: 10,
                              step: 0.01,
                              onChange: (e) => {
                                b.material.emissiveIntensity = e;
                              },
                            },
                            speedBold: {
                              value: 0.05,
                              min: -1,
                              max: 1,
                              step: 0.01,
                              onChange: (e) => {
                                _.current = e;
                              },
                            },
                          }),
                          medium: (0, o.so)({
                            emissiveMed: {
                              value: "#e8ffff",
                              onChange: (e) => {
                                S.material.emissive.set(e);
                              },
                            },
                            intensityMed: {
                              value: 2,
                              min: 0,
                              max: 10,
                              step: 0.01,
                              onChange: (e) => {
                                S.material.emissiveIntensity = e;
                              },
                            },
                            speedMed: {
                              value: 0.1,
                              min: -1,
                              max: 1,
                              step: 0.01,
                              onChange: (e) => {
                                M.current = e;
                              },
                            },
                          }),
                          thin: (0, o.so)({
                            emissiveThin: {
                              value: "#d4e8e8",
                              onChange: (e) => {
                                C.material.emissive.set(e);
                              },
                            },
                            intensityThin: {
                              value: 0.5,
                              min: 0,
                              max: 10,
                              step: 0.01,
                              onChange: (e) => {
                                C.material.emissiveIntensity = e;
                              },
                            },
                            speedThin: {
                              value: 0.2,
                              min: -1,
                              max: 1,
                              step: 0.01,
                              onChange: (e) => {
                                P.current = e;
                              },
                            },
                          }),
                        },
                        { collapsed: !0 },
                      ),
                    }),
                  },
                  { collapsed: !0 },
                ),
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)("primitive", {
                      object: e,
                      children: [
                        (0, i.jsx)(J, {}),
                        (0, i.jsx)(Q, {}),
                        (0, i.jsx)(B, {
                          minFov: 33.99,
                          maxFov: 23.99,
                          cameraShake: !0,
                          pointerMove: !0,
                        }),
                      ],
                    }),
                    (0, i.jsx)(k.C.In, {
                      children: (0, i.jsx)(L.Z, {
                        uuid: "hero",
                        composer: c,
                        carouselVariant: "vertical",
                      }),
                    }),
                  ],
                })
              );
            },
          },
          {
            uuid: "chip",
            height: 3,
            Scene: () => {
              let { scene: e, animations: t } = (0, s.iW)("chip-scene"),
                [n] = (0, l.useState)(new V.Vector3()),
                r = eb(),
                [c] = (0, l.useState)(() => new V.AnimationMixer(e)),
                m = (0, l.useRef)(null),
                p = (0, l.useRef)(null),
                v = (0, s.G)("chip-light", e),
                d = (0, s.G)("chip-lines", e),
                h = (0, s.G)("chip-background-top", e),
                g = (0, s.G)("chip-background-bottom", e),
                x = (0, l.useRef)(5),
                w = (0, l.useRef)(-1),
                y = (0, l.useRef)(0.1);
              return (
                (0, a.Z)(() => {
                  let e = (0, s.iW)("lines-medium").clone();
                  ((e.wrapS = V.RepeatWrapping),
                    (e.wrapT = V.RepeatWrapping),
                    (d.material.alphaMap = e),
                    (h.material.alphaMap = e.clone()),
                    (g.material.alphaMap = e.clone()));
                }, []),
                (0, a.Z)(() => {
                  f()(t, (t) => {
                    "bake-chip-light" === t.name
                      ? ((m.current = c.clipAction(t, e)), m.current.play())
                      : "bake-chip-camera-group" === t.name &&
                        ((p.current = c.clipAction(t, e)),
                        (p.current.play().paused = !0));
                  });
                }, []),
                (0, u.F)((t, i) => {
                  var a;
                  let { scene: r, camera: o } = t;
                  if (!r.userData.isSceneVisible) return;
                  (c.update(i),
                    o.lookAt(n),
                    (d.material.alphaMap.offset.y -= i * x.current),
                    (h.material.alphaMap.offset.y -= i * w.current),
                    (g.material.alphaMap.offset.y -= i * y.current));
                  let s = p.current,
                    l =
                      (null === (a = e.parent) || void 0 === a
                        ? void 0
                        : a.userData.progress) || 0;
                  s.time = s.getClip().duration * l;
                }),
                (0, o.M4)("Scenes", {
                  Chip: (0, o.so)(
                    {
                      camera: (0, o.so)({
                        progress: {
                          value: 0,
                          min: 0,
                          max: 1,
                          step: 0.01,
                          onChange: (e) => {
                            p.current.time = p.current.getClip().duration * e;
                          },
                        },
                      }),
                      light: (0, o.so)({
                        intensity: {
                          value: 3,
                          min: 0,
                          max: 10,
                          step: 0.01,
                          onChange: (e) => {
                            v.intensity = e;
                          },
                        },
                        decay: {
                          value: 0,
                          min: 0,
                          max: 10,
                          step: 0.01,
                          onChange: (e) => {
                            v.decay = e;
                          },
                        },
                        color: {
                          value: "#b1c2c2",
                          onChange: (e) => {
                            v.color.set(e);
                          },
                        },
                      }),
                      lines: (0, o.so)({
                        chip: (0, o.so)({
                          emissiveChip: {
                            value: "#667070",
                            onChange: (e) => {
                              d.material.emissive.set(e);
                            },
                          },
                          intensityChip: {
                            value: 0.5,
                            min: 0,
                            max: 10,
                            step: 0.01,
                            onChange: (e) => {
                              d.material.emissiveIntensity = e;
                            },
                          },
                          speedChip: {
                            value: 5,
                            min: -5,
                            max: 5,
                            step: 0.01,
                            onChange: (e) => {
                              x.current = e;
                            },
                          },
                        }),
                        bgTop: (0, o.so)({
                          emissiveBgTop: {
                            value: "#e8ffff",
                            onChange: (e) => {
                              h.material.emissive.set(e);
                            },
                          },
                          intensityBgTop: {
                            value: 2,
                            min: 0,
                            max: 10,
                            step: 0.01,
                            onChange: (e) => {
                              h.material.emissiveIntensity = e;
                            },
                          },
                          speedBgTop: {
                            value: -1,
                            min: -2,
                            max: 2,
                            step: 0.01,
                            onChange: (e) => {
                              w.current = e;
                            },
                          },
                        }),
                        bgBottom: (0, o.so)({
                          emissiveBgBottom: {
                            value: "#e8ffff",
                            onChange: (e) => {
                              g.material.emissive.set(e);
                            },
                          },
                          intensityBgBottom: {
                            value: 2,
                            min: 0,
                            max: 10,
                            step: 0.01,
                            onChange: (e) => {
                              g.material.emissiveIntensity = e;
                            },
                          },
                          speedBgBottom: {
                            value: 0.1,
                            min: -2,
                            max: 2,
                            step: 0.01,
                            onChange: (e) => {
                              y.current = e;
                            },
                          },
                        }),
                      }),
                    },
                    { collapsed: !0 },
                  ),
                }),
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)("primitive", {
                      object: e,
                      children: [
                        (0, i.jsx)(J, {}),
                        (0, i.jsx)(Q, {}),
                        (0, i.jsx)(B, {
                          minFov: 37.99,
                          maxFov: 23.99,
                          cameraShake: !0,
                          pointerMove: !0,
                        }),
                      ],
                    }),
                    (0, i.jsx)(k.C.In, {
                      children: (0, i.jsx)(L.Z, {
                        uuid: "chip",
                        composer: r,
                        carouselVariant: "horizontal",
                      }),
                    }),
                  ],
                })
              );
            },
          },
          {
            uuid: "neutrino",
            height: 3,
            Scene: () => {
              let { scene: e, animations: t } = (0, s.iW)("neutrino-scene"),
                [n] = (0, l.useState)(new V.Vector3()),
                r = eb(),
                [c] = (0, l.useState)(() => new V.AnimationMixer(e)),
                m = (0, l.useRef)(null),
                p = (0, l.useRef)(null),
                v = (0, s.G)("neutrino-light", e);
              return (
                (0, a.Z)(() => {
                  f()(t, (t) => {
                    "bake-neutrino-light" === t.name
                      ? ((m.current = c.clipAction(t, e)), m.current.play())
                      : "bake-neutrino-camera-group" === t.name &&
                        ((p.current = c.clipAction(t, e)),
                        (p.current.play().paused = !0));
                  });
                }, []),
                (0, u.F)((t, i) => {
                  var a;
                  let { scene: r, camera: o } = t;
                  if (!r.userData.isSceneVisible) return;
                  (c.update(i), o.lookAt(n));
                  let s = p.current,
                    l =
                      (null === (a = e.parent) || void 0 === a
                        ? void 0
                        : a.userData.progress) || 0;
                  s.time = s.getClip().duration * l;
                }),
                (0, o.M4)("Scenes", {
                  Neutrino: (0, o.so)({
                    camera: (0, o.so)({
                      progress: {
                        value: 0,
                        min: 0,
                        max: 1,
                        step: 0.01,
                        onChange: (e) => {
                          p.current.time = p.current.getClip().duration * e;
                        },
                      },
                    }),
                    light: (0, o.so)({
                      intensity: {
                        value: 6,
                        min: 0,
                        max: 10,
                        step: 0.01,
                        onChange: (e) => {
                          v.intensity = e;
                        },
                      },
                      decay: {
                        value: 3,
                        min: 0,
                        max: 10,
                        step: 0.01,
                        onChange: (e) => {
                          v.decay = e;
                        },
                      },
                      color: {
                        value: "#b1c2c2",
                        onChange: (e) => {
                          v.color.set(e);
                        },
                      },
                    }),
                  }),
                }),
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)("primitive", {
                      object: e,
                      children: [
                        (0, i.jsx)(eo, {}),
                        (0, i.jsx)(ei, {}),
                        (0, i.jsx)(J, {}),
                        (0, i.jsx)(Q, {}),
                        (0, i.jsx)(B, {
                          minFov: 33.99,
                          maxFov: 23.99,
                          cameraShake: !0,
                          pointerMove: !0,
                        }),
                      ],
                    }),
                    (0, i.jsx)(k.C.In, {
                      children: (0, i.jsx)(L.Z, {
                        uuid: "neutrino",
                        composer: r,
                        carouselVariant: "horizontal",
                      }),
                    }),
                  ],
                })
              );
            },
          },
          {
            uuid: "tunnel",
            height: 3,
            Scene: () => {
              let { scene: e, animations: t } = (0, s.iW)("tunnel-scene"),
                [n] = (0, l.useState)(() => new V.AnimationMixer(e)),
                r = (0, l.useRef)(null),
                c = eb(),
                m = (0, s.G)("tunnel-circles", e),
                p = (0, s.G)("tunnel-circuits", e),
                v = (0, s.G)("tunnel-lines", e),
                [d] = (0, l.useState)(() => new ec.L()),
                h = (0, l.useRef)(0.05),
                g = (0, l.useRef)(Math.PI);
              return (
                (0, a.Z)(() => {
                  let e = (0, s.iW)("tunnel-circles").clone();
                  ((e.wrapS = V.RepeatWrapping),
                    (e.wrapT = V.RepeatWrapping),
                    (m.material.emissiveMap = e));
                  let t = (0, s.iW)("tunnel-circuits").clone();
                  ((t.wrapS = V.RepeatWrapping),
                    (t.wrapT = V.RepeatWrapping),
                    (p.material.alphaMap = t));
                  let n = (0, s.iW)("tunnel-lines").clone();
                  ((n.wrapS = V.RepeatWrapping),
                    (n.wrapT = V.RepeatWrapping),
                    (v.material.alphaMap = n));
                }, []),
                (0, a.Z)(() => {
                  f()(t, (t) => {
                    "bake-tunnel-camera-group" === t.name &&
                      ((r.current = n.clipAction(t, e)), r.current.play());
                  });
                }, []),
                (0, u.F)((e, t) => {
                  let { scene: i, camera: a, clock: r } = e;
                  if (!i.userData.isSceneVisible) return;
                  n.update(t);
                  let o = r.getElapsedTime(),
                    s = g.current * d.noise(o * h.current, 1);
                  a.rotation.z = 0.14 + s;
                }),
                (0, o.M4)("Scenes", {
                  Tunnel: (0, o.so)(
                    {
                      camera: (0, o.so)({
                        timeScale: {
                          value: 1.5,
                          min: 0,
                          max: 5,
                          step: 0.01,
                          onChange: (e) => {
                            r.current.timeScale = e;
                          },
                        },
                        rollFrequency: {
                          value: 0.05,
                          min: 0,
                          max: 1,
                          step: 0.01,
                          onChange: (e) => {
                            h.current = e;
                          },
                        },
                        maxRoll: {
                          value: Math.PI,
                          min: -(2 * Math.PI),
                          max: 2 * Math.PI,
                          step: 0.01,
                          onChange: (e) => {
                            g.current = e;
                          },
                        },
                      }),
                      lines: (0, o.so)({
                        circles: (0, o.so)({
                          emissiveCircles: {
                            value: "#e9ffff",
                            onChange: (e) => {
                              m.material.emissive.set(e);
                            },
                          },
                          intensityCircles: {
                            value: 2,
                            min: 0,
                            max: 10,
                            step: 0.01,
                            onChange: (e) => {
                              m.material.emissiveIntensity = e;
                            },
                          },
                        }),
                        circuits: (0, o.so)({
                          emissiveCircuits: {
                            value: "#e9ffff",
                            onChange: (e) => {
                              p.material.emissive.set(e);
                            },
                          },
                          intensityCircuits: {
                            value: 0.3,
                            min: 0,
                            max: 10,
                            step: 0.01,
                            onChange: (e) => {
                              p.material.emissiveIntensity = e;
                            },
                          },
                        }),
                        lines: (0, o.so)({
                          emissiveLines: {
                            value: "#e9ffff",
                            onChange: (e) => {
                              v.material.emissive.set(e);
                            },
                          },
                          intensityLines: {
                            value: 1.8,
                            min: 0,
                            max: 10,
                            step: 0.01,
                            onChange: (e) => {
                              v.material.emissiveIntensity = e;
                            },
                          },
                        }),
                      }),
                    },
                    { collapsed: !0 },
                  ),
                }),
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)("primitive", {
                      object: e,
                      children: [
                        (0, i.jsx)(Q, {}),
                        (0, i.jsx)(B, {
                          minFov: 71.1,
                          maxFov: 61.1,
                          cameraShake: !1,
                          pointerMove: !1,
                        }),
                      ],
                    }),
                    (0, i.jsx)(k.C.In, {
                      children: (0, i.jsx)(L.Z, {
                        uuid: "tunnel",
                        composer: c,
                        carouselVariant: "horizontal",
                      }),
                    }),
                  ],
                })
              );
            },
          },
        ],
        ep = [
          {
            uuid: "section-1",
            route: "/accelerated-cloud-platform/",
            Scene: es,
          },
          { uuid: "section-2", route: "/neutrino/", Scene: es },
          { uuid: "section-3", route: "/white-glove-services/", Scene: es },
          { uuid: "section-4", route: "/ai-as-a-service/", Scene: es },
          { uuid: "static-1", route: "/case-studies/", Scene: eu },
          { uuid: "static-2", route: "/about-us/", Scene: eu },
          { uuid: "static-3", route: "/contacts/", Scene: eu },
        ];
      var ef = n(8522),
        ev = n.n(ef);
      let ed = async (e, t, n, i) => {
          let a = new Set();
          t.traverse((e) => {
            let t, n;
            if (null != (t = e.material) && t.isMaterial) {
              var i, r;
              (e.frustumCulled &&
                (null === e.boundingSphere
                  ? e.computeBoundingSphere()
                  : null != (n = e.geometry) &&
                    null === n.boundingSphere &&
                    n.computeBoundingSphere()),
                t.uniforms &&
                  f()(ev()(t.uniforms), (e) => {
                    var t;
                    let [n, i] = e;
                    (null === (t = i.value) || void 0 === t
                      ? void 0
                      : t.isTexture) && a.add(i.value);
                  }),
                f()(ev()(t), (e) => {
                  let [t, n] = e;
                  (null == n ? void 0 : n.isTexture) && a.add(n);
                }),
                (e.__uploadVars = {
                  cull: e.frustumCulled,
                  visible: e.visible,
                  materialVisible: t.visible,
                  customDepthMaterialVisible:
                    null === (i = e.customDepthMaterial) || void 0 === i
                      ? void 0
                      : i.visible,
                  customDistanceMaterialVisible:
                    null === (r = e.customDistanceMaterial) || void 0 === r
                      ? void 0
                      : r.visible,
                }),
                (e.frustumCulled = !1),
                (e.visible = !0),
                (t.visible = !0),
                e.customDepthMaterial && (e.customDepthMaterial.visible = !0),
                e.customDistanceMaterial &&
                  (e.customDistanceMaterial.visible = !0));
            } else
              e.isLOD &&
                ((e.__uploadVars = { autoUpdate: e.autoUpdate }),
                (e.autoUpdate = !1));
          });
          let r = [];
          (e.setRenderTarget(i),
            r.push(e.compileAsync(t, n)),
            a.size > 0 &&
              r.push(
                ...Array.from(a).map(
                  (n) =>
                    new Promise((i) => {
                      (e.initTexture(n), i(t));
                    }),
                ),
              ),
            await Promise.all(r),
            e.setRenderTarget(i),
            e.render(t, n),
            t.traverse((e) => {
              if (e.__uploadVars) {
                var t;
                ((
                  null === (t = e.material) || void 0 === t
                    ? void 0
                    : t.isMaterial
                )
                  ? ((e.frustumCulled = e.__uploadVars.cull),
                    (e.visible = e.__uploadVars.visible),
                    (e.material.visible = e.__uploadVars.materialVisible),
                    e.customDepthMaterial &&
                      (e.customDepthMaterial.visible =
                        e.__uploadVars.customDepthMaterialVisible),
                    e.customDistanceMaterial &&
                      (e.customDistanceMaterial.visible =
                        e.__uploadVars.customDistanceMaterialVisible))
                  : e.isLOD && (e.autoUpdate = e.__uploadVars.autoUpdate),
                  delete e.__uploadVars);
              }
            }));
        },
        eh = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            i = e * n,
            a = t * n;
          if (i * a > 3686400) {
            let e = i / a;
            ((i = Math.ceil((a = Math.sqrt(3686400 / e)) * e)),
              (a = Math.ceil(a)));
          }
          return { width: i, height: a };
        },
        eg = new V.WebGLRenderTarget(1, 1, { type: V.HalfFloatType });
      eg.texture.name = "EffectComposer.rt1";
      class ex extends V.ShaderMaterial {
        constructor() {
          (super({
            uniforms: {
              tScene1: new V.Uniform(null),
              tScene2: new V.Uniform(null),
              tSection: new V.Uniform(null),
              tTechNoise: new V.Uniform(null),
              uResolution: new V.Uniform(new V.Vector2()),
              uMask: new V.Uniform(new V.Vector3()),
              uProgress: new V.Uniform(0),
              uProgressVel: new V.Uniform(0),
              uSectionProgress: new V.Uniform(0),
              uWaveSize: new V.Uniform(1),
              uMaskRadius: new V.Uniform(0.18),
              uInnerDistortion: new V.Uniform(-1.4),
              uRadius: new V.Uniform(0),
              uWaveGlow: new V.Uniform(5),
              uTime: new V.Uniform(0),
            },
            vertexShader:
              "\n  varying vec2 vUv;\n  varying float vSize;\n\n  void main () {\n    float size = 1.0;\n    float cameraDistance = 5.;\n    \n    vUv = uv;\n    vSize = (0.1 * cameraDistance) / size;\n    \n    gl_Position = vec4(position, 1.0);\n  }\n",
            fragmentShader:
              "\n  #define PI 3.141592653589793\n \n  uniform sampler2D tScene1;\n  uniform sampler2D tScene2;\n  uniform sampler2D tSection;\n  uniform sampler2D tTechNoise;\n\n  uniform vec2 uResolution;\n  uniform float uProgress;\n  uniform float uWaveSize;\n  uniform float uInnerDistortion;\n  uniform float uSectionProgress;\n  uniform float uWaveGlow;\n  uniform float uMaskRadius;\n  uniform float uRadius;\n  uniform float uTime;\n  uniform vec3 uMask;\n\n  varying float vSize;\n  varying vec2 vUv;\n\n  float cubicIn (float t) { return t*t*t; }\n\n  #define power2In(t) cubicIn(t)\n\n  float efit(float x, float a1, float a2, float b1, float b2) { return b1 + ((x-a1) * (b2-b1)) / (a2-a1); }\n  float fit(float x, float a1, float a2, float b1, float b2) { return clamp(efit(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2)); }\n\n  float _linstep(float begin,float end,float t) {\n    return clamp((t-begin) / (end-begin), 0.0, 1.0);\n  }\n  float _pl(vec2 _input,vec2 start,vec2 end,float margin,float progress) {\n    vec2 v = end - start;\n    float dist = length(v);\n    vec2 dir = v / dist;\n    return dot(dir, _input - start - dir * (dist + margin) * progress);\n  }\n  float _pl(vec3 _input, vec3 start, vec3 end, float margin, float progress) {\n    vec3 v = end - start;\n    float dist = length(v);\n    vec3 dir = v / dist;\n    return dot(dir, _input - start -dir * (dist + margin) * progress);\n  }\n  float falloff(float _input, float start, float end, float margin, float progress) {\n    float m = margin * sign(end - start);\n    float p = mix(start - m, end, progress);\n    return _linstep(p + m, p, _input);\n  }\n  float falloff(vec2 _input, vec2 start, vec2 end, float margin, float progress) {\n    return _linstep(0.0, -margin, _pl(_input, start, end, margin, progress));\n  }\n  float falloff(vec3 _input, vec3 start, vec3 end, float margin, float progress) {\n    return _linstep(0.0, -margin, _pl(_input, start, end, margin, progress));\n  }\n\n\n  float ca_linterp(float t) {\n    return clamp(1.0 - abs(2.0 * t - 1.0), 0.0, 1.0);\n  }\n  float ca_remap(float t, float a, float b) {\n    return clamp((t-a) / (b-a), 0.0, 1.0);\n  }\n  vec2 ca_barrelDistortion(vec2 coord, float amt) {\n    vec2 cc = coord-0.5;\n    float dist = dot(cc, cc);\n    return coord + cc * dist * amt;\n  }\n  vec4 ca_spectrum_offset(float t) {\n    vec4 ret;\n    float lo = step(t, 0.5);\n    float hi = 1.0 - lo;\n    float w = ca_linterp(ca_remap(t, 1.0/6.0, 5.0/6.0));\n    ret = vec4(lo, 1.0, hi, 1.0) * vec4(1.0 - w, w, 1.0 - w, 1.0);\n    return pow(ret, vec4(1.0/2.2));\n  }\n\n  #ifndef CA_ITERATIONS\n    const int CA_ITERATIONS = 3;\n  #endif\n  const float RECI_ITER = 1.0 / float(CA_ITERATIONS);\n  vec4 chromatic_aberration(sampler2D text, vec2 uv, float maxdistort, float bendAmount) {\n    vec4 sumcol = vec4(0.0);\n    vec4 sumw = vec4(0.0);\n    for(int i = 0; i < CA_ITERATIONS; ++i) {\n      float t = float(i) * RECI_ITER;\n      vec4 w = ca_spectrum_offset(t);\n      sumw += w;\n      sumcol += w * texture2D(text, ca_barrelDistortion(uv, bendAmount * maxdistort * t));\n    }\n    return sumcol/sumw;\n  }\n\n  float Circle(vec2 uv, float threshold, float radius) {\n    return smoothstep(threshold, 0.0, length(uv) - radius + threshold);\n  }\n\n  vec2 Mul(vec2 uv, float value) {\n    uv -= 0.5;\n    uv *= value;\n    uv += 0.5;\n    return uv;\n  }\n\n  vec3 makeGradient (vec3 diffuse, vec2 uv) {\n    float progress = (uv.x + uv.y) * 0.5;\n\n    vec3 step1 = diffuse;\n    vec3 step2 = vec3(0.0);\n    vec3 step3 = diffuse * 0.2;\n    \n    float transition1 = smoothstep(0.0, 0.4, progress);\n    float transition2 = smoothstep(0.6, 1.0, progress);\n    \n    vec3 color = mix(step1, step2, transition1);\n    color = mix(color, step3, transition2);\n\n    return color;\n  }\n\n  void main () {\n    vec3 color = vec3(0.0);\n    float progress = uProgress;\n    float waveSize = uWaveSize;\n    float maskRadius = uMaskRadius;\n    float waveGlow = uWaveGlow;\n\n    progress = cubicIn(progress);\n\n    float aspect = uResolution.x / uResolution.y;\n\n    if (progress > 0.0) {\n      vec2 centeredUV = (vUv - 0.5) * vec2(aspect, 1.0);\n      float time = uTime * 2.5;\n      float progress = uProgress * aspect;\n      if (aspect < .75) {\n        progress = uProgress * (uResolution.y / uResolution.x) * .5;\n      }\n      \n      float circleWave = Circle(centeredUV, 0.3, progress);\n      float wave = circleWave * smoothstep(0.0, 2., abs(sin(time + circleWave * PI * 3.0)));\n      float horizontalCut = smoothstep(progress, 0.0, abs(centeredUV.x + centeredUV.y) + .06);\n      wave *= horizontalCut * smoothstep(0., .4, progress);\n\n      // Adjust UV for the first scene texture based on the wave effect\n      float height = .7;\n      vec2 uv1 = Mul(vUv, 1.0 - (circleWave + wave) * height);\n      vec3 tDiffuse1 = texture(tScene1, uv1).rgb;\n      // tDiffuse1 += wave * waveGlow * (1.-Circle(centeredUV, .1, progress-.1)); // Adding waves light effect\n\n      // Generate circular mask for the second scene\n      float circleMask = Circle(centeredUV, 0.075 * progress, progress - maskRadius);\n\n      float circleInnerDistortion = Circle(centeredUV, 0.25 * progress, progress - maskRadius);\n      // Adjust UV for the second scene texture with distortion\n      vec2 uv2 = Mul(vUv, 1.0 + (uInnerDistortion - circleInnerDistortion * uInnerDistortion));\n      vec3 tDiffuse2 = texture(tScene2, uv2).rgb;\n      color = mix(tDiffuse1, tDiffuse2, circleMask);\n\n      // Wave lights effect\n      float waveColor = wave * waveGlow * (1.-Circle(centeredUV, .1, progress-.1));\n      color += waveColor;\n\n      // Inner shadow\n      color *= 1. - .7 * clamp(0.,1.,circleMask - Circle(centeredUV + vec2(-.1, .1) * progress, 0.175 * progress, progress - maskRadius));\n\n    } else {\n      if (uSectionProgress > 0.0) {\n        if (uSectionProgress < 1.0) {\n          // cut\n          vec2 uvTex = vUv - 0.5;\n          uvTex.x *= aspect;\n          uvTex += 0.5;\n          vec3 scrollTex = texture2D(tTechNoise, uvTex * 0.5).rgb;\n\n          // slope displacement\n          float slopeDisp = (scrollTex.b * 2.0 - 1.0) * 0.4;\n          float slope = -0.2 * aspect * step(0.0, uSectionProgress);\n          float inclination = mix(vUv.x + slopeDisp, 1.0 - vUv.x + slopeDisp, step(slope, 0.0));\n          float incProgress = fit(uSectionProgress, 0.0, 1.0, 0.0, 1.0 + abs(slope));\n\n          // cromatic aberration\n          float cutDiagonalBlur = falloff(vUv.y + inclination * abs(slope), 0.0, 1.0, 2.0, incProgress);\n\n          // tech displacement\n          float cutDiagonalDisplacement = falloff(vUv.y + inclination * abs(slope), 0.0, 1.0, 0.9, incProgress);\n          float cutDisp = falloff(scrollTex.g, 0.0, 1.0, 1.0, cutDiagonalDisplacement);\n\n          // ice cut\n          float cutDiagonal = falloff(vUv.y + inclination * abs(slope), 0.0, 1.0, 0.2, incProgress);\n          float cut = falloff(scrollTex.r, 0.0, 1.0, 2.0, cutDiagonal);\n\n          // vars\n          const float parallaxY = 0.6;\n          const float displacement = 0.025;\n\n          // mix with optimization to save texture reads\n          vec3 scene = vec3(0.0);\n          vec3 section = vec3(0.0);\n          float modulator = 12.0 * smoothstep(1.0, 0.7, abs(vUv.x * 2.0 - 1.0)) * smoothstep(1.0, 0.7, abs(vUv.y * 2.0 - 1.0));\n          if (cut < 1.0) scene = chromatic_aberration(tScene1, vUv - vec2(0.0, parallaxY * power2In(uSectionProgress) + displacement * cutDisp), modulator, cutDiagonalBlur).rgb;\n          if (cut > 0.0) section = chromatic_aberration(tSection, vUv + vec2(0.0, parallaxY * power2In(1.0 - uSectionProgress) + displacement * (1.0 - cutDisp)), modulator, (1.0 - cutDiagonalBlur)).rgb;\n          color = mix(scene, section, cut);\n        } else {\n          color = texture2D(tSection, vUv).rgb;\n        }\n      } else {\n        color = texture2D(tScene1, vUv).rgb;\n      }\n    }\n\n    gl_FragColor = vec4(color, 1.0);\n\n    // #include <tonemapping_fragment>\n    // #include <colorspace_fragment>\n  }\n",
          }),
            (this.depthTest = !1),
            (this.depthWrite = !1));
        }
      }
      let ew = (0, l.createContext)(void 0);
      var ey = (e) => {
        let { controller: t, children: n } = e,
          { gl: r, scene: o, camera: c, size: m } = (0, u.D)(),
          p = (0, s.U2)((e) => e.compile),
          f = (0, l.useMemo)(() => new Map(), []),
          v = (0, l.useMemo)(() => new Map(), []),
          [d] = (0, l.useState)(() => {
            let e = new ex();
            return (
              (e.uniforms.tTechNoise.value = (0, s.iW)("tech-noise")),
              (e.uniforms.tTechNoise.value.wrapS = V.RepeatWrapping),
              (e.uniforms.tTechNoise.value.wrapT = V.RepeatWrapping),
              e
            );
          }),
          [h] = (0, l.useState)(() => {
            let e = new W.x(r, eg);
            e.setPixelRatio(r.getPixelRatio());
            let t = new E.C(o, c);
            return (e.addPass(t), (o.name = "main-scene"), e);
          }),
          g = (0, l.useCallback)((e) => e.passes[0].scene, []),
          x = (0, l.useCallback)((e) => e.passes[0].camera, []),
          w = (0, l.useCallback)(
            (e) => {
              let t = em[e].uuid;
              return f.get(t);
            },
            [f],
          );
        ((0, u.F)((e, t) => {
          let { clock: n } = e,
            { compiled: i } = s.U2.getState();
          if (!i) return;
          let a = null == n ? void 0 : n.getElapsedTime();
          ((d.uniforms.uTime.value = a), i && h.render(t));
        }, 1),
          (0, a.Z)(() => {
            let e = [];
            (e.push(ed(r, o, c, eg)),
              f.forEach((t) => {
                let n = g(t),
                  i = x(t);
                e.push(ed(r, n, i, eg));
              }),
              v.forEach((t) => {
                let n = g(t),
                  i = x(t);
                e.push(ed(r, n, i, eg));
              }),
              p(e));
          }, [r, o, c, f, p, g, x]),
          (0, l.useEffect)(() => {
            (d.uniforms.uResolution.value.set(m.width, m.height),
              h.setSize(m.width, m.height));
          }, [h, d, m]));
        let y = (0, l.useMemo)(
          () => ({
            composer: h,
            shader: d,
            sceneComposers: f,
            sectionComposers: v,
            getComposerFromIndex: w,
            getSceneFromComposer: g,
          }),
          [h, d, f, v, w, g],
        );
        return (0, i.jsxs)(ew.Provider, {
          value: y,
          children: [
            t,
            n,
            (0, i.jsx)("mesh", {
              name: "Main Triangle Mesh",
              material: d,
              children: (0, i.jsxs)("bufferGeometry", {
                children: [
                  (0, i.jsx)("bufferAttribute", {
                    attach: "attributes-position",
                    args: [
                      new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
                      3,
                    ],
                  }),
                  (0, i.jsx)("bufferAttribute", {
                    attach: "attributes-uv",
                    args: [new Float32Array([0, 0, 2, 0, 0, 2]), 2],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      let eb = () => {
        let e = (0, l.useContext)(ew);
        if (void 0 === e)
          throw Error("useComposer must be used within a ComposerProvider");
        return e;
      };
      var eC = n(7929),
        eS = n.n(eC),
        e_ = n(9749),
        eM = n(2125),
        eP = n(4753);
      let eR = {
          scroll: {
            y: 0,
            total: 0,
            targetY1: 0,
            targetY2: 0,
            velocity: 0,
            progress: 0,
          },
          autoCenter: { needed: !1, animating: !1, lastTarget: 0, lastTime: 0 },
        },
        eD = (0, e_.Ue)(
          (0, eM.XR)(
            (0, eP.n)((e) => ({
              ...eR,
              setState: (t) => e((e) => eS()(e, t)),
            })),
          ),
        );
      var ez = () => {
          let {
              sceneComposers: e,
              sectionComposers: t,
              shader: n,
              getSceneFromComposer: r,
              getComposerFromIndex: p,
            } = eb(),
            d = eD((e) => e.scroll),
            h = eD((e) => e.autoCenter),
            w = (0, l.useMemo)(() => 75e-5, []),
            y = (0, l.useRef)(!1),
            C = (0, g.mU)(),
            S = (0, v.useRouter)(),
            { delta11: R } = (0, I.sI)(),
            D = (0, N.v4)((e) => e.setState),
            z = (0, l.useRef)(null),
            T = (0, l.useRef)(null),
            V = (0, l.useCallback)(() => {
              h.animating && (m.ZP.killTweensOf(d), (h.animating = !1));
            }, [d, h]),
            W = (0, l.useCallback)(
              (e, t) => {
                let n = P(e);
                ((h.animating = !0),
                  m.ZP.to(d, {
                    y: n,
                    duration: t,
                    ease: "inOut4",
                    overwrite: !0,
                    onUpdate: () => {
                      ((d.targetY1 = d.y),
                        (d.targetY2 = d.y),
                        (h.lastTarget = d.y));
                    },
                    onComplete: () => {
                      h.animating = !1;
                    },
                  }));
              },
              [d, h],
            );
          (0, u.F)((i) => {
            let { clock: a } = i,
              o = a.getElapsedTime();
            d.targetY2 !== h.lastTarget &&
              ((h.needed = !0), (h.lastTarget = d.targetY2), (h.lastTime = o));
            let l = d.y;
            ((d.targetY1 = M(d.targetY1, d.targetY2, 0.075, 100 * w)),
              (d.y = _(d.y, d.targetY1, 0.15)));
            let u = 750 * w;
            ((d.targetY2 = x(d.targetY2, d.y - u, d.y + u)),
              Math.abs(d.y - d.targetY2) < 0.1 * w &&
                ((d.y = d.targetY2), (d.targetY1 = d.targetY2)),
              (d.velocity += 1 * Math.abs(d.y - l)),
              (d.velocity *= b(0.98)),
              (d.velocity = x(d.velocity, 0, 1)),
              0.001 > Math.abs(d.velocity) && (d.velocity = 0),
              (d.total = 0),
              e.forEach((e) => {
                let t = r(e).userData;
                ((t.__top = d.total),
                  (t.__bottom = t.__top + t.height),
                  (d.total += t.height));
              }));
            let c = d.y % d.total,
              m = d.y >= 0 ? c : d.total - Math.abs(c),
              v = m + 1,
              g = v % d.total;
            d.progress = m / d.total;
            let C = null,
              S = null,
              R = 0,
              F = 0;
            e.forEach((e) => {
              let t = r(e),
                i = P(m, 2),
                a = P(g, 2),
                o = i >= t.userData.__top && i < t.userData.__bottom,
                s = a > t.userData.__top && a <= t.userData.__bottom;
              if (((t.userData.progressVel = d.velocity), o || s)) {
                let e = o ? v : g,
                  i = t.userData.__bottom - t.userData.__top;
                ((t.userData.progress = (e - t.userData.__top) / (i + 1)),
                  o ? (C = F) : ((S = F), (R = g - t.userData.__top)),
                  (t.userData.isSceneVisible =
                    1 !== n.uniforms.uSectionProgress.value));
              } else t.userData.isSceneVisible = !1;
              ++F;
            });
            let N = n.uniforms.uSectionProgress.value > 0;
            if (1 !== n.uniforms.uSectionProgress.value) {
              if (null !== C) {
                let e = p(C);
                (null == e || e.render(),
                  (n.uniforms.tScene1.value =
                    null == e ? void 0 : e.readBuffer.texture));
              }
              if (null !== S) {
                let e = p(S);
                (null == e || e.render(),
                  (n.uniforms.tScene2.value =
                    null == e ? void 0 : e.readBuffer.texture));
              }
              if (
                (!s.U2.getState().ready ||
                  y.current ||
                  N ||
                  ((n.uniforms.uProgress.value = R),
                  (n.uniforms.uProgressVel.value = d.velocity)),
                h.needed && !h.animating && o - h.lastTime > 1.4)
              ) {
                h.needed = !1;
                let e = d.targetY2 % d.total,
                  t = d.targetY2 >= 0 ? e : d.total - Math.abs(e),
                  n = (t + 1) % d.total;
                if (R % 1 != 0) {
                  let e = ["Top", "Bottom"],
                    i = 1 / 0,
                    a = 0;
                  if (
                    (f()([C, S], (o) => {
                      if (null === o) return;
                      let s = {},
                        l = r(p(o));
                      ((s.sceneTop = l.userData.__top),
                        (s.sceneBottom = l.userData.__bottom),
                        (s.screenTop = t > n ? t - d.total : t),
                        (s.screenBottom = s.screenTop + 1),
                        f()(e, (t) => {
                          f()(e, (e) => {
                            let n =
                              s["scene".concat(t)] - s["screen".concat(e)];
                            Math.abs(n) < i && ((i = Math.abs(n)), (a = n));
                          });
                        }));
                    }),
                    0 === a)
                  )
                    return;
                  let o = d.targetY2 + a,
                    s = 2,
                    l = a < 0 ? C : S,
                    u = r(p(l || 0));
                  if (
                    "number" == typeof u.userData.initialScrollAutocenter &&
                    "number" == typeof u.userData.finalScrollAutocenter
                  ) {
                    let e = 1 / (u.userData.height + 1),
                      t =
                        ((l === C
                          ? 1 - u.userData.finalScrollAutocenter
                          : u.userData.initialScrollAutocenter) -
                          e) *
                        (u.userData.height + 1);
                    W((o += t * Math.sign(a)), (s += 2 * t));
                  }
                }
              }
            }
            (N
              ? t.forEach((e, t) => {
                  let i = r(e);
                  (null !== z.current &&
                    z.current === t &&
                    (null == e || e.render(),
                    (n.uniforms.tSection.value =
                      null == e ? void 0 : e.readBuffer.texture),
                    (i.userData.progress = U.G9.getState().progress)),
                    null !== T.current &&
                      T.current === t &&
                      (null == e || e.render(),
                      (n.uniforms.tScene1.value =
                        null == e ? void 0 : e.readBuffer.texture)),
                    null !== z.current &&
                      null !== T.current &&
                      z.current === t &&
                      (i.userData.progress = 0),
                    (null !== z.current && z.current === t) ||
                    (null !== T.current && T.current === t)
                      ? (i.userData.isSceneVisible = !0)
                      : (i.userData.isSceneVisible = !1));
                })
              : t.forEach((e) => {
                  r(e).userData.isSceneVisible = !1;
                }),
              R % 1 != 0
                ? D({ detune: R, progress: !0 })
                : D({ detune: 0, progress: !1 }));
          });
          let E = (0, l.useCallback)(
            () =>
              m.ZP.timeline().fromTo(
                n.uniforms.uProgress,
                { value: 1 },
                { value: 0, duration: 3, ease: "power3.inOut" },
                0,
              ),
            [n],
          );
          ((0, a.Z)(() => {
            let e = s.U2.subscribe(
              (e) => e.compiled,
              (t) => {
                t && (e(), "/" === S.asPath && C.add(E(), 0));
              },
            );
            return () => {
              e();
            };
          }, [C]),
            (0, a.Z)(() => {
              let e = A.U.subscribe(
                (e) => [e.currentRoute, e.previousRoute],
                (e) => {
                  let [t, i] = e;
                  if (t === i) return;
                  let a = t && "/" !== t ? t : null,
                    r = i && "/" !== i ? i : null;
                  ("/" === t && ((a = r), (r = null)),
                    (z.current = a),
                    (T.current = r),
                    m.ZP.timeline({
                      onComplete: () => {
                        ((z.current = a), (T.current = null));
                      },
                    })
                      .to(n.uniforms.uProgress, {
                        value: 0,
                        duration: 0.5,
                        ease: "power2.out",
                      })
                      .fromTo(
                        n.uniforms.uSectionProgress,
                        { value: "/" === t ? 0.99 : 0.01 },
                        {
                          value: "/" === t ? 0 : 1,
                          duration: 1.6,
                          ease: "power2.inOut",
                        },
                        0,
                      ),
                    "/" === t &&
                      m.ZP.to(d, {
                        y: 0,
                        duration: 1,
                        ease: "inOut4",
                        overwrite: !0,
                        onUpdate: () => {
                          ((d.targetY1 = d.y),
                            (d.targetY2 = d.y),
                            (h.lastTarget = d.y));
                        },
                      }));
                },
                { fireImmediately: !0 },
              );
              return () => {
                e();
              };
            }, []));
          let L = (0, l.useCallback)(() => {
              let e = j.E.getState();
              return e.swiperActive && "y" !== e.scrollDirLocked;
            }, []),
            Z = (0, l.useCallback)(
              () =>
                !s.U2.getState().ready ||
                j.E.getState().scrollLocked ||
                "/" !== A.U.getState().currentRoute,
              [],
            );
          return (
            (0, c.useGesture)(
              {
                onWheel: (e) => {
                  let { delta: t, last: n } = e;
                  if (!Z()) {
                    if (n) return !1;
                    (V(), (d.targetY2 += t[1] * w));
                  }
                },
                onDrag: () => {
                  !Z() && (L() || (V(), (d.targetY2 += 2.35 * R.y)));
                },
                onKeyDown: (e) => {
                  let { event: t } = e;
                  Z() ||
                    (V(),
                    "ArrowDown" === t.key && (d.targetY2 += 150 * w),
                    "ArrowUp" !== t.key || (d.targetY2 -= 150 * w));
                },
              },
              { target: document.body, eventOptions: { passive: !1 } },
            ),
            (0, o.M4)(
              "Composer",
              {
                Transition: (0, o.so)({
                  debug: {
                    value: !1,
                    onChange: (e) => {
                      y.current = e;
                    },
                  },
                  scroll: {
                    value: 0,
                    min: 0,
                    max: 12,
                    step: 1,
                    onChange: (e) => {
                      (m.ZP.killTweensOf(d), W(e, 1));
                    },
                  },
                  progress: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      n.uniforms.uProgress.value = e;
                    },
                  },
                  radius: {
                    value: 0,
                    min: -1,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      n.uniforms.uRadius.value = e;
                    },
                  },
                  waveSize: {
                    value: 1,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    onChange: (e) => {
                      n.uniforms.uWaveSize.value = e;
                    },
                  },
                  glow: {
                    value: 5,
                    min: 0,
                    max: 20,
                    step: 0.01,
                    onChange: (e) => {
                      n.uniforms.uWaveGlow.value = e;
                    },
                  },
                  innerDistortion: {
                    value: -1.4,
                    min: -10,
                    max: 10,
                    step: 0.1,
                    onChange: (e) => {
                      n.uniforms.uInnerDistortion.value = 0.1 * e;
                    },
                  },
                  maskRadius: {
                    value: 0.18,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      n.uniforms.uMaskRadius.value = e;
                    },
                  },
                  maskX: {
                    value: 1.5,
                    min: -2,
                    max: 2,
                    step: 0.01,
                    onChange: (e) => {
                      n.uniforms.uMask.value.setX(e);
                    },
                  },
                  maskY: {
                    value: -0.05,
                    min: -2,
                    max: 2,
                    step: 0.01,
                    onChange: (e) => {
                      n.uniforms.uMask.value.setY(e);
                    },
                  },
                  maskZ: {
                    value: 0.2,
                    min: -2,
                    max: 2,
                    step: 0.01,
                    onChange: (e) => {
                      n.uniforms.uMask.value.setZ(e);
                    },
                  },
                  gotoHome: (0, o.LI)(() => {
                    m.ZP.timeline().to(n.uniforms.uSectionProgress, {
                      value: 0,
                      duration: 1.25,
                      ease: "power2.out",
                    });
                  }),
                  gotoSection: (0, o.LI)(() => {
                    m.ZP.timeline().to(n.uniforms.uSectionProgress, {
                      value: 1,
                      duration: 1.25,
                      ease: "power2.out",
                    });
                  }),
                }),
              },
              { collapsed: !1 },
            ),
            (0, i.jsx)(k.C.In, { children: (0, i.jsx)(F, {}) })
          );
        },
        eT = n(1935),
        eF = n(2394),
        eU = (e) => {
          let {
              uuid: t,
              route: n,
              height: i = 0,
              isolate: a = !1,
              children: r,
            } = e,
            { gl: o, size: c, camera: m } = (0, u.D)(),
            { sceneComposers: p, sectionComposers: f } = eb(),
            v = (0, s.iW)("".concat(t, "-scene")),
            d = (null == v ? void 0 : v.cameras[0]) || m,
            [h] = (0, l.useState)(() => {
              let e = new V.Scene();
              return (
                (e.name = "".concat(t, "-scene")),
                (e.userData.name = e.name),
                (e.userData.height = i),
                (e.userData.route = n),
                (e.userData.progress = 0),
                (e.userData.initialScrollAutocenter = 0.25),
                (e.userData.finalScrollAutocenter = 0.75),
                e
              );
            }),
            [g] = (0, l.useState)(() => {
              let e = new V.WebGLRenderTarget(1, 1, { type: V.HalfFloatType });
              e.texture.name = "EffectComposer.rt1";
              let i = new W.x(o, e);
              return (
                i.setPixelRatio(o.getPixelRatio()),
                (i.renderToScreen = !1),
                i.addPass(new E.C(h, d)),
                i.addPass(new eT.T(eF.C)),
                a ? f.set(n, i) : p.set(t, i),
                i
              );
            });
          return (
            (0, l.useEffect)(() => {
              (g.setSize(c.width, c.height),
                (d.aspect = c.width / c.height),
                d.updateProjectionMatrix());
            }, [g, h, d, c]),
            (0, u.h)(r, h, { camera: d })
          );
        },
        eN = () => (0, i.jsx)(k.C.In, { children: (0, i.jsx)(g.Gt, {}) });
      let eI = (e, t) => {
        if (!Array.isArray(t)) return !!~e.indexOf(t);
        for (let n = t.length - 1; n >= 0; n--) if (~e.indexOf(t[n])) return !0;
        return !1;
      };
      class ej {
        constructor() {
          let e,
            t,
            n = this;
          ((this.agent = navigator.userAgent.toLowerCase()),
            (this.detect = function (e) {
              return eI(this.agent, e);
            }),
            (this.touchCapable = !!navigator.maxTouchPoints),
            (this.pixelRatio = window.devicePixelRatio),
            (this.system = {}),
            (this.system.retina = window.devicePixelRatio > 1),
            (this.system.webworker = void 0 !== window.Worker),
            window._NODE_ ||
              (this.system.geolocation = void 0 !== navigator.geolocation),
            window._NODE_ ||
              (this.system.pushstate = void 0 !== window.history.pushState),
            (this.system.webcam = !!(
              navigator.getUserMedia ||
              navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia ||
              navigator.msGetUserMedia
            )),
            (this.system.language =
              window.navigator.userLanguage || window.navigator.language),
            (this.system.webaudio = void 0 !== window.AudioContext),
            (this.system.xr = navigator.getVRDisplays || navigator.xr),
            (this.system.exokit = n.detect("exokit")));
          try {
            this.system.localStorage = void 0 !== window.localStorage;
          } catch (e) {
            this.system.localStorage = !1;
          }
          ((this.system.fullscreen =
            document.fullscreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled),
            (this.system.os =
              n.detect(["exokit"]) && "linux" == navigator.platform
                ? "magicleap"
                : n.detect(["ipad", "iphone", "ios"]) ||
                    (n.detect("mac") &&
                      n.touchCapable &&
                      1370 > Math.max(screen.width, screen.height))
                  ? "ios"
                  : n.detect(["android", "kindle"])
                    ? "android"
                    : n.detect(["blackberry"])
                      ? "blackberry"
                      : n.detect(["mac os"])
                        ? "mac"
                        : n.detect(["windows", "iemobile"])
                          ? "windows"
                          : n.detect(["linux"])
                            ? "linux"
                            : "unknown"),
            (this.system.version = (function () {
              try {
                if ("ios" == n.system.os) {
                  if (eI(n.agent, "intel mac")) {
                    let e = n.agent
                      .split("version/")[1]
                      .split(" ")[0]
                      .split(".");
                    return Number(e[0] + "." + e[1]);
                  }
                  let e = n.agent.split("os ")[1].split("_"),
                    t = e[0],
                    i = e[1].split(" ")[0];
                  return Number(t + "." + i);
                }
                if ("android" == n.system.os) {
                  let e = n.agent.split("android ")[1].split(";")[0];
                  return (
                    e.length > 3 && (e = e.slice(0, -2)),
                    "." == e.charAt(e.length - 1) && (e = e.slice(0, -1)),
                    Number(e)
                  );
                }
                if ("windows" == n.system.os)
                  return eI(n.agent, "rv:11")
                    ? 11
                    : Number(n.agent.split("windows phone ")[1].split(";")[0]);
              } catch (e) {}
              return -1;
            })()),
            (this.system.browser =
              "ios" == n.system.os
                ? n.detect(["twitter", "fbios"])
                  ? "social"
                  : n.detect(["crios"])
                    ? "chrome"
                    : n.detect(["safari"])
                      ? "safari"
                      : "unknown"
                : "android" == n.system.os
                  ? n.detect(["twitter", "fb", "facebook"])
                    ? "social"
                    : n.detect(["chrome"])
                      ? "chrome"
                      : n.detect(["firefox"])
                        ? "firefox"
                        : "browser"
                  : n.detect(["msie"]) ||
                      (n.detect(["trident"]) && n.detect(["rv:"])) ||
                      (n.detect(["windows"]) && n.detect(["edge"]))
                    ? "ie"
                    : n.detect(["chrome"])
                      ? "chrome"
                      : n.detect(["safari"])
                        ? "safari"
                        : n.detect(["firefox"])
                          ? "firefox"
                          : "unknown"),
            (this.system.browserVersion = (function () {
              try {
                if ("chrome" == n.system.browser)
                  return Number(n.agent.split("chrome/")[1].split(".")[0]);
                if ("firefox" == n.system.browser)
                  return Number(n.agent.split("firefox/")[1].split(".")[0]);
                if ("safari" == n.system.browser)
                  return Number(
                    n.agent.split("version/")[1].split(".")[0].split(".")[0],
                  );
                if ("ie" == n.system.browser)
                  return n.detect(["msie"])
                    ? Number(n.agent.split("msie ")[1].split(".")[0])
                    : n.detect(["rv:"])
                      ? Number(n.agent.split("rv:")[1].split(".")[0])
                      : Number(n.agent.split("edge/")[1].split(".")[0]);
              } catch (e) {
                return -1;
              }
            })()),
            (this.mobile =
              !(
                window._NODE_ ||
                (!("ontouchstart" in window) && !("onpointerdown" in window)) ||
                !eI(n.system.os, ["ios", "android", "magicleap"])
              ) && {}),
            this.mobile &&
              this.detect(["windows"]) &&
              !this.detect(["touch"]) &&
              (this.mobile = !1),
            this.mobile &&
              ((this.mobile.tablet =
                Math.max(
                  window.screen ? screen.width : window.innerWidth,
                  window.screen ? screen.height : window.innerHeight,
                ) > 1e3),
              (this.mobile.phone = !this.mobile.tablet),
              (this.mobile.pwa =
                !(
                  !window.matchMedia ||
                  !window.matchMedia("(display-mode: standalone)").matches
                ) || !!window.navigator.standalone)),
            (this.media = {}),
            (this.media.audio =
              !!document.createElement("audio").canPlayType &&
              (n.detect(["firefox", "opera"]) ? "ogg" : "mp3")),
            (this.media.video =
              !!(t = document.createElement("video")).canPlayType &&
              (t.canPlayType("video/webm;") ? "webm" : "mp4")),
            (this.media.webrtc = !!(
              window.webkitRTCPeerConnection ||
              window.mozRTCPeerConnection ||
              window.msRTCPeerConnection ||
              window.oRTCPeerConnection ||
              window.RTCPeerConnection
            )),
            (this.graphics = {}),
            (this.graphics.webgl =
              ((e = !1),
              void Object.defineProperty(n.graphics, "webgl", {
                get: () => {
                  if (e) return !1;
                  if (n.graphics._webglContext) return n.graphics._webglContext;
                  try {
                    let t;
                    let i = ["webgl2", "webgl", "experimental-webgl"],
                      a = document.createElement("canvas");
                    for (
                      let e = 0;
                      e < i.length && !(t = a.getContext(i[e]));
                      e++
                    );
                    let r = t.getExtension("WEBGL_debug_renderer_info"),
                      o = {};
                    if (r) {
                      let e = r.UNMASKED_RENDERER_WEBGL;
                      o.gpu = t.getParameter(e).toLowerCase();
                    }
                    return (
                      (o.renderer = t.getParameter(t.RENDERER).toLowerCase()),
                      (o.version = t.getParameter(t.VERSION).toLowerCase()),
                      (o.glsl = t
                        .getParameter(t.SHADING_LANGUAGE_VERSION)
                        .toLowerCase()),
                      (o.extensions = t.getSupportedExtensions()),
                      (o.webgl2 = eI(o.version, ["webgl 2", "webgl2"])),
                      (o.canvas = a),
                      (o.context = t),
                      (o.detect = function (e) {
                        if (
                          (o.gpu && eI(o.gpu.toLowerCase(), e)) ||
                          (o.version && eI(o.version.toLowerCase(), e))
                        )
                          return !0;
                        for (let t = 0; t < o.extensions.length; t++)
                          if (eI(o.extensions[t].toLowerCase(), e)) return !0;
                        return !1;
                      }),
                      o.webgl2 ||
                        o.detect("instance") ||
                        window.AURA ||
                        (e = !0),
                      (n.graphics._webglContext = o),
                      o
                    );
                  } catch (e) {
                    return !1;
                  }
                },
                set: (t) => {
                  !1 === t && (e = !0);
                },
              }))),
            (this.graphics.metal = (function () {
              if (!window.Metal) return !1;
              let e = {};
              return (
                (e.gpu = Metal.device.getName().toLowerCase()),
                (e.detect = function (t) {
                  return eI(e.gpu, t);
                }),
                e
              );
            })()),
            (this.graphics.gpu = (function () {
              if (!n.graphics.webgl && !n.graphics.metal) return !1;
              let e = {};
              return (
                ["metal", "webgl"].forEach((t) => {
                  n.graphics[t] &&
                    !e.identifier &&
                    ((e.detect = n.graphics[t].detect),
                    (e.identifier = n.graphics[t].gpu));
                }),
                e
              );
            })()),
            (this.graphics.canvas =
              !!document.createElement("canvas").getContext));
        }
      }
      let {
        pixelRatio: eA,
        graphics: ek,
        system: eV,
        mobile: eW,
        media: eE,
        agent: eL,
        detect: eZ,
      } = new ej();
      function eY() {
        let {
            system: e,
            graphics: t,
            mobile: n,
          } = {
            pixelRatio: eA,
            graphics: ek,
            system: eV,
            mobile: eW,
            media: eE,
            agent: eL,
            detect: eZ,
          },
          i = (0, l.useCallback)(() => "ios" === e.os && n && n.phone, [e, n]);
        return { dpr: 1.15, needs2DLUT: (0, l.useCallback)(() => i(), [i]) };
      }
      window.DeviceOrientationEvent;
      var eG = () => {
          let { size: e, setDpr: t } = (0, u.D)(),
            { dpr: n } = eY(),
            i = (0, l.useRef)(0),
            r = (0, l.useRef)(0),
            o = (0, l.useRef)(0),
            s = (0, l.useRef)(5),
            c = (0, l.useRef)(30),
            p = (0, l.useRef)(60),
            f = (0, l.useRef)(0),
            v = (0, l.useRef)(4),
            d = (0, l.useRef)(0),
            h = (0, l.useRef)(1),
            g = (0, l.useRef)(0.1),
            x = (0, l.useRef)(0.6),
            w = (0, l.useRef)([]),
            y = (0, l.useCallback)(
              (e) => {
                t(n * e);
              },
              [n, t],
            ),
            b = (0, l.useCallback)(() => {
              let { width: i } = eh(e.width, e.height, n * h.current);
              t(i / e.width);
            }, [n, e, t]);
          return (
            (0, a.Z)(() => b(), [b]),
            (0, Z.Z)("resize", b),
            !(function (e) {
              let t = (0, l.useRef)(0),
                n = (0, l.useRef)(60),
                i = (0, l.useRef)(0),
                a = (0, l.useRef)(0),
                r = (0, l.useRef)(5),
                o = (0, l.useRef)(0.5),
                s = (0, l.useRef)([]),
                u = (0, l.useCallback)(
                  (l) => {
                    let c = Math.round((l - i.current) * 1e3);
                    if (
                      (s.current.push(c),
                      l - a.current >= o.current &&
                        s.current.length >= r.current)
                    ) {
                      let r = Math.round(
                        1e3 /
                          (s.current.reduce((e, t) => e + t, 0) /
                            s.current.length),
                      );
                      ((t.current = Math.max(t.current, r)),
                        (n.current = r),
                        (s.current.length = 0),
                        (a.current = l),
                        e({
                          time: i.current,
                          averageFPS: n.current,
                          stop: () => m.ZP.ticker.remove(u),
                        }));
                    }
                    i.current = l;
                  },
                  [e],
                );
              (0, l.useEffect)(
                () => (
                  m.ZP.ticker.add(u),
                  () => {
                    m.ZP.ticker.remove(u);
                  }
                ),
                [u],
              );
            })((e) => {
              let { time: t, averageFPS: n, stop: a } = e;
              if (
                t >= i.current &&
                (w.current.push(n),
                t - r.current >= o.current && w.current.length >= s.current)
              ) {
                let e = w.current.reduce((e, t) => e + t, 0) / w.current.length;
                (e < c.current && h.current > x.current
                  ? ((h.current = Math.max(x.current, h.current - g.current)),
                    y(h.current),
                    1 === f.current && d.current++,
                    (f.current = -1))
                  : e >= p.current &&
                    h.current < 1 &&
                    ((h.current = Math.min(1, h.current + g.current)),
                    y(h.current),
                    -1 === f.current && d.current++,
                    (f.current = 1)),
                  (w.current.length = 0),
                  (r.current = t),
                  d.current >= v.current && a());
              }
            }),
            null
          );
        },
        eB = n(7691),
        eO = n(7494);
      let eq = new V.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      eq.name = "orthographicCamera";
      let eX = new V.WebGLRenderTarget(1, 1, { type: V.HalfFloatType });
      ((eX.setSize = () => {}), (eX.dispose = () => {}));
      class eH extends eO.w {
        setSize(e, t) {
          for (let n of this._effectComposer.passes) n.setSize(e, t);
        }
        addPass(e, t) {
          return (this._effectComposer.addPass(e, t), this);
        }
        render(e, t, n, i) {
          ((this._effectComposer.inputBuffer = n),
            (this._effectComposer.outputBuffer = t),
            this._effectComposer.render(i));
        }
        dispose() {
          let e = { depthTexture: null, dispose: () => {} };
          ((this._effectComposer.inputBuffer = e),
            (this._effectComposer.outputBuffer = e),
            this._effectComposer.dispose());
        }
        get composer() {
          return this._effectComposer;
        }
        constructor(e) {
          return (
            super(),
            (this._effectComposer = new eB.xC(e, {
              frameBufferType: V.HalfFloatType,
            })),
            this._effectComposer.inputBuffer.dispose(),
            this._effectComposer.outputBuffer.dispose(),
            (this._effectComposer.inputBuffer = eX),
            (this._effectComposer.outputBuffer = eX),
            (this._effectComposer.autoRenderToScreen = !1),
            this
          );
        }
      }
      let eQ = (e) =>
          (e.getAttributes() & eB.VB.CONVOLUTION) === eB.VB.CONVOLUTION,
        eK = (e) => {
          let { children: t } = e,
            { gl: n } = (0, u.D)(),
            { composer: r } = eb(),
            o = (0, l.useRef)(null),
            s = (0, u.A)(o);
          return (
            (0, a.Z)(() => {
              let e = [],
                t = [];
              if (o.current && s.current) {
                let i = s.current.objects;
                for (let t = 0; t < i.length; t++) {
                  let n = i[t];
                  if (n instanceof eB.Qm) {
                    let a = [n];
                    if (!eQ(n)) {
                      let e = null;
                      for (; (e = i[t + 1]) instanceof eB.Qm && !eQ(e); )
                        (a.push(e), t++);
                    }
                    let r = new eB.H5(eq, ...a);
                    e.push(r);
                  } else n instanceof eB.w2 && e.push(n);
                }
                for (let i of e) t.push(new eH(n).addPass(i));
                for (let e of t) r.addPass(e);
                e[e.length - 1].renderToScreen = !0;
              }
              return () => {
                for (let e of t) r.removePass(e);
              };
            }, [s, r, n]),
            (0, i.jsx)("group", { name: "effects-pass", ref: o, children: t })
          );
        };
      var eJ = n(8401),
        e$ = () => {
          let e = (0, l.useRef)(null);
          return (
            (0, o.M4)(
              "Postprocessing",
              {
                Bloom: (0, o.so)({
                  intensity: {
                    value: 3.5,
                    min: 0,
                    max: 10,
                    step: 0.01,
                    onChange: (t) => {
                      e.current.intensity = t;
                    },
                  },
                  luminanceThreshold: {
                    value: 0.9,
                    min: 0,
                    max: 10,
                    step: 0.01,
                    onChange: (t) => {
                      e.current.luminanceMaterial.threshold = t;
                    },
                  },
                  luminanceSmoothing: {
                    value: 1,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (t) => {
                      e.current.luminanceMaterial.smoothing = t;
                    },
                  },
                  enable: {
                    value: !0,
                    onChange: (t) =>
                      (e.current.blendMode.blendFunction = t
                        ? eB.YQ.ADD
                        : eB.YQ.SKIP),
                  },
                }),
              },
              { collapsed: !0 },
            ),
            (0, i.jsx)(eJ.d, {
              ref: e,
              mipmapBlur: !0,
              intensity: 3.5,
              luminanceThreshold: 0.9,
              luminanceSmoothing: 1,
              width: eB.GV.AUTO_SIZE,
              height: eB.GV.AUTO_SIZE,
              kernelSize: eB.DD.MEDIUM,
            })
          );
        },
        e0 = n(8453),
        e1 = () => {
          let { needs2DLUT: e } = eY(),
            t = q((0, s.iW)(e() ? "lut" : "lut-cube")),
            n = (0, l.useRef)(null);
          return (
            (0, o.M4)("Postprocessing", {
              LUT3D: (0, o.so)({
                enable: {
                  value: !0,
                  onChange: (e) => {
                    n.current.blendMode.blendFunction = e
                      ? eB.YQ.NORMAL
                      : eB.YQ.SKIP;
                  },
                },
              }),
            }),
            (0, i.jsx)(e0.B, { ref: n, lut: t, blendFunction: eB.YQ.NORMAL })
          );
        },
        e2 = n(9224),
        e4 = () => {
          let e = (0, l.useRef)(null);
          return (
            (0, o.M4)("Postprocessing", {
              Noise: (0, o.so)({
                opacity: {
                  value: 1,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  onChange: (t) => {
                    e.current.blendMode.opacity.value = t;
                  },
                },
                premultiply: {
                  value: !0,
                  onChange: (t) => {
                    e.current.premultiply = t;
                  },
                },
                enable: {
                  value: !0,
                  onChange: (t) => {
                    e.current.blendMode.blendFunction = t
                      ? eB.YQ.ADD
                      : eB.YQ.SKIP;
                  },
                },
              }),
            }),
            (0, i.jsx)(e2.c, {
              ref: e,
              opacity: 0.05,
              premultiply: !0,
              blendFunction: eB.YQ.ADD,
            })
          );
        },
        e3 = n(3204),
        e5 = () => {
          let e = (0, l.useRef)(null);
          return (0, i.jsx)(e3.k, { ref: e, blendFunction: eB.YQ.NORMAL });
        },
        e9 = n(3624),
        e7 = () => {
          let e = (0, l.useRef)(null);
          return (
            (0, o.M4)("Postprocessing", {
              ToneMapping: (0, o.so)({
                mode: {
                  value: eB.hm.ACES_FILMIC,
                  options: {
                    ACES_FILMIC: eB.hm.ACES_FILMIC,
                    AGX: eB.hm.AGX,
                    LINEAR: eB.hm.LINEAR,
                    NEUTRAL: eB.hm.NEUTRAL,
                    OPTIMIZED_CINEON: eB.hm.OPTIMIZED_CINEON,
                    REINHARD: eB.hm.REINHARD,
                    REINHARD2: eB.hm.REINHARD2,
                    REINHARD2_ADAPTIVE: eB.hm.REINHARD2_ADAPTIVE,
                    UNCHARTED2: eB.hm.UNCHARTED2,
                  },
                  onChange: (t) => {
                    e.current.mode = t;
                  },
                },
                adaptive: {
                  value: !0,
                  onChange: (t) => {
                    e.current.adaptive = t;
                  },
                },
                enable: {
                  value: !0,
                  onChange: (t) => {
                    e.current.blendMode.blendFunction = t
                      ? eB.YQ.NORMAL
                      : eB.YQ.SKIP;
                  },
                },
              }),
            }),
            (0, i.jsx)(e9.l, { ref: e, adaptive: !0, mode: eB.hm.ACES_FILMIC })
          );
        },
        e8 = () => {
          let { dpr: e } = eY(),
            t = (0, s.U2)((e) => e.loaded),
            n = (0, s.U2)((e) => e.load);
          return (
            (0, a.Z)(() => n(), []),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(r.Xz, {
                  id: "stage",
                  flat: !0,
                  dpr: [1, e],
                  style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    zIndex: 0,
                  },
                  gl: {
                    powerPreference: "default",
                    antialias: !1,
                    stencil: !1,
                    depth: !1,
                  },
                  children: [
                    (0, i.jsx)("color", {
                      attach: "background",
                      args: ["#000000"],
                    }),
                    (0, i.jsx)(eG, {}),
                    t
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsxs)(ey, {
                              controller: (0, i.jsx)(ez, {}),
                              children: [
                                em.map((e) => {
                                  let { Scene: t, ...n } = e;
                                  return (0, i.jsx)(
                                    eU,
                                    { ...n, children: (0, i.jsx)(t, {}) },
                                    n.uuid,
                                  );
                                }),
                                ep.map((e) => {
                                  let { Scene: t, ...n } = e;
                                  return (0, i.jsx)(
                                    eU,
                                    {
                                      isolate: !0,
                                      ...n,
                                      children: (0, i.jsx)(t, {}),
                                    },
                                    n.route,
                                  );
                                }),
                                (0, i.jsxs)(eK, {
                                  children: [
                                    (0, i.jsx)(e5, {}),
                                    (0, i.jsx)(e$, {}),
                                    (0, i.jsx)(e7, {}),
                                    (0, i.jsx)(e1, {}),
                                    (0, i.jsx)(e4, {}),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)(eN, {}),
                          ],
                        })
                      : null,
                  ],
                }),
                (0, i.jsx)(o.Zf, { hidden: !0, collapsed: !0 }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=504.ce9b1b8bdb85c612.js.map
