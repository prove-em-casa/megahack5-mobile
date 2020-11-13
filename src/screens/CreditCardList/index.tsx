import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { CreditCardsListContainer, AddCreditCardIcon } from './styles';
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
import Icon from 'react-native-vector-icons/Ionicons';

const CreditCardList = () => {
  const { creditCard: selectedCreditCard } = useSelector(
    ({ shopBag }: RootState) => shopBag,
  );
  const [creditCards] = useState<ICreditCard[]>([
    {
      id: 1,
      lastDigits: 1234,
    },
    {
      id: 2,
      lastDigits: 4567,
    },
  ]);
  const navigator = useNavigation();
  const dispatch = useDispatch();

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
            lastDigits={card.lastDigits}
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
