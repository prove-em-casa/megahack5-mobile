import styled from 'styled-components/native';
import colors from '../../../../styles/colors';

export const Shop = styled.View`
  border-radius: 4px;
  border-color: #bbbbc4;
  border-width: 1px;
  width: 322px;
  height: 90px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-family: NunitoSans-SemiBold;
  font-size: 14px;
  /* padding: 5px 0; */
  color: ${colors.text_gray};
`;

export const Description = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 12px;
  padding: 8px 0;
  color: ${colors.secundary_gray};
`;

export const OpenHours = styled.Text`
  color: ${colors.main_green};
  font-family: NunitoSans-Regular;
  font-size: 10px;
`;
