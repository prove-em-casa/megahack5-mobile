import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useCachedFetch } from 'react-cached-fetch';
import BottomSheet from 'reanimated-bottom-sheet';

import {
  OrderStatusContainer,
  OrderStatusOnTheWay,
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
  CancelButton,
  OrderStatusBottomSheetContent,
} from './styles';
import ProductContainer from '../../components/ProductContainer';
import { DefaultButtonText } from '../../styles/global';
import { StackNavigatorParamList } from '../../routes/StackNavigator';

const avatarImage = require('../../../assets/img/driver_avatar.png');

const OrderStatusWaiting = () => {
  const { params } = useRoute<
    RouteProp<StackNavigatorParamList, 'OrderStatusTrying'>
  >();

  const { data: order, isLoading } = useCachedFetch(
    `/order/${params ? params.order_id : 0}`,
  );

  const [showBackdrop, setShowBackdrop] = useState(false);
  const navigator = useNavigation();

  if (!params || !params.order_id) {
    return null;
  }

  if (!order && isLoading) {
    // TODO: Display feedback
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
          <InformationLabel>Dia do pedido</InformationLabel>
          <InformationValue>11-11-20</InformationValue>
        </InformationLine>

        <InformationLine>
          <InformationLabel>Previsão de entrega</InformationLabel>
          <InformationValue>40-55 min</InformationValue>
        </InformationLine>

        <InformationLine>
          <InformationLabel>Realizado</InformationLabel>
          <InformationValue>13:00</InformationValue>
        </InformationLine>

        <DriverInformationContainer>
          <DriverAvatar source={avatarImage} />
          <DriverName>Mario Segali</DriverName>

          <VehicleContainer>
            <InformationValue>ABC1234</InformationValue>
            <InformationLabel>Shinerai</InformationLabel>
          </VehicleContainer>
        </DriverInformationContainer>

        <CancelButton onPress={() => navigator.navigate('OrderStatusCanceled')}>
          <DefaultButtonText>Cancelar</DefaultButtonText>
        </CancelButton>
      </OrderStatusBottomSheetContent>
    </OrderStatusBottomSheet>
  );

  return (
    <OrderStatusContainer>
      {showBackdrop && <OrderStatusBackdrop />}
      <OrderStatusOnTheWay>
        <OrderStatusText>a caminho</OrderStatusText>
      </OrderStatusOnTheWay>

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
            <SessionContainer>
              <InformationLine>
                <InformationLabel>Roupas</InformationLabel>
                <Price>R$80,00</Price>
              </InformationLine>

              <InformationLine>
                <InformationLabel>Taxa de entrega</InformationLabel>
                <Price>R$15,00</Price>
              </InformationLine>

              <InformationLine>
                <TotalPriceLabel>Total</TotalPriceLabel>
                <Price>R$95,00</Price>
              </InformationLine>
            </SessionContainer>

            <DisclaimerText>
              * só o valor do frete caso não escolha nenhuma peça
            </DisclaimerText>
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

export default OrderStatusWaiting;
