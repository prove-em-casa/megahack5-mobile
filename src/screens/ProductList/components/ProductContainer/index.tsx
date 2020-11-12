import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AvailableText, DescriptionText, PriceText, Product } from './styles';

// const camisetaImg = require('../../../../../assets/img/camiseta-1.png');

interface IPropsProduct {
  product: IProduct;
}

const ProductContainer = ({ product }: IPropsProduct) => {
  const navigation = useNavigation();

  return (
    <Product onPress={() => navigation.navigate('ProductDetails', { product })}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: product.imageUrl,
        }}
      />
      <AvailableText>Disponivel</AvailableText>
      <DescriptionText>{product.name}</DescriptionText>
      <PriceText>R$ {product.price}</PriceText>
    </Product>
  );
};

export default ProductContainer;
