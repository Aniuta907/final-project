import { connect } from 'react-redux';

import { PokemonPage } from '../components/PokemonPage';

const mapStateToProps = ({ pokemon }) => ({ pokemon });

export const PokPageContainer = connect(mapStateToProps)(PokemonPage);
