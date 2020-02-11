import React, {Component} from 'react'
import { View, Image, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import {connect} from 'react-redux';
import {rxAddToCart, rxRemoveFromCart, rxChangeQuantity} from '../../../../../state-management/actions/productsActions';
import { StyleSheet } from 'react-native'


class Product extends Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: 0,
      addedToCart: false,
      imageExists: true,
      loading: true
    }
  }

  _onLoadEnd = () => {
    this.setState({
      loading: false
    })}

  _orderGenerator(){
    const { data } = this.props;
    const { quantity } = this.state;
    return {
      ...data,
      quantity
    }

  }

  _addToCart = () => {
    // alert('added to cart')
    if(this.state.quantity > 0 &&
       this.state.quantity[0] > 0&&
      !this.state.addedToCart &&
       Number.isInteger(Number(this.state.quantity))) {
      this.props.addToCart(this._orderGenerator());
      this.setState({addedToCart: true})
    } else {
      alert('Please, enter correct value')
    }
  }

  _removeFromCart = () => {
    this.props.removeFromCart(this.props.data.id);
    this.setState({addedToCart: false,
    quantity: 0 })
  }

  _changeQuantity =()=> {
    const { id, name } = this.props.data;
    const { quantity } = this.state;
    if(quantity === '0'){
      this._removeFromCart()
    }else if(quantity > 0 &&
     Number.isInteger(Number(quantity))) {
      this.props.changeQuantity({
        id,
        quantity
      });
      alert(`You have changed quantity of ${name} to ${quantity}`)
    } else {
      alert('Please, enter correct value')
    }
  }

  render() {
    const { data, cartItem } = this.props;
    const { addedToCart, imageExists } = this.state

    return (
      <View style={{paddingBottom: responsiveHeight(5)}} >
        <View>
          <Image

            source={imageExists? {uri: data.url} :require('../../../../../../images/shoppingCart.jpg') }
            onError={({ nativeEvent: {error} }) => this.setState({imageExists: false})}
            onLoadEnd={this._onLoadEnd}
            style={{width: responsiveWidth(40), height: responsiveHeight(15), resizeMode: 'contain'}}
          />
          <ActivityIndicator
            style={styles.activityIndicator}
            size='large'
            animating={this.state.loading}
          />
          <View >
            <Text style={styles.boldText}>{data.name}</Text>

            <Text style={styles.smallText}>Price: {data.price}</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.smallText}>Quantity </Text>
              {!cartItem ? <TextInput value={`${this.state.quantity}`}
                                      style={styles.input}
                                      onChangeText= {(quantity)=>this.setState({quantity})}
                                      keyboardType={'numeric'}
                                      type='number'/> : <Text>{this.props.quantity}</Text>}
            </View>
          </View>
            {cartItem && <Text style={styles.mediumText}>Total: {data.price * this.props.quantity}</Text>}


          {!addedToCart && !cartItem &&  <View style={styles.button}><Button  title={'Add To Cart'} onPress={this._addToCart}/></View>}
          {addedToCart && !cartItem && <View style={styles.button}><Button title={'Remove'} onPress={this._removeFromCart}/></View>}
          {addedToCart && !cartItem &&  <View style={styles.button}><Button title={'Change'} onPress={this._changeQuantity}/></View> }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: responsiveHeight(0.5)
  },
  boldText: {
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: '#1b1b1b',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mediumText: {
    color: '#5d5d5d',
    fontSize: 14,
    fontWeight: 'bold'
  },
  smallText: {
    color: '#a2a7a3',
    fontSize: 13
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(1),
  },
  input: {
    borderColor: '#d4d9d5',
    borderWidth: 1 ,
    borderRadius: 3,
    height: responsiveHeight(4),
    width: responsiveWidth(10),
    padding: 0,
    textAlign: 'center',
    marginTop: responsiveWidth(1),
    marginBottom: responsiveWidth(1),
  },
  activityIndicator: {
    position: 'absolute',
    left: '35%',
    // right: 0,
    top: '15%',
    // bottom: 20,
  }
})



const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product) => dispatch(rxAddToCart(product)),
    removeFromCart:(id) => dispatch(rxRemoveFromCart(id)),
    changeQuantity: (dataObj) => dispatch(rxChangeQuantity(dataObj))
  }
};

export default connect(null, mapDispatchToProps)(Product);




