import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  Container,
  DefaultButton,
  DefaultButtonText,
  Header,
  HeaderText,
  StyledInput,
} from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';

import { Logo } from '../Login/styles';

const appLogo = require('../../../assets/img/Logo.png');

const Register = () => {
  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText style={{ marginRight: 20 }}>CADASTRE-SE</HeaderText>
        <View />
      </Header>
      <Logo source={appLogo} />
      <StyledInput placeholder="Seu nome" />
      <StyledInput placeholder="E-mail" />
      <StyledInput placeholder="Senha" />
      <StyledInput placeholder="Confirme a senha" />
      <DefaultButton style={{ position: 'absolute', bottom: 50 }}>
        <DefaultButtonText>Confirmar</DefaultButtonText>
      </DefaultButton>
    </Container>
  );
};

export default Register;
