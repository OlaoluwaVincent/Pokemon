import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PokemonDetails } from '../typings';
import { RemoveFromTeam } from '../utils/fetchFromLocalStorage';

const Team = () => {
	const [data, setData] = useState<PokemonDetails[]>();
	const [available, setAvailable] = useState<boolean | undefined>();

	useEffect(() => {
		let mount = true;
		if (mount) {
			const res = localStorage.getItem('pokemon');
			if (res) {
				const items = JSON.parse(res);
				if (items) {
					setData(items);
					setAvailable(true);
				}
			}
		}
		return () => {
			mount = false;
		};
	}, [available]);
	return (
		<>
			<Link
				to={'/'}
				style={{ textAlign: 'center', display: 'block' }}
				className='pokemon__details--link'
			>
				{data?.length ? 'Homepage' : 'Search Pokemon'}
			</Link>
			<div className='page userPokemon'>
				{!data ||
					(data?.length < 1 && (
						<div className='unavailable'>
							Add pokemons to team to see them
						</div>
					))}

				{data &&
					data.map((pokemon) => (
						<div
							key={pokemon.name}
							className='userPokemon__container'
						>
							<h4>#{pokemon.id}</h4>
							<img
								src={pokemon.sprites.front_default}
								alt={pokemon.name}
							/>
							<Link to={`/${pokemon.name}`}>{pokemon.name}</Link>

							<p
								onClick={() =>
									RemoveFromTeam(pokemon.id, setAvailable)
								}
							>
								Delete
							</p>
						</div>
					))}
			</div>
		</>
	);
};

export default Team;
