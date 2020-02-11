import Operations from '../../../core/classes/AppOperations';
import responseErrorCheck from '../../../core/helpers/responseErrorChecker';
import NavigationService from '../../../view/mobile/App/NavigationService';
import {SCREEN_NAMES} from '../../../view/mobile/navigations/screenNames';

class OrdersOperations extends Operations {
  constructor(ordersApiHandler){
    super();
    this.ordersApiHandler = ordersApiHandler;
  }

  async postOrder(formData){
    const response = await this.ordersApiHandler.postOrder(formData);
    alert('Success');
    return responseErrorCheck(response)
  }
}

export default OrdersOperations;

