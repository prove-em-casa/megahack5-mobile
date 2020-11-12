import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const AlignBlock = styled.View`
  align-self: flex-start;
  margin-left: 48px;
  margin-bottom: 35px;
`;

export const AccountText = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 14px;
  color: ${colors.text_gray};
`;

export const CreateAccountText = styled(AccountText)`
  color: ${colors.main_red};
  font-weight: bold;
`;

export const Logo = styled.Image`
  margin-bottom: 50px;
`;

export const ForgotPassText = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 10px;
  color: ${colors.secundary_gray};
  margin-top: 15px;
`;
