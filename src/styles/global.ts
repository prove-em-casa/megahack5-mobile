import styled from 'styled-components/native';

import colors from './colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background_white};
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

export const StyledInput = styled.TextInput`
  width: 280px;
  height: 40px;
  margin-bottom: 16px;
  border: 1px solid ${colors.secundary_gray};
  border-radius: 4px;
  padding-left: 7px;
  font-family: NunitoSans-Regular;
  font-size: 12px;
  color: ${colors.secundary_gray};
  background-color: #fff;
`;

export const DefaultButton = styled.TouchableOpacity`
  background: ${colors.main_red};
  border-radius: 18px;
  width: 280px;
  height: 40px;
  align-self: center;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DefaultButtonText = styled.Text`
  font-family: NunitoSans-SemiBold;
  font-size: 16px;
  line-height: 21.82px;
  color: #ffffff;
`;

export const FullLineInput = styled.TextInput`
  border: 1px solid #d3d3de;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  background: #fff;
  margin-top: 10px;
`;

export const InputLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 280px;
`;

export const HalfLineInput = styled(StyledInput)`
  width: 48%;
`;
