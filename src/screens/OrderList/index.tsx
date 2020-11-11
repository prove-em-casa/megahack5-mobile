import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import OrderContainer from '../../components/OrderContainer';
import { Container, Header, HeaderText } from '../../styles/global';
import { OrderListContainer } from './styles';

interface Order {
  id: number;
  shopName: string;
  date: string;
  status: 'waiting' | 'trying' | 'canceled';
  route: string;
}

const OrderList = () => {
  const [orders] = useState<Order[]>([
    {
      id: 940159,
      shopName: 'Renner Shopping União',
      date: '12/11/2020 - 12:10',
      status: 'trying',
      route: 'OrderStatusTrying',
    },
    {
      id: 940158,
      shopName: 'Renner Shopping Estação',
      date: '11/11/2020 - 11:00',
      status: 'waiting',
      route: 'OrderStatusWaiting',
    },
    {
      id: 940157,
      shopName: 'Renner Shopping Villa Lobos',
      date: '10/11/2020 - 15:00',
      status: 'canceled',
      route: 'OrderStatusCanceled',
    },
  ]);

  return (
    <Container>
      <Header>
        <View />
        <HeaderText>PEDIDOS</HeaderText>
        <View />
      </Header>

      <OrderListContainer>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: order }: { item: Order }) => (
            <OrderContainer
              key={order.id}
              id={order.id}
              shopName={order.shopName}
              date={order.date}
              status={order.status}
              route={order.route}
            />
          )}
        />
      </OrderListContainer>
    </Container>
  );
};

export default OrderList;
