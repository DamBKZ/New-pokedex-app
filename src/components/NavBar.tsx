import { Pokemon } from "../types/types";

type NavBarProps = {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
};

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	return (
		<div>
			{pokemonList.map((pokemon, index) => (
				<button
					key={pokemon.name} // Utilisation de `name` comme clé unique
					type="button"
					onClick={() => setPokemonIndex(index)} // Met à jour l'index du Pokémon
					style={{
						fontWeight: pokemonIndex === index ? "bold" : "normal", // Met en gras le bouton du Pokémon sélectionné
					}}
				>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}

export default NavBar;
