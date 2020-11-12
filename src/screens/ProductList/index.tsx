import React from 'react';
import { FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/stack';
import { useCachedFetch } from 'react-cached-fetch';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container } from '../../styles/global';
import ProductContainer from './components/ProductContainer';
import { InputBlock, SearchInput } from './styles';
import colors from '../../styles/colors';
import { StackNavigatorParamList } from '../../routes/StackNavigator';

const ProductList = () => {
  const { params } = useRoute<
    RouteProp<StackNavigatorParamList, 'ProductList'>
  >();
  const navigation = useNavigation();

  const shop = params ? params.shop : null;

  const { data: products, isLoading } = useCachedFetch(
    `/products?shop_id=${shop ? shop.id : 0}`,
    {
      initialValue: {},
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
    </Container>
  );
};

export default ProductList;
