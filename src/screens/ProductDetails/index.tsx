import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  Container,
  DefaultButton,
  DefaultButtonText,
  Header,
  HeaderText,
  BodyText,
} from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AvailableText,
  DetailsContainer,
  PriceText,
  SizeBlock,
  SizesContainer,
} from './styles';

const camisetaImg = require('../../../assets/img/camiseta-1.png');

const ProductDetails = () => {
  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText style={{ marginRight: 20 }}>DETALHES</HeaderText>
        <View />
      </Header>

      <DetailsContainer>
        <Image source={camisetaImg} />
        <AvailableText>Disponivel</AvailableText>
        <BodyText>Camiseta preta - masculina</BodyText>
        <PriceText>R$ 39,90</PriceText>
      </DetailsContainer>

      <SizeBlock>
        <SizesContainer>
          <Text>P</Text>
        </SizesContainer>
        <SizesContainer>
          <Text>M</Text>
        </SizesContainer>
        <SizesContainer>
          <Text>G</Text>
        </SizesContainer>
        <SizesContainer>
          <Text>GG</Text>
        </SizesContainer>
      </SizeBlock>

      <DefaultButton>
        <DefaultButtonText>Adicionar a sacola</DefaultButtonText>
      </DefaultButton>
    </Container>
  );
};

export default ProductDetails;
