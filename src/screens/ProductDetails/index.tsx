import React from 'react';
import { Image, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { StackNavigatorParamList } from '../../routes/StackNavigator';
import {
  Container,
  DefaultButton,
  DefaultButtonText,
  BodyText,
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
        <Image source={{ uri: product.imageUrl }} />
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
    </Container>
  );
};

export default ProductDetails;
