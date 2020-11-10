import React from 'react';

import {
  Card,
  CardImage,
  CardDetails,
  CardOperator,
  CardLastDigits,
} from '../styles';

const visaLogo = require('../../../../assets/img/visa_logo.png');

interface CardContainerProps {
  lastDigits: number;
  handleSelectCard?: () => void;
}

const CardContainer = ({
  lastDigits,
  handleSelectCard,
}: CardContainerProps) => {
  return (
    <Card onPress={handleSelectCard}>
      <CardImage source={visaLogo} />

      <CardDetails>
        <CardOperator>Visa</CardOperator>
        <CardLastDigits>**** {lastDigits}</CardLastDigits>
      </CardDetails>
    </Card>
  );
};

export default CardContainer;
