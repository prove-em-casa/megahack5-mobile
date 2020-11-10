import React from 'react';

import {
  Product,
  Title,
  PriceAndSizeContainer,
  Price,
  Size,
  ProductImage,
  DescriptionContainer,
  TrashIcon,
} from '../styles';
import { BodyText } from '../../../styles/global';
import Stars from '../../../components/Stars';

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
      <DescriptionContainer>
        <Title numberOfLines={1}>{title}</Title>
        <Stars stars={stars} />
        <PriceAndSizeContainer>
          <Price>{price}</Price>
          <BodyText>Tamanho</BodyText>
          <Size>{size}</Size>
        </PriceAndSizeContainer>
      </DescriptionContainer>

      <TrashIcon name="trash" size={22} onPress={onRemove} />
    </Product>
  );
};

export default ProductContainer;
