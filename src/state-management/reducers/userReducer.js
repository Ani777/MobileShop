import { combineReducers } from 'redux';
import createAsyncReducer from '../../core/helpers/createAsyncReducer';
import { USERS_TYPES } from '../../core/constants/actionTypes';


const userReducer = combineReducers({
  registerReducer: createAsyncReducer(USERS_TYPES.RX_REGISTER, {})

})

export default userReducer;