import React from 'react';
import { CheckBox } from 'react-native-elements';

import {
  Address,
  AddressDescription,
  AddressTitle,
  AddressComplement,
} from './styles';

interface AddressContainerProps {
  address: string;
  handleSelectAddress?: () => void;
  complement?: string;
  selectable?: boolean;
  selected?: boolean;
}

const AddressContainer = ({
  address,
  complement,
  handleSelectAddress,
  selectable,
  selected,
}: AddressContainerProps) => {
  return (
    <Address onPress={handleSelectAddress}>
      {selectable && <CheckBox checked={!!selected} />}

      <AddressDescription>
        <AddressTitle>{address}</AddressTitle>

        {complement && <AddressComplement>{complement}</AddressComplement>}
      </AddressDescription>
    </Address>
  );
};

export default AddressContainer;
