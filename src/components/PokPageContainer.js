import { connect } from 'react-redux'

import { PokPage } from './PokPage'

const mapStateToProps = (state, ownProps) => ({
    pokemons: state.pokemons[0]
})

export const PokPageContainer = connect(
  mapStateToProps,
)(PokPage)