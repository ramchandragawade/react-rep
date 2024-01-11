import { useState } from "react";
export default function Counter() {
    const [cnt,setCnt] = useState(0);
    const addOne = () => setCnt(cnt+1);
    // const addThree = () => {
    //     setCnt(cnt+1);
    //     setCnt(cnt+1);
    //     setCnt(cnt+1);
    //     // doesn't work
    // };

    const addThree = () => {
        // when state depends on old state use this approach
        setCnt(cnt=>cnt+1);
        setCnt(cnt=>cnt+1);
        setCnt(cnt=>cnt+1);
        // if we want to update the state multiple times
    };

    const setTen = ()=>setCnt(10);
    console.log('rendered');
    return <div>
        <h2>Counter: {cnt}</h2>
        <button onClick={addOne}>Add one!</button>
        <button onClick={addThree}>Add three!</button>
        <button onClick={setTen}>Set Ten!</button>
    </div>
}