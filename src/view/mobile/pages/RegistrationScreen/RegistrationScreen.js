import React, { Component, Fragment } from 'react';
import {TextInput, View, Text, Button, ScrollView, Dimensions, KeyboardAvoidingView} from 'react-native';
import {cntrlRegister} from '../../../../state-management/actions/userActions';
import { connect } from 'react-redux';
import NavigationService from '../../App/NavigationService';
import {SCREEN_NAMES} from '../../navigations/screenNames';

const height = Dimensions.get('window')

class RegistrationScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      address: '',
      city: '',
      country: '',
      email: '',
      phone: '',
      postalCode: '',
      state: '',
      screenHeight: 0
    }
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({screenHeight: contentHeight})
  }

  _modelGenerator(){
    return {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      email: this.state.email,
      phone: this.state.phone,
      postalCode: this.state.postalCode,
      state: this.state.state
    }

  }

  _register=()=>{
    this.props.register(this._modelGenerator())
  }

  render(){
    const scrollEnabled = this.screenHeight > height;
    return (

      <KeyboardAvoidingView style={{flex: 1}}>

        <ScrollView
          style={{ flex: 1}}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}>
          <View style={{justifyContent: 'center', alignItems: "center", flex: 1}}>
          <Text>First Name</Text>
          <TextInput  value={this.state.firstName} onChangeText= {(firstName)=>this.setState({firstName})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>Last Name</Text>
          <TextInput  value={this.state.lastName} onChangeText= {(lastName)=>this.setState({lastName})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>Username</Text>
          <TextInput  value={this.state.username} onChangeText= {(username)=>this.setState({username})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>Password</Text>
          <TextInput  value={this.state.password} secureTextEntry={true} onChangeText= {(password)=>this.setState({password})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>Address</Text>
          <TextInput  value={this.state.address} onChangeText= {(address)=>this.setState({address})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>City</Text>
          <TextInput  value={this.state.city} onChangeText= {(city)=>this.setState({city})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>Country</Text>
          <TextInput  value={this.state.country} onChangeText= {(country)=>this.setState({country})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>Email</Text>
          <TextInput  value={this.state.email} onChangeText= {(email)=>this.setState({email})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>Phone</Text>
          <TextInput  value={this.state.phone} onChangeText= {(phone)=>this.setState({phone})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>Postal Code</Text>
          <TextInput  value={this.state.postalCode} onChangeText= {(postalCode)=>this.setState({postalCode})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Text>State</Text>
          <TextInput  value={this.state.state} onChangeText= {(state)=>this.setState({state})} style={{height: 36, width: 120, borderColor: 'gray', borderWidth: 1}}/>
          <Button title='SIGN UP' onPress={this._register}/>
          <Button title='LOGIN' onPress={()=> {NavigationService.navigate(SCREEN_NAMES.LOGIN)}}/>
          </View>
        </ScrollView>

      </KeyboardAvoidingView>


    )
  }
}

const mapDispatchToProps = dispatch => ({
    register: (state) => dispatch(cntrlRegister(state))
})

export default connect(null, mapDispatchToProps)(RegistrationScreen);