export default function ColorList ({colors}) {
    return (
        <div>
            <p>Color List:</p>
            <ul>{colors.map((itm)=><li style={{color:itm}}>{itm}</li>)}</ul>
        </div>
    )
}