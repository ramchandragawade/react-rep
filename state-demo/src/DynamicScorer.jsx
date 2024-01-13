import { useState } from "react"

export default function DynamicScore({numPlayers,target}) {
    const [scores,setScores] = useState(Array(numPlayers).fill(0));
    const [endgame,setEndgame] = useState(false);
    const resetScore = () => {
        setScores(Array(numPlayers).fill(0));
        setEndgame(false);
    };
    const addScore = (ind) => {
        setScores(scores => scores.map((s, i) => {
            if (ind === i && s < target) {
                if(s+1 === target){
                    setEndgame(true);
                }
                return s+1;
            }
            return s;
        }));
    }
    return <div style={{textAlign:"start"}}>
        <ul style={{margin:"5px 0px"}}>
            {scores.map((score,i)=>{
                return <li key={i}>
                    Player {i+1}: {score} <button disabled={endgame} onClick={()=>addScore(i)}>+1</button>
                    {score===target && <p style={{color:"green", display:"inline"}}>WINNER!!!</p>}
                </li>
            })}
        </ul>
        <button onClick={resetScore}>Reset</button>
    </div>
}