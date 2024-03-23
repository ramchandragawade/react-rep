import { useState } from "react";

function SignUpForm() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    function updateFname(e) {
        setFname(e.target.value);
    }
    function updateLname(e) {
        setLname(e.target.value);
    }

    function handleSubmit () {
        console.log(fname+' '+lname);
    }
    return <div>
        <label htmlFor="fname">First Name: </label>
        <input type="text" id="fname" placeholder="Enter First Name" value={fname} onChange={updateFname}/>
        <br />
        <label htmlFor="lname">Last Name: </label>
        <input type="text" id="lname" placeholder="Enter Last Name" value={lname} onChange={updateLname}/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
}

export default SignUpForm;