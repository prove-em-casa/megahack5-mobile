import React from 'react';

import { Address, Title } from '../styles';
import { BodyText } from '../../../styles/global';

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
      <Title>{address}</Title>

      {complement && <BodyText>{complement}</BodyText>}
    </Address>
  );
};

export default AddressContainer;
