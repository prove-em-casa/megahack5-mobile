import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

import {
  Product,
  ProductTitle,
  PriceAndSizeContainer,
  ProductPrice,
  ProductSize,
  ProductImage,
  ProductDescriptionContainer,
} from './styles';
import { BodyText } from '../../styles/global';
import Stars from '../Stars';

interface ProductContainerProps {
  title: string;
  image: string;
  price: number;
  size: string;
  stars: number;
  onSelect: (selected: boolean) => void;
}

const ProductContainer = ({
  title,
  image,
  price,
  size,
  stars,
  onSelect,
}: ProductContainerProps) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = (newValue: boolean) => {
    setSelected(newValue);
    onSelect(newValue);
  };

  return (
    <Product>
      <CheckBox
        disabled={false}
        value={selected}
        onValueChange={handleSelect}
      />
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
    </Product>
  );
};

export default ProductContainer;
