import Controller from '../../core/classes/Controller';
import {rxRegisterDone, rxRegisterPending} from '../../state-management/actions/userActions';

class UserController extends Controller {
  constructor(usersOperations){
    super();
    this.usersOperations = usersOperations
  }

  async register (store, action){
    try {
      store.dispatch(rxRegisterPending());
      const response = await this.usersOperations.register(action.payload);
      store.dispatch(rxRegisterDone(response))
    } catch (e) {
      alert(e.message)
    }
  }

  async login (store, action) {
    return await this.usersOperations.login(action.payload)
  }

  logOut(){
   this.usersOperations.logOut()
  }

}

export default UserController;