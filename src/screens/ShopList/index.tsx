import React from 'react';
import { useCachedFetch } from 'react-cached-fetch';
import { View, FlatList, TouchableOpacity } from 'react-native';

import { ShopListContainer } from './styles';
import { Container, Header, HeaderText } from '../../styles/global';
import ShopContainer from './components/ShopContainer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const ShopList = () => {
  const { data, isLoading } = useCachedFetch('/shop', { initialValue: [] });
  const { navigate } = useNavigation();

  if (!data && isLoading) {
    return null;
  }

  return (
    <Container>
      <Header>
        <View />
        <HeaderText>ESCOLHA UMA LOJA</HeaderText>
        <TouchableOpacity onPress={() => navigate('ShopBag')}>
          <Icon name="shopping-cart" size={22} color="#fff" />
        </TouchableOpacity>
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
