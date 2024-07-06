import React, { useState, useEffect } from 'react'


function Pokedex() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => { 
		const fetchPokemons = async () => {
			const response = await fetch('https://pokeapi.co/api/v2/pokemon/14/')
				const data = await response.json();
                console.log(data)
			  	setPokemons(data);
		  };
		fetchPokemons();
		}, [])

	return(
		<div>
            <h4>Descubra mais sobre o nosso time!</h4>
            { Array.isArray(pokemons) ? pokemons.map((pokemon) => {
                return(
                    <div>
                       <p>{pokemon.name}</p>
                    </div>
                )
            }): <div>
                    <p>{pokemons.name}</p>
                    <img src={pokemons.sprites.front_default} />
                </div>}
        </div>
	)
}


export default Pokedex