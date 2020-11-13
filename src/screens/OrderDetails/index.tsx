import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import {
  BodyText,
  Container,
  DefaultButtonText,
  Header,
  HeaderText,
} from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Avatar,
  AvatarContainer,
  DetailText,
  FinishButton,
  InformationBlock,
  InformationContainer,
  ObsText,
  OrderContainer,
} from './styles';
import OrderedProduct from './components/OrderedProduct';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

const avatarImg = require('../../../assets/img/avatar-entregador.png');

const OrderDetails = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InformationContainer>
          <BodyText>Detalhes do pedido</BodyText>
          <InformationBlock>
            <BodyText>Previsão de entrega</BodyText>
            <DetailText>40-55 min</DetailText>
          </InformationBlock>
          <InformationBlock>
            <BodyText>Realizado em:</BodyText>
            <DetailText>13:00</DetailText>
          </InformationBlock>
          <InformationBlock>
            <AvatarContainer>
              <Avatar source={avatarImg} />
              <BodyText style={{ marginLeft: 10 }}>Fausto Princeso</BodyText>
            </AvatarContainer>
            <View>
              <DetailText>ABC1234</DetailText>
              <DetailText>Shinerai</DetailText>
            </View>
          </InformationBlock>
        </InformationContainer>

        <OrderContainer>
          <BodyText style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
            Seu pedido
          </BodyText>
          <OrderedProduct />
          <OrderedProduct />
          <OrderedProduct />
          <OrderedProduct />
        </OrderContainer>

        <OrderContainer>
          <InformationBlock>
            <BodyText>Roupas</BodyText>
            <DetailText>R$ 160,00</DetailText>
          </InformationBlock>
          <InformationBlock>
            <BodyText>Taxa de Entrega</BodyText>
            <DetailText>R$ 15,00</DetailText>
          </InformationBlock>
          <InformationBlock>
            <DetailText style={{ color: colors.main_red, fontWeight: 'bold' }}>
              Total
            </DetailText>
            <DetailText style={{ color: colors.main_red, fontWeight: 'bold' }}>
              R$ 175,00
            </DetailText>
          </InformationBlock>
          <ObsText>
            *Obs: Apenas o valor do frete será descontado caso nenhuma peça seja
            escolhida
          </ObsText>
        </OrderContainer>
      </ScrollView>

      <FinishButton onPress={() => navigate('Home')}>
        <DefaultButtonText>Concluir</DefaultButtonText>
      </FinishButton>

      <Header>
        <View />
        <HeaderText>RESUMO DO PEDIDO</HeaderText>
        <View />
      </Header>
    </Container>
  );
};

export default OrderDetails;
