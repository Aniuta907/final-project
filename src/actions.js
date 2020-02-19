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
	return {
		type: 'GET_ALL_POKEMONS',
		pokemons: pokemons
	};
}

export default function receivePokemons() {
	return (dispatch,getState) =>{
	
		
		return fetch('http://localhost:3001/pokemons')
			.then((response) => response.json())
			.then((pokemon) =>
			dispatch(getAllpokemons(pokemon)))};
}


