import React from "react";

// Composant PokemonCard avec déstructuration des props
const PokemonCard: React.FC<{
	pokemon: { name: string; imgSrc: string | null };
}> = ({ pokemon }) => {
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
};

export default PokemonCard;
