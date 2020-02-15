import { connect } from 'react-redux'

import { catchPok } from '../actions'
import { PokList } from './PokList'

const mapStateToProps = (state, ownProps) => ({
    pokemons: state.pokemons
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (id) => dispatch(catchPok(id))
})

export const PokListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokList)