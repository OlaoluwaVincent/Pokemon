import { useState, useEffect } from 'react';
import { PokemonDetails } from '../typings';
import { AddToTeam, RemoveFromTeam } from '../utils/fetchFromLocalStorage';
import { MdAdd, MdRemove } from 'react-icons/md';

type Props = {
	data: PokemonDetails;
};

const CheckTeamData = ({ data }: Props) => {
	const [available, setAvailable] = useState<boolean>();

	useEffect(() => {
		// Fetch from localStorage
		const res = localStorage.getItem('pokemon');
		if (res) {
			const items: PokemonDetails[] = JSON.parse(res);
			// Find pokemon in localStorage and return
			const pokemonToMatch = items.find((pokemon: PokemonDetails) => {
				return pokemon.id === data.id;
			});
			if (pokemonToMatch) {
				setAvailable(true);
			}
		}
	}, []);

	return (
		<>
			{available ? (
				<div
					className='pokemon__addToTeam'
					onClick={() => RemoveFromTeam(data.id, setAvailable)}
				>
					<MdRemove className='form__svg' />
					Remove from Team
				</div>
			) : (
				<div
					className='pokemon__addToTeam'
					onClick={() => AddToTeam(data, setAvailable)}
				>
					<MdAdd className='form__svg' />
					Add to Team
				</div>
			)}
		</>
	);
};

export default CheckTeamData;
