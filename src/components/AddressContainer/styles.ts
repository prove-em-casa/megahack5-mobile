import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Address = styled.TouchableOpacity`
  width: 322px;
  min-height: 60px;
  margin-bottom: 12px;
  padding: 8px;

  border-radius: 4px;
  border-color: #bbbbc4;
  border-width: 1px;

  flex-direction: row;
  justify-content: center;
`;

export const AddressDescription = styled.View`
  width: 270px;
  margin-left: -15px;
  justify-content: center;
`;

export const AddressTitle = styled.Text`
  font-family: NunitoSemiBold;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.text_gray};
`;

export const AddressComplement = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 12px;
  color: ${colors.text_gray};
`;
