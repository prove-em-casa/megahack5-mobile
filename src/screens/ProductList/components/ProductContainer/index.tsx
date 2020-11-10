import React from 'react';
import { Image } from 'react-native';
import { AvailableText, DescriptionText, PriceText, Product } from './styles';

const camisetaImg = require('../../../../../assets/img/camiseta-1.png');

const ProductContainer = () => {
  return (
    <Product>
      <Image source={camisetaImg} />
      <AvailableText>Disponivel</AvailableText>
      <DescriptionText>Camiseta Preta - Masculina</DescriptionText>
      <PriceText>R$ 39,90</PriceText>
    </Product>
  );
};

export default ProductContainer;
