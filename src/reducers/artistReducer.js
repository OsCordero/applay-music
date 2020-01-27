import artistConstants from '../constants/artistConstants';

const initState = {
  isLoading: false,
  artist: {},
  topTracks: [],
  relatedArtists: [],
  artistError: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case artistConstants.FETCH_ARTIST_DETAIL_REQUEST:
      return { ...state, isLoading: true, artistError: false };
    case artistConstants.FETCH_ARTIST_DETAIL_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        artistError: false,
        artist: action.payload,
      };
    case artistConstants.FETCH_ARTIST_DETAIL_FAILED:
      return { ...state, isLoading: false, artistError: true };
    case artistConstants.FETCH_ARTIST_TOP_TRACKS_REQUEST:
      return { ...state, isLoading: true, artistError: false };
    case artistConstants.FETCH_ARTIST_TOP_TRACKS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        artistError: false,
        topTracks: action.payload,
      };
    case artistConstants.FETCH_ARTIST_TOP_TRACKS_FAILED:
      return { ...state, isLoading: false, artistError: true };
    case artistConstants.FETCH_RELATED_ARTISTS_REQUEST:
      return { ...state, isLoading: true, artistError: false };
    case artistConstants.FETCH_RELATED_ARTISTS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        artistError: false,
        relatedArtists: action.payload,
      };
    case artistConstants.FETCH_RELATED_ARTISTS_FAILED:
      return { ...state, isLoading: false, artistError: true };
    default:
      return state;
  }
};
