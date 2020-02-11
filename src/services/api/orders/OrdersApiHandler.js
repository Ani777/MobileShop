import MobileShopApiHandler from '../MobileShopApiHandler';

const END_POINTS = {
  prefix: 'Orders'
}

class OrdersApiHandler extends MobileShopApiHandler {
  constructor(prefix){
    super(prefix)
  }

  postOrder(formData) {
    return this.post('', formData)
  }
}

const ordersApiHandler = new OrdersApiHandler(END_POINTS.prefix);
export default ordersApiHandler;
