import { useForm } from "react-hook-form";
import { useState } from "react";
function HookForm({onSubmit}) {
    const { register, formState: { errors }, handleSubmit } = useForm();

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

    function formSubmit(e){
        onSubmit(formData);
        console.log(e);
        // e.preventDefault();
        setFormData(emptyProd);
    }

    const registerOpts = {
        product: { required: "Product name cannot be blank"},
        qty: {
            required: "Quantity cannot be blank",
            min: {
                value:1,
                message: "Quantity cannot be less than 1"
            },
            max : {
                value: 100,
                message:"Max value can be 100"
            }
        }
    }

    return <form onSubmit={handleSubmit(formSubmit)}>
        <h2>Product</h2>
        <label htmlFor="product">Product Name: </label>
        <input type="text" placeholder="Product Name" name="product" id="product" 
            {...register("product", registerOpts.product)}
            onChange={handleChange} value={formData.product}/>
        {errors?.product && <small style={{color: "red"}}>{errors.product.message}</small>}
        <br />
        <label htmlFor="qty">Quantity: </label>
        <input type="number" placeholder="Quantity" name="qty" id="qty"
            {...register("qty", registerOpts.qty)}
            onChange={handleChange} value={formData.qty}/>
        {errors?.qty && <small style={{color: "red"}}>{errors.qty.message}</small>}
        <br />
        <button>Submit</button>
    </form>
}


export default HookForm;