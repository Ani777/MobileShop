import { combineReducers } from 'redux';
import createAsyncReducer from '../../core/helpers/createAsyncReducer';
import createReducer from '../../core/helpers/createReducer';
import { PRODUCTS_TYPES } from '../../core/constants/actionTypes';


// const addToCart = (store, action) => {
//   return {
//     ...store,
//     cart: action.payload
//   }
// };

const addItemToCart = (state, action) => {
  return [...state, action.payload]
};

const removeItemFromCart = (state, action) => {
  return state.filter(item =>
    item.id !== action.payload)
};

const removeAllFromCart =()=>{
  return []
};

const changeQuantity = (state, action) => {
  return state.map(item => item.id !== action.payload.id ? {...item} : {...item, quantity: action.payload.quantity})
};

const productsReducer = combineReducers({
  products: createAsyncReducer(PRODUCTS_TYPES.RX_GET_PRODUCTS, []),
  // addToCart: createReducer([], {
  //   [PRODUCTS_TYPES.RX_ADD_TO_CART]: addToCart})
  cart: createReducer([], {
    [PRODUCTS_TYPES.RX_ADD_TO_CART]: addItemToCart,
    [PRODUCTS_TYPES.RX_REMOVE_FROM_CART]: removeItemFromCart,
    [PRODUCTS_TYPES.RX_REMOVE_All_FROM_CART]: removeAllFromCart,
    [PRODUCTS_TYPES.RX_CHANGE_QUANTITY]: changeQuantity
  })
});

export default productsReducer;
