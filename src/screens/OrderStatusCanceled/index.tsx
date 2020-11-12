import React, { useState } from 'react';
import { FlatList } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

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

const avatarImage = require('../../../assets/img/driver_avatar.png');

const OrderStatusCanceled = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [products] = useState<IProduct[]>([
    {
      id: 1,
      title: 'Calça flare em viscose lisa com cinto preto',
      image: 'https://img.lojasrenner.com.br/item/551255835/large/10.jpg',
      price: 39.99,
      size: 'M',
      stars: 5,
    },
    {
      id: 2,
      title: 'Vestido curto evasê em linho com cinto faixa vermelho',
      image: 'https://img.lojasrenner.com.br/item/552440645/large/10.jpg',
      price: 39.99,
      size: 'P',
      stars: 4,
    },
  ]);

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
      {showBackdrop && <OrderStatusBackdrop />}
      <OrderStatusCanceledTextContainer>
        <OrderStatusText>cancelado</OrderStatusText>
      </OrderStatusCanceledTextContainer>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: product }: { item: IProduct }) => (
          <ProductContainer
            key={product.id}
            title={product.title}
            image={product.image}
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
                <Price>R$15,00</Price>
              </InformationLine>

              <InformationLine>
                <TotalPriceLabel>Total</TotalPriceLabel>
                <Price>R$15,00</Price>
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
