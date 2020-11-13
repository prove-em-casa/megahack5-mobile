import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { StackNavigatorParamList } from '../../routes/StackNavigator';
import {
  Container,
  DefaultButton,
  DefaultButtonText,
  BodyText,
  Header,
  HeaderText,
} from '../../styles/global';
import {
  AvailableText,
  DetailsContainer,
  PriceText,
  SizeBlock,
  SizesContainer,
} from './styles';
import { RootState } from '../../store/store';
import {
  addProductToShopBag,
  removeProductFromShopBag,
} from '../../store/ducks/shopBag';

const ProductDetails = () => {
  const { params } = useRoute<
    RouteProp<StackNavigatorParamList, 'ProductDetails'>
  >();

  const { goBack, navigate } = useNavigation();

  const { products } = useSelector(({ shopBag }: RootState) => shopBag);
  const dispatch = useDispatch();

  if (!params) {
    return null;
  }

  const { product } = params;
  if (!product) {
    return null;
  }

  const handleAddProduct = () => {
    dispatch(addProductToShopBag(product));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProductFromShopBag(product));
  };

  return (
    <Container>
      <DetailsContainer>
        <Image
          source={{ uri: product.img_url }}
          style={{ width: 100, height: 100 }}
        />
        <AvailableText>Disponivel</AvailableText>
        <BodyText>{product.name}</BodyText>
        <PriceText>{product.price}</PriceText>
      </DetailsContainer>

      <SizeBlock>
        <SizesContainer>
          <Text>P</Text>
        </SizesContainer>
        <SizesContainer>
          <Text>M</Text>
        </SizesContainer>
        <SizesContainer>
          <Text>G</Text>
        </SizesContainer>
        <SizesContainer>
          <Text>GG</Text>
        </SizesContainer>
      </SizeBlock>

      {products.find((selectedProduct) => selectedProduct.id === product.id) ? (
        <DefaultButton onPress={() => handleRemoveProduct()}>
          <DefaultButtonText>Remover da sacola</DefaultButtonText>
        </DefaultButton>
      ) : (
        <DefaultButton onPress={() => handleAddProduct()}>
          <DefaultButtonText>Adicionar à sacola</DefaultButtonText>
        </DefaultButton>
      )}
      <DefaultButton
        style={{ marginTop: 20 }}
        onPress={() => navigate('ShopBag')}>
        <DefaultButtonText>Ver sacola</DefaultButtonText>
      </DefaultButton>

      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText>DETALHES</HeaderText>
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Icon name="close-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default ProductDetails;
