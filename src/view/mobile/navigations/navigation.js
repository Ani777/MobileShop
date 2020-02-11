import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { SCREEN_NAMES } from './screenNames';
import { LoginScreen, RegistrationScreen,  MainScreen, CartScreen} from '../pages/'
// import SplashScreen from '../pages/SplashScreen/SplashScreen';
// import BagScreen from '../pages/BagScreen/BagScreen';





export const RootStack = createAppContainer(createStackNavigator({
    [SCREEN_NAMES.LOGIN]: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    [SCREEN_NAMES.REGISTRATION]: {
      screen: RegistrationScreen,
      navigationOptions: {
        header: null,
      },
    },

    [SCREEN_NAMES.MAIN]: {
      screen: MainScreen,
      navigationOptions: {
        header: null,
      },
    },

    [SCREEN_NAMES.CART]: {
      screen: CartScreen,
      navigationOptions: {
        header: null,
      },
    },

  },
  {
    initialRouteName: SCREEN_NAMES.LOGIN
  }
));
