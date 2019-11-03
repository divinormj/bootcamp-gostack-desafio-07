import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartProducts,
  CartProduct,
  ProductInfo,
  ProductImage,
  ProductDetail,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductAmount,
  ProductQuantity,
  ProductQuantityButton,
  ProductQuantityText,
  CartTotal,
  CartTotalLabel,
  CartTotalPrice,
  CartOrder,
  CartOrderLabel,
} from './styles';

function Cart({ products, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <CartProducts>
        {products.map(product => (
          <CartProduct key={product.id}>
            <ProductInfo>
              <ProductImage source={{ uri: product.image }} />
              <ProductDetail>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDetail>
              <ProductDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" color={colors.primary} size={20} />
              </ProductDelete>
            </ProductInfo>
            <ProductAmount>
              <ProductQuantity>
                <ProductQuantityButton onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    color={colors.primary}
                    size={20}
                  />
                </ProductQuantityButton>
                <ProductQuantityText>{product.amount}</ProductQuantityText>
                <ProductQuantityButton onPress={() => increment(product)}>
                  <Icon
                    name="add-circle-outline"
                    color={colors.primary}
                    size={20}
                  />
                </ProductQuantityButton>
              </ProductQuantity>
              <ProductPrice>{product.subtotal}</ProductPrice>
            </ProductAmount>
          </CartProduct>
        ))}
      </CartProducts>
      <CartTotal>
        <CartTotalLabel>TOTAL</CartTotalLabel>
        <CartTotalPrice>{total}</CartTotalPrice>
      </CartTotal>
      <CartOrder>
        <CartOrderLabel>FINALIZAR PEDIDO</CartOrderLabel>
      </CartOrder>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
