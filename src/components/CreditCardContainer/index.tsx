import React from 'react';
import { CheckBox } from 'react-native-elements';

import {
  CreditCard,
  CreditCardImage,
  CreditCardDetails,
  CreditCardOperator,
  CreditCardLastDigits,
} from './styles';

const visaLogo = require('../../../assets/img/visa_logo.png');

interface CreditCardContainerProps {
  lastDigits: number;
  handleSelectCreditCard?: () => void;
  selectable?: boolean;
  selected?: boolean;
}

const CreditCardContainer = ({
  lastDigits,
  handleSelectCreditCard,
  selectable,
  selected,
}: CreditCardContainerProps) => {
  return (
    <CreditCard onPress={handleSelectCreditCard}>
      {selectable && <CheckBox checked={!!selected} />}

      <CreditCardImage source={visaLogo} />

      <CreditCardDetails>
        <CreditCardOperator>Visa</CreditCardOperator>
        <CreditCardLastDigits>**** {lastDigits}</CreditCardLastDigits>
      </CreditCardDetails>
    </CreditCard>
  );
};

export default CreditCardContainer;
