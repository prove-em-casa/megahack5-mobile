import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AddressesListContainer, AddAddressIcon } from './styles';
import { DefaultButton, DefaultButtonText } from '../../styles/global';
import AddressContainer from '../../components/AddressContainer';

interface Address {
  id: number;
  address: string;
  complement?: string;
}

const AddressList = () => {
  const [addresses] = useState<Address[]>([
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

  const onSelectAddress = (id: number) => {
    const selectedAddress = addresses.find(
      (address: Address) => address.id === id,
    );

    if (selectedAddress) {
      // TODO: Set on context api
    }
  };

  return (
    <AddressesListContainer>
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: address }: { item: Address }) => (
          <AddressContainer
            key={address.id}
            address={address.address}
            complement={address.complement}
            handleSelectAddress={() => onSelectAddress(address.id)}
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
