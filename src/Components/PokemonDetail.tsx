import { Params, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Description, PokemonDetails } from '../typings';

const PokemonDetail = () => {
	const [data, setData] = useState<PokemonDetails | undefined>();
	const [description, setDescription] = useState<Description | undefined>();
	const { pokemonName }: Readonly<Params<string>> = useParams();
	useEffect(() => {
		let mount = true;
		if (mount) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
				.then((response) => response.json())
				.then((data) => {
					setData(data);
				})
				.catch((error) => console.log(error));

			fetch(`https://pokeapi.co/api/v2/ability/${data?.id}`)
				.then((response) => response.json())
				.then((data) => setDescription(data.effect_entries[1]));
			console.log(description);
		}
		return () => {
			mount = false;
		};
	}, [pokemonName]);
	// console.log(data);
	if (!data) {
		return <p>Loading...</p>;
	}

	return (
		<div className='pokemon__more-details'>
			<div className='pokemon__header'>
				<h1>{data.name}</h1>
				<h4>{data.id}</h4>
			</div>

			<div className='pokemon__image--big'>
				<img src={data.sprites.front_default} alt={data.name} />
				<div className='pokemon__types'>
					{data.types.map((type) => (
						<p className='pokemon__type'>{type.type.name}</p>
					))}
				</div>
			</div>
			<div className='pokemon__about'>
				<h4>About</h4>
				<p className='pokemon__about--container'>
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
			<div className='pokemon__ability'>
				<h4>Ability</h4>
				<ul className='pokemon__listItems'>
					{data.abilities.map((ability) => (
						<li className='pokemon__listItem'>
							{ability.ability.name}
						</li>
					))}
				</ul>
			</div>
			<div className='pokemon__description'>{description?.effect}</div>
		</div>
	);
};

export default PokemonDetail;
