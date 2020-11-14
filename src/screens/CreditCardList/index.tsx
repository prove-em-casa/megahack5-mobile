import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useCachedFetch } from 'react-cached-fetch';
import Icon from 'react-native-vector-icons/Ionicons';

import { AddCreditCardIcon } from './styles';
import {
  Container,
  DefaultButton,
  DefaultButtonText,
  Header,
  HeaderText,
} from '../../styles/global';
import CardContainer from '../../components/CreditCardContainer';
import { RootState } from '../../store/store';
import { selectShopBagCreditCard } from '../../store/ducks/shopBag';
import api from '../../services/api';

const CreditCardList = () => {
  const { creditCard: selectedCreditCard } = useSelector(
    ({ shopBag }: RootState) => shopBag,
  );
  const { data: creditCards, isLoading } = useCachedFetch('creditCard');
  const navigator = useNavigation();
  const dispatch = useDispatch();

  if (!creditCards) {
    if (isLoading) {
      // TODO: Display loading feedback
      return null;
    }

    // TODO: Treat this error by redirecting user or showing feedback
    return null;
  }

  const onSelectCreditCard = (id: number) => {
    const creditCard = creditCards.find((card: ICreditCard) => card.id === id);

    if (creditCard) {
      dispatch(selectShopBagCreditCard(creditCard));
    }
  };

  return (
    <Container>
      <FlatList
        style={{ marginTop: 100 }}
        data={creditCards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: card }: { item: ICreditCard }) => (
          <CardContainer
            key={card.id}
            lastDigits={card.last_digits}
            handleSelectCreditCard={() => onSelectCreditCard(card.id)}
            selectable
            selected={
              selectedCreditCard ? selectedCreditCard.id === card.id : false
            }
          />
        )}
        ListFooterComponent={
          <>
            <DefaultButton>
              <AddCreditCardIcon name="plus" size={25} />
              <DefaultButtonText
                onPress={() => {
                  navigator.navigate('AddCreditCard');
                }}>
                Cadastrar novo cartão
              </DefaultButtonText>
            </DefaultButton>
          </>
        }
      />
      <Header>
        <TouchableOpacity onPress={navigator.goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText>SELECIONE UM CARTÃO</HeaderText>
        <View />
      </Header>
    </Container>
  );
};

export default CreditCardList;
