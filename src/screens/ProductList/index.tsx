import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, HeaderText } from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native';
import ProductContainer from './components/ProductContainer';
import { InputBlock, SearchInput } from './styles';
import colors from '../../styles/colors';

// import { Container } from './styles';

const ProductList = () => {
  const data = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
  ];

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
        renderItem={() => <ProductContainer />}
      />
    </Container>
  );
};

export default ProductList;
