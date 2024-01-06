export default function Heading ({color = "olive", text, fontSize="30px"}) {
    return <h1 style={{color, fontSize}}>{text}</h1>
}