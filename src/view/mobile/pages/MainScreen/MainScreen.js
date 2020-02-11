import React, { Component, Fragment } from 'react';
import {Text, View, FlatList, Button} from 'react-native'
import AsyncStorageHelper from '../../../../core/helpers/AsyncStorageHelper';
import ApiHandler from '../../../../core/classes/ApiHandler';
import {cntrlGetProducts, rxRemoveAllFromCart} from '../../../../state-management/actions/productsActions';
import {connect}from 'react-redux';
import Product from './Product/product';
import NavigationService from '../../App/NavigationService';
import {SCREEN_NAMES} from '../../navigations/screenNames';
import {cntrlLogOut} from '../../../../state-management/actions/userActions';
import { StyleSheet } from 'react-native'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'




class MainScreen extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.getProducts()
  }


_logOut =()=> {
  this.props.removeAllFromCart();
  this.props.logOut();

}

_goToCart =()=> {
    if(this.props.cartProducts.length){
      NavigationService.navigate(SCREEN_NAMES.CART)
    } else {
      alert('No items in cart')
    }
}

  // _logOut(){
  //   ApiHandler.token = '';
  //   AsyncStorageHelper.clear();
  // NavigationService.navigate(SCREEN_NAMES.LOGIN)
  // }

  render(){
    const { products, cartProducts } = this.props;

    return (
      <View style={styles.list}>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='To the Cart' onPress={this._goToCart}/>
          </View>
          <View style={styles.button}>
          <Button title='Log Out' onPress={this._logOut} color='#e34071' />
          </View>
        </View>
        <View style={styles.list} >
        <FlatList
          numColumns={2}
          extraData={cartProducts}
          columnWrapperStyle={styles.row}
          data={products.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item})=> (<Product data={item} cartItem={false}

          />)} />
      </View>


      </View>

    )
  }
}

const styles = StyleSheet.create({
  buttons: {
    width: '100%',
    // height :responsiveHeight(7),
    flexDirection: 'row',
    justifyContent: 'space-around',

    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(2),
  },
  list: {
    flex: 1
  },
  button: {
    width: responsiveWidth(40)
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'

  }
})

const mapStateToProps = state => {
  return {
    products: state.products.products,
    cartProducts: state.products.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: ()=> dispatch(cntrlGetProducts()),
    logOut: ()=> dispatch(cntrlLogOut()),
    removeAllFromCart: ()=> dispatch(rxRemoveAllFromCart())

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);