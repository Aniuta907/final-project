import { connect } from 'react-redux'

import { catchPok } from '../actions'
import { PokPortfolio } from './PokPortfolio'

const mapStateToProps = (state, ownProps) => ({
    pokemons: state.pokemons
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (id) => dispatch(catchPok(id))
})

export const PokPortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokPortfolio)