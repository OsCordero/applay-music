import albumConstants from 'constants/albumConstants';
import spotify from 'api/spotify';
import store from 'helpers/store';
import { history } from 'helpers/history';

export const fetchUserAlbums = () => async dispatch => {
  dispatch({ type: albumConstants.FETCH_ALBUMS_REQUEST });

  try {
    const response = await spotify.get('/me/albums');
    dispatch({ type: albumConstants.FETCH_ALBUMS_SUCCEEDED, payload: response.data.items });
  } catch (err) {
    dispatch({ type: albumConstants.FETCH_ALBUMS_FAILED });
  }
};

export const fetchAlbumDetail = () => async dispatch => {
  dispatch({ type: albumConstants.FETCH_ALBUMS_REQUEST });

  try {
    const response = await spotify.get('/me/albums');
    dispatch({ type: albumConstants.FETCH_ALBUMS_SUCCEEDED, payload: response.data.items });
  } catch (err) {
    dispatch({ type: albumConstants.FETCH_ALBUMS_FAILED });
  }
};
