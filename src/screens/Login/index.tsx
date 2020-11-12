import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  DefaultButton,
  DefaultButtonText,
  StyledInput,
} from '../../styles/global';

import {
  AccountText,
  AlignBlock,
  CreateAccountText,
  ForgotPassText,
} from './styles';

const Login = () => {
  return (
    <Container>
      <AlignBlock>
        <AccountText>Ainda não tem uma conta?</AccountText>
        <TouchableOpacity>
          <CreateAccountText>Criar Conta</CreateAccountText>
        </TouchableOpacity>
      </AlignBlock>
      <StyledInput placeholder="E-mail" />
      <StyledInput placeholder="Senha" style={{ marginBottom: 48 }} />
      <DefaultButton>
        <DefaultButtonText>ENTRAR</DefaultButtonText>
      </DefaultButton>
      <TouchableOpacity>
        <ForgotPassText>Esqueceu sua senha?</ForgotPassText>
      </TouchableOpacity>
    </Container>
  );
};

export default Login;
