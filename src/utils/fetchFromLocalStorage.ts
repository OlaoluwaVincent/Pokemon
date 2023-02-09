import { PokemonDetails } from '../typings';

export const FetchTeam = (
	idToMatch: number,
	setAdded: React.Dispatch<React.SetStateAction<boolean>>
) => {
	setAdded(false);
	// Fetch from localStorage
	const res = localStorage.getItem('pokemon');
	if (res) {
		const items = JSON.parse(res);
		// Filter pokemon in localStorage and return matching Ids
		items.filter((pokemon: any) => {
			if (pokemon.id === idToMatch) {
				setAdded(true);
			} else {
				setAdded(false);
			}
		});
	}
};

export const AddToTeam = (
	itemToAdd: PokemonDetails,
	setAdded: React.Dispatch<React.SetStateAction<boolean>>
): void => {
	setAdded(false);
	// getItem from localStorage
	let res = localStorage.getItem('pokemon');
	if (res == null || undefined) {
		let newItem = [itemToAdd];
		// Add newItem to Team in localStorage
		localStorage.setItem('pokemon', JSON.stringify(newItem));
		setAdded(true);
	} else {
		// update Team in localStorage
		const data = JSON.parse(res);
		if (data.length >= 6) {
			alert('You cannot have more than 6 pokemons');
			return;
		}

		data.push(itemToAdd);
		localStorage.setItem('pokemon', JSON.stringify(data));
		setAdded(true);
	}
};

export const RemoveFromTeam = (
	idToDelete: number,
	setAdded: React.Dispatch<React.SetStateAction<boolean>>
): void => {
	//getItem from localStorage
	let res = localStorage.getItem('pokemon');
	if (res) {
		// filter and delete matching Ids
		const oldData: any = JSON.parse(res);
		const updatedData = oldData.filter((old: any) => old.id !== idToDelete);
		// udpate localStorage with UpdatedItem
		localStorage.setItem('pokemon', JSON.stringify(updatedData));
		setAdded(false);
	}
};

export const FetchMyTeam = (
	setDeleted: React.Dispatch<React.SetStateAction<boolean>>,
	deleted: boolean
) => {
	const res = localStorage.getItem('pokemon');
	if (res) {
		const items: PokemonDetails[] = JSON.parse(res);
		if (deleted == true) {
			return items;
		} else {
			setDeleted(true);
			return items;
		}
	}
};
