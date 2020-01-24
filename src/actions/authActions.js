import authConstants from 'constants/authConstants';

import { history } from 'helpers/history';

export const login = hash => async dispatch => {
  dispatch({ type: authConstants.LOGIN_REQUEST });
  try {
    const token = hash
      .substr(1)
      .split('&')[0]
      .split('=')[1];
    history.push('/main');
    dispatch({ type: authConstants.LOGIN_SUCCEEDED, payload: token });
  } catch (err) {
    dispatch({ type: authConstants.LOGIN_FAILED });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: authConstants.LOGOUT });
  localStorage.removeItem('state');
  history.push('/');
};
