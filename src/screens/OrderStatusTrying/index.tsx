import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
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
const avatarImage = require('../../../assets/img/driver_avatar_2.png');

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  size: string;
  stars: number;
}

interface CreditCard {
  lastDigits: number;
}

const OrderStatusTrying = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);
  const [productsPrice, setProductsPrice] = useState('0,00');
  // TODO: Get from context
  const [selectedCard] = useState<CreditCard | null>(null);
  const [products] = useState<Product[]>([
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
  const navigator = useNavigation();

  useEffect(() => {
    if (!selectedProductIds || !selectedProductIds.length) {
      setProductsPrice('0,00');
      return;
    }

    const selectedProducts = products.filter((product) =>
      selectedProductIds.includes(product.id),
    );

    const price = selectedProducts.reduce(
      (accumulator, product) => accumulator + product.price,
      0,
    );

    setProductsPrice(price.toFixed(2).replace(/\./, ','));
  }, [selectedProductIds, products]);

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
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: product }: { item: Product }) => (
          <SelectableProductContainer
            key={product.id}
            title={product.title}
            image={product.image}
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
