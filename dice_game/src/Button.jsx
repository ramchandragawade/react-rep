import "./Button.css"
function Button ({clickFunc, text="Click Me!"}) {
    return <button onClick={clickFunc} className="Button">
        {text}
    </button>
}

export default Button;