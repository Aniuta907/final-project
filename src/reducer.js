import { catchPok } from './actions';

export function reducer(state, action) {
	switch (action.type) {
		case 'CATCH': // action: поймали какого-то покемона, должны в стейте изменить у этого покемона caught на true
			const pokemons = [ ...state.pokemons ];
			const index = pokemons.findIndex((pokemon) => pokemon.id === action.id);
			pokemons[index].caught = true;
			return Object.assign({
				...state, // сначала копируем старый стейт
				pokemons: [ ...pokemons ] // потом затираем нужный кусок новыми данными
			});
		case 'SAVE_CURRENT': // action: перешли на страницу определенного покемона,  должны в id в стейте записать id этого покемона (текщий покемон)
			return Object.assign({
				...state, // сначала копируем старый стейт
				id: action.id // потом затираем нужный кусок новыми данными
			});
		default:
			return state;
	}
}
