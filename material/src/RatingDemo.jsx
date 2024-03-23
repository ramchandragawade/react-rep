import { Rating } from "@mui/material";
import { useState } from "react";
function RatingDemo(){

    const [score,setScore] = useState(1);

    return <div>
        <h1>Ratings:</h1>
        <h2>Current Score: {score}</h2>
        <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
      />
    </div>
}

export default RatingDemo;