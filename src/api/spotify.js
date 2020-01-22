import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
  },
});

export const auth = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
  },
});
