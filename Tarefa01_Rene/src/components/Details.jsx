export default function Details({ character }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%'}}>
            <img
                src={character.image}
                alt={character.name}
                style={{ width: '40rem', height: '40rem', borderRadius: '8px' }}
            />
            <div>
                <h2>{character.name}</h2>
                <p><strong>Tipo de Nen:</strong> {character.nen}</p>
                <p><strong>Idade:</strong> {character.idade} anos</p>
                <p><strong>Altura:</strong> {character.altura}</p>
            </div>
        </div>
    );
}
