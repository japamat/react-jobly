import jwt from 'jsonwebtoken';

export const getCurrentUser = () => {
  //let user = localStorage.getItem('joblyUser');
  //let user = jwt.decode(JSON.parse(localStorage.getItem('joblyUser'))) || null;
  let token = localStorage.getItem('joblyUser');
  if (token) {
    return jwt.decode(JSON.parse(token));
  } else {
    return null;
  }
}

export const setCurrentUser = user => {
  localStorage.setItem('joblyUser', JSON.stringify(user));
}

export const removeCurrentUser = () => {
  localStorage.removeItem('joblyUser');
}
