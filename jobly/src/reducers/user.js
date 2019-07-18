/*
 * user reducer
 */

import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from '../constants/action-types';

const initialState = {
  username: null,
  is_admin: null,
  iat: null,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_SUCCESS: {
      console.log(payload);
      
      const { username, is_admin, iat } = payload;
      return {
        ...state,
        username,
        is_admin,
        iat
      }
    }

    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        ...initialState
      }
    }

    default:
      return state;
  }
};

export default user;
