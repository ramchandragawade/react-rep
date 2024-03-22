import { useState } from "react";
import {getRolls} from "./utils";
import Dice from "./Dice";
import Button from "./Button";

function LuckyN ({title="LuckyN", numDice=2, winCheck, color}){
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = ()=> setDice(getRolls(numDice));
    return <main className="LuckyN">
        <h1>{title}</h1>
        {isWinner && <h2>You Win!!</h2>}
        <Dice dice={dice} color={color}/>
        {/* <button onClick={roll}>Re-Roll Dice</button> */}
        <Button clickFunc={roll} text={"Re-Roll Dice"}/>
    </main>
}

export default LuckyN;