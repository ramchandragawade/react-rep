import { v4 as uuid } from "uuid";
import { List } from "@mui/material";
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList() {
    const initialTodos = [
        { id: uuid(), text: "Walk the dog", completed: false },
        { id: uuid(), text: "Walk the cat", completed: true },
        { id: uuid(), text: "Buy milk", completed: true },
        { id: uuid(), text: "Get bread", completed: false }
    ];

    const updateCompleted = (id) => {
        setTodos(curr => {
            return curr.map(itm => itm.id !== id ? itm : { ...itm, completed: !itm.completed });
        });
    };

    const removeTodo = (id) => {
        setTodos(curr => {
            return curr.filter(itm => itm.id !== id);
        });
    }

    const addNewItem = (newText) =>{
        setTodos(curr=>{
            return [...curr,{
                id: uuid(),
                text: newText,
                completed: false
            }];
        })
    }

    const [todos, setTodos] = useState(initialTodos);
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                todos.map((item) => <TodoItem
                    item={item}
                    updateCompleted={() => { updateCompleted(item.id) }}
                    key={item.id} removeTodo={() => { removeTodo(item.id) }}
                />)
            }
            <TodoForm addItem={addNewItem}/>
        </List>
    )
}