import { useState } from "react";
import {v4 as uuid} from "uuid"
// import ShopForm from "./ShopForm";
// import ValidatedShopForm from "./ValidatedShopForm";
import HookForm from "./HookForm";

function ShopList(){
    const [items, setItems] = useState([{
            id:uuid(), product:"Banana", qty:8
        }, {
            id:uuid(), product:"Milk", qty:2
        }
    ]);

    function addItem (item) {
        setItems(currData=>{
            return [...currData, {...item, id:uuid()}]
        })
    }

    return <div>
        <h1>Shopping List:</h1>
        <ul>
            {items.map(i=><li key={i.id}>{i.product} - {i.qty}</li>)}
        </ul>
        {/* <ValidatedShopForm onSubmit={addItem}/> */}

        <HookForm onSubmit={addItem}/>

    </div>
}

export default ShopList;