import './App.css'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
function App() {

  return (
    <>
      <Heading color='Cyan' text='Welcome!!!'/>
      <DoubleDice maxNum={5}/>
      <DoubleDice maxNum={5}/>
      <DoubleDice maxNum={5}/>
    </>
  )
}

export default App
