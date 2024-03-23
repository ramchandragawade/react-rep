import { useEffect, useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    function increment(){
        setCount(c=>c+1);
    }

    function myEffect(){
        console.log("Effect is called");
    }

    function handleChange(e){
        setName(e.target.value);
    }

    useEffect(myEffect,[count]);
    return <div>
        <h1>Count-{count}</h1>
        <button onClick={increment}>+1</button>
        <br />
        Name:{name}
        <br />
        <input type="text" value={name} onChange={handleChange}/>
    </div>
}

export default Counter;