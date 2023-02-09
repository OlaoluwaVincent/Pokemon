import React from 'react';
import { PokemonDetails } from '../typings';
import { AddToTeam, RemoveFromTeam } from '../utils/fetchFromLocalStorage';
import { MdAdd, MdRemove } from 'react-icons/md';

type Props = {
	state: React.Dispatch<React.SetStateAction<boolean>>;
	data: PokemonDetails;
	added: boolean;
};

const CheckTeamData = ({ state, data, added }: Props) => {
	return (
		<>
			{added ? (
				<div
					className='pokemon__addToTeam'
					onClick={() => RemoveFromTeam(data.id, state)}
				>
					<MdRemove className='form__svg' />
					Remove from Team
				</div>
			) : (
				<div
					className='pokemon__addToTeam'
					onClick={() => AddToTeam(data, state)}
				>
					<MdAdd className='form__svg' />
					Add to Team
				</div>
			)}
		</>
	);
};

export default CheckTeamData;
