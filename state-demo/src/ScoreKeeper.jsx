import { useState } from "react";

function ScoreKeeper() {
    const [scores, setScores] = useState({p1:0, p2:0});
    const updateP1 = () => {
        setScores((oldScores) => ({...oldScores, p1:oldScores.p1 + 1}));
    }
    const updateP2 = () => {
        setScores((oldScores) => ({...oldScores, p2:oldScores.p2 + 1}));
    }
    console.log();
    return (
        <div>
            <p>Player 1: {scores.p1}</p>
            <p>Player 2: {scores.p2}</p>
            <button onClick={updateP1}>+1 Player 1</button>
            <button onClick={updateP2}>+1 Player 2</button>
        </div>
    )
}

export default ScoreKeeper;