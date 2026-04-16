uniform sampler2D tNoise;
uniform float uCenterFade;
uniform float uCameraFade;
uniform float uTime;
varying vec2 vUv;
varying vec3 vPos;
varying vec4 vMvPos;
void main() {
    vec3 color = vec3(1.0);
    float alpha = 1.0;        
    // fade near camera    
    alpha *= smoothstep(length(vMvPos), uCameraFade, 1.0);    
    // fade near center    
    alpha *= smoothstep(uCenterFade, 1.0, length(vPos));
    float shape = 1.0 - length(gl_PointCoord - 0.5) * 2.0;
    alpha *= shape;
    alpha = clamp(alpha, 0.0, 1.0);
    gl_FragColor = vec4(color, alpha);    
    #include <tonemapping_fragment>    
    #include <colorspace_fragment>  
}