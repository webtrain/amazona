import axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstants';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from '../constants/orderConstants';

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payLoad: order });

  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.post('/api/orders', order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    dispatch({ type: ORDER_CREATE_SUCCESS, payLoad: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payLoad: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAILS_REQUEST, payLoad: orderId });
  const {
    userSignIn: { userInfo },
  } = getState();

  try {
    const { data } = await axios.get(`/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });

    dispatch({ type: ORDER_DETAILS_SUCCESS, payLoad: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    dispatch({ type: ORDER_DETAILS_FAIL, payLoad: message });
  }
};
