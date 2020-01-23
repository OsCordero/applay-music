import userConstants from '../constants/userConstants';

const initState = { isLoading: false, user: {}, userError: false };

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.FETCH_USER_PROFILE_REQUEST:
      return { ...state, isLoading: true };
    case userConstants.FETCH_USER_PROFILE_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        userError: false,
        user: action.payload,
      };
    case userConstants.FETCH_USER_PROFILE_FAILED:
      return { ...state, isLoading: false, userError: true };

    default:
      return state;
  }
};
