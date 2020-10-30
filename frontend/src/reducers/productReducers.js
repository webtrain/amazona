const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = require('../constants/productConstatns');

export const productListReducer = (state = { loading: true, products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payLoad };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payLoad };
    default:
      return state;
  }
};
