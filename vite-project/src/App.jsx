import './App.css'
import ColorList from './ColorList'
// import DoubleDice from './DoubleDice'
import Heading from './Heading'
function App() {

  return (
    <>
      <Heading color='Cyan' text='Welcome!!!'/>
      {/* <DoubleDice maxNum={5}/>
      <DoubleDice maxNum={5}/>
      <DoubleDice maxNum={5}/> */}
      
      <ColorList colors= {["red", "pink", "purple", "cyan", "orange"]}/>
    </>
  )
}

export default App
