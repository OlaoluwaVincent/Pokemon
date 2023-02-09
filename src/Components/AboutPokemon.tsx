import React from 'react';
import { PokemonDetails } from '../typings';

type Props = {
	data: PokemonDetails;
};

const AboutPokemon = ({ data }: Props) => {
	return (
		<>
			<h2 className='h4'>About</h2>
			<div className='pokemon__about--container'>
				<p>
					<span className='pokemon__about--content'>
						{data.weight}
					</span>
					<span className='pokemon__about--description'>Weight</span>
				</p>
				<p>
					<span className='pokemon__about--content'>
						{data.height}
					</span>
					<span className='pokemon__about--description'>Height</span>
				</p>
			</div>
		</>
	);
};

export default AboutPokemon;
