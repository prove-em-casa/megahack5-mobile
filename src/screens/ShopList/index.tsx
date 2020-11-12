import React from 'react';
import { useCachedFetch } from 'react-cached-fetch';
import { View, FlatList } from 'react-native';

import { ShopListContainer } from './styles';
import { Container, Header, HeaderText } from '../../styles/global';
import ShopContainer from './components/ShopContainer';

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

      <ShopListContainer>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: shop }: { item: IShop }) => (
            <ShopContainer key={shop.id} shop={shop} />
          )}
        />
      </ShopListContainer>
    </Container>
  );
};

export default ShopList;
