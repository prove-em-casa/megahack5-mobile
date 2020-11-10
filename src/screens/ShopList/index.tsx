import React from 'react';
import { View } from 'react-native';
// import { View } from 'react-native';
import { Container, Header, HeaderText } from '../../styles/global';
import ShopContainer from './components/ShopContainer';

const ShopList = () => {
  return (
    <Container>
      <Header>
        <View />
        <HeaderText>ESCOLHA UMA LOJA</HeaderText>
        <View />
      </Header>
      <ShopContainer />
      <ShopContainer />
      <ShopContainer />
      <ShopContainer />
    </Container>
  );
};

export default ShopList;
