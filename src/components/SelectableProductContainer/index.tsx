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
import { formatPrice } from '../../utils/price';

interface ProductContainerProps {
  name: string;
  img_url: string;
  price: number;
  size: string;
  stars: number;
  onSelect: (selected: boolean) => void;
}

const ProductContainer = ({
  name,
  img_url,
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
      <ProductImage source={{ uri: img_url }} />
      <ProductDescriptionContainer>
        <ProductTitle numberOfLines={1}>{name}</ProductTitle>
        <Stars stars={stars} />
        <PriceAndSizeContainer>
          <ProductPrice>{formatPrice(price)}</ProductPrice>
          <BodyText>Tamanho</BodyText>
          <ProductSize>{size}</ProductSize>
        </PriceAndSizeContainer>
      </ProductDescriptionContainer>
    </Product>
  );
};

export default ProductContainer;
