import axios from 'axios';
import { USER_SIGIN_FAIL, USER_SIGIN_SUCCESS, USER_SIGIN_REQUEST, USER_SIGNOUT } from '../constants/userConstants';

export const signIn = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGIN_REQUEST,
    payLoad: { email, password },
  });

  try {
    const { data } = await axios.post('/api/users/signin', { email, password });

    dispatch({
      type: USER_SIGIN_SUCCESS,
      payLoad: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_SIGIN_FAIL,
      payLoad: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');

  dispatch({ type: USER_SIGNOUT });
};
