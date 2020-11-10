import React, { useState } from 'react';

import { ListContainer, AddIcon } from '../styles';
import { DefaultButton, DefaultButtonText } from '../../../styles/global';
import AddressContainer from './AddressContainer';

interface Address {
  id: number;
  address: string;
  complement?: string;
}

interface AddressesListProps {
  handleSelectAddress: (address: Address) => void;
}

const AddressesList = ({ handleSelectAddress }: AddressesListProps) => {
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

  const onSelectAddress = (id: number) => {
    const selectedAddress = addresses.find(
      (address: Address) => address.id === id,
    );

    if (selectedAddress) {
      handleSelectAddress(selectedAddress);
    }
  };

  return (
    <ListContainer>
      {addresses.map((address) => (
        <AddressContainer
          key={address.id}
          address={address.address}
          complement={address.complement}
          handleSelectAddress={() => onSelectAddress(address.id)}
        />
      ))}

      <DefaultButton>
        <AddIcon name="plus" size={25} />
        <DefaultButtonText>Cadastrar novo endereço</DefaultButtonText>
      </DefaultButton>
    </ListContainer>
  );
};

export default AddressesList;
