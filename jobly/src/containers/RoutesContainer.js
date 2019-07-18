import { connect } from 'react-redux';
import Routes from '../components/Routes';
import { getUserFromLocalStorage } from '../actions';

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    ...user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getLoggedInUser: (payload) => {
      dispatch(getUserFromLocalStorage(payload));
    }
  };
}

const RoutesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);

export default RoutesContainer;