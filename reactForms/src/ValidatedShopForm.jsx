import { useState } from "react";
import { validate } from "uuid";
function ValidatedShopForm({onSubmit}) {
    const emptyProd = {
        product: "",
        qty: ""
    };
    const [formData, setFormData] = useState(emptyProd);
    const [isValid, setIsValid] = useState(false);

    function validate(e) {
        if(e.target.name === "product") {
            e.target.value.length === 0 ? setIsValid(false):setIsValid(true);
        }
    }

    function handleChange(e) {
        setFormData(currData=>{
            return {
                ...currData,[e.target.name]:e.target.value
            }
        })
        validate(e);
    }

    function handleSubmit(e){
        if(isValid) {
            onSubmit(formData);
            setFormData(emptyProd);
        }
        e.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        <h2>Product</h2>
        <label htmlFor="product">Product Name: </label>
        <input type="text" placeholder="Product Name" name="product" id="product" onChange={handleChange} value={formData.product}/>
        <br />
        {!isValid && <span style={{color:"red"}}> Product cannot be empty<br /></span>}
        <label htmlFor="qty">Quantity: </label>
        <input type="number" placeholder="Quantity" name="qty" id="qty" onChange={handleChange} value={formData.qty}/>
        <br />
        <button disabled={!isValid}>Submit</button>
    </form>
}

export default ValidatedShopForm;