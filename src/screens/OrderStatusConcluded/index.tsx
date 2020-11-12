import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { useCachedFetch } from 'react-cached-fetch';
import { FlatList } from 'react-native';

const visaLogo = require('./../../../assets/img/visa_logo.png');

import ProductContainer from '../../components/ProductContainer';
import { StackNavigatorParamList } from '../../routes/StackNavigator';
import {
  LineContainer,
  LineLabel,
  LineValue,
  OrderStatusConcludedContainer,
  BottomBorderedSessionContainer,
  FullBorderedSessionContainer,
  SpacedLineValue,
  CreditCardImage,
  TotalPriceLabel,
  OrderSummaryLine,
} from './styles';

const OrderStatusConcluded = () => {
  const { params } = useRoute<
    RouteProp<StackNavigatorParamList, 'OrderStatusConcluded'>
  >();

  const { data: order, isLoading } = useCachedFetch(
    `/order/${params ? params.order_id : 0}`,
  );

  if (!params || !params.order_id) {
    return null;
  }

  if (!order && isLoading) {
    // TODO: Display feedback
    return null;
  }
  return (
    <OrderStatusConcludedContainer>
      <BottomBorderedSessionContainer>
        <LineContainer>
          <LineLabel>Número do pedido:</LineLabel>
          <LineValue>94032859</LineValue>
        </LineContainer>
      </BottomBorderedSessionContainer>

      <FlatList
        data={order ? order.products : []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: product }: { item: IProduct }) => (
          <ProductContainer
            key={product.id}
            name={product.name}
            img_url={product.img_url}
            price={product.price}
            size={product.size}
            stars={product.stars}
          />
        )}
        ListFooterComponent={
          <>
            <FullBorderedSessionContainer>
              <LineLabel>Forma de pagamento</LineLabel>
              <SpacedLineValue>Em 1x de 79,98</SpacedLineValue>
              <CreditCardImage source={visaLogo} />
            </FullBorderedSessionContainer>

            <BottomBorderedSessionContainer>
              <LineContainer>
                <LineLabel>Prazo de entrega:</LineLabel>
                <LineValue>40min a 55min</LineValue>
              </LineContainer>

              <LineLabel>Endreço:</LineLabel>
              <SpacedLineValue>
                Rua Agnelo, centro, ao lado da padaria
              </SpacedLineValue>
            </BottomBorderedSessionContainer>

            <LineLabel>Resumo do pedido</LineLabel>

            <OrderSummaryLine>
              <LineLabel>Valor dos produtos:</LineLabel>
              <LineValue>R$79,98</LineValue>
            </OrderSummaryLine>

            <OrderSummaryLine>
              <LineLabel>Frete:</LineLabel>
              <LineValue>R$15,00</LineValue>
            </OrderSummaryLine>

            <OrderSummaryLine>
              <LineLabel>Total do pedido:</LineLabel>
              <TotalPriceLabel>R$94,98</TotalPriceLabel>
            </OrderSummaryLine>
          </>
        }
      />
    </OrderStatusConcludedContainer>
  );
};

export default OrderStatusConcluded;
