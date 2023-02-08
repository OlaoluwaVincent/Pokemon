export interface PokemonDetails {
	id: number;
	name: string;
	weight: number;
	height: number;
	types: Types[];
	stats: Stats[];
	base_experience: number;
	forms: {
		form: Name;
	};
	held_items: HeldItems[];
	moves: Moves[];
	abilities: Abilities[];
	sprites: {
		front_default: string;
		other: {
			home: {
				front_default: string;
			};
		};
	};
}

export interface PokemonResult {
	name: string;
	url: string;
}
export interface Description {
	effect: string;
}

interface Moves {
	move: {
		name: string;
	};
}
interface Types {
	type: {
		name: string;
		url: string;
	};
}
interface Stats {
	type: {
		base_stat: number;
		stat: {
			name: string;
			url: string;
		};
	};
}
interface Abilities {
	ability: {
		name: string;
	};
}
interface HeldItems {
	item: {
		name: string;
	};
}
