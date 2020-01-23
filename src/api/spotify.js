import axios from 'axios';
import store from 'helpers/store';
export default axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_BASE_URL,
  headers: {
    Authorization: 'Bearer ' + store.getState().auth.accessToken,
  },
});
