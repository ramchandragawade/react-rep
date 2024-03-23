import { ListItem, IconButton,FormControl, OutlinedInput, InputAdornment, InputLabel } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
export default function TodoForm({addItem}){
    const [txt, setTxt] = useState("");
    const handleChange = (e)=>{
        setTxt(e.target.value);
    }
    const handleSubmit = (e)=>{
        addItem(txt);
        e.preventDefault();
        setTxt("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <ListItem style={{ justifyContent: "center" }}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="todoAdd">New To Do</InputLabel>
                    <OutlinedInput
                        id="todoAdd"
                        type="text"
                        onChange={handleChange} value={txt}
                        endAdornment={<InputAdornment position="end">
                            <IconButton id="addTodo" aria-label="create todo" type="submit">
                                <Add />
                            </IconButton>
                        </InputAdornment>}
                        label="New To Do"
                    />
                </FormControl>
            </ListItem>
        </form>
    )
}