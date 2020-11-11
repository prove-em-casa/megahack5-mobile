import styled from 'styled-components/native';
import colors from '../../../../styles/colors';

export const ItemImage = styled.Image`
  width: 65px;
  height: 65px;
`;

export const ItemContainer = styled.View`
  width: 332px;
  height: 77px;
  flex-direction: row;
  border: 1px solid ${colors.secundary_gray};
  border-radius: 4px;
  padding: 8px 18px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 12px;
`;

export const ItemPrice = styled.Text`
  font-family: NunitoSans-ExtraBold;
  font-size: 14px;
  color: ${colors.text_gray};
  margin-right: 13px;
`;

export const ItemDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemSize = styled.Text`
  font-size: 10px;
  font-family: NunitoSans-Regular;
  color: ${colors.text_gray};
  margin-right: 6px;
`;

export const SizeLetter = styled(ItemSize)`
  font-size: 13px;
  font-weight: bold;
`;
