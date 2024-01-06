export default function Slots ({val1,val2,val3}) {
    const isWinner = val1 === val2 && val1 === val3;
    return <div style={{border:"1px solid purple",margin:"10px 0px", color: isWinner ? "green":"red"}}>
        <h1>{val1} {val2} {val3}</h1>
        <h2>{isWinner ? "You Win😊" : "You Lose😭"}</h2>
    </div>
    
}