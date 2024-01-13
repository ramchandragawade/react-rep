import './App.css'
import DynamicScore from './DynamicScorer'
// import EmojiClicker from './EmojiClicker'
// import ScoreKeeper from './ScoreKeeper'
// import Counter from './Counter'
// import Dumbo from './Dumbo'

function App() {
  return (
    <>
      {/* <h1>State Demo</h1> */}
      {/* <Counter /> */}

      {/* <Dumbo/> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <h1>Score keeper</h1>
      <DynamicScore numPlayers={3} target={5}/>
    </>
  )
}

export default App
