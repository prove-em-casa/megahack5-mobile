import React from 'react';
import { useCachedFetch } from 'react-cached-fetch';
import { FlatList, View } from 'react-native';

import OrderContainer from '../../components/OrderContainer';
import { Container, Header, HeaderText } from '../../styles/global';
import { OrderListContainer } from './styles';

const OrderList = () => {
  const { data: orders } = useCachedFetch('/order', { initialValue: [] });

  console.log(orders);

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
          renderItem={({ item: order }: { item: IOrder }) => (
            <OrderContainer
              key={order.id}
              id={order.id}
              shop_name={order.shop_name}
              date={order.date}
              status={order.status}
              shop_img_url={order.shop_img_url}
            />
          )}
        />
      </OrderListContainer>
    </Container>
  );
};

export default OrderList;
