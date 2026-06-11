varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vUv = uv;

    // ✅ World position
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vPosition = worldPos.xyz;

    // ✅ Correct normal transform (VERY IMPORTANT)
    vNormal = normalize(mat3(normalMatrix) * normal);
}