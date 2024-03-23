import { ListItem, TextField, IconButton,FormHelperText,FormControl, OutlinedInput, InputAdornment } from "@mui/material";
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
                <OutlinedInput
                    id="outlined-adornment-weight"
                    placeholder="Add new todo"
                    onChange={handleChange} value={txt}
                    endAdornment={<InputAdornment position="end">
                        <IconButton id="addTodo" aria-label="create todo" type="submit">
                            <Add />
                        </IconButton>
                    </InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
            </ListItem>

        </form>
    )
}