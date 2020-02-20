import { connect } from 'react-redux';

import { catchPok, saveCurrentPok } from '../actions/actions';
import { PokList } from '../components/PokList';

const mapStateToProps = (state, ownProps) => ({
	pokemons: state.caughtedPokemons
});
const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (id) => dispatch(catchPok(id)),
	saveCurrent: (id) => dispatch(saveCurrentPok(id))
});

export const PokListCaughtContainer = connect(mapStateToProps, mapDispatchToProps)(PokList);
