import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const ProductTitle = styled.Text`
  padding-bottom: 5px;
  font-family: NunitoSemiBold;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.text_gray};
`;

export const Product = styled.View`
  width: 322px;
  height: 90px;
  margin-bottom: 12px;
  padding: 8px;

  border-radius: 4px;
  border-color: #bbbbc4;
  border-width: 1px;

  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 64px;
  height: 64px;
`;

export const ProductDescriptionContainer = styled.View`
  width: 216px;
  height: 100%;

  justify-content: space-around;
`;

export const PriceAndSizeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductPrice = styled.Text`
  font-family: NunitoExtraBold;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
  margin-right: 10px;
`;

export const ProductSize = styled.Text`
  font-family: NunitoExtraBold;
  font-size: 13px;
  line-height: 15px;
  color: ${colors.secundary_gray};
  margin-left: 5px;
  margin-top: 4px;
`;
