import React from 'react';
import { Image, View } from 'react-native';

import { Description, OpenHours, Shop, Title } from './styles';
const rennerLogo = require('../../../../../assets/img/renner-logo.png');

const ShopContainer = () => {
  return (
    <Shop>
      <Image source={rennerLogo} />
      <View>
        <Title>Renner - Shopping Estação</Title>
        <Description>Há 1.6km de você</Description>
        <OpenHours>Aberto: 08:00 às 16:00</OpenHours>
      </View>
    </Shop>
  );
};

export default ShopContainer;
