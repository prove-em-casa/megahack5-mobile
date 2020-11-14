import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Animated,
  ToastAndroid,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { Container, HeaderText, Header } from '../../styles/global';
import colors from '../../styles/colors';
import {
  InputBlock,
  ResultContainer,
  ResultText,
  SearchIcon,
  SearchInput,
} from './styles';

import geocoder from '../../services/geocoder';
import api from '../../services/api';

const markerIcon = require('../../../assets/img/marker.png');

interface ICoords {
  latitude: number;
  longitude: number;
}

const AddressMap = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [address, setAddress] = useState<string>();
  const [selectedAddress, setSelectedAddress] = useState<string>();

  const upAnim = useRef(new Animated.Value(0)).current;

  const { goBack, navigate } = useNavigation();

  useEffect(() => {
    Geolocation.getCurrentPosition(({ coords }) =>
      setRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.0021,
      }),
    );
  }, []);

  function animateInput() {
    Animated.timing(upAnim, {
      toValue: -50,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  function setMarkerPosition(coords: ICoords) {
    setPosition(coords);
    setLocationName(coords);
    animateInput();
  }

  async function setLocationName(coords?: ICoords) {
    try {
      const response = await geocoder.from(coords);
      const [
        number,
        street,
        neighboorhood,
      ] = response.results[0].address_components;

      console.log(response.results);

      setSelectedAddress(
        `${street.long_name}, ${number.long_name} - ${neighboorhood.long_name}`,
      );
    } catch (error) {
      ToastAndroid.show(
        'Não foi possivel encontrar esse local',
        ToastAndroid.SHORT,
      );
      console.log(error);
    }
  }

  async function setLocationCoords() {
    try {
      const response = await geocoder.from(address);
      const { lat, lng } = response.results[0].geometry.location;
      setRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.0021,
      });
      setPosition({ latitude: lat, longitude: lng });
      setLocationName({ latitude: lat, longitude: lng });
      animateInput();
    } catch (error) {
      ToastAndroid.show(
        'Não foi possivel encontrar esse local',
        ToastAndroid.SHORT,
      );
      console.log(error);
    }
  }

  async function registerAddress() {
    api
      .post('/address/create', {
        address: selectedAddress,
        latitude: position.latitude,
        longitude: position.longitude,
      })
      .then(() => {
        ToastAndroid.show(
          'Endereço cadastrado com sucesso',
          ToastAndroid.SHORT,
        );
        goBack();
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        initialRegion={region}
        region={region}
        loadingEnabled
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
        onPress={({ nativeEvent }) => {
          setMarkerPosition({
            latitude: nativeEvent.coordinate.latitude,
            longitude: nativeEvent.coordinate.longitude,
          });
        }}>
        <Marker
          style={{ width: 10, height: 10 }}
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
          icon={markerIcon}
        />
      </MapView>
      <InputBlock
        style={{
          transform: [{ translateY: upAnim }],
        }}>
        <SearchInput
          value={address}
          onChangeText={(address) => setAddress(address)}
          placeholder="Ou procure por aqui..."
        />
        <SearchIcon onPress={setLocationCoords}>
          <Icon name="search-outline" size={26} color={colors.secundary_gray} />
        </SearchIcon>
      </InputBlock>
      <ResultContainer
        style={{
          transform: [{ translateY: upAnim }],
        }}>
        <ResultText>{selectedAddress}</ResultText>
      </ResultContainer>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText>SELECIONE O LOCAL</HeaderText>
        {selectedAddress ? (
          <TouchableOpacity onPress={registerAddress}>
            <Icon name="checkmark-sharp" size={26} color="#fff" />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </Header>
    </Container>
  );
};

export default AddressMap;
