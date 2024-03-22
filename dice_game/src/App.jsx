import './App.css'
import Dice from './Dice'
import LuckyN from './LuckyN'
// import Die from './Die'
// import Lucky7 from './Lucky7'
function App() {
  return (
    <>
    {/* <Lucky7/> */}
    {/* <Dice dice={[4,5,6]}/>
    <Dice dice={[4,5,6]} color={"red"}/>
    <Dice dice={[4,5,6]}/> */}
    <LuckyN />
    <LuckyN numDice={3} goal={10} color={"red"}/>
    </>
  )
}

export default App
