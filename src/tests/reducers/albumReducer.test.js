import albumReducer from 'reducers/albumReducer';
import albums from 'tests/fixtures/albums';
const initState = {
  isLoading: false,
  albumList: [],
  selectedAlbum: {},
  albumError: false,
  totalAlbums: 0,
};

test('should set default state on undefined action', () => {
  const state = albumReducer(undefined, { type: 'undefined_action' });
  expect(state).toEqual(initState);
});

test('should set loading to true on fetch albums request', () => {
  const state = albumReducer(undefined, { type: 'FETCH_ALBUMS_REQUEST' });
  expect(state).toEqual({ ...initState, isLoading: true });
});

test('should set albums list on fetch albums succeeded', () => {
  const state = albumReducer(undefined, {
    type: 'FETCH_ALBUMS_SUCCEEDED',
    payload: { albumList: albums, totalAlbums: 7 },
  });
  expect(state).toEqual({ ...initState, albumList: albums, totalAlbums: 7 });
});

test('should set error to true on fetch albums failed', () => {
  const state = albumReducer(undefined, { type: 'FETCH_ALBUMS_FAILED' });
  expect(state).toEqual({ ...initState, albumError: true });
});
