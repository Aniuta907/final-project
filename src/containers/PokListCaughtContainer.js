import { connect } from 'react-redux';

import { catchPok, saveCurrentPok } from '../actions/actions';
import { PokemonList } from '../components/PokemonList';

const mapStateToProps = (state) => ({
	pokemons: state.caughtPokemons
});

const mapDispatchToProps = (dispatch) => ({
	onClick: (id) => dispatch(catchPok(id)),
	saveCurrent: (id) => dispatch(saveCurrentPok(id))
});

export const PokListCaughtContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonList);
