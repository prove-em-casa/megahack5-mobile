import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ToastAndroid, TouchableOpacity } from 'react-native';

import api, { setJwtHeader } from '../../services/api';
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
import { setSessionToken } from '../../store/ducks/auth';

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  async function authenticateUser() {
    if (!email || !password) {
      return ToastAndroid.show(
        'Por favor, preencha todos os campos',
        ToastAndroid.SHORT,
      );
    }
    api
      .post('/tokens', {
        email,
        password,
      })
      .then((response) => {
        dispatch(setSessionToken(response.data.token));
        setJwtHeader(response.data.token);
      })
      .catch(() => {
        ToastAndroid.show('E-mail ou senha inválidos', ToastAndroid.SHORT);
      });
  }

  return (
    <Container>
      <AlignBlock>
        <AccountText>Ainda não tem uma conta?</AccountText>
        <TouchableOpacity onPress={() => navigate('Register')}>
          <CreateAccountText>Criar Conta</CreateAccountText>
        </TouchableOpacity>
      </AlignBlock>
      <StyledInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="E-mail"
      />
      <StyledInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Senha"
        style={{ marginBottom: 48 }}
        secureTextEntry={true}
      />
      <DefaultButton onPress={authenticateUser}>
        <DefaultButtonText>ENTRAR</DefaultButtonText>
      </DefaultButton>
      <TouchableOpacity>
        <ForgotPassText>Esqueceu sua senha?</ForgotPassText>
      </TouchableOpacity>
    </Container>
  );
};

export default Login;
