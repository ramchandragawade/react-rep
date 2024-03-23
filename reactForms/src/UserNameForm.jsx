import { useState } from "react";

function UserNameForm() {
    const [uname, setUname] = useState("");
    function updateUname(e) {
        setUname(e.target.value);
    }
    return <div>
        <input type="text" placeholder="Username" value={uname} onChange={updateUname}/>
        <button>Submit</button>
    </div>
}

export default UserNameForm;