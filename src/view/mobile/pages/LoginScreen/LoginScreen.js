import React, { Component, Fragment } from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import HEADERS from '../../../../core/constants/headers';
import JSONHelper from '../../../../core/helpers/JSONHelper';
import NavigationService from '../../App/NavigationService';
import {SCREEN_NAMES} from '../../navigations/screenNames';
import { connect } from 'react-redux';
import {cntrlLogin} from '../../../../state-management/actions/userActions';


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Ani',
      password: 'Ani2019'
    }
  }

  _login =()=> {
    const { username, password } = this.state;
    this.props.login({username, password})
  }




    render(){
      return (
        <View style={{justifyContent: 'center', alignItems: "center", flex: 1}}>
          <Text>Username</Text>
          <TextInput  value={this.state.username} onChangeText= {(username)=>this.setState({username})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>

          <Text>Password</Text><TextInput  value={this.state.password} secureTextEntry={true} onChangeText= {(password)=>this.setState({password})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Button title='SIGN IN' onPress={this._login}/>
          <Button title='REGISTER' onPress={()=>NavigationService.navigate(SCREEN_NAMES.REGISTRATION)}/>
        </View>
      )
    }

  }

const mapDispatchToProps = dispatch => {
  return {
    login: (state) => dispatch(cntrlLogin(state)),
  }
};

  export default connect(null, mapDispatchToProps)(LoginScreen);
