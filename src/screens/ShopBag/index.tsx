import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
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
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../services/api';
import { formatPrice } from '../../utils/price';
import colors from '../../styles/colors';

const ShopBag = () => {
  const [freight, setFreight] = useState<number>(15);
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

  async function registerOrder() {
    api.post('/order', {
      productList: products,
      shop_id: products[0].shop_id,
      freight,
      status: 'waiting',
      cred_id: selectedCreditCard?.id,
      address: selectedAddress?.address,
    });
    navigator.navigate('OrderDetails', { products, freight });
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={navigator.goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
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
                <PriceContainer>
                  <SessionTitle>Taxa de entrega</SessionTitle>
                  <DeliveryTax>
                    {products.length === 0
                      ? formatPrice(0)
                      : formatPrice(freight)}
                  </DeliveryTax>
                </PriceContainer>

                <PriceContainer>
                  <LargeSessionTitle>Total</LargeSessionTitle>
                  <TotalPrice>
                    {products.length === 0
                      ? formatPrice(0)
                      : formatPrice(freight)}
                  </TotalPrice>
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
                    lastDigits={selectedCreditCard.last_digits}
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
                  disabled={
                    products.length === 0 ||
                    selectedCreditCard === null ||
                    selectedAddress === null
                      ? true
                      : false
                  }
                  style={{
                    backgroundColor:
                      products.length === 0 ||
                      selectedCreditCard === null ||
                      selectedAddress === null
                        ? 'rgba(0,0,0,0.1)'
                        : colors.main_red,
                  }}
                  onPress={registerOrder}>
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
