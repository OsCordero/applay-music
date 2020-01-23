import appConstants from 'constants/appConstants';
import spotify from 'api/spotify';
import store from 'helpers/store';
import { history } from 'helpers/history';

export const fetchUserProfile = () => async dispatch => {
  dispatch({ type: appConstants.FETCH_USER_PROFILE_REQUEST });

  try {
    const response = await spotify.get('/me');
    console.log(response.data);

    dispatch({
      type: appConstants.FETCH_USER_PROFILE_SUCCEEDED,
      payload: response.data,
    });
  } catch (err) {
    dispatch({ type: appConstants.FETCH_USER_PROFILE_FAILED });
  }
};
