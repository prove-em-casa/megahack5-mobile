import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const DetailsContainer = styled.View`
  width: 164px;
  height: 237px;
  border-color: ${colors.secundary_gray};
  border-radius: 4px;
  border-width: 1px;
  background-color: #fff;
  padding: 15px 6px;
  justify-content: center;
  align-items: center;
`;

export const AvailableText = styled.Text`
  color: ${colors.main_green};
  font-size: 10px;
`;

export const PriceText = styled.Text`
  font-family: NunitoSans-ExtraBold;
  font-size: 14px;
  color: ${colors.text_gray};
`;

export const SizeBlock = styled.View`
  margin-top: 32px;
  flex-direction: row;
  margin-bottom: 100px;
`;

export const SizesContainer = styled.View`
  width: 38px;
  height: 40px;
  border-color: ${colors.secundary_gray};
  border-radius: 4px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin: 0 6.5px;
`;
