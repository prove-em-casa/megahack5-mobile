import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Avatar = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 50px;
`;

export const InformationContainer = styled.View`
  border-bottom-color: ${colors.divider_gray};
  border-bottom-width: 1px;
  margin-top: 80px;
  padding-bottom: 17px;
`;

export const InformationBlock = styled.View`
  flex-direction: row;
  margin-bottom: 17px;
  justify-content: space-between;
  width: 340px;
  align-items: center;
  padding-right: 5px;
`;

export const DetailText = styled.Text`
  font-family: NunitoSans-SemiBold;
  font-size: 14px;
  color: ${colors.text_gray};
`;

export const AvatarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OrderContainer = styled.View`
  margin-top: 17px;
  padding-bottom: 17px;
  border-bottom-color: ${colors.divider_gray};
  border-bottom-width: 1px;
  align-items: center;
`;

export const ObsText = styled.Text`
  width: 300px;
  color: ${colors.main_red};
  font-size: 12px;
  font-family: NunitoSans-Regular;
`;

export const FinishButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.main_red};
  height: 50px;
  justify-content: center;
  align-items: center;
`;
