import ShoppingItem from "./ShoppingItem";

function ShoppingList({items}) {
    return (
        <>
            <ul>
                {items.map((i,key) => (
                    <ShoppingItem
                        key={key}
                        {...i}
                    />
                ))}
            </ul>
        </>
    )
}

export default ShoppingList;