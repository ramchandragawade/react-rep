import { List,Box,Typography } from "@mui/material";
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useEffect } from "react";

const getInitData = () =>{
    const data = JSON.parse(localStorage.getItem('todos'));
    return data || []; 
}
export default function TodoList() {  
    const [todos, setTodos] = useState(getInitData);
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

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
                id: crypto.randomUUID(),
                text: newText,
                completed: false
            }];
        })
    }

    return (
        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", m:3}}>
            <Typography variant="h4" component="div" >
                Todos
            </Typography>
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
        </Box>
        
    )
}