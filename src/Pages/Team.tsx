import { PokemonDetails } from '../typings';
import { FetchMyTeam, RemoveFromTeam } from '../utils/fetchFromLocalStorage';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Team = () => {
	const [data, setData] = useState<PokemonDetails[]>();
	const [deleted, setDeleted] = useState<boolean>(true);
	const navigate = useNavigate();

	useEffect(() => {
		let mount = true;
		if (mount) {
			const result = FetchMyTeam(setDeleted, deleted);
			setData(result);
		}
		return () => {
			mount = false;
		};
	}, [deleted]);

	if (!data || data?.length < 1) {
		return (
			<p className='page unavailable'>Add pokemons to team to see them</p>
		);
	}

	return (
		<>
			<Link
				to={'/'}
				style={{ textAlign: 'center', display: 'block' }}
				className='pokemon__details--link'
			>
				Homepage
			</Link>
			<div className='page userPokemon'>
				{data?.map((pokemon) => (
					<div key={pokemon.name} className='userPokemon__container'>
						<h4>#{pokemon.id}</h4>
						<img
							src={pokemon.sprites.front_default}
							alt={pokemon.name}
						/>
						<Link to={`/${pokemon.name}`}>{pokemon.name}</Link>

						<p
							onClick={() =>
								RemoveFromTeam(pokemon.id, setDeleted)
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
