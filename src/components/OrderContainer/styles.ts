import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import colors from '../../styles/colors';

export const Order = styled.TouchableOpacity`
  width: 332px;
  height: 90px;
  margin-bottom: 12px;
  padding: 8px;

  border-radius: 4px;
  border-color: #bbbbc4;
  border-width: 1px;

  flex-direction: row;
  align-items: center;
`;

export const OrderShopImage = styled.Image`
  width: 39px;
  height: 39px;
`;

export const OrderDescriptionContainer = styled.View`
  width: 272px;
  height: 100%;
  margin-left: 20px;

  justify-content: center;
`;

export const DescriptionLine = styled.View`
  flex-direction: row;
`;

export const DescriptionLabel = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.text_gray};
`;

export const DescriptionValue = styled.Text`
  margin-left: 4px;
  font-family: NunitoSans-Regular;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.text_light_gray};
`;

export const CanceledStatusText = styled(DescriptionValue)`
  color: ${colors.main_red};
`;

export const TryingStatusText = styled(DescriptionValue)`
  color: ${colors.main_green};
`;

export const WaitingStatusText = styled(DescriptionValue)`
  color: ${colors.status_yellow};
`;

export const ArrowIcon = styled(Icon)`
  position: absolute;
  right: 0;
  margin-right: 20px;
  color: ${colors.main_red};
`;
