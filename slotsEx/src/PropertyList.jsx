import PropertyItem from "./PropertyItem";

export default function PropertyList ({properties}) {
    return <ul style={{display:"flex"}}>
        {properties.map((itm)=>(<PropertyItem key={itm.id} {...itm}/>))}
    </ul>
}