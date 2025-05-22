
export default function Card({ image, name, onClick }) {
    return(
        <>
            <div>
                <figure>
                    <img onClick={() => onClick(name)}style={{cursor: 'pointer', border: "1px black solid", height: "15rem", width: "15rem"}} src={image} alt={name}/>
                </figure>
            </div>
        </>
    )
} 
