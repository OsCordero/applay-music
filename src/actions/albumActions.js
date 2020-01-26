import albumConstants from 'constants/albumConstants';
import spotify from 'api/spotify';
import store from 'helpers/store';
import { history } from 'helpers/history';

export const fetchUserAlbums = offset => async dispatch => {
  dispatch({ type: albumConstants.FETCH_ALBUMS_REQUEST });

  try {
    const response = await spotify.get(`/me/albums?limit=4&offset=${offset}`);
    dispatch({
      type: albumConstants.FETCH_ALBUMS_SUCCEEDED,
      payload: { albumList: response.data.items, totalAlbums: response.data.total },
    });
  } catch (err) {
    dispatch({ type: albumConstants.FETCH_ALBUMS_FAILED });
  }
};

export const fetchAlbumDetail = () => async dispatch => {
  dispatch({ type: albumConstants.FETCH_ALBUMS_REQUEST });

  try {
    const response = await spotify.get(`/me/albums`);
    dispatch({ type: albumConstants.FETCH_ALBUMS_SUCCEEDED, payload: response.data.items });
  } catch (err) {
    dispatch({ type: albumConstants.FETCH_ALBUMS_FAILED });
  }
};
