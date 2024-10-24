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
					key={pokemon.name}
					type="button"
					onClick={() => {
						setPokemonIndex(index);
						if (pokemon.name === "pikachu") {
							alert("pika pikachu !!!");
						}
					}}
					style={{
						fontWeight: pokemonIndex === index ? "bold" : "normal",
					}}
				>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}

export default NavBar;
