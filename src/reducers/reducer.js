const initialState = { pokemons: [], currentId: 1, pokemon: {}, caughtedPokemons: [] };

export function reducer(state = initialState, action) {
	let newState = {};
	switch (action.type) {
		case 'CATCH':
			const pokemons = [ ...state.pokemons ];
			const index = pokemons.findIndex((pokemon) => pokemon.id === action.id);
			pokemons[index].caught = true;
			pokemons[index].caughtDate = new Date().toLocaleString();

			newState = {
				...state,
				pokemons: [ ...pokemons ],
				caughtedPokemons: [ ...pokemons ].filter((pokemon) => pokemon.caught === true)
			};

			return newState;
		case 'SAVE_CURRENT':
			newState = {
				...state,
				currentId: action.id
			};
			return newState;

		case 'GET_ALL_POKEMONS':
			return { ...state, pokemons: action.pokemons };

		case 'ADD_PICTURES':
			return {
				...state,
				pokemons: Object.assign({}, state).pokemons.map((pok, i) => ({
					...pok,
					picture: i < action.picLength ? action.images[i] : action.images[0],
					caught: false,
					caughtDate: undefined
				}))
			};

		case 'GET_POKEMON_BY_ID':
			return {
				...state,
				pokemon: Object.assign({}, state).pokemons.find((pokemon) => pokemon.id === state.currentId)
			};
		default:
			return state;
	}
}
