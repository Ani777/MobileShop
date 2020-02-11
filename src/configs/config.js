import * as controllers from './controllerFactory';
import * as TYPES from '../core/constants/actionTypes'

const configs = {
  [TYPES.USERS_TYPES.CNTRL_REGISTER]: controllers.userController.register.bind(controllers.userController),
  [TYPES.USERS_TYPES.CNTRL_LOGIN]: controllers.userController.login.bind(controllers.userController),
  [TYPES.PRODUCTS_TYPES.CNTRL_GET_PRODUCTS] : controllers.productsController.getProducts.bind(controllers.productsController),
  [TYPES.ORDERS_TYPES.CNTRL_POST_ORDER] : controllers.ordersController.postOrder.bind(controllers.ordersController),
  [TYPES.USERS_TYPES.CNTRL_LOGOUT]: controllers.userController.logOut.bind(controllers.userController)
}

export default configs;