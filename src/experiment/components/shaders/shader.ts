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
