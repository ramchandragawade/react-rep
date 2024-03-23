import { v4 as uuid } from "uuid";
import { List } from "@mui/material";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList(){
    const initialTodos = [
        {id: uuid(), text:"Walk the dog", completed: false},
        {id: uuid(), text:"Walk the cat", completed: true},
        {id: uuid(), text:"Buy milk", completed: true},
        {id: uuid(), text:"Get bread", completed: false}
    ];

    const updateCompleted = (id) => {
        setTodos(curr=>{
            return [...curr.map(itm=>{
                if(itm.id===id){
                    itm.completed = !itm.completed;
                }
                return itm;
            })];
        });
    };

    const removeTodo = (id) => {
        setTodos(curr=>{
            return curr.filter(itm=>itm.id!==id);
        });
    }
    
    const [todos, setTodos] = useState(initialTodos);
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                todos.map((item) => <TodoItem item={item} updateCompleted={updateCompleted} key={item.id} removeTodo={removeTodo} />)
            }
        </List>
    )
}