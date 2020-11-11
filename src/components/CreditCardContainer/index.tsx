import React from 'react';

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
}

const CreditCardContainer = ({
  lastDigits,
  handleSelectCreditCard,
}: CreditCardContainerProps) => {
  return (
    <CreditCard onPress={handleSelectCreditCard}>
      <CreditCardImage source={visaLogo} />

      <CreditCardDetails>
        <CreditCardOperator>Visa</CreditCardOperator>
        <CreditCardLastDigits>**** {lastDigits}</CreditCardLastDigits>
      </CreditCardDetails>
    </CreditCard>
  );
};

export default CreditCardContainer;
