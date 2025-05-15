import { useState } from 'react';

export default function Info1V(){
    const [valor, setValor] = useState(2);

    function numeric() {
        let aux = valor*2
        setValor(aux)
    }
    return(
        <>
            <div>
                <button onClick={() => setValor(valor + 1)}>Cliques {valor}</button>
                <button onClick={() => setValor(numeric)}>Cliques {valor}</button>
            </div>
        </>
    )
}