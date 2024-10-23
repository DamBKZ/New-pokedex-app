import { Pokemon } from "../types/types";

type PokemonProps = {
	pokemon: Pokemon;
};

function PokemonCard({ pokemon }: PokemonProps) {
	return (
		<figure>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
