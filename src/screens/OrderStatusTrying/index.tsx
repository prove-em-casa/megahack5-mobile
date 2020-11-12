import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from 'reanimated-bottom-sheet';

import {
  OrderStatusContainer,
  OrderStatusTryingTextContainer,
  OrderStatusText,
  SessionContainer,
  InformationLine,
  InformationLabel,
  Price,
  GreenPrice,
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
  ConcludeButton,
  OrderStatusBottomSheetContent,
  SelectLabel,
  NavigationLink,
  PaymentLabel,
} from './styles';
import SelectableProductContainer from '../../components/SelectableProductContainer';
import { DefaultButtonText } from '../../styles/global';
import CreditCardContainer from '../../components/CreditCardContainer';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigatorParamList } from '../../routes/StackNavigator';
import { useCachedFetch } from 'react-cached-fetch';
const avatarImage = require('../../../assets/img/driver_avatar_2.png');

const OrderStatusTrying = () => {
  const { params } = useRoute<
    RouteProp<StackNavigatorParamList, 'OrderStatusTrying'>
  >();

  const { data: order, isLoading } = useCachedFetch(
    `/order/${params ? params.order_id : 0}`,
  );

  const [showBackdrop, setShowBackdrop] = useState(false);
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);
  const [productsPrice, setProductsPrice] = useState('0,00');

  // TODO: Get from context
  const [selectedCard] = useState<ICreditCard | null>(null);
  const navigator = useNavigation();

  useEffect(() => {
    if (!selectedProductIds || !selectedProductIds.length) {
      setProductsPrice('0,00');
      return;
    }

    const selectedProducts = order.products.filter((product) =>
      selectedProductIds.includes(product.id),
    );

    const price = selectedProducts.reduce(
      (accumulator, product) => accumulator + product.price,
      0,
    );

    setProductsPrice(price.toFixed(2).replace(/\./, ','));
  }, [selectedProductIds, order.products]);

  if (!params || !params.order_id) {
    return null;
  }

  if (!order && isLoading) {
    // TODO: Display feedback
    return null;
  }

  const handleSelectProduct = (id: number, selected: boolean) => {
    let newSelectedProducts = [...selectedProductIds];
    const selectedProduct = newSelectedProducts.find(
      (selectedProductId) => selectedProductId === id,
    );

    if (selected) {
      if (!selectedProduct) {
        newSelectedProducts.push(id);
      }
    } else {
      if (selectedProduct) {
        newSelectedProducts = newSelectedProducts.filter(
          (selectedProductId) => selectedProductId !== id,
        );
      }
    }

    setSelectedProductIds(newSelectedProducts);
  };

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
          <DriverName>Luigi Mario</DriverName>

          <VehicleContainer>
            <InformationValue>ABC1234</InformationValue>
            <InformationLabel>Shinerai</InformationLabel>
          </VehicleContainer>
        </DriverInformationContainer>

        <DisclaimerText>* driver indo buscas as peças</DisclaimerText>
      </OrderStatusBottomSheetContent>
    </OrderStatusBottomSheet>
  );

  return (
    <OrderStatusContainer>
      {showBackdrop && <OrderStatusBackdrop />}
      <OrderStatusTryingTextContainer>
        <OrderStatusText>chegou para provar</OrderStatusText>
      </OrderStatusTryingTextContainer>

      <SelectLabel>Selecione as peças que deseja ficar</SelectLabel>

      <FlatList
        data={order ? order.products : []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: product }: { item: IProduct }) => (
          <SelectableProductContainer
            key={product.id}
            name={product.name}
            img_url={product.img_url}
            price={product.price}
            size={product.size}
            stars={product.stars}
            onSelect={(selected: boolean) =>
              handleSelectProduct(product.id, selected)
            }
          />
        )}
        ListFooterComponentStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ListFooterComponent={
          <>
            <SessionContainer>
              <InformationLine>
                <InformationLabel>Roupas</InformationLabel>
                {selectedProductIds.length !== 0 ? (
                  <GreenPrice>R${productsPrice}</GreenPrice>
                ) : (
                    <Price>R${productsPrice}</Price>
                  )}
              </InformationLine>

              <InformationLine>
                <InformationLabel>Taxa de entrega</InformationLabel>
                <Price>R$15,00</Price>
              </InformationLine>

              <InformationLine>
                <TotalPriceLabel>Total</TotalPriceLabel>
                <Price>R$95,00</Price>
              </InformationLine>

              <DisclaimerText>
                * só o valor do frete caso não escolha nenhuma peça
              </DisclaimerText>
            </SessionContainer>

            <SessionContainer>
              <PaymentLabel>Pagamento</PaymentLabel>
              {selectedCard ? (
                <CreditCardContainer
                  lastDigits={selectedCard.lastDigits}
                  handleSelectCreditCard={() =>
                    navigator.navigate('CreditCardList')
                  }
                />
              ) : (
                  <NavigationLink
                    onPress={() => navigator.navigate('CreditCardList')}>
                    Escolher cartão
                  </NavigationLink>
                )}
            </SessionContainer>

            <ConcludeButton>
              <DefaultButtonText>Concluir</DefaultButtonText>
            </ConcludeButton>
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

export default OrderStatusTrying;
