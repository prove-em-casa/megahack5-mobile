import React from 'react';
import { useCachedFetch } from 'react-cached-fetch';
import { View } from 'react-native';
import { Container, Header, HeaderText } from '../../styles/global';
import ShopContainer from './components/ShopContainer';

interface IShop {
  id: number;
  shop: string;
  open: string;
  close: string;
  where_is_located: string;
}

const ShopList = () => {
  const { data, isLoading } = useCachedFetch('/shop', { initialValue: [] });

  if (!data && isLoading) {
    return null;
  }

  return (
    <Container>
      <Header>
        <View />
        <HeaderText>ESCOLHA UMA LOJA</HeaderText>
        <View />
      </Header>

      {data ? (
        data.map((shop: IShop) => <ShopContainer key={shop.id} shop={shop} />)
      ) : (
        <View />
      )}
    </Container>
  );
};

export default ShopList;
