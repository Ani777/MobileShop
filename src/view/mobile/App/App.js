/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { RootStack } from '../navigations/navigation';
import { Provider } from 'react-redux';
import store from '../../../state-management/store';
import NavigationService from './NavigationService';
import LoginScreen from '../pages/LoginScreen/LoginScreen';
import RegistrationScreen from '../pages/RegistrationScreen/RegistrationScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        {/*<View style={styles.container}>*/}
          {/*<Text style={styles.welcome}>Welcome to React Native!</Text>*/}
          {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
          {/*<Text style={styles.instructions}>{instructions}</Text>*/}
          {/*<LoginScreen />*/}
          {/*<RegistrationScreen />*/}
          <RootStack
            ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
          />
        {/*</View>*/}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
