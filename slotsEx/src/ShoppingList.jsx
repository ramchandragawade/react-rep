function ShoppingList({items}) {
    return (
        <>
            <ul>
                {items.map((i,key) => (
                    <li key={key} style={{ 
                        textDecoration: i.completed ? 'line-through' : 'red',
                        color: i.completed ? 'grey':'red'
                    }}>
                        {i.item} - {i.qty}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ShoppingList;