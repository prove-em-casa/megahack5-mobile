import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { Description, OpenHours, Shop, Title } from './styles';
const rennerLogo = require('../../../../../assets/img/renner-logo.png');

interface IShopProps {
  shop: {
    id: number;
    shop: string;
    open: string;
    close: string;
    where_is_located: string;
  };
}

const ShopContainer = ({ shop }: IShopProps) => {
  const navigation = useNavigation();

  return (
    <Shop
      onPress={() => {
        navigation.navigate('ProductList', { shop });
      }}>
      <Image source={rennerLogo} />
      <View>
        <Title>
          {shop.shop} - {shop.where_is_located}
        </Title>
        <Description>Há 1.6km de você</Description>
        <OpenHours>
          Aberto: {shop.open} às {shop.close}
        </OpenHours>
      </View>
    </Shop>
  );
};

export default ShopContainer;
