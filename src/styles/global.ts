import styled from 'styled-components/native';

import colors from './colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${colors.background_white};
`;

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

export const BodyText = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 12px;
  padding: 8px 0;
  color: ${colors.text_gray};
`;

export const DefaultButton = styled.TouchableOpacity`
  background: ${colors.main_red};
  border-radius: 18px;
  width: 280px;
  height: 40px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DefaultButtonText = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 16px;
  line-height: 21.82px;
  color: #ffffff;
`;