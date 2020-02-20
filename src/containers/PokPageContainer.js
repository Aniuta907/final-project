import { connect } from 'react-redux';

import { PokPage } from '../components/PokPage';

const mapStateToProps = (state, ownProps) => {
    const pokemon = state.pokemon;

    return {
        pokemon: pokemon
    };
};

export const PokPageContainer = connect(mapStateToProps)(PokPage);