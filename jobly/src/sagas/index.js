import { call, put, takeLatest, all } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';

import { setCurrentUser, removeCurrentUser } from '../localStorageHelpers';
import history from '../history';
import joblyApi from '../JoblyApi';


import {
  USER_LOGIN_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
  USER_LOGOUT_SUCCESS,
  GET_USER_FROM_LOCAL_STORAGE,
} from '../constants/action-types';


/* WORKER SAGAS */

function* LoginUserAsync(action) {
  const _token = yield call([joblyApi, joblyApi.login], action.payload);
  yield put({type: USER_LOGIN_SUCCESS, payload: jwt.decode(_token)});
  yield setCurrentUser(_token);
  history.push('/jobs')
//   try {
//  } catch (error) {
//     yield put({type: "FETCH_FAILED", error})
//  }
}

function* restoreLastLogin(action) {
  const { payload } = action;
  yield put({type: USER_LOGIN_SUCCESS, payload });
  history.push(history.pathname);
}

function* LogoutUserWorker() {
  yield put({type: USER_LOGOUT_SUCCESS});
  yield removeCurrentUser();
  history.push('/');
}

/* WATCHER SAGAS */

function* watchGetUserFromLocalStorage() {
  yield takeLatest(GET_USER_FROM_LOCAL_STORAGE, restoreLastLogin);
}

function* watchUserLogin() {
  yield takeLatest(LOGIN_USER, LoginUserAsync);
}

function* watchUserLogout() {
  yield takeLatest(LOGOUT_USER, LogoutUserWorker);
}

export default function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserLogout(),
    watchGetUserFromLocalStorage(),
  ])
}