import * as ApiHandlers from '../services/api'
import * as Controllers from '../controllers'
import * as Operations from '../services/operations';

const usersOperations = new Operations.UsersOperations(ApiHandlers.usersApiHandler);
const productsOperations = new Operations.ProductsOperations(ApiHandlers.productsApiHandler);
const ordersOperations = new Operations.OrdersOperations(ApiHandlers.ordersApiHandler);

const userController = new Controllers.UserController(usersOperations);
const productsController = new Controllers.ProductsController(productsOperations);
const ordersController = new Controllers.OrdersController(ordersOperations)

export { userController, productsController, ordersController }