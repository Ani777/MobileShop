import MobileShopApiHandler from '../MobileShopApiHandler';

const END_POINTS = {
  prefix: 'Users',
  authenticate: 'authenticate',
  register: 'register',
}

class UsersApiHandler extends MobileShopApiHandler {
  constructor(prefix){
    super(prefix)
  }

  login(formData){
    return this.post(END_POINTS.authenticate, formData)
  }

  register(formData){
    return this.post(END_POINTS.register, formData)
  }

  getUsers(){
    return this.get()
  }

  getUser(id){
    return this.get(id)
  }

  deleteUser(id){
    return this.delete(id)
  }

}

const usersApiHandler = new UsersApiHandler(END_POINTS.prefix);
export default usersApiHandler;


