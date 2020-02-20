import { connect } from 'react-redux';

import { catchPok, saveCurrentPok } from '../actions/actions';
import { PokList } from '../components/PokList';
import { receiveAllPokemons } from '../actions/actions';

const mapStateToProps = (state, ownProps) => ({
    pokemons: state.pokemons.filter((pokemon) => pokemon.caught === true) //  передаем отфильтрованные данные: только пойманных покемонов
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (id) => dispatch(catchPok(id)), // для поимки покемона
    saveCurrent: (id) => dispatch(saveCurrentPok(id)), // для записи в стейт текущего покемона
    receivePokemons: () => dispatch(receiveAllPokemons())
});

export const PokListCaughtContainer = connect(mapStateToProps, mapDispatchToProps)(PokList); // используем тот же компонент