import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { Description, OpenHours, Shop, Title, ShopImage } from './styles';

interface IShopProps {
  shop: IShop;
}

const ShopContainer = ({ shop }: IShopProps) => {
  const navigation = useNavigation();

  return (
    <Shop
      onPress={() => {
        navigation.navigate('ProductList', { shop });
      }}>
      <ShopImage source={{ uri: shop.img_url }} />
      <View>
        <Title>{shop.name}</Title>
        <Description>Há 1.6km de você</Description>
        <OpenHours>
          Aberto: {shop.open} às {shop.close}
        </OpenHours>
      </View>
    </Shop>
  );
};

export default ShopContainer;
