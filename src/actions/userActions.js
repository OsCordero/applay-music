import userConstants from 'constants/userConstants';
import { history } from 'helpers/history';
import store from 'helpers/store';

import spotify from 'api/spotify';

export const fetchUserProfile = () => async dispatch => {
  dispatch({ type: userConstants.FETCH_USER_PROFILE_REQUEST });

  try {
    const response = await spotify.get('/me');
    dispatch({
      type: userConstants.FETCH_USER_PROFILE_SUCCEEDED,
      payload: response.data,
    });
  } catch (err) {
    dispatch({ type: userConstants.FETCH_USER_PROFILE_FAILED });
  }
};
