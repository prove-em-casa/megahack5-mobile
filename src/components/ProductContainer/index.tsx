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
  name: string;
  img_url: string;
  price: number;
  size: string;
  stars: number;

  showRemoveIcon?: boolean;
  onRemove?: () => void;
}

const ProductContainer = ({
  name,
  img_url,
  price,
  size,
  stars,
  showRemoveIcon,
  onRemove,
}: ProductContainerProps) => {
  return (
    <Product>
      <ProductImage source={{ uri: img_url }} />
      <ProductDescriptionContainer>
        <ProductTitle numberOfLines={1}>{name}</ProductTitle>
        <Stars stars={stars} />
        <PriceAndSizeContainer>
          <ProductPrice>{price}</ProductPrice>
          <BodyText>Tamanho</BodyText>
          <ProductSize>{size}</ProductSize>
        </PriceAndSizeContainer>
      </ProductDescriptionContainer>

      {showRemoveIcon && (
        <RemoveProductIcon name="trash" size={22} onPress={onRemove} />
      )}
    </Product>
  );
};

export default ProductContainer;
