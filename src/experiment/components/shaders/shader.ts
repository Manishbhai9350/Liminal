export const vertexShader = /* glsl */ `
    varying vec2 vUv;

    void main() {
        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }

`;

export const fragmentShader1 = /* glsl */ `
        #ifdef GL_ES
        precision highp float;
        #endif

        varying vec2 vUv;
        uniform vec2 iResolution;
        uniform float iTime;
        // uniform sampler2D iChannel0; // skybox 1
        uniform samplerCube iChannel0; // skybox 1
        uniform samplerCube iChannel1; // skybox 2

        #define PI 3.14159265359

        // wormhole settings
        float a = 2.0;     // throat length
        float M = 0.1;     // smoothness
        float dt = 0.02;   // integration step
        int maxSteps = 300;

        // camera
        float camL = 5.0;
        float zoom = 1.5;

        // wormhole radius function
        float LtoR(float l) {
            float x = max(0.0, 2.0 * (abs(l) - a) / (PI * M));
            return 1.0 + M * (x * atan(x) - 0.5 * log(1.0 + x * x));
        }

        // derivative
        float LtoDR(float l) {
            float x = max(0.0, 2.0 * (abs(l) - a) / (PI * M));
            return (2.0 * atan(x) * sign(l)) / PI;
        }

        void mainImage(out vec4 fragColor, in vec2 fragCoord) {
            
            // normalized screen coords
            vec2 uv = (2.0 * fragCoord - iResolution.xy) / iResolution.x;

            // initial ray
            vec3 vel = normalize(vec3(-zoom, uv));
            vec2 beta = normalize(vel.yz);

            // initial values
            float l = camL;
            float dl = vel.x;
            float H = length(vel.yz);
            float phi = 0.0;

            int steps = 0;

            // ray integration
            for(int i = 0; i < 64; i++) {
                if(abs(l) > max(abs(camL) * 2.0, a + 2.0)) break;

                float r = LtoR(l);
                float dr = LtoDR(l);

                // update
                l += dl * dt;
                phi += H / (r * r) * dt;
                dl += (H * H * dr) / (r * r * r) * dt;

                steps++;
            }

            // convert to direction
            float r = LtoR(l);
            float dr = LtoDR(l);

            float dx = dl * dr * cos(phi) - (H / r) * sin(phi);
            float dy = dl * dr * sin(phi) + (H / r) * cos(phi);

            vec3 dir = normalize(vec3(dx, dy * beta));

            // // adjust for cubemap
            vec3 cubeVec = vec3(-dir.x, dir.z, -dir.y);

            // // choose universe
            if (l > 0.0) {
                fragColor = textureCube(iChannel0, cubeVec);
            } 
            else {
                fragColor = textureCube(iChannel1, cubeVec);
            }
        }

        void main() {
            mainImage(gl_FragColor, gl_FragCoord.xy);
            // gl_FragColor = texture2D(iChannel0, vUv);
        }
`;

export const fragmentShader = `

    varying vec2 vUv;
    uniform sampler2D iChannel0;
    precision highp float;

    void main() {
        vec2 uv = vUv;

        gl_FragColor = texture2D(iChannel0,vUv);
        // gl_FragColor = vec4(1.0,0.0,0.0,1.0);
        // gl_FragColor = vec4(vUv,0.0,1.0);
    }

`;


export const TransitionVertex = /* glsl */ `

varying vec2 vUv;
varying float vWave;

uniform float uTime;
uniform float aspect;
uniform float progress;

float PI = 3.141592653589793;

float Circle(vec2 uv, float threshold, float progress) {
    return smoothstep(threshold, 0.0, length(uv) - progress + threshold);
}

void main() {
    vUv = uv;

    // Center and aspect correct UV
    vec2 centeredUV = (uv - 0.5) * vec2(aspect, 1.0);
    float time = uTime * 2.5;

    float circleWave = Circle(centeredUV, 0.3, progress);

    vWave = circleWave * smoothstep(0.0, 2.0, abs(sin(time + circleWave * PI * 2.0)));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

`;
export const TransitionFragment = /* glsl */ `
#define PI 3.141592653589793

uniform sampler2D tScene1;
uniform sampler2D tScene2;
uniform sampler2D tSection;
uniform sampler2D tTechNoise;

uniform vec2 uResolution;
uniform float uProgress;
uniform float uWaveSize;
uniform float uInnerDistortion;
uniform float uSectionProgress;
uniform float uWaveGlow;
uniform float uMaskRadius;
uniform float uRadius;
uniform float uTime;
uniform vec3 uMask;

varying vec2 vUv;

// ---------------- UTILS ----------------

float cubicIn(float t) {
    return t * t * t;
}

float efit(float x, float a1, float a2, float b1, float b2) {
    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}

float fit(float x, float a1, float a2, float b1, float b2) {
    return clamp(efit(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2));
}

float _linstep(float begin, float end, float t) {
    return clamp((t - begin) / (end - begin), 0.0, 1.0);
}

// ---------------- FALL OFF ----------------

float _pl(vec2 inputVal, vec2 start, vec2 end, float margin, float progress) {
    vec2 v = end - start;
    float dist = length(v);
    vec2 dir = v / dist;
    return dot(dir, inputVal - start - dir * (dist + margin) * progress);
}

float falloff(vec2 inputVal, vec2 start, vec2 end, float margin, float progress) {
    return _linstep(0.0, -margin, _pl(inputVal, start, end, margin, progress));
}

// ---------------- CHROMATIC ABERRATION ----------------

float ca_linterp(float t) {
    return clamp(1.0 - abs(2.0 * t - 1.0), 0.0, 1.0);
}

float ca_remap(float t, float a, float b) {
    return clamp((t - a) / (b - a), 0.0, 1.0);
}

vec2 ca_barrelDistortion(vec2 coord, float amt) {
    vec2 cc = coord - 0.5;
    float dist = dot(cc, cc);
    return coord + cc * dist * amt;
}

vec4 ca_spectrum_offset(float t) {
    float lo = step(t, 0.5);
    float hi = 1.0 - lo;
    float w = ca_linterp(ca_remap(t, 1.0 / 6.0, 5.0 / 6.0));
    vec4 ret = vec4(lo, 1.0, hi, 1.0) * vec4(1.0 - w, w, 1.0 - w, 1.0);
    return pow(ret, vec4(1.0 / 2.2));
}

const int CA_ITERATIONS = 3;

vec4 chromatic_aberration(sampler2D tex, vec2 uv, float maxdistort, float bendAmount) {
    vec4 sumcol = vec4(0.0);
    vec4 sumw = vec4(0.0);

    for(int i = 0; i < CA_ITERATIONS; i++) {
        float t = float(i) / float(CA_ITERATIONS);
        vec4 w = ca_spectrum_offset(t);
        sumw += w;
        sumcol += w * texture2D(tex, ca_barrelDistortion(uv, bendAmount * maxdistort * t));
    }

    return sumcol / sumw;
}

// ---------------- SHAPES ----------------

// Circle(centeredUV, 0.3, progress)
float Circle(vec2 uv, float threshold, float progress) {
    return smoothstep(threshold, 0.0, length(uv) - progress + threshold);
    // return step(.1,length(uv));
    // return smoothstep(progress,0.0,threshold);
}

vec2 Mul(vec2 uv, float value) {
    uv -= 0.5;
    uv *= value;
    uv += 0.5;
    return uv;
}

// ---------------- MAIN ----------------

void main() {
    vec3 color = vec3(0.0);

    float progress = cubicIn(uProgress);
    float aspect = uResolution.x / uResolution.y;

    if(progress > 0.0) {

        vec2 centeredUV = (vUv - 0.5)  * vec2(aspect, 1.0);
        float time = uTime * 2.5;

        float circleWave = Circle(centeredUV, 0.3, progress);

        float wave = circleWave * smoothstep(0.0, 2.0, abs(sin(time + circleWave * PI * 2.0)));

        // color = vec3(length(centeredUV),0.0,0.0);
        color = vec3(wave,wave,circleWave);

        // float height = 0.7;

        // vec2 uv1 = Mul(vUv, 1.0 - (circleWave + wave) * height);
        // vec3 tDiffuse1 = texture2D(tScene1, vUv).rgb;

        // // color = vec3(vUv.x,vUv.y,0.0);

        // color = tDiffuse1;

        // float circleMask = Circle(centeredUV, 0.075 * progress, progress - uMaskRadius);

        // float circleInnerDistortion = Circle(centeredUV, 0.25 * progress, progress - uMaskRadius);
        // vec2 uv2 = Mul(vUv, 1.0 + (uInnerDistortion - circleInnerDistortion * uInnerDistortion));
        // vec3 tDiffuse2 = texture2D(tScene2, vUv).rgb;

        // color = mix(tDiffuse1, tDiffuse2, circleMask);

        // float waveColor = wave * uWaveGlow * (1.0 - Circle(centeredUV, 0.1, progress - 0.1));
        // color += waveColor;

        // color *= 1.0 - 0.7 * clamp(0.0, 1.0, circleMask - Circle(centeredUV + vec2(-0.1, 0.1) * progress, 0.175 * progress, progress - uMaskRadius));

    } else {
        color = texture2D(tScene1, vUv).rgb;
    }

    gl_FragColor = vec4(color, 1.0);
}

`;
