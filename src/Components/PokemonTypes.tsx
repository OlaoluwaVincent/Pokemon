import { Types } from '../typings';

type Props = {
	data: Types[];
};

const PokemonTypes = ({ data }: Props) => {
	return (
		<div className='pokemon__types'>
			{data.map((type) => (
				<p key={type.type.url} className='pokemon__type'>
					{type.type.name}
				</p>
			))}
		</div>
	);
};

export default PokemonTypes;
