import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CreditCardsListContainer, AddCreditCardIcon } from './styles';
import { DefaultButton, DefaultButtonText } from '../../styles/global';
import CardContainer from '../../components/CreditCardContainer';

interface CreditCard {
  id: number;
  lastDigits: number;
}

const CreditCardList = () => {
  const [creditCards] = useState<CreditCard[]>([
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

  const onSelectCreditCard = (id: number) => {
    const selectedCard = creditCards.find((card: CreditCard) => card.id === id);

    if (selectedCard) {
      // TODO: Set selectedCard on the context
    }
  };

  return (
    <CreditCardsListContainer>
      <FlatList
        data={creditCards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: card }: { item: CreditCard }) => (
          <CardContainer
            key={card.id}
            lastDigits={card.lastDigits}
            handleSelectCreditCard={() => onSelectCreditCard(card.id)}
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
    </CreditCardsListContainer>
  );
};

export default CreditCardList;
