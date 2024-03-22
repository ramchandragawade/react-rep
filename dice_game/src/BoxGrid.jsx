import { useState } from "react";
import Box from "./Box";
import Button from "./Button";

function BoxGrid({numBoxes=9}){
    const reset = () => setBoxes(Array(numBoxes).fill(false));
    const toggleBox = (index) => {
        setBoxes((oldBoxes)=>{
            return oldBoxes.map((val,i)=>i===index?!val:val);
        });
    }
    const [boxes,setBoxes] = useState(Array(numBoxes).fill(false));
    return <div className="BoxGrid">
        {
            boxes.map((b,i)=>(
                <Box isActive={b} key={i} toggle={()=>toggleBox(i)}/>
            ))
        }
        <br />
        <Button text="Reset" clickFunc={reset}/>
    </div>
}

export default BoxGrid;