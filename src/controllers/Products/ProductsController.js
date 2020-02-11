import Controller from '../../core/classes/Controller';
import {cntrlGetProducts,
        rxGetProductsDone,
        rxGetProductsPending,
        rxGetProductsRejected } from '../../state-management/actions/productsActions';

class ProductsController extends Controller {
  constructor(productsOperation){
    super();
    this.productsOperation = productsOperation
  }

  async getProducts(store, action){
    try {
      store.dispatch(rxGetProductsPending());
      const response = await this.productsOperation.getProducts();
      store.dispatch(rxGetProductsDone(response))
    } catch(e){
      store.dispatch(rxGetProductsRejected(e.message))
    }
  }
}

export default ProductsController;