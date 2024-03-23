import { ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from "@mui/material";
import { Delete } from "@mui/icons-material";

function TodoItem({item, updateCompleted, removeTodo}){
    const labelId = `checkbox-list-label-${item.id}`;
    return (
        <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                <Delete/>
            </IconButton>
        }
        disablePadding
        >
        <ListItemButton onClick={updateCompleted}>
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