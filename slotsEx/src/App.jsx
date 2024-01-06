import './App.css'
import ShoppingList from './ShoppingList'

const data = [
  {item: 'egss', qty: 12, completed: false},
  {item: 'bread', qty: 1, completed: false},
  {item: 'lemons', qty: 6, completed: false},
  {item: 'milk', qty: 2, completed: true},
  {item: 'cookie', qty: 10, completed: false},
  {item: 'maggi', qty: 12, completed: false}
]
function App() {

  return (
    <ShoppingList items = {data}/>
  )
}

export default App
