import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER_FROM_LOCAL_STORAGE
} from '../constants/action-types';

export const loginUser = payload => {
  return {
    type: LOGIN_USER,
    payload
  };
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
}

export const getUserFromLocalStorage = payload => {
  return {
    type: GET_USER_FROM_LOCAL_STORAGE,
    payload
  };
}
