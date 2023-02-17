import { PokemonDetails } from '../typings';

export const AddToTeam = (
	itemToAdd: PokemonDetails,
	setAvailable: React.Dispatch<React.SetStateAction<boolean | undefined>>
): void => {
	// getItem from localStorage
	let res = localStorage.getItem('pokemon');
	if (res == null || undefined) {
		let newItem = [itemToAdd];
		// Add newItem to Team in localStorage
		localStorage.setItem('pokemon', JSON.stringify(newItem));
		setAvailable(true);
	} else {
		// update Team in localStorage
		const data = JSON.parse(res);
		if (data.length >= 6) {
			alert('You cannot have more than 6 pokemons');
			return;
		}
		data.unshift(itemToAdd);
		localStorage.setItem('pokemon', JSON.stringify(data));
		setAvailable(true);
	}
};

export const RemoveFromTeam = (
	idToDelete: number,
	setAvailable: React.Dispatch<React.SetStateAction<boolean | undefined>>
): void => {
	//getItem from localStorage
	let res = localStorage.getItem('pokemon');
	if (res) {
		// filter and delete matching Ids
		const oldData: any = JSON.parse(res);
		const updatedData = oldData.filter((old: any) => old.id !== idToDelete);
		// udpate localStorage with UpdatedItem
		localStorage.setItem('pokemon', JSON.stringify(updatedData));
		setAvailable(false);
	}
};
