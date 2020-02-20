export const loadState = () => {
	try {
		const serializedState = sessionStorage.getItem('pokemons');
		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		sessionStorage.setItem('pokemons', serializedState);
	} catch (error) {}
};
