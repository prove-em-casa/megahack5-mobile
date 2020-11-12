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

interface OrderContainerProps {
  id: number;
  shop_name: string;
  date: Date;
  status: 'waiting' | 'trying' | 'canceled' | 'concluded';
  shop_img_url: string;
}

const OrderContainer = ({
  id,
  shop_name,
  date,
  status,
  shop_img_url,
}: OrderContainerProps) => {
  const navigation = useNavigation();

  const renderStatus = () => {
    if (status === 'waiting') {
      return <WaitingStatusText>A caminho</WaitingStatusText>;
    } else if (status === 'canceled') {
      return <CanceledStatusText>Cancelado</CanceledStatusText>;
    } else if (status === 'trying') {
      return <TryingStatusText>Chegou para experimentar</TryingStatusText>;
    } else if (status === 'concluded') {
      return <TryingStatusText>Concluído</TryingStatusText>;
    }

    return null;
  };

  return (
    <Order /*onPress={() => navigation.navigate(route)}*/>
      <OrderShopImage source={{ uri: shop_img_url }} />

      <OrderDescriptionContainer>
        <DescriptionLine>
          <DescriptionLabel>Loja:</DescriptionLabel>
          <DescriptionValue>{shop_name}</DescriptionValue>
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
