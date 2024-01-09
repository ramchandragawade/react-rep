function ClickerNew({msg, btnText}){
    function btnHandler() {
        console.log(msg);
    }
    return <div>
        <button onClick={btnHandler}>{btnText}</button>
    </div>
}

export default ClickerNew;