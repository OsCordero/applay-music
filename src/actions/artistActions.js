import artistConstants from 'constants/artistConstants';
import spotify from 'api/spotify';

export const fetchArtistData = id => async dispatch => {
  dispatch(fetchArtistDetail(id));
  dispatch(fetchArtistTopTracks(id));
  dispatch(fetchRelatedArtist(id));
};

export const fetchArtistDetail = id => async dispatch => {
  dispatch({ type: artistConstants.FETCH_ARTIST_DETAIL_REQUEST });

  try {
    const response = await spotify.get(`/artists/${id}`);
    dispatch({ type: artistConstants.FETCH_ARTIST_DETAIL_SUCCEEDED, payload: response.data });
  } catch (err) {
    dispatch({ type: artistConstants.FETCH_ARTIST_DETAIL_FAILED });
  }
};

export const fetchArtistTopTracks = id => async dispatch => {
  dispatch({ type: artistConstants.FETCH_ARTIST_TOP_TRACKS_REQUEST });

  try {
    const response = await spotify.get(`/artists/${id}/top-tracks?country=ES`);
    dispatch({
      type: artistConstants.FETCH_ARTIST_TOP_TRACKS_SUCCEEDED,
      payload: response.data.tracks,
    });
  } catch (err) {
    dispatch({ type: artistConstants.FETCH_ARTIST_TOP_TRACKS_FAILED });
  }
};

export const fetchRelatedArtist = id => async dispatch => {
  dispatch({ type: artistConstants.FETCH_RELATED_ARTISTS_REQUEST });

  try {
    const response = await spotify.get(`/artists/${id}/related-artists`);
    console.log(response.data);

    dispatch({
      type: artistConstants.FETCH_RELATED_ARTISTS_SUCCEEDED,
      payload: response.data.artists,
    });
  } catch (err) {
    dispatch({ type: artistConstants.FETCH_RELATED_ARTISTS_FAILED });
  }
};
