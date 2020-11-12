import React, { useState } from 'react';
import { FlatList, Image } from 'react-native';

const visaLogo = require('./../../../assets/img/visa_logo.png');

import ProductContainer from '../../components/ProductContainer';
import {
  LineContainer,
  LineLabel,
  LineValue,
  OrderStatusConcludedContainer,
  BottomBorderedSessionContainer,
  FullBorderedSessionContainer,
  SpacedLineValue,
  CreditCardImage,
  TotalPriceLabel,
  OrderSummaryLine,
} from './styles';

const OrderStatusConcluded = () => {
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

  return (
    <OrderStatusConcludedContainer>
      <BottomBorderedSessionContainer>
        <LineContainer>
          <LineLabel>Número do pedido:</LineLabel>
          <LineValue>94032859</LineValue>
        </LineContainer>
      </BottomBorderedSessionContainer>

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
            <FullBorderedSessionContainer>
              <LineLabel>Forma de pagamento</LineLabel>
              <SpacedLineValue>Em 1x de 79,98</SpacedLineValue>
              <CreditCardImage source={visaLogo} />
            </FullBorderedSessionContainer>

            <BottomBorderedSessionContainer>
              <LineContainer>
                <LineLabel>Prazo de entrega:</LineLabel>
                <LineValue>40min a 55min</LineValue>
              </LineContainer>

              <LineLabel>Endreço:</LineLabel>
              <SpacedLineValue>
                Rua Agnelo, centro, ao lado da padaria
              </SpacedLineValue>
            </BottomBorderedSessionContainer>

            <LineLabel>Resumo do pedido</LineLabel>

            <OrderSummaryLine>
              <LineLabel>Valor dos produtos:</LineLabel>
              <LineValue>R$79,98</LineValue>
            </OrderSummaryLine>

            <OrderSummaryLine>
              <LineLabel>Frete:</LineLabel>
              <LineValue>R$15,00</LineValue>
            </OrderSummaryLine>

            <OrderSummaryLine>
              <LineLabel>Total do pedido:</LineLabel>
              <TotalPriceLabel>R$94,98</TotalPriceLabel>
            </OrderSummaryLine>
          </>
        }
      />
    </OrderStatusConcludedContainer>
  );
};

export default OrderStatusConcluded;
