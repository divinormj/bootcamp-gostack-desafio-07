import styled from 'styled-components/native';

import colors from '../../styles/colors';
import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 30px;
  background: ${colors.dark};
`;

export const LogoContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: 18px;
  min-width: 20px;
  min-height: 20px;
  background: ${colors.primary};
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`;
