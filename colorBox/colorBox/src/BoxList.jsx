import Box from "./Box";
import "./BoxList.css"
export default function BoxList () {
    return <div className="BoxList">
        {Array.apply(0, Array(25)).map(function (x, i) {
            return <Box key={i} />;
        })}
      </div>
}