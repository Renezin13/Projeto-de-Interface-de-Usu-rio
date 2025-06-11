import { useState } from 'react';

function Clicker() {
    // Defino o clicks como 0, e também defino as cores dos botões como useState, para manipula-lás futuramente
    const [clicks, setClicks] = useState(0)

    // Crio o UseState para checar se está ou não maior e menor que 10
    const [isAbove10, setAbove] = useState(false)
    const [isBelow10, setBelow] = useState(false)

    // Crio a função para mudar a cor quando acontecer os eventos esperados (9 para compensar o chamado inicial do setClicks)

    function changeColor(clicks) {
        if (clicks > 9) {
            setAbove(true);
        }
        else if (clicks < -9) {
            setBelow(true);
        }
        else {
            setAbove(false);
            setBelow(false)
        }
    }

    // As funções separadas para realizar a atualização das cores e dos clicks
    
    const handleClickUp = () => {
        setClicks(clicks + 1)
        changeColor(clicks)
    }

    const handleClickDown = () => {
        setClicks(clicks - 1)
        changeColor(clicks)
    }

    return (
        <div style={{ backgroundColor: "gray", height: "100vh", width: '100vw', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            {/* Exibo a quantidade de clicks */}
            <h1>Clicks: {clicks}</h1>

            {/* Nessa div eu coloco os botões, com suas lógicas dentro da própria tag, usando o onClick */}
            <div>
                <button onClick={handleClickUp} style={{backgroundColor: isAbove10 ? 'purple' : 'blue'}}>
                    +
                </button>
                <button onClick={handleClickDown} style={{backgroundColor: isBelow10 ? 'orange' : 'red'}}>
                    -
                </button>
            </div>
        </div>
    )
}

export default Clicker

