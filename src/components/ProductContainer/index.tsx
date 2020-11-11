import React from 'react';

import {
  Product,
  ProductTitle,
  PriceAndSizeContainer,
  ProductPrice,
  ProductSize,
  ProductImage,
  ProductDescriptionContainer,
  RemoveProductIcon,
} from './styles';
import { BodyText } from '../../styles/global';
import Stars from '../Stars';

interface ProductContainerProps {
  title: string;
  image: string;
  price: number;
  size: string;
  stars: number;
  onRemove: () => void;
}

const ProductContainer = ({
  title,
  image,
  price,
  size,
  stars,
  onRemove,
}: ProductContainerProps) => {
  return (
    <Product>
      <ProductImage source={{ uri: image }} />
      <ProductDescriptionContainer>
        <ProductTitle numberOfLines={1}>{title}</ProductTitle>
        <Stars stars={stars} />
        <PriceAndSizeContainer>
          <ProductPrice>{price}</ProductPrice>
          <BodyText>Tamanho</BodyText>
          <ProductSize>{size}</ProductSize>
        </PriceAndSizeContainer>
      </ProductDescriptionContainer>

      <RemoveProductIcon name="trash" size={22} onPress={onRemove} />
    </Product>
  );
};

export default ProductContainer;
