import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import BottomSheet from 'reanimated-bottom-sheet';
import { useCachedFetch } from 'react-cached-fetch';

import {
  OrderStatusContainer,
  OrderStatusCanceledTextContainer,
  OrderStatusText,
  SessionContainer,
  InformationLine,
  InformationLabel,
  Price,
  DisclaimerText,
  OrderStatusBottomSheet,
  OrderStatusBottomSheetIndicator,
  OrderStatusBackdrop,
  InformationValue,
  TotalPriceLabel,
  DriverAvatar,
  DriverInformationContainer,
  DriverName,
  VehicleContainer,
  OrderStatusBottomSheetContent,
} from './styles';
import ProductContainer from '../../components/ProductContainer';
import { StackNavigatorParamList } from '../../routes/StackNavigator';
import { formatPrice } from '../../utils/price';
import NavigationHeader from '../../components/NavigationHeader';

const avatarImage = require('../../../assets/img/driver_avatar.png');

interface OrderStatus extends IOrder {
  products: IProduct[];
}
interface CachedFetchReturn {
  data: OrderStatus;
  isLoading: boolean;
}

const OrderStatusCanceled = () => {
  const { params } = useRoute<
    RouteProp<StackNavigatorParamList, 'OrderStatusCanceled'>
  >();

  const { data: order, isLoading }: CachedFetchReturn = useCachedFetch(
    `/order/${params ? params.order_id : 0}`,
  );

  const [showBackdrop, setShowBackdrop] = useState(false);

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

  const renderContent = () => (
    <OrderStatusBottomSheet>
      <OrderStatusBottomSheetIndicator />

      <OrderStatusBottomSheetContent>
        <InformationLine>
          <InformationLabel>Detalhes do pedido</InformationLabel>
        </InformationLine>

        <InformationLine>
          <InformationLabel>Dia da devolução</InformationLabel>
          <InformationValue>11-11-20</InformationValue>
        </InformationLine>

        <InformationLine>
          <InformationLabel>Previsão de entrega</InformationLabel>
          <InformationValue>40-55 min</InformationValue>
        </InformationLine>

        <InformationLine>
          <InformationLabel>Devolução</InformationLabel>
          <InformationValue>15:00</InformationValue>
        </InformationLine>

        <DriverInformationContainer>
          <DriverAvatar source={avatarImage} />
          <DriverName>Mario Segali</DriverName>

          <VehicleContainer>
            <InformationValue>ABC1234</InformationValue>
            <InformationLabel>Shinerai</InformationLabel>
          </VehicleContainer>
        </DriverInformationContainer>

        <DisclaimerText>* driver indo buscar as peças</DisclaimerText>
      </OrderStatusBottomSheetContent>
    </OrderStatusBottomSheet>
  );

  return (
    <OrderStatusContainer>
      <NavigationHeader title={`PEDIDO Nº ${order.id}`} showGoBackButton />
      {showBackdrop && <OrderStatusBackdrop />}
      <OrderStatusCanceledTextContainer>
        <OrderStatusText>cancelado</OrderStatusText>
      </OrderStatusCanceledTextContainer>

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
            <SessionContainer>
              <InformationLine>
                <InformationLabel>Taxa de entrega</InformationLabel>
                <Price>{formatPrice(order.freight)}</Price>
              </InformationLine>

              <InformationLine>
                <TotalPriceLabel>Total</TotalPriceLabel>
                <Price>{formatPrice(order.freight)}</Price>
              </InformationLine>
            </SessionContainer>
          </>
        }
      />

      <BottomSheet
        snapPoints={[306, 305, 50]}
        initialSnap={2}
        borderRadius={10}
        renderContent={renderContent}
        onOpenEnd={() => setShowBackdrop(true)}
        onCloseEnd={() => setShowBackdrop(false)}
      />
    </OrderStatusContainer>
  );
};

export default OrderStatusCanceled;
