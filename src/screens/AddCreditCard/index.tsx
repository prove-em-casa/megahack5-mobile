import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  FullLineInput,
  InputLine,
  HalfLineInput,
  DefaultButtonText,
  Header,
  HeaderText,
  StyledInput,
  Container,
} from '../../styles/global';
import { AddCreditCardContainer, AddCreditCardButton } from './styles';

const AddCreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [validity, setValidity] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cpf, setCpf] = useState('');

  const { goBack, navigate } = useNavigation();

  const handleSaveCreditCard = () => {
    // TODO: Validate inputs and store on context api
  };

  return (
    <Container>
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
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText>SELECIONE O LOCAL</HeaderText>
        <TouchableOpacity onPress={() => navigate('ShopBag')}>
          <Icon name="close-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default AddCreditCard;
