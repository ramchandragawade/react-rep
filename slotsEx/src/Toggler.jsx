import "./Toggler.css"
import { useState } from "react";
function Toggler() {
    const[isHappy, setIsHappy]  = useState(true);
    const onToggle = () => setIsHappy(!isHappy);
    return <p className="Toggler" onClick={onToggle}>{ isHappy === true? "😊" : "☹️" }</p>
}
export default Toggler;