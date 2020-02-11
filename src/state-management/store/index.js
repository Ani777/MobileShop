import { createStore, combineReducers, applyMiddleware } from 'redux';
import controllerMiddleware from '../middlewares/controllerMiddleware';
import userReducer from '../reducers/userReducer';
import productsReducer from '../reducers/productsReducer'
import config from '../../configs/config';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(controllerMiddleware(config))));
export default store;
