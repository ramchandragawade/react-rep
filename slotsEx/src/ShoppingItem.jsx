export default function ShoppingItem({key,name, completed, qty}){
    const styles = { 
                textDecoration: completed ? 'line-through' : 'red',
                color: completed ? 'grey':'red'
            };
    
    return <li key={key} style={styles}>{name} - {qty}</li>
}