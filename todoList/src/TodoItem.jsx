import { ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from "@mui/material";
import { Delete } from "@mui/icons-material";

function TodoItem({item, updateCompleted, removeTodo}){
    const labelId = `checkbox-list-label-${item.id}`;
    const handleToggle= (id)=>{
        updateCompleted(id);
    }
    const deleteItem= (id)=>{
        removeTodo(id);
    }
    return (
        <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={()=>{deleteItem(item.id)}}>
                <Delete/>
            </IconButton>
        }
        disablePadding
        >
        <ListItemButton onClick={()=>{handleToggle(item.id)}}>
            <ListItemIcon>
            <Checkbox
                edge="start"
                checked={item.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
            />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.text} />
        </ListItemButton>
        </ListItem>
    );  
}

export default TodoItem;