import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ScrollContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  width: 280px;
  height: 40px;

  border-width: 1px;
  border-color: #d3d3de;

  font-size: 12px;
  font-family: NunitoSans-Regular;
  color: ${colors.text_gray};
`;

export const InputBlock = styled.View`
  margin-top: 101px;
  margin-bottom: 41px;
  flex-direction: row-reverse;
  align-items: center;
`;
