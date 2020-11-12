import React, { useState } from 'react';
import { ToastAndroid, TouchableOpacity, View } from 'react-native';
import {
  Container,
  DefaultButton,
  DefaultButtonText,
  Header,
  HeaderText,
  StyledInput,
} from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const Register = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPass, setConfirmPass] = useState<string>();

  const { goBack, navigate } = useNavigation();

  async function registerUser() {
    if (!name || !email || !password) {
      return ToastAndroid.show(
        'Por favor, preencha todos os campos',
        ToastAndroid.SHORT,
      );
    }
    if (confirmPass !== password) {
      return ToastAndroid.show(
        'As senhas precisam ser iguais',
        ToastAndroid.SHORT,
      );
    }

    api
      .post('/users/create', {
        name,
        email,
        password,
      })
      .then(() => {
        ToastAndroid.show('Cadastro efetuado com sucesso', ToastAndroid.SHORT);
        navigate('Login');
      })
      .catch(() => {
        ToastAndroid.show('E-mail já cadastrado', ToastAndroid.SHORT);
      });
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText style={{ marginRight: 20 }}>CADASTRE-SE</HeaderText>
        <View />
      </Header>
      <StyledInput
        placeholder="Seu nome"
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <StyledInput
        placeholder="E-mail"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <StyledInput
        placeholder="Senha"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <StyledInput
        placeholder="Confirme a senha"
        value={confirmPass}
        onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
        secureTextEntry={true}
      />
      <DefaultButton
        onPress={registerUser}
        style={{ position: 'absolute', bottom: 50 }}>
        <DefaultButtonText>Confirmar</DefaultButtonText>
      </DefaultButton>
    </Container>
  );
};

export default Register;
