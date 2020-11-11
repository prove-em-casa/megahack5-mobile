import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

interface Address {
  id: number;
  address: string;
  complement?: string;
}

interface CreditCard {
  lastDigits: number;
}

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  size: string;
  stars: number;
}

const ShopList = () => {
  // TODO: Get from context
  const [selectedAddress] = useState<Address | null>(null);

  // TODO: Get from context
  const [selectedCard] = useState<CreditCard | null>(null);
  const [products, setProducts] = useState<Product[]>([
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

  const handleRemoveProduct = (id: number) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
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
          renderItem={({ item: product }: { item: Product }) => (
            <ProductContainer
              key={product.id}
              showRemoveIcon
              onRemove={() => handleRemoveProduct(product.id)}
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

export default ShopList;
