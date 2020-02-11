import { PRODUCTS_TYPES } from '../../core/constants/actionTypes';

export const cntrlGetProducts = payload => {
  return{
    type: PRODUCTS_TYPES.CNTRL_GET_PRODUCTS,
    payload
  }
};


export const rxGetProductsPending = payload => {
  return{
    type: PRODUCTS_TYPES.RX_GET_PRODUCTS_PENDING,
    payload
  }
};

export const rxGetProductsDone = payload => {
  return{
    type: PRODUCTS_TYPES.RX_GET_PRODUCTS_DONE,
    payload
  }
};

export const rxGetProductsRejected = payload => {
  return{
    type: PRODUCTS_TYPES.RX_GET_PRODUCTS_REJECTED,
    payload
  }
};

export const rxAddToCart = payload => {
  return{
    type: PRODUCTS_TYPES.RX_ADD_TO_CART,
    payload
  }
};

export const rxRemoveFromCart = payload => {
  return{
    type: PRODUCTS_TYPES.RX_REMOVE_FROM_CART,
    payload
  }
};

export const rxRemoveAllFromCart = payload => {
  return{
    type: PRODUCTS_TYPES.RX_REMOVE_All_FROM_CART,
    payload
  }
};

export const rxChangeQuantity = payload => {
  return{
    type: PRODUCTS_TYPES.RX_CHANGE_QUANTITY,
    payload
  }
};