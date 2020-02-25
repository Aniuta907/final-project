import { connect } from 'react-redux';

import { PokPage } from '../components/PokPage';

const mapStateToProps = ({ pokemon }) => ({ pokemon });

export const PokPageContainer = connect(mapStateToProps)(PokPage);
