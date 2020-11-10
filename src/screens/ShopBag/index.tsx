import React, { useState } from 'react';
import { View, Modal, FlatList } from 'react-native';
import ProductContainer from './components/ProductContainer';

import {
  ShopBagContainer,
  SessionContainer,
  SessionTitle,
  ModalContainer,
  Title,
  PriceContainer,
  Price,
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
import AddressesList from './components/AddressesList';
import AddressContainer from './components/AddressContainer';
import CardsList from './components/CardsList';
import CardContainer from './components/CardContainer';

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
  const [addressedModalOpen, setAddressesModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CreditCard | null>(null);
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: 'Calça flare em viscose lisa com cinto preto',
      image: 'https://img.lojasrenner.com.br/item/551255835/large/10.jpg',
      price: 179.9,
      size: 'M',
      stars: 5,
    },
    {
      id: 2,
      title: 'Vestido curto evasê em linho com cinto faixa vermelho',
      image: 'https://img.lojasrenner.com.br/item/552440645/large/10.jpg',
      price: 189.9,
      size: 'P',
      stars: 4,
    },
  ]);

  const handleRemoveProduct = (id: number) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  const handleSelectAddress = (address: Address) => {
    setSelectedAddress(address);
    setAddressesModalOpen(false);
  };

  const handleSelectCard = (card: CreditCard) => {
    setSelectedCard(card);
    setCardModalOpen(false);
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
              handleSelectAddress={() => setAddressesModalOpen(true)}
            />
          ) : (
              <Title onPress={() => setAddressesModalOpen(true)}>
                Escolher endereço
              </Title>
            )}
        </SessionContainer>

        <SessionTitle>Produtos</SessionTitle>

        <SessionContainer>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: product }: { item: Product }) => (
              <ProductContainer
                key={product.id}
                onRemove={() => handleRemoveProduct(product.id)}
                title={product.title}
                image={product.image}
                price={product.price}
                size={product.size}
                stars={product.stars}
              />
            )}
          />
        </SessionContainer>

        <SessionContainer>
          <PriceContainer>
            <SessionTitle>Taxa de entrega</SessionTitle>
            <Price>R$15,00</Price>
          </PriceContainer>

          <PriceContainer>
            <LargeSessionTitle>Total</LargeSessionTitle>
            <TotalPrice>R$15,00</TotalPrice>
          </PriceContainer>

          <DisclaimerText>
            * O valor das roupas será somado de acordo com as peças que você
            ficar
          </DisclaimerText>
        </SessionContainer>

        <LargeSessionTitle>Pagamento</LargeSessionTitle>

        <SessionContainer>
          {selectedCard ? (
            <CardContainer
              lastDigits={selectedCard.lastDigits}
              handleSelectCard={() => setCardModalOpen(true)}
            />
          ) : (
              <Title onPress={() => setCardModalOpen(true)}>
                Escolher cartão
              </Title>
            )}
        </SessionContainer>

        <ButtonContainer>
          <DefaultButton>
            <DefaultButtonText>Fazer pedido</DefaultButtonText>
          </DefaultButton>
        </ButtonContainer>

        <Modal
          animationType="slide"
          transparent={true}
          visible={addressedModalOpen}
          onRequestClose={() => {
            setAddressesModalOpen(false);
          }}>
          <ModalContainer>
            <AddressesList handleSelectAddress={handleSelectAddress} />
          </ModalContainer>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={cardModalOpen}
          onRequestClose={() => {
            setCardModalOpen(false);
          }}>
          <ModalContainer>
            <CardsList handleSelectCard={handleSelectCard} />
          </ModalContainer>
        </Modal>
      </ShopBagContainer>
    </Container>
  );
};

export default ShopList;
