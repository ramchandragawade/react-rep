import Box from "./Box";
import "./BoxList.css"
export default function BoxList () {
    return <div className="BoxList">
        {Array(25).fill(null).map(function (x, i) {
            return <Box key={i} />;
        })}
      </div>
}