/** @format */

import {AppRegistry} from 'react-native';
import App from './src/view/mobile/App/App';
import {name as appName} from './app.json';
const excecute = () => {
  /**
   * Debugger for XMLHttpRequest config
   * @type {any}
   */
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
};
excecute()
AppRegistry.registerComponent(appName, () => App);
