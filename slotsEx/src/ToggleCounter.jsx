import "./Toggler.css"
import { useState } from "react";
function ToggleCounter() {
    const [isHappy, setIsHappy]  = useState(true);
    const [cnt, setCnt] = useState(0);
    const onToggle = () => {
        setIsHappy(!isHappy);
        setCnt(cnt+1);
    };
    return <div>
        <button className="Toggler" onClick={onToggle}> {isHappy === true ? "😊" : "☹️"} </button>
        <p>{cnt}</p>
    </div>
}
export default ToggleCounter;