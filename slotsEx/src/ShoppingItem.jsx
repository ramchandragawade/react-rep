export default function ShoppingItem({key,item, completed, qty}){
    const styles = { 
                textDecoration: completed ? 'line-through' : 'red',
                color: completed ? 'grey':'red'
            };
    
    return <li key={key} style={styles}>{item} - {qty}</li>
}