import authConstants from '../constants/userConstants';
import spotify from '../apis/reqres';
import { history } from './../helpers/history';

export const login = (email, password) => async dispatch => {
  dispatch({ type: authConstants.LOGIN_REQUEST });

  try {
    const response = await spotify.post('/login', { email, password });
    dispatch({ type: authConstants.LOGIN_SUCCEEDED, payload: response.data });
    localStorage.setItem('authToken', JSON.stringify(response.data.token));
    history.push('/');
  } catch (err) {
    dispatch({ type: authConstants.LOGIN_FAILED });
  }
};
