import { useState } from 'react';
import { PokemonDetails } from '../typings';
import { useNavigate, Link } from 'react-router-dom';
import Search from '../Components/Search';

const Homepage = () => {
	const [pokemon, setPokemon] = useState<PokemonDetails | undefined>();
	const navigate = useNavigate();

	return (
		<div className='page homepage'>
			<Link to={'/team'} className='homepage__link'>
				My Team
			</Link>
			<h1>Pokemon World</h1>
			<h2>Search Pokemon</h2>
			<Search setPokemon={setPokemon} />
			{pokemon && (
				<>
					<h4>
						Result for: <span>{pokemon.name}</span>
					</h4>
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
				</>
			)}
		</div>
	);
};
export default Homepage;
