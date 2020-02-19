import { catchPok } from './actions';

const initialState = { pokemons: [] };

export function reducer(state = initialState, action) {
	let newState = {};
	switch (action.type) {
		case 'CATCH': // action: поймали какого-то покемона, должны в стейте изменить у этого покемона caught на true
			const pokemons = [ ...state.pokemons ];
			const index = pokemons.findIndex((pokemon) => pokemon.id === action.id);
			pokemons[index].caught = true;
			pokemons[index].caughtDate = new Date().toLocaleString();

			newState = {
				...state, // сначала копируем старый стейт
				pokemons: [ ...pokemons ] // потом затираем нужный кусок новыми данными
			};
			sessionStorage.setItem('pokemons', JSON.stringify(newState));
			return newState;
		case 'SAVE_CURRENT': // action: перешли на страницу определенного покемона,  должны в id в стейте записать id этого покемона (текщий покемон)
			newState = {
				...state, // сначала копируем старый стейт
				id: action.id // потом затираем нужный кусок новыми данными
			};
			sessionStorage.setItem('pokemons', JSON.stringify(newState));
			return newState;

		case 'GET_ALL_POKEMONS':
			return { ...state, pokemons: action.pokemons };

		case 'ADD_PICTURES':
			return {
				...state,
				pokemons: Object.assign({}, state).pokemons.map((pok, i) => ({
					...pok, // из json.db: id, name
					picture: i < action.picLength ? action.images[i] : action.images[0],
					caught: false,
					caughtDate: undefined
				}))
			};

		case 'GET_POKEMON_BY_ID':
			return { ...state, pokemons: [].find((pokemon) => pokemon.id === action.id) };

		default:
			return state;
	}
}
