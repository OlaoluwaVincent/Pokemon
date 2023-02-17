import { Link, Params, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PokemonDetails } from '../typings';
import CheckTeamData from '../Components/CheckTeamData';
import AboutPokemon from '../Components/AboutPokemon';
import PokemonAbilities from '../Components/PokemonAbilities';
import PokemonMoves from '../Components/PokemonMoves';
import PokemonDescription from '../Components/PokemonDescription';
import PokemonTypes from '../Components/PokemonTypes';

const PokemonDetail = () => {
	const [data, setData] = useState<PokemonDetails | undefined>();

	const { pokemonName }: Readonly<Params<string>> = useParams();

	// Useffect onMount
	useEffect(() => {
		let mount = true;
		if (mount) {
			// Fetch Pokemon's Details
			fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
				.then((response) => response.json())
				.then((data) => {
					setData(data);
				})
				.catch((error) => console.log(error));
		}
		return () => {
			mount = false;
		};
	}, [pokemonName]);

	if (!data) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<div className='page pokemon__more-details'>
				<div className='pokemon__header'>
					<Link to={'/'} className='pokemon__details--link'>
						Homepage
					</Link>
					<Link to={'/team'} className='pokemon__details--link'>
						My Team
					</Link>
				</div>
				<div className='pokemon__header'>
					<h1>{data.name}</h1>
					<h4>#{data.id}</h4>
				</div>

				<div className='pokemon__image--big'>
					<img src={data.sprites.front_default} alt={data.name} />
					<PokemonTypes data={data.types} />
					<CheckTeamData data={data} />
				</div>
				<div className='pokemon__about'>
					<AboutPokemon data={data} />
					<PokemonAbilities data={data.abilities} />
					<PokemonMoves data={data.moves} />
					<PokemonDescription id={data.id} />
				</div>
			</div>
		</>
	);
};

export default PokemonDetail;
