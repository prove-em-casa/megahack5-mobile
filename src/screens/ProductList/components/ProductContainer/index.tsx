import React from 'react';
import { Image } from 'react-native';
import { AvailableText, DescriptionText, PriceText, Product } from './styles';

// const camisetaImg = require('../../../../../assets/img/camiseta-1.png');

interface IPropsProduct {
  product: {
    id: string;
    productName: string;
    url: string;
    Price: number;
    Rating: number;
    P: boolean;
    M: boolean;
    G: boolean;
    GG: boolean;
  };
}

const ProductContainer = ({ product }: IPropsProduct) => {
  return (
    <Product>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: product.url,
        }}
      />
      <AvailableText>Disponivel</AvailableText>
      <DescriptionText>{product.productName}</DescriptionText>
      <PriceText>R$ {product.Price}</PriceText>
    </Product>
  );
};

export default ProductContainer;
