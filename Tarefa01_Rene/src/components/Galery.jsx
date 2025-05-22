import Card from './Card';

export default function Galery({ cards, onCardClick }) {
    return (
        <div style={{height: "100vh", display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center",backgroundColor: "whitesmoke"}}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    name={card.name}
                    onClick={() => onCardClick(card)}
                />
            ))}
        </div>
    );
}
