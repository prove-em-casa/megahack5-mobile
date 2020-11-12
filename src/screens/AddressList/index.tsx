import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { AddressesListContainer, AddAddressIcon } from './styles';
import { DefaultButton, DefaultButtonText } from '../../styles/global';
import AddressContainer from '../../components/AddressContainer';
import { selectShopBagAddress } from '../../store/ducks/shopBag';
import { RootState } from '../../store/store';

const AddressList = () => {
  const { address: selectedAddress } = useSelector(
    ({ shopBag }: RootState) => shopBag,
  );
  const [addresses] = useState<IAddress[]>([
    {
      id: 1,
      address: 'Avenida Tancredo Neves, 584, Centro, São Paulo, SP',
      complement: 'ap 33, bloco 1',
    },
    {
      id: 2,
      address:
        'Avenida Juscelino Kubitscheck, 111, Vila Madalena, São Paulo, SP',
    },
  ]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSelectAddress = (id: number) => {
    const address = addresses.find((address: IAddress) => address.id === id);

    if (address) {
      dispatch(selectShopBagAddress(address));
    }
  };

  return (
    <AddressesListContainer>
      <FlatList
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
    </AddressesListContainer>
  );
};

export default AddressList;
