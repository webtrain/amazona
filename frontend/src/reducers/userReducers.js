import { USER_SIGIN_FAIL, USER_SIGIN_REQUEST, USER_SIGNOUT, USER_SIGIN_SUCCESS } from '../constants/userConstants';

export const userSignInReducer = (state = [], action) => {
  switch (action.type) {
    case USER_SIGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_SIGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payLoad,
      };
    case USER_SIGIN_FAIL:
      return {
        loading: false,
        error: action.payLoad,
      };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
