import { useState } from 'react';
import { PokemonDetails } from '../typings';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const Homepage = () => {
	const [pokemon, setPokemon] = useState<PokemonDetails | undefined>();
	const navigate = useNavigate();

	return (
		<div className='page'>
			<h1>Pokemon World</h1>
			<Search setPokemon={setPokemon} />
			<h2>Search Pokemon</h2>
			{pokemon && (
				<div
					className='pokemon__details'
					onClick={() => navigate(`/${pokemon.name}`)}
				>
					<h3 className='pokemon__name'>{pokemon.name}</h3>
					<img
						src={pokemon.sprites.front_default}
						alt={pokemon.name}
						className='pokemon__image'
					/>
				</div>
			)}
		</div>
	);
};
export default Homepage;
