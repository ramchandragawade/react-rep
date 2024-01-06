function ShoppingList({items}) {
    return (
        <>
            <ul>
                {items.map(i => (
                    <li style={{ 
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