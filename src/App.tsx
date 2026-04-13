import gsap from 'gsap'
import UI from './components/ui'
import Scene from './scene/scene'
import { SplitText } from 'gsap/SplitText'


gsap.registerPlugin(SplitText)
const App = () => {
  return (
    <main className='app'>
      <UI />
      <Scene />
    </main>
  )
}

export default App