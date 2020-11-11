import React, { useState } from 'react';

import {
  FullLineInput,
  InputLine,
  HalfLineInput,
  DefaultButtonText,
} from '../../styles/global';
import { AddCreditCardContainer, AddCreditCardButton } from './styles';

const AddCreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [validity, setValidity] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSaveCreditCard = () => {
    // TODO: Validate inputs and store on context api
  };

  return (
    <AddCreditCardContainer>
      <FullLineInput
        placeholder="Número do cartão"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />

      <InputLine>
        <HalfLineInput
          placeholder="Validade"
          value={validity}
          onChangeText={(text) => setValidity(text)}
        />

        <HalfLineInput
          placeholder="CVV"
          value={cvv}
          onChangeText={(text) => setCvv(text)}
        />
      </InputLine>

      <FullLineInput
        placeholder="Nome do titular"
        value={cardHolder}
        onChangeText={(text) => setCardHolder(text)}
      />

      <FullLineInput
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <AddCreditCardButton onPress={handleSaveCreditCard}>
        <DefaultButtonText>Salvar cartão</DefaultButtonText>
      </AddCreditCardButton>
    </AddCreditCardContainer>
  );
};

export default AddCreditCard;
