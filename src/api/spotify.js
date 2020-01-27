import axios from 'axios';
import store from 'helpers/store';
import { logout } from 'actions/authActions';
const spotify = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_BASE_URL,
  headers: {
    Authorization: `Bearer ${store.getState().auth.accessToken}`,
  },
});

spotify.interceptors.response.use(undefined, function(err) {
  if (err.response.status === 400 && err.config && !err.config.__isRetryRequest) {
    err.config.__isRetryRequest = true;
    return axios({
      ...err.config,
      headers: {
        Authorization: `Bearer ${store.getState().auth.accessToken}`,
      },
    });
  }

  if (err.response.status === 401) {
    localStorage.removeItem('state');
    store.dispatch(logout());
    return err;
  }
});

export default spotify;
