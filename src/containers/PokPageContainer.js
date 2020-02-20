import { connect } from 'react-redux';

import { PokPage } from '../components/PokPage';

const mapStateToProps = (state, ownProps) => {
    const pokemon = state.pokemon; // читаем из стейта массив покемонов

    return {
        pokemon: pokemon // в компонент передаем найденного покемона
    };
};



export const PokPageContainer = connect(mapStateToProps)(PokPage);