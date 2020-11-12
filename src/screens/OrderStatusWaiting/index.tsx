import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
const avatarImage = require('../../../assets/img/driver_avatar.png');

const OrderStatusWaiting = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [products] = useState<IProduct[]>([
    {
      id: 1,
      name: 'Calça flare em viscose lisa com cinto preto',
      img_url: 'https://img.lojasrenner.com.br/item/551255835/large/10.jpg',
      price: 39.99,
      size: 'M',
      stars: 5,
    },
    {
      id: 2,
      name: 'Vestido curto evasê em linho com cinto faixa vermelho',
      img_url: 'https://img.lojasrenner.com.br/item/552440645/large/10.jpg',
      price: 39.99,
      size: 'P',
      stars: 4,
    },
  ]);
  const navigator = useNavigation();

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
        data={products}
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
