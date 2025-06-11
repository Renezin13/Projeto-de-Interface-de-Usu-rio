import { carros } from './dados_carro';

function List2() {
    // Filtro a lista dos carros
    const listCarros = carros.filter((carro => carro.cor == 'vermelho'));

    return (
        <div style={{ backgroundColor: "white", height: "100vh", width: '100vw', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            {/* Mapeio e demostro aquela lista já filtrada anteriormente */}
            <ul>
                {listCarros.map(carro => (
                <li>
                    {carro.modelo} - {carro.ano}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default List2

