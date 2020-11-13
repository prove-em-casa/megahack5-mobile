import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useCachedFetch } from 'react-cached-fetch';
import { FlatList } from 'react-native';
import NavigationHeader from '../../components/NavigationHeader';

const visaLogo = require('./../../../assets/img/visa_logo.png');

import ProductContainer from '../../components/ProductContainer';
import { StackNavigatorParamList } from '../../routes/StackNavigator';
import { formatPrice } from '../../utils/price';
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
  OrderStatusConcludedContainerContent,
} from './styles';

interface OrderStatus extends IOrder {
  products: IProduct[];
}
interface CachedFetchReturn {
  data: OrderStatus;
  isLoading: boolean;
}

const OrderStatusConcluded = () => {
  const { params } = useRoute<
    RouteProp<StackNavigatorParamList, 'OrderStatusConcluded'>
  >();

  const { data: order, isLoading }: CachedFetchReturn = useCachedFetch(
    `/order/${params ? params.order_id : 0}`,
  );

  const [productsPrice, setProductsPrice] = useState(0);

  useEffect(() => {
    if (!order || !order.products) {
      return;
    }

    const price = order.products.reduce(
      (accumulator: number, product: IProduct) => accumulator + product.price,
      0,
    );

    setProductsPrice(price);
  }, [order]);

  if (!params || !params.order_id) {
    return null;
  }

  if (!order) {
    if (isLoading) {
      // TODO: Display loading feedback
      return null;
    }

    // TODO: Treat this error by redirecting user or showing feedback
    return null;
  }

  return (
    <OrderStatusConcludedContainer>
      <NavigationHeader title={`PEDIDO Nº ${order.id}`} showGoBackButton />

      <OrderStatusConcludedContainerContent>
        <BottomBorderedSessionContainer>
          <LineContainer>
            <LineLabel>Número do pedido:</LineLabel>
            <LineValue>{order.id}</LineValue>
          </LineContainer>
        </BottomBorderedSessionContainer>

        <FlatList
          data={order.products}
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
                <SpacedLineValue>
                  Em 1x de {formatPrice(productsPrice + order.freight)}
                </SpacedLineValue>
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
                <LineValue>{formatPrice(productsPrice)}</LineValue>
              </OrderSummaryLine>

              <OrderSummaryLine>
                <LineLabel>Frete:</LineLabel>
                <LineValue>{formatPrice(order.freight)}</LineValue>
              </OrderSummaryLine>

              <OrderSummaryLine>
                <LineLabel>Total do pedido:</LineLabel>
                <TotalPriceLabel>
                  {formatPrice(productsPrice + order.freight)}
                </TotalPriceLabel>
              </OrderSummaryLine>
            </>
          }
        />
      </OrderStatusConcludedContainerContent>
    </OrderStatusConcludedContainer>
  );
};

export default OrderStatusConcluded;
