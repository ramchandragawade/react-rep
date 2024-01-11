import { useState } from "react";

function generateBoard() {
    console.log('Making game board');
    return Array(5000);
}

export default function Dumbo() {
    // const [board, setBoard] = useState(generateBoard());
    const [board, setBoard] = useState(generateBoard); // use this instead of calling
    return <>
    <p>Val: {board}</p>
    <button onClick={()=>setBoard('hello')}>Click me to change state</button>
    </>
}