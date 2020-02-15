import { catchPok } from './actions';

export function reducer(state, action) {
    switch (action.type) {
      case 'CATCH':
          const pokemons = [...state.pokemons];
          pokemons[action.id].catched = true;
        return Object.assign({
            ...state,
            pokemons: [...pokemons]
        })
      default:
        return state
    }
  }