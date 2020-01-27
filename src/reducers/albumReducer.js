import albumConstants from '../constants/albumConstants';

const initState = {
  isLoading: false,
  albumList: [],
  selectedAlbum: {},
  albumError: false,
  totalAlbums: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case albumConstants.FETCH_ALBUMS_REQUEST:
      return { ...state, isLoading: true, albumError: false };
    case albumConstants.FETCH_ALBUMS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        albumError: false,
        albumList: action.payload.albumList,
        totalAlbums: action.payload.totalAlbums,
      };
    case albumConstants.FETCH_ALBUMS_FAILED:
      return { ...state, isLoading: false, albumError: true };
    case albumConstants.FETCH_ALBUM_DETAIL_REQUEST:
      return { ...state, isLoading: true, albumError: false };
    case albumConstants.FETCH_ALBUM_DETAIL_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        albumError: false,
        selectedAlbum: action.payload,
      };
    case albumConstants.FETCH_ALBUM_DETAIL_FAILED:
      return { ...state, isLoading: false, albumError: true };
    default:
      return state;
  }
};
