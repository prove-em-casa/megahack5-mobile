import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Order,
  OrderDescriptionContainer,
  DescriptionLabel,
  DescriptionLine,
  DescriptionValue,
  OrderShopImage,
  ArrowIcon,
  WaitingStatusText,
  CanceledStatusText,
  TryingStatusText,
} from './styles';

const rennerLogo = require('../../../assets/img/renner-logo.png');

interface OrderContainerProps {
  id: number;
  shopName: string;
  date: string;
  status: 'waiting' | 'trying' | 'canceled';
  route: string; // Temporary, should use order's id
}

const OrderContainer = ({
  id,
  shopName,
  date,
  status,
  route,
}: OrderContainerProps) => {
  const navigation = useNavigation();

  const renderStatus = () => {
    if (status === 'waiting') {
      return <WaitingStatusText>A caminho</WaitingStatusText>;
    } else if (status === 'canceled') {
      return <CanceledStatusText>Cancelado</CanceledStatusText>;
    } else if (status === 'trying') {
      return <TryingStatusText>Chegou para experimentar</TryingStatusText>;
    }

    return null;
  };

  return (
    <Order onPress={() => navigation.navigate(route)}>
      <OrderShopImage source={rennerLogo} />

      <OrderDescriptionContainer>
        <DescriptionLine>
          <DescriptionLabel>Loja:</DescriptionLabel>
          <DescriptionValue>{shopName}</DescriptionValue>
        </DescriptionLine>

        <DescriptionLine>
          <DescriptionLabel>Pedido n°:</DescriptionLabel>
          <DescriptionValue>{id}</DescriptionValue>
        </DescriptionLine>

        <DescriptionLine>
          <DescriptionLabel>Data:</DescriptionLabel>
          <DescriptionValue>{date}</DescriptionValue>
        </DescriptionLine>

        <DescriptionLine>
          <DescriptionLabel>Status:</DescriptionLabel>
          {renderStatus()}
        </DescriptionLine>
      </OrderDescriptionContainer>

      <ArrowIcon size={22} name="chevron-right" />
    </Order>
  );
};

export default OrderContainer;
