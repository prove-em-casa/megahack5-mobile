import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { ListContainer, AddIcon } from '../styles';
import { DefaultButton, DefaultButtonText } from '../../../styles/global';
import CardContainer from './CardContainer';

interface CreditCard {
  id: number;
  lastDigits: number;
}

interface CardListProps {
  handleSelectCard: (address: CreditCard) => void;
}

const CardsList = ({ handleSelectCard }: CardListProps) => {
  const [cards] = useState<CreditCard[]>([
    {
      id: 1,
      lastDigits: 1234,
    },
    {
      id: 2,
      lastDigits: 4567,
    },
  ]);

  const onSelectCard = (id: number) => {
    const selectedCard = cards.find((card: CreditCard) => card.id === id);

    if (selectedCard) {
      handleSelectCard(selectedCard);
    }
  };

  return (
    <ListContainer>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: card }: { item: CreditCard }) => (
          <CardContainer
            key={card.id}
            lastDigits={card.lastDigits}
            handleSelectCard={() => onSelectCard(card.id)}
          />
        )}
      />

      <DefaultButton>
        <AddIcon name="plus" size={25} />
        <DefaultButtonText>Cadastrar novo cartão</DefaultButtonText>
      </DefaultButton>
    </ListContainer>
  );
};

export default CardsList;
