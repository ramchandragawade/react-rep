import { useState } from "react";

function BetterSignUp() {
    const [formData, setFormData] = useState({
        fname:"",
        lname:"",
        password:""
    });
    function handleChange(e) {
        const fieldName = e.target.name;
        const fieldVal = e.target.value;
        setFormData(currData=>{
            currData[fieldName] = fieldVal;
            return {...currData};
        });
    }
    function handleSubmit () {
        console.log(formData);
    }
    return <div>
        <label htmlFor="fname">First Name: </label>
        <input type="text" name="fname" id="fname" placeholder="Enter First Name" value={formData.fname} onChange={handleChange}/>
        <br />
        <label htmlFor="lname">Last Name: </label>
        <input type="text" name="lname" id="lname" placeholder="Enter Last Name" value={formData.lname} onChange={handleChange}/>
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
}

export default BetterSignUp;