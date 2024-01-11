import { useState } from "react";
export default function Counter() {
    const [cnt,setCnt] = useState(0);
    const addOne = () => setCnt(cnt+1);
    const addThree = () => {
        setCnt(cnt+1);
        setCnt(cnt+1);
        setCnt(cnt+1);
        // doesn't work
    };

    return <div>
        <h2>Counter: {cnt}</h2>
        <button onClick={addOne}>Add one!</button>
        <button onClick={addThree}>Add three!</button>
    </div>
}