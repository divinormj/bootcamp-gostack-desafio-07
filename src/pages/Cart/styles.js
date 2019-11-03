import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 104px 15px 0px 15px;
`;

export const ListProducts = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const CartProduct = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetail = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;

export const ProductPrice = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 3px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  border-radius: 4px;
`;

export const ProductQuantity = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductQuantityButton = styled.TouchableOpacity``;

export const ProductQuantityText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  text-align: center;
  margin: 0 5px;
  padding: 6px;
`;

export const CartTotal = styled.View`
  margin-top: 30px;
`;

export const CartTotalLabel = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const CartTotalPrice = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const CartOrder = styled.View`
  background: ${colors.primary};
  border-radius: 4px;
  padding: 12px;
`;

export const CartOrderLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
