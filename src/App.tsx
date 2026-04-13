import gsap from 'gsap'
import UI from './components/ui'
import { SplitText } from 'gsap/SplitText'
import Experience from './scene/components/Experience'


gsap.registerPlugin(SplitText)
const App = () => {
  return (
    <main className='app'>
      <UI />
    <Experience/>
    </main>
  )
}

export default App