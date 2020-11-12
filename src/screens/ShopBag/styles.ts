import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const ShopBagContainer = styled.View`
  margin-top: 64px;
  width: 100%;
`;

export const SessionContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.divider_gray};
  width: 100%;

  align-items: center;
`;

export const SessionTitle = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 12px;
  padding: 8px 0;
  color: ${colors.text_gray};
  margin-left: 30px;
`;

export const NavigationLink = styled.Text`
  padding-bottom: 20px;
  font-family: NunitoSemiBold;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.main_red};
`;

export const DeliveryTax = styled.Text`
  font-family: NunitoExtraBold;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
  margin-right: 10px;
`;

export const PriceContainer = styled.View`
  width: 100%;
  height: 29px;
  padding-right: 10px;
  padding-left: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalPrice = styled.Text`
  font-family: NunitoExtraBold;
  font-size: 16px;
  line-height: 22px;
  color: ${colors.text_gray};
  margin-right: 10px;
`;

export const LargeSessionTitle = styled.Text`
  font-family: NunitoSans-SemiBold;
  font-size: 14px;
  line-height: 19px;
  padding: 8px 0;
  color: ${colors.text_gray};
  margin-left: 30px;
`;

export const DisclaimerText = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 10px;
  line-height: 11px;
  padding: 8px 0;
  color: ${colors.main_red};
`;

export const ButtonContainer = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;
