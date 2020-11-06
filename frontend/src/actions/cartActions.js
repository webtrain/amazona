import axios from 'axios';
import { ADD_CART_ITEM, REMOVE_CART_ITEM, CART_SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);

  dispatch({
    type: ADD_CART_ITEM,
    payLoad: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payLoad: productId,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payLoad: data})
  localStorage.setItem('shippingAddress', JSON.stringify(data))
};