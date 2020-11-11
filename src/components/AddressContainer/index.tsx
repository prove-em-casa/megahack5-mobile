import React from 'react';

import { Address, AddressTitle } from './styles';
import { BodyText } from '../../styles/global';

interface AddressContainerProps {
  address: string;
  handleSelectAddress?: () => void;
  complement?: string;
}

const AddressContainer = ({
  address,
  complement,
  handleSelectAddress,
}: AddressContainerProps) => {
  return (
    <Address onPress={handleSelectAddress}>
      <AddressTitle>{address}</AddressTitle>

      {complement && <BodyText>{complement}</BodyText>}
    </Address>
  );
};

export default AddressContainer;
