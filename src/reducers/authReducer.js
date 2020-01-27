import authConstants from '../constants/authConstants';

const initState = { isLoading: false, authError: false, isLoggedIn: false, accessToken: '' };

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return { ...state, isLoading: true, authError: false };
    case authConstants.LOGIN_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        authError: false,
        accessToken: action.payload,
      };
    case authConstants.LOGIN_FAILED:
      return { ...state, isLoading: false, authError: true };
    case authConstants.LOGOUT:
      return initState;
    default:
      return state;
  }
};
