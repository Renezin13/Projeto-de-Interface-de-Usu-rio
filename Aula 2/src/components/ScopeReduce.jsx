import './ScopeReduce.css'
let clicked = false

const ScopeReduce = () => {
    function handleClick() {
        let container = document.getElementById('container')
        if (!clicked) {
            container.style.backgroundColor = 'yellow'
            clicked = true
        } else {
            container.style.backgroundColor = 'red'
            clicked = false
        }
        return (
            container
        )
    }
    return (
        <>
            <button onClick={() => console.log("You Clicked")}>Click</button>
            <div>
                <button onClick={handleClick}>New Button</button>
            </div>
            <div id='container' onClick={() => alert("Container")}>
                <p>Teste</p>
            </div>
        </>
    )
}

export default ScopeReduce 