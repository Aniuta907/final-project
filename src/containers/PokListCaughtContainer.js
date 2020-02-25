import { connect } from 'react-redux';

import { catchPok, saveCurrentPok } from '../actions/actions';
import { PokList } from '../components/PokList';

const mapStateToProps = (state) => ({
	pokemons: state.caughtPokemons
});
const mapDispatchToProps = (dispatch) => ({
	onClick: (id) => dispatch(catchPok(id)),
	saveCurrent: (id) => dispatch(saveCurrentPok(id))
});

export const PokListCaughtContainer = connect(mapStateToProps, mapDispatchToProps)(PokList);
