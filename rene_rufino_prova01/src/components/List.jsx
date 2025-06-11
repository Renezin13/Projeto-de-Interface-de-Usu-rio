import { carros } from './dados_carro';

function List() {
    // Recebo a lista dos carros do arquivo enviado, e já coloco ela como tags de itens de uma lista
    const listCarros = carros.map((carro) =>
        <li>{carro.modelo} - {carro.ano}</li>
    );

    return (
        <div style={{ backgroundColor: "whitesmoke", height: "100vh", width: '100vw', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <ul>
                {/* Aqui eu chamo a lista dentro do meu HTML, e exporto ela para o meu app*/}
                {listCarros}
            </ul>
        </div>
    )
}

export default List

