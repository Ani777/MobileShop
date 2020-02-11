import React, { Component, Fragment } from 'react';
import {Text, View, FlatList, Button} from 'react-native'
import AsyncStorageHelper from '../../../../core/helpers/AsyncStorageHelper';
import ApiHandler from '../../../../core/classes/ApiHandler';
import {rxRemoveAllFromCart} from '../../../../state-management/actions/productsActions';
import {connect}from 'react-redux';
import Product from '../MainScreen/Product/product';
import NavigationService from '../../App/NavigationService';
import {SCREEN_NAMES} from '../../navigations/screenNames';
import {cntrlPostOrder} from '../../../../state-management/actions/ordersActions';
import { StyleSheet } from 'react-native'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import {cntrlLogOut} from '../../../../state-management/actions/userActions';




class CartScreen extends Component {
  constructor(props){
    super(props);

  }

  _formOrder =()=> {
    const { products } = this.props;
    return products.map((product) => {
      return {
        productId: product.id,
        quantity: product.quantity
      }
    })
  }

  _postOrder=()=>{
    const orderProducts = this._formOrder();
    if(orderProducts.length) {
      this.props.postOrder({orderProducts});


    }else{
      alert('No Item Selected');
    }
  }

  _formConfirmMessage =() => {
    const { products } = this.props;
    const totalPrice = products.reduce((acc, currentValue) => {
      return acc + currentValue.quantity * currentValue.price
    }, 0)
    const confirmMessage =` You're going to buy ${products.length} ${products.length === 1? 'item' : 'items'} with total price of ${totalPrice}.`;
    return confirmMessage;
  }

  _logOut =()=> {
    this.props.removeAllFromCart();
    this.props.logOut()
  }





  render(){
    const { products } = this.props;

    return (
      <View style={styles.list}>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button   title='To the Main Page' onPress={()=>NavigationService.navigate(SCREEN_NAMES.MAIN)}/>
          </View>
          <View style={styles.button}>
            <Button title='Log Out' onPress={this._logOut} color='#e34071' />
          </View>
        </View>

        <View style={styles.list}>
          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.row}
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({item})=> (<Product data={item} cartItem={true} quantity={item.quantity} />)}/>
        </View>
        <Text style={styles.confirmText}>{this._formConfirmMessage()}</Text>
        <Button   title='Confirm Order' onPress={this._postOrder}/>



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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  button: {
    width: responsiveWidth(40)
  },

  confirmText: {
    height: responsiveHeight(4),
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    products: state.products.cart
  }

}

const mapDispatchToProps = dispatch => {
  return {
    postOrder: (order) =>dispatch(cntrlPostOrder(order)),
    logOut: () => dispatch(cntrlLogOut()),
    removeAllFromCart: ()=> dispatch(rxRemoveAllFromCart())

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);