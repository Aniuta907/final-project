// контейнер компрнента передает action в редьюсер
export const catchPok = (id) => ({
	type: 'CATCH',
	id: id
});

export const saveCurrentPok = (id) => ({
	type: 'SAVE_CURRENT',
	id: id
});

export function getAllPokemons() {
	return (dispatch) => {
		fetch('http://localhost:3001/pokemons').then(response => response.json()).then(pokemon => dispatch(pokemon));
	};
}

