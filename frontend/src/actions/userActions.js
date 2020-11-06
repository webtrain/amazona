import axios from 'axios';
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNOUT,
} from '../constants/userConstants';

export const signIn = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payLoad: { email, password },
  });

  try {
    const { data } = await axios.post('/api/users/signin', { email, password });

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payLoad: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payLoad: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payLoad: { name, email, password },
  });

  try {
    const { data } = await axios.post('/api/users/register', { name, email, password });

    dispatch({ type: USER_REGISTER_SUCCESS, payLoad: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payLoad: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payLoad: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');

  dispatch({ type: USER_SIGNOUT });
};
