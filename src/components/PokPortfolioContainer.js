import { connect } from 'react-redux'

// import { setVisibilityFilter } from '../actions'
import { PokPortfolio } from './PokPortfolio'

const mapStateToProps = (state, ownProps) => ({
    pokemons: state.pokemons
})
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
// })

export const PokPortfolioContainer = connect(
  mapStateToProps,
//   mapDispatchToProps
)(PokPortfolio)