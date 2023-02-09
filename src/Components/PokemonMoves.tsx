import React from 'react';
import { Moves, PokemonDetails } from '../typings';

type Props = {
	data: Moves[];
};

const PokemonMoves = ({ data }: Props) => {
	return (
		<div className='pokemon__moves'>
			<h4>Moves</h4>
			<ul className='pokemon__moves--listItems'>
				{data.slice(0, 20).map((move) => (
					<li
						className='pokemon__moves--listitem'
						key={move.move.name}
					>
						{move.move.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PokemonMoves;
