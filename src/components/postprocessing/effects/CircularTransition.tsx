import { forwardRef, useMemo } from 'react'
import { Uniform } from 'three'
import { Effect } from 'postprocessing'

const fragmentShader = `

    void main(){
      return vec4(1.0,0.0,0.0,1.0);
    }
`

let _u1,_u2;

// Effect implementation
class CircularTransitionImpl extends Effect {
  constructor({ u1,u2 } = {}) {
    super('CircularTransition', fragmentShader, {
      uniforms: new Map([['u1', new Uniform(u1)],['u2', new Uniform(u2)]]),
    })

    _u1 = u1;
    _u2 = u2;
  }

  update(renderer, inputBuffer, deltaTime) {
    console.log('meow')
    this.uniforms.get('u1').value = _u1
    this.uniforms.get('u2').value = _u2
  }
}

// Effect component
export const CircularTransition = forwardRef(({ u1,u2 }, ref) => {
  const effect = useMemo(() => new CircularTransitionImpl({ u1,u2 }), [u1,u2])
  return <primitive ref={ref} object={effect} dispose={null} />
})
