import "./Box.css";
function Box({isActive, toggle}) {
    return <div className="Box"
    onClick={toggle}
    style={{backgroundColor: isActive?"red":"green"}}></div>
}

export default Box;