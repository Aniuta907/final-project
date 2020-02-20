import { connect } from 'react-redux';

import { catchPok, saveCurrentPok } from '../actions/actions';
import { PokList } from '../components/PokList';

const mapStateToProps = (state, ownProps) => ({
	pokemons: state.caughtedPokemons // передаем отфильтрованные данные: только пойманных покемонов
});
const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (id) => dispatch(catchPok(id)), // для поимки покемона
	saveCurrent: (id) => dispatch(saveCurrentPok(id)) // для записи в стейт текущего покемона
});

export const PokListCaughtContainer = connect(mapStateToProps, mapDispatchToProps)(PokList); // используем тот же компонент
