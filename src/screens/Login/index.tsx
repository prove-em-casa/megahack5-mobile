import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ToastAndroid, TouchableOpacity } from 'react-native';
import api from '../../services/api';
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
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { navigate } = useNavigation();

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
        AsyncStorage.setItem('@sessionToken', response.data.token);
        navigate('Home');
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
