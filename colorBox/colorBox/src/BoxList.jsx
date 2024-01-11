import Box from "./Box";
import "./BoxList.css"
export default function BoxList ({numRows}) {
    return <div className="BoxList">
        {Array(5*numRows).fill(null).map(function (x, i) {
            return <Box key={i} />;
        })}
      </div>
}