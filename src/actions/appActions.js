import authConstants from 'constants/authConstants';
import spotify from 'api/spotify';

import { history } from 'helpers/history';

export const getUserProfile = hash => async dispatch => {
  dispatch({ type: authConstants.LOGIN_REQUEST });
  try {
    const token = hash
      .substr(1)
      .split('&')[0]
      .split('=')[1];
    localStorage.setItem('authToken', token);
    history.push('/main');
    dispatch({ type: authConstants.LOGIN_SUCCEEDED, payload: token });
  } catch (err) {
    dispatch({ type: authConstants.LOGIN_FAILED });
  }
};
