import API_METHODS from '../constants/apiMethods';
import HEADERS from '../constants/headers';
import { AUTH, BEARER } from '../constants/util';
import JSONHelper from '../helpers/JSONHelper';
import NavigationService from '../../view/mobile/App/NavigationService';
import { SCREEN_NAMES } from '../../view/mobile/navigations/screenNames';
import AsyncStorageHelper from '../helpers/AsyncStorageHelper';
/**
 * This is an abstract class API Handler
 * this class handles API calls
 * this class is a wrapper for all api methods
 */
class ApiHandler {

  // -- Static properties -- //

  static token = '';
  static refresh_token = '';

  // -- Constructor -- //

  constructor(domain, prefix, token = '') {
    this._domain = domain;
    this._prefix = prefix;
    this._token = token;
  }

  // -- Logic -- //

  /**
   * @name get
   * @desc global get request
   * @param url
   * @param options
   * @returns {Promise<Response>}
   */
  get(url = '', options) {
    return fetch(url, {
      method: API_METHODS.GET,
      headers: this._createHeaders()
    }).then(res => {
      if(res.status === 401) {
        AsyncStorageHelper.removeItem(AUTH).then(()=> {
          NavigationService.navigate(SCREEN_NAMES.LOGIN)
        });
      }
      return res.json()
    });
  }

  /**
   * @name post
   * @desc global post request
   * @param url
   * @param body
   * @returns {Promise<Response>}
   */
  post(url = '', body) {
    return fetch(url, {
      method: API_METHODS.POST,
      headers: this._createHeaders(),
      body: JSONHelper.stringify(body)
    }).then(res => res.json());
  }

  /**
   * @name put
   * @desc global put request
   * @param url
   * @param body
   * @returns {Promise<any>}
   */
  put(url = '', body) {
    return fetch(url, {
      method: API_METHODS.PUT,
      headers: this._createHeaders(),
      body: JSONHelper.stringify(body)
    }).then(res => res.json());
  }

  /**
   * @name delete
   * @desc global delete request
   * @param url
   * @returns {Promise<any>}
   */
  delete(url = '') {
    return fetch(url, {
      method: API_METHODS.DELETE,
      headers: this._createHeaders(),
    }).then(res => res.json());
  }

  /**
   * @name _createHeaders
   * @desc factory for creating headers
   * @return { * }
   * @private
   */
  _createHeaders = () => {
    if (ApiHandler.token) {
      return {
        [HEADERS.Authorization]: `${BEARER} ${ApiHandler.token}`,
        [HEADERS.ContentType]: HEADERS.ApplicationJson,
        [HEADERS.Accept]: HEADERS.ApplicationJson,
        [HEADERS.TimeZoneKey]: HEADERS.TimeZone,
      }
    }
    return {
      [HEADERS.ContentType]: HEADERS.ApplicationJson,
      [HEADERS.Accept]: HEADERS.ApplicationJson,
      [HEADERS.TimeZoneKey]: HEADERS.TimeZone,
    }
  };


  // -- Getters / Setters -- //


  get domain() {
    return this._domain;
  }

  set domain(value) {
    this._domain = value;
  }

  get prefix() {
    return this._prefix;
  }

  set prefix(value) {
    this._prefix = value;
  }

  get token() {
    return this._token;
  }

  set token(value) {
    this._token = value;
  }

}


export default ApiHandler;