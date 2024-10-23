import { Pokemon } from "../types/types";

type NavBarProps = {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
};

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	const handlePrev = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	const handleNext = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	return (
		<div>
			{pokemonIndex > 0 && (
				<button type="button" onClick={handlePrev}>
					Précédent
				</button>
			)}

			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={handleNext}>
					Suivant
				</button>
			)}
		</div>
	);
}

export default NavBar;
