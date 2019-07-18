import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUser } from '../actions';

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (payload) => {
      dispatch(loginUser(payload));
    }
  };
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;