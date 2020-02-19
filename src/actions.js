// контейнер компонента передает action в редьюсер
export const catchPok = (id) => ({
	type: 'CATCH',
	id: id
});

export const saveCurrentPok = (id) => ({
	type: 'SAVE_CURRENT',
	id: id
});

function getAllpokemons(pokemons) {
	// console.log('fffffff');
	return (dispatch, getState) => {
		dispatch({
			type: 'GET_ALL_POKEMONS',
			pokemons: pokemons
		});
		dispatch(addPictures());
	};
}

export default function receivePokemons() {
	return (dispatch, getState) => {
		return fetch('http://localhost:3001/pokemons')
			.then((response) => response.json())
			.then((pokemon) => dispatch(getAllpokemons(pokemon)));
	};
}

export function addPictures() {
	const pictures = [];
	const picLenght = 720; // пока у нас только 720 картинок, для остальных покемонов - показываем первую картинку
	for (let i = 1; i <= picLenght; i++) {
		var img = require(`./pokemons/${i}.png`);
		pictures.push(img);
	}

	return {
		type: 'ADD_PICTURES',
		picLength: 720,
		images: pictures
	};
}

export function getPokemonById(id) {
	return (dispatch, getState) => {
		let pokemons = getState().pokemons;
		dispatch({
			type: 'GET_POKEMON_BY_ID',
			pokemons,
			id
		});
	};
}
