import { connect } from 'react-redux';
import Profile from '../components/Profile';
// import { logoutUser } from '../actions';

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    ...user 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // onLogout: () => {
    //   dispatch(logoutUser());
    // }
  };
}

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ProfileContainer;