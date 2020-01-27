import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import albumReducer from './albumReducer';
import artistReducer from './artistReducer';
export default combineReducers({
  auth: authReducer,
  user: userReducer,
  album: albumReducer,
  artist: artistReducer,
});
