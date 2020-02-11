import MobileShopApiHandler from '../MobileShopApiHandler';

const END_POINTS = {
  prefix: 'Products'
}

class ProductsApiHandler extends MobileShopApiHandler {
  constructor(prefix){
    super(prefix)
  }

  getProducts(){
    return this.get()
  }

  getProduct(id){
    return this.get(id)
  }
}

const productsApiHandler = new ProductsApiHandler(END_POINTS.prefix);
export default productsApiHandler;