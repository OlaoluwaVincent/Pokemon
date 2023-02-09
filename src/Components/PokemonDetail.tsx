import { Link, Params, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Description, PokemonDetails } from '../typings';
import { MdAdd, MdRemove } from 'react-icons/md';
import {
	FetchTeam,
	AddToTeam,
	RemoveFromTeam,
} from '../utils/fetchFromLocalStorage';

const PokemonDetail = () => {
	const [data, setData] = useState<PokemonDetails | undefined>();
	const [teamId, setTeamId] = useState<number>(0);
	const [added, setAdded] = useState<boolean>(false);
	const [description, setDescription] = useState<Description | undefined>();
	const { pokemonName }: Readonly<Params<string>> = useParams();
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

			// Fetch Pokemon's Description
			fetch(`https://pokeapi.co/api/v2/ability/${data?.id}`)
				.then((response) => response.json())
				.then((data) => setDescription(data.effect_entries[1]));
		}
		// if data is available re-render
		if (data) FetchTeam(data.id, setAdded);

		return () => {
			mount = false;
		};
	}, [pokemonName, added, data?.id]);

	if (!data) {
		return <p>Loading...</p>;
	}

	return (
		<div className='page pokemon__more-details'>
			<div className='pokemon__header'>
				<h1>{data.name}</h1>
				<Link to={'/team'} className='pokemon__details--link'>
					My Team
				</Link>
				<h4>#{data.id}</h4>
			</div>

			<div className='pokemon__image--big'>
				{added ? (
					<div
						className='pokemon__addToTeam'
						onClick={() => RemoveFromTeam(data.id, setAdded)}
					>
						<MdRemove className='form__svg' />
						Remove from Team
					</div>
				) : (
					<div
						className='pokemon__addToTeam'
						onClick={() => AddToTeam(data, setAdded)}
					>
						<MdAdd className='form__svg' />
						Add to Team
					</div>
				)}
				<img src={data.sprites.front_default} alt={data.name} />
				<div className='pokemon__types'>
					{data.types.map((type) => (
						<p key={type.type.url} className='pokemon__type'>
							{type.type.name}
						</p>
					))}
				</div>
			</div>
			<div className='pokemon__about'>
				<h2 className='h4'>About</h2>
				<div className='pokemon__about--container'>
					<p>
						<span className='pokemon__about--content'>
							{data.weight}
						</span>
						<span className='pokemon__about--description'>
							Weight
						</span>
					</p>
					<p>
						<span className='pokemon__about--content'>
							{data.height}
						</span>
						<span className='pokemon__about--description'>
							Height
						</span>
					</p>
				</div>

				<div className='pokemon__ability'>
					<h4>Ability</h4>
					<ul className='pokemon__listItems'>
						{data.abilities.map((ability) => (
							<li
								key={ability.ability.name}
								className='pokemon__listItem'
							>
								{ability.ability.name}
							</li>
						))}
					</ul>
				</div>
				<div className='pokemon__moves'>
					<h4>Moves</h4>
					<ul className='pokemon__moves--listItems'>
						{data.moves.slice(0, 20).map((move) => (
							<li
								className='pokemon__moves--listitem'
								key={move.move.name}
							>
								{move.move.name}
							</li>
						))}
					</ul>
				</div>
				{description && (
					<div className='pokemon__description'>
						<h4>Description</h4>
						<p className='description'>{description?.effect}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default PokemonDetail;
