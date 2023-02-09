import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import { PokemonDetails } from '../typings';

type Props = {
	setPokemon: React.Dispatch<
		React.SetStateAction<PokemonDetails | undefined>
	>;
};

const Search = ({ setPokemon }: Props) => {
	const [userInput, setUserInput] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (userInput.length < 1) {
			return setErrorMessage('Please enter a valid term');
		}
		setErrorMessage('Searching...');
		fetch(`https://pokeapi.co/api/v2/pokemon/${userInput.toLowerCase()}`)
			.then((response) => response.json())
			.then((data) => {
				setPokemon(data);
				setErrorMessage('');
			})
			.catch((error) => {
				setErrorMessage('Sorry, we do not have this pokemon');
				setPokemon(undefined);
			});
	};
	return (
		<>
			<form onSubmit={handleSubmit} className='form'>
				<input
					type='text'
					placeholder='Search for Pokemon'
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					className='form__input'
				/>
				<button type='submit' className='form__button'>
					<MdSearch className='form__svg' />
				</button>
			</form>
			{errorMessage && (
				<p className='form__error-message'>{errorMessage} </p>
			)}
		</>
	);
};

export default Search;
