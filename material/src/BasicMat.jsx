import { Button, IconButton } from "@mui/material";
import { Alarm, ShoppingBag } from "@mui/icons-material";
function BasicMat(){
return <div>
    <Button variant="text">Text</Button>
    <Button color="secondary" variant="text">Text</Button>
    <Button color="error" variant="contained">Contained</Button>
    <Button color="success" variant="outlined">Outlined</Button>

    <Button color="secondary" size="small" variant="contained">Contained</Button>
    <IconButton color="primary">
        <Alarm/>
    </IconButton>
    <IconButton color="secondary">
        <ShoppingBag/>
    </IconButton>
</div>
}

export default BasicMat;