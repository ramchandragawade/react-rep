import { useState } from "react";
import ShopForm from "./ShopForm";

function ShopList(){
    const [items, setItems] = useState([{
            id:1, product:"Banana", qty:8
        }, {
            id:2, product:"Milk", qty:2
        }
    ]);

    function addItem (item) {
        setItems(currData=>{
            return [...currData, {...item, id:currData.length+1}]
        })
    }

    return <div>
        <h1>Shopping List:</h1>
        <ul>
            {items.map(i=><li key={i.id}>{i.product} - {i.qty}</li>)}
        </ul>

        <ShopForm onSubmit={addItem}/>
    </div>
}

export default ShopList;