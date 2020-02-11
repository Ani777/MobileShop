import Controller from '../../core/classes/Controller';
import {cntrlPostOrder} from '../../state-management/actions/ordersActions';

class OrdersController extends Controller {
  constructor(ordersOperations) {
    super();
    this.ordersOperations = ordersOperations
  }

  async postOrder(store, action) {
    try {
      return await this.ordersOperations.postOrder(action.payload)
    } catch (e) {
      alert(e.message)
    }
  }
}

export default OrdersController
