import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFirestore } from 'react-redux-firebase';
import LobbyPage from './LobbyPage';
import { addPlayer } from '../../store/actions';


const mapStateToProps = ({ reducer }) => {
  return {
    playerId: reducer.playerId,
  }
};
const mapDispatchToProps = {
  addPlayer,
};

export default compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(LobbyPage);