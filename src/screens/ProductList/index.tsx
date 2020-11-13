import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/stack';
import { useCachedFetch } from 'react-cached-fetch';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome5';

import { Container, Header, HeaderText } from '../../styles/global';
import ProductContainer from './components/ProductContainer';
import { InputBlock, SearchInput } from './styles';
import colors from '../../styles/colors';
import { StackNavigatorParamList } from '../../routes/StackNavigator';

const ProductList = () => {
  const { params } = useRoute<
    RouteProp<StackNavigatorParamList, 'ProductList'>
  >();

  const { goBack, navigate } = useNavigation();

  const shop = params ? params.shop : null;

  const { data: products, isLoading } = useCachedFetch(
    `/products?shop_id=${shop ? shop.id : 0}`,
    {
      initialValue: [],
      dependencies: [!!shop, !!shop.id],
    },
  );

  if (!products && isLoading) {
    return null;
  }

  return (
    <Container>
      <InputBlock>
        <SearchInput placeholder="O que você procura?" />
        <Icon
          style={{
            position: 'absolute',
            left: 10,
          }}
          name="search-outline"
          size={22}
          color={colors.text_gray}
        />
      </InputBlock>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item: product }: { item: IProduct }) => (
          <ProductContainer product={product} />
        )}
      />
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText>{shop.name.toUpperCase()}</HeaderText>
        <TouchableOpacity onPress={() => navigate('ShopBag')}>
          <IconF name="shopping-cart" size={22} color="#fff" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default ProductList;
