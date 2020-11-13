import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Header = styled.View`
  position: absolute;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: ${colors.main_red};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-family: NunitoSans-ExtraBold;
  font-size: 14px;
`;
