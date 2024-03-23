import { Slider, Stack, TextField, Box } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { useState } from "react";

export default function BoxDemo(){
    const [name,setName] = useState("");
    const [sliderVal, setSliderVal] = useState(0);
    const updateName = (e)=>{
        setName(e.target.value);
    }
    const handleSlider = (e,val) => {
        setSliderVal(val)
    }
    return <Box sx={{border:"1px solid red", p:5}}>
        <h3>Name: {name}</h3>
        <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="Enter name"
            value={name} onChange={updateName}/>
        <TextField id="filled-basic" label="Name" variant="filled" placeholder="Enter name" value={name} onChange={updateName} />
        <TextField id="standard-basic" label="Name" variant="standard" placeholder="name" value={name} onChange={updateName}/>

        <br />
        <h3>Volume: {sliderVal}</h3>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
                <Slider aria-label="Volume" value={sliderVal} onChange={handleSlider} />
            <VolumeUp />
        </Stack>
    </Box>
}