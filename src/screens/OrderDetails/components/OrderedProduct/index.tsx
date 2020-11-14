import React from 'react';
import { View } from 'react-native';
import { BodyText } from '../../../../styles/global';
import { formatPrice } from '../../../../utils/price';
import {
  ItemContainer,
  ItemDetails,
  ItemImage,
  ItemPrice,
  ItemSize,
  SizeLetter,
} from './styles';

const camisetaImg = require('../../../../../assets/img/camiseta-1.png');

interface IOrderProductProps {
  product: IProduct;
}

const OrderedProduct = ({ product }: IOrderProductProps) => {
  return (
    <ItemContainer>
      <ItemImage source={{ uri: product.img_url }} />
      <View>
        <BodyText>{product.name}</BodyText>
        <ItemDetails>
          <ItemPrice>{formatPrice(Number(product.price))}</ItemPrice>
          <ItemSize>Tamanho</ItemSize>
          <SizeLetter>{product.size}</SizeLetter>
        </ItemDetails>
      </View>
    </ItemContainer>
  );
};

export default OrderedProduct;
