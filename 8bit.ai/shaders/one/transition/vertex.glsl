varying vec2 vUv;
varying float vSize;
void main() {
    float size = 1.0;
    float cameraDistance = 5.;
    vUv = uv;
    vSize = (0.1 * cameraDistance) / size;
    gl_Position = vec4(position, 1.0);
}