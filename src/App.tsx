import React from "react";
import PokemonCard from "./components/PokemonCard";

// Déclaration du tableau pokemonList déplacée dans App
const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

const App: React.FC = () => {
	return (
		<div>
			<PokemonCard pokemon={pokemonList[0]} />
		</div>
	);
};

export default App;
