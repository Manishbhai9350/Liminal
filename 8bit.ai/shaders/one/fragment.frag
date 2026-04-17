uniform vec3 uLightPos;
uniform vec4 uLight;
varying vec3 vColor;
varying vec4 vMvPos;
float efit(float x, float a1, float a2, float b1, float b2) {
    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}
float fit(float x, float a1, float a2, float b1, float b2) {
    return clamp(efit(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2));
}
void main() {
    vec3 color = vColor;
    float alpha = 1.0;
    float dist = distance(vMvPos.xyz, uLightPos);
    dist = efit(dist, uLight.x, uLight.y, uLight.z, uLight.w);
    float shape = 1.0 - length(gl_PointCoord - 0.5) * 2.0;
    alpha *= shape;
    alpha *= dist;
    alpha = clamp(alpha, 0.0, 1.0);
    gl_FragColor = vec4(color, alpha);    
    #include <tonemapping_fragment>    #include <colorspace_fragment>  
}