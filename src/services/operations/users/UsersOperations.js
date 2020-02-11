import Operations from '../../../core/classes/AppOperations';
import NavigationService from '../../../view/mobile/App/NavigationService';
import { SCREEN_NAMES } from '../../../view/mobile/navigations/screenNames';
import usersApiHandler from '../../api/users/UsersApiHandler';
import AsyncStorageHelper from '../../../core/helpers/AsyncStorageHelper';
import ApiHandler from '../../../core/classes/ApiHandler';
import {TOKEN} from '../../../core/constants/util';

class UsersOperations extends Operations {
  constructor(usersApiHandler){
    super();
    this.usersApiHandler = usersApiHandler
  }

  async register(formData){
    const response = await this.usersApiHandler.register(formData);
    if(response.status === 1){
      NavigationService.navigate(SCREEN_NAMES.LOGIN)
      // alert('success')
    } else {
      alert(response.errorMessage)
    }
    return response
  }

  async login (formData) {
    const response = await this.usersApiHandler.login(formData);
    if (response.result && response.result.token) {
      AsyncStorageHelper.setItem(TOKEN, response.result.token)
      ApiHandler.token = response.result.token;
      NavigationService.navigate(SCREEN_NAMES.MAIN)
      // alert('Success')
      return response.result
      // alert('Success')
    } else {
      alert('invalid username or password')
    }
  }

  logOut(){

      ApiHandler.token = '';
      AsyncStorageHelper.clear();
   NavigationService.navigate(SCREEN_NAMES.LOGIN)

  }

}

export default UsersOperations;

