import {ORDERS_TYPES} from '../../core/constants/actionTypes';

export const cntrlPostOrder = payload => {
  return{
    type: ORDERS_TYPES.CNTRL_POST_ORDER,
    payload
  }
};