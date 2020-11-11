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

  justify-content: center;
`;

export const AddressTitle = styled.Text`
  padding-bottom: 5px;
  font-family: NunitoSemiBold;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.text_gray};
`;
