import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, HeaderText } from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native';
import ProductContainer from './components/ProductContainer';
import { InputBlock, SearchInput } from './styles';
import colors from '../../styles/colors';
import { useCachedFetch } from 'react-cached-fetch';

// import { Container } from './styles';

interface IProduct {
  id: string;
  productName: string;
  url: string;
  Price: number;
  Rating: number;
  P: boolean;
  M: boolean;
  G: boolean;
  GG: boolean;
}

const ProductList = () => {
  const { data, isLoading } = useCachedFetch(`/products?shop_id=${1}`, {
    initialValue: {},
  });
  console.log(data);

  if (!data && isLoading) {
    console.log(data);
    return null;
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText>NOME DA LOJA</HeaderText>
        <TouchableOpacity>
          <Icon name="menu-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </Header>
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
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <ProductContainer product={item} />}
      />
    </Container>
  );
};

export default ProductList;
