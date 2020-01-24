import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import albumReducer from './albumReducer';
export default combineReducers({
  auth: authReducer,
  user: userReducer,
  album: albumReducer,
});
