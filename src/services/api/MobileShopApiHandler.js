import ApiHandler from  '../../core/classes/ApiHandler';
import { API } from '../../core/constants/urls';

class MobileShopApiHandler extends ApiHandler {
  constructor(prefix){
    super(API, prefix)
  }

  _checkResponse = response => {
    return response
  }

  get(endPoint){
    return super.get(`${this.domain}/${this.prefix}/${endPoint ? endPoint + '/' : ''}`).then(this._checkResponse.bind(this));
  }

  post(endPoint, formData = {}) {
    return super.post(`${this.domain}/${this.prefix}/${endPoint}`, formData).then(this._checkResponse.bind(this));
  }

  put(endPoint, formData) {
    return super.put(`${this.domain}/${this.prefix}`, formData).then(this._checkResponse.bind(this));
  }

  delete(endPoint) {
    return super.delete(`${this.domain}/${this.prefix}/${endPoint}`).then(this._checkResponse.bind(this));
  }
}

export default MobileShopApiHandler;
