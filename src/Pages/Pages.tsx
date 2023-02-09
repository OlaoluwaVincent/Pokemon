import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import PokemonDetail from './PokemonDetail';
import Team from './Team';

type Props = {};

const Pages = (props: Props) => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/:pokemonName' element={<PokemonDetail />} />
			<Route path='/team' element={<Team />} />
		</Routes>
	);
};

export default Pages;
