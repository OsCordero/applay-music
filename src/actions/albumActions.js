import albumConstants from 'constants/albumConstants';
import spotify from 'api/spotify';

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

export const fetchAlbumDetail = id => async dispatch => {
  dispatch({ type: albumConstants.FETCH_ALBUM_DETAIL_REQUEST });

  try {
    const response = await spotify.get(`/albums/${id}`);
    dispatch({
      type: albumConstants.FETCH_ALBUM_DETAIL_SUCCEEDED,
      payload: response.data,
    });
  } catch (err) {
    dispatch({ type: albumConstants.FETCH_ALBUM_DETAIL_FAILED });
  }
};
