import React, { useState } from 'react';
import NavigationHeader from '../../components/NavigationHeader';

import {
  InputLine,
  HalfLineInput,
  DefaultButtonText,
  StyledInput,
  Container,
} from '../../styles/global';
import { AddCreditCardButton } from './styles';

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
    <Container>
      <NavigationHeader title="CADASTRAR CARTÃO" showGoBackButton />
      <StyledInput
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

      <StyledInput
        placeholder="Nome do titular"
        value={cardHolder}
        onChangeText={(text) => setCardHolder(text)}
      />

      <StyledInput
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <AddCreditCardButton onPress={handleSaveCreditCard}>
        <DefaultButtonText>Salvar cartão</DefaultButtonText>
      </AddCreditCardButton>
    </Container>
  );
};

export default AddCreditCard;
