import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const CreditCard = styled.TouchableOpacity`
  width: 322px;
  min-height: 60px;
  margin-bottom: 12px;
  padding: 8px;

  border-radius: 4px;
  border-color: #bbbbc4;
  border-width: 1px;

  flex-direction: row;
  align-items: center;
`;

export const CreditCardImage = styled.Image`
  width: 40px;
  height: 27px;
`;

export const CreditCardDetails = styled.View`
  margin-left: 15px;
`;

export const CreditCardOperator = styled.Text`
  font-family: NunitoSans-SemiBold;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
`;

export const CreditCardLastDigits = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
`;
