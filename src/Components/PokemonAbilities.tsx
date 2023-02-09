import { Abilities, PokemonDetails } from '../typings';

type Props = {
	data: Abilities[];
};

const PokemonAbilities = ({ data }: Props) => {
	return (
		<div className='pokemon__ability'>
			<h4>Ability</h4>
			<ul className='pokemon__listItems'>
				{data.map((ability) => (
					<li
						key={ability.ability.name}
						className='pokemon__listItem'
					>
						{ability.ability.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PokemonAbilities;
