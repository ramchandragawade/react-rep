import { useState } from "react";

function ShopForm({onSubmit}) {
    const emptyProd = {
        product: "",
        qty: ""
    };
    const [formData, setFormData] = useState(emptyProd);

    function handleChange(e) {
        setFormData(currData=>{
            return {
                ...currData,[e.target.name]:e.target.value
            }
        })
    }

    function handleSubmit(e){
        onSubmit(formData);
        e.preventDefault();
        setFormData(emptyProd);
    }

    return <form onSubmit={handleSubmit}>
        <h2>Product</h2>
        <label htmlFor="product">Product Name: </label>
        <input type="text" placeholder="Product Name" name="product" id="product" onChange={handleChange} value={formData.product}/>
        <br />
        <label htmlFor="qty">Quantity: </label>
        <input type="number" placeholder="Quantity" name="qty" id="qty" onChange={handleChange} value={formData.qty}/>
        <br />
        <button>Submit</button>
    </form>
}

export default ShopForm;