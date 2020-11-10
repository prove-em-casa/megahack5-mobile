import styled from 'styled-components/native';

import colors from '../../../../styles/colors';

export const Product = styled.View`
  border-radius: 4px;
  border-color: ${colors.secundary_gray};
  border-width: 1px;

  width: 164px;
  height: 237px;

  margin: 4px 7.5px;

  justify-content: center;
  align-items: center;
`;

export const AvailableText = styled.Text`
  font-family: NunitoSans-Regular;
  color: ${colors.main_green};
  font-size: 10px;
`;

export const DescriptionText = styled.Text`
  font-family: NunitoSans-Regular;
  color: ${colors.text_gray};
  font-size: 12;
  margin-top: 3px;
  margin-bottom: 10px;
`;

export const PriceText = styled.Text`
  font-size: 14px;
  color: ${colors.text_gray};
  font-family: NunitoSans-ExtraBold;
`;
