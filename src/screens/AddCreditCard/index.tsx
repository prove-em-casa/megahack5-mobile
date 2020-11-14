import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import NavigationHeader from '../../components/NavigationHeader';
import api from '../../services/api';

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

  const { goBack } = useNavigation();

  const handleSaveCreditCard = () => {
    const last_digits = cardNumber.toString().substring(cardNumber.length - 4);

    api
      .post('/creditCard/create', {
        card_number: cardNumber,
        last_digits,
        CVV: cvv,
        validity_date: validity,
        CPF: cpf,
        owner_name: cardHolder,
      })
      .then(() => {
        ToastAndroid.show('Novo cartão cadastrado!', ToastAndroid.SHORT);
        goBack();
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(
          'Não foi possivel cadastrar esse cartão',
          ToastAndroid.SHORT,
        );
      });
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
