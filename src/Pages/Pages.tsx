import { Routes, Route } from 'react-router-dom';
import Homepage from '../Components/Homepage';
import PokemonDetails from '../Components/PokemonDetail';

type Props = {};

const Pages = (props: Props) => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/:pokemonName' element={<PokemonDetails />} />
		</Routes>
	);
};

export default Pages;
