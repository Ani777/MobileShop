import Operations from '../../../core/classes/AppOperations';

class ProductsOperations extends Operations {
  constructor(productsApiHandler){
    super()
    this.productsApiHandler = productsApiHandler
  }

  async getProducts(){
    const response = await this.productsApiHandler.getProducts();

    console.log(response.result);
    return response.result
  }
}

export default ProductsOperations;