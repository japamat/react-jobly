import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { logoutUser } from '../actions';

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    ...user 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(logoutUser());
    }
  };
}

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;