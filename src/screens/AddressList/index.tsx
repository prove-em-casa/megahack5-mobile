import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCachedFetch } from 'react-cached-fetch';

import { AddAddressIcon } from './styles';
import {
  DefaultButton,
  DefaultButtonText,
  HeaderText,
  Header,
  Container,
} from '../../styles/global';
import AddressContainer from '../../components/AddressContainer';
import { selectShopBagAddress } from '../../store/ducks/shopBag';
import { RootState } from '../../store/store';
import api from '../../services/api';

const AddressList = () => {
  const { address: selectedAddress } = useSelector(
    ({ shopBag }: RootState) => shopBag,
  );
  const [addresses, setAddresses] = useState<IAddress[]>([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/address').then((response) => {
      setAddresses(response.data);
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      api.get('/address').then((response) => {
        setAddresses(response.data);
      });
    }, []),
  );

  const onSelectAddress = (id: number) => {
    const address = addresses.find((address: IAddress) => address.id === id);

    if (address) {
      dispatch(selectShopBagAddress(address));
    }
  };

  return (
    <Container>
      <FlatList
        style={{ marginTop: 100 }}
        data={addresses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: address }: { item: IAddress }) => (
          <AddressContainer
            key={address.id}
            address={address.address}
            complement={address.complement}
            handleSelectAddress={() => onSelectAddress(address.id)}
            selectable
            selected={
              selectedAddress ? selectedAddress.id === address.id : false
            }
          />
        )}
        ListFooterComponent={
          <>
            <DefaultButton>
              <AddAddressIcon name="plus" size={25} />
              <DefaultButtonText
                onPress={() => navigation.navigate('AddressMap')}>
                Cadastrar novo endereço
              </DefaultButtonText>
            </DefaultButton>
          </>
        }
      />
      <Header>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText>ESCOLHA UM ENDEREÇO</HeaderText>
        <View />
      </Header>
    </Container>
  );
};

export default AddressList;
