import './App.css'
import BoxGrid from './BoxGrid';
import LuckyN from './LuckyN'
import { sum } from './utils'

function App() {
  function lessThan4 (dice) {
    return sum(dice) < 4;
  }

  function sameVals(dice) {
    return dice.every((v)=> v === dice[0]);
  }

  return (
    <>
    {/* <LuckyN numDice={3} winCheck={lessThan4} color={"red"}/> */}
    {/* <LuckyN title={"Less Than 4"} numDice={2} winCheck={lessThan4}/>
    <LuckyN title={"Same values"} numDice={2} winCheck={sameVals} color={"red"}/> */}
    <BoxGrid/>
    </>
  )
}

export default App
