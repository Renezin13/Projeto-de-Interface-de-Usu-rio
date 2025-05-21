export default function Props({ nome, newname, atributo }) {
    return (
        <div>
            <h1 style={{ color: atributo }}>Teste props</h1>
            <p>O nome {nome} foi enviado via props</p>
            <p>{newname} e {atributo}</p>
        </div>
    );
}