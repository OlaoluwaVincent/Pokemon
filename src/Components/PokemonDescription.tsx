import React from 'react';
import { Description, PokemonDetails } from '../typings';
import { useEffect, useState } from 'react';

type Props = {
	id: number;
};

const PokemonDescription = ({ id }: Props) => {
	const [description, setDescription] = useState<Description | undefined>();

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			// Fetch Pokemon's Description
			fetch(`https://pokeapi.co/api/v2/ability/${id}`)
				.then((response) => response.json())
				.then((data) => setDescription(data.effect_entries[1]));
		}
		return () => {
			mounted = false;
		};
	}, []);

	return (
		<>
			{description && (
				<div className='pokemon__description'>
					<h4>Description</h4>
					<p className='description'>{description?.effect}</p>
				</div>
			)}
		</>
	);
};

export default PokemonDescription;
