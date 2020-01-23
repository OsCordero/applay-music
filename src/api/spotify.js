import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_BASE_URL,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
  },
});
