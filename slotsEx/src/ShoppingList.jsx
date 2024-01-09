import ShoppingItem from "./ShoppingItem";

function ShoppingList({items}) {
    return (
        <>
            <ul>
                {items.map((i,key) => (
                    <ShoppingItem
                        key={key}
                        name={i.item}
                        qty={i.qty}
                        completed={i.completed}
                    />
                ))}
            </ul>
        </>
    )
}

export default ShoppingList;