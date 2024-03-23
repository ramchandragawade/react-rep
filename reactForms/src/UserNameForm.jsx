import { useState } from "react";

function UserNameForm() {
    const [uname, setUname] = useState("");
    function updateUname(e) {
        setUname(e.target.value);
    }
    return <div>
        <label htmlFor="uname">Username: </label>
        <input type="text" id="uname" placeholder="Enter username" value={uname} onChange={updateUname}/>
        <br />
        <button>Submit</button>
    </div>
}

export default UserNameForm;