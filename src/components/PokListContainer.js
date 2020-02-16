import { connect } from 'react-redux';

import { catchPok, saveCurrentPok } from '../actions';
import { PokList } from './PokList';

const mapStateToProps = (state, ownProps) => ({
	pokemons: state.pokemons
});
const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (id) => dispatch(catchPok(id)), // для поимки покемона
	saveCurrent: (id) => dispatch(saveCurrentPok(id)) // для записи в стейт текущего покемона
});

export const PokListContainer = connect(mapStateToProps, mapDispatchToProps)(PokList);
