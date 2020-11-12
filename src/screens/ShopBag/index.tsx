import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import {
  ShopBagContainer,
  SessionContainer,
  SessionTitle,
  NavigationLink,
  PriceContainer,
  DeliveryTax,
  TotalPrice,
  LargeSessionTitle,
  DisclaimerText,
  ButtonContainer,
} from './styles';
import {
  Container,
  DefaultButton,
  DefaultButtonText,
  Header,
  HeaderText,
} from '../../styles/global';
import CreditCardContainer from '../../components/CreditCardContainer';
import AddressContainer from '../../components/AddressContainer';
import ProductContainer from '../../components/ProductContainer';
import { RootState } from '../../store/store';
import { removeProductFromShopBag } from '../../store/ducks/shopBag';

const ShopBag = () => {
  const {
    address: selectedAddress,
    creditCard: selectedCreditCard,
    products,
  } = useSelector(({ shopBag }: RootState) => shopBag);

  const navigator = useNavigation();
  const dispatch = useDispatch();

  const handleRemoveProduct = (product: IProduct) => {
    dispatch(removeProductFromShopBag(product));
  };

  return (
    <Container>
      <Header>
        <View />
        <HeaderText>SACOLA</HeaderText>
        <View />
      </Header>

      <ShopBagContainer>
        <SessionTitle>Entregar em</SessionTitle>

        <SessionContainer>
          {selectedAddress ? (
            <AddressContainer
              address={selectedAddress.address}
              complement={selectedAddress.complement}
              handleSelectAddress={() => navigator.navigate('AddressList')}
            />
          ) : (
              <NavigationLink onPress={() => navigator.navigate('AddressList')}>
                Escolher endereço
              </NavigationLink>
            )}
        </SessionContainer>

        <SessionTitle>Produtos</SessionTitle>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: product }: { item: IProduct }) => (
            <ProductContainer
              key={product.id}
              showRemoveIcon
              onRemove={() => handleRemoveProduct(product)}
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
                <PriceContainer>
                  <SessionTitle>Taxa de entrega</SessionTitle>
                  <DeliveryTax>R$15,00</DeliveryTax>
                </PriceContainer>

                <PriceContainer>
                  <LargeSessionTitle>Total</LargeSessionTitle>
                  <TotalPrice>R$15,00</TotalPrice>
                </PriceContainer>

                <DisclaimerText>
                  * O valor das roupas será somado de acordo com as peças que
                  você ficar
                </DisclaimerText>
              </SessionContainer>

              <LargeSessionTitle>Pagamento</LargeSessionTitle>

              <SessionContainer>
                {selectedCreditCard ? (
                  <CreditCardContainer
                    lastDigits={selectedCreditCard.lastDigits}
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

              <ButtonContainer>
                <DefaultButton
                  onPress={() => navigator.navigate('OrderStatusWaiting')}>
                  <DefaultButtonText>Fazer pedido</DefaultButtonText>
                </DefaultButton>
              </ButtonContainer>
            </>
          }
        />
      </ShopBagContainer>
    </Container>
  );
};

export default ShopBag;
