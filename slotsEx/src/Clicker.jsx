function handleClick(e) {
    console.log('Handled click!!!!!',e);
}

function mousedOver(e) {
    console.log('Mouse is over me!!!!!',e);
}

export default function Clicker () {
    return <div>
        <p onMouseOver={mousedOver}>Click the btn</p>
        <button onClick={handleClick} >Click Me</button>
    </div>
}