import React, { useEffect, useState } from 'react';
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
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigatorParamList } from '../../routes/StackNavigator';
import { formatPrice } from '../../utils/price';

const avatarImg = require('../../../assets/img/driver_avatar.png');

const OrderDetails = () => {
  const [date, setDate] = useState<string>();
  const [price, setPrice] = useState<number>();
  const { navigate } = useNavigation();
  const {
    params: { freight, products },
  } = useRoute<RouteProp<StackNavigatorParamList, 'OrderDetails'>>();

  useEffect(() => {
    const data = Date.now();
    const hour = new Date(data);
    setDate(`${hour.getHours().toString()}:${hour.getMinutes().toString()}`);
  }, []);

  useEffect(() => {
    const total = products.reduce((a, product) => a + Number(product.price), 0);
    setPrice(total);
  }, [products]);

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
            <DetailText>{date}</DetailText>
          </InformationBlock>
          <InformationBlock>
            <AvatarContainer>
              <Avatar source={avatarImg} />
              <BodyText style={{ marginLeft: 10 }}>Shanarai</BodyText>
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
          {products.map((product) => (
            <OrderedProduct key={product.id} product={product} />
          ))}
        </OrderContainer>

        <OrderContainer>
          <InformationBlock>
            <BodyText>Roupas</BodyText>
            <DetailText>{formatPrice(Number(price))}</DetailText>
          </InformationBlock>
          <InformationBlock>
            <BodyText>Taxa de Entrega</BodyText>
            <DetailText>{formatPrice(Number(freight))}</DetailText>
          </InformationBlock>
          <InformationBlock>
            <DetailText style={{ color: colors.main_red, fontWeight: 'bold' }}>
              Total
            </DetailText>
            <DetailText style={{ color: colors.main_red, fontWeight: 'bold' }}>
              {formatPrice(Number(freight) + Number(price))}
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
