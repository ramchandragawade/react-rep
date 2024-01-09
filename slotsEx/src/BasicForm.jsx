function handleSubmit (e) {
    console.log('Clicked on submit', e);
    e.preventDefault();
}
function BasicForm () {
    return <form onSubmit={handleSubmit}>
        <input type="name" />
        <button>Submit</button>
    </form>
}
export default BasicForm;