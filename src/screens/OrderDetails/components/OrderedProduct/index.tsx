import React from 'react';
import { View } from 'react-native';
import { BodyText } from '../../../../styles/global';
import {
  ItemContainer,
  ItemDetails,
  ItemImage,
  ItemPrice,
  ItemSize,
  SizeLetter,
} from './styles';

const camisetaImg = require('../../../../../assets/img/camiseta-1.png');

const OrderedProduct = () => {
  return (
    <ItemContainer>
      <ItemImage source={camisetaImg} />
      <View>
        <BodyText>Camiseta preta - masculina</BodyText>
        <ItemDetails>
          <ItemPrice>R$ 39,90</ItemPrice>
          <ItemSize>Tamanho</ItemSize>
          <SizeLetter>P</SizeLetter>
        </ItemDetails>
      </View>
    </ItemContainer>
  );
};

export default OrderedProduct;
