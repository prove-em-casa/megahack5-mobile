import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Container, HeaderText, Header } from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import colors from '../../styles/colors';
import { InputBlock, SearchIcon, SearchInput } from './styles';

const AddressMap = () => {
  return (
    <Container>
      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        region={{
          latitude: -23.4834,
          longitude: -46.4891,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <InputBlock>
        <SearchInput placeholder="Ou procure por aqui..." />
        <SearchIcon>
          <Icon name="search-outline" size={26} color={colors.secundary_gray} />
        </SearchIcon>
      </InputBlock>
      <Header>
        <TouchableOpacity>
          <Icon name="close-outline" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText style={{ marginRight: 20 }}>SELECIONE O LOCAL</HeaderText>
        <View />
      </Header>
    </Container>
  );
};

export default AddressMap;
