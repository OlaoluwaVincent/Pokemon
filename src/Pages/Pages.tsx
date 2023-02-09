import { Routes, Route } from 'react-router-dom';
import Homepage from '../Components/Homepage';
import PokemonDetail from '../Components/PokemonDetail';
import Team from '../Components/Team';

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
