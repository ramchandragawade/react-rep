import "./DoubleDice.css";
export default function DoubleDice ({maxNum}) {
    const num1 = Math.floor(Math.random()* maxNum)+1;
    const num2 = Math.floor(Math.random()* maxNum)+1;
    const isWinner = num1 === num2;
    const styles = { color : isWinner ? "green" : "red"}
    return (
        <div className="DoubleDice" style={styles}>
            <h3>Dice 1: {num1}</h3>
            <h3>Dice 2: {num2}</h3>
            <h2 style={{fontStyle:"italic"}} >{isWinner ? 'You Win !!!' : 'You Lose!!!'}</h2>
            {/* {num1 === num2 ? <h2>You Win !!!</h2> : <h2>You Lose !!!</h2>} */}
            
        </div>
    )
}