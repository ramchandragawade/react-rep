import { useState } from "react" 
export default function Counter(){
    // let num = 0;
    const [count,setCount] = useState(0);
    const changeNum = () => {
        setCount(count+1);
    }
    return <div>
        <p>The count is:{count}</p>
        <button onClick={changeNum}>Increment</button>
    </div>
}