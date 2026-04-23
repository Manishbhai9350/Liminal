// Cosmic blue gradient with organic dark blobs
// Recreates a deep blue → cyan flow with soft black "voids"

varying vec2 vUv;
uniform float uTime;
uniform float uScale;
uniform float uFreq;
uniform float uSpeed;
uniform vec2 uResolution;

// ---------- Hash / Noise ----------
vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)),
             dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

// 2D gradient noise
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                   dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
               mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                   dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for soft, organic flow
float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
    }
    return v;
}

void main() {
    // Aspect-corrected UVs centered at 0
    vec2 uv = vUv;
    vec2 p  = (uv - 0.5);
    p.x *= uResolution.x / uResolution.y;

    float t = uTime * uSpeed;

    // ---------- Domain warping for organic blob shapes ----------
    vec2 q = vec2(
        fbm(p * uScale + vec2(0.0, 0.0) + t * 0.15),
        fbm(p * uScale + vec2(5.2, 1.3) - t * 0.12)
    );

    vec2 r = vec2(
        fbm(p * uScale + q * uFreq + vec2(1.7, 9.2) + t * 0.20),
        fbm(p * uScale + q * uFreq + vec2(8.3, 2.8) - t * 0.18)
    );

    float n = fbm(p * uScale + r * uFreq);
    n = smoothstep(-0.2, 1.0, n); // lift midtones

    // ---------- Color palette (deep blue → electric cyan) ----------
    vec3 cBlack = vec3(0.000, 0.000, 0.012);   // deep void
    vec3 cNavy  = vec3(0.004, 0.020, 0.250);   // dark blue
    vec3 cBlue  = vec3(0.020, 0.180, 0.980);   // pure blue
    vec3 cAzure = vec3(0.000, 0.560, 1.000);   // bright azure
    vec3 cCyan  = vec3(0.000, 0.900, 1.000);   // electric cyan

    // Vertical lift — top is brighter / cyan, like the reference
    float vert = smoothstep(0.0, 1.0, 1.0 - uv.y);

    // Build gradient
    vec3 col = cBlack;
    col = mix(col, cNavy,  smoothstep(0.05, 0.35, n));
    col = mix(col, cBlue,  smoothstep(0.30, 0.65, n));
    col = mix(col, cAzure, smoothstep(0.55, 0.85, n + vert * 0.25));
    col = mix(col, cCyan,  smoothstep(0.75, 1.05, n + vert * 0.45));

    // ---------- Dark "voids" — soft black blobs ----------
    float voids = smoothstep(0.55, 0.0, fbm(p * uScale * 0.6 + vec2(-t * 0.08, t * 0.05)));
    col = mix(col, cBlack, voids * 0.85);

    // Subtle vignette to deepen edges
    float vig = smoothstep(1.2, 0.2, length(p));
    col *= mix(0.6, 1.0, vig);

    // Gentle highlight bloom near top
    col += cCyan * pow(vert, 3.0) * 0.15;

    // Film-grain-ish dithering to avoid banding
    float grain = (fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
    col += grain;

    col *= 10.0;

    gl_FragColor = vec4(col, 1.0);
}
