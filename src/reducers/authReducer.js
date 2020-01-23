import authConstants from '../constants/authConstants';

const initState = { isLoading: false, authError: false, accessToken: '' };

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case authConstants.LOGIN_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        authError: false,
        accessToken: action.payload,
      };
    case authConstants.LOGIN_FAILED:
      return { ...state, isLoading: false, authError: true };
    case authConstants.LOGOUT:
      return { ...state, initState };
    default:
      return state;
  }
};
