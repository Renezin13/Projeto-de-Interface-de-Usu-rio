import React, { useEffect, useState } from 'react'

function Pokedex() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
      const data = await res.json()

      const detailedPromises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        return res.json()
      })

      const detailedPokemons = await Promise.all(detailedPromises)
      setPokemons(detailedPokemons)
    }

    fetchPokemons()
  }, [])

  return (
    <div className="grid">
      {pokemons.map(pokemon => (
        <div className="card" key={pokemon.id}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
          <p>
            {pokemon.types.map(t => t.type.name).join(', ')}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Pokedex
