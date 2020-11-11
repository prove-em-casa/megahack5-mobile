import styled from 'styled-components/native';

import colors from '../../styles/colors';
import { DefaultButton } from '../../styles/global';

export const OrderStatusContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const OrderStatusBackdrop = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  flex: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.47);
`;

export const OrderStatusCanceledTextContainer = styled.View`
  margin-top: 40px;
  align-self: flex-start;
  margin-left: 35px;

  background-color: ${colors.main_red};
  width: 81px;
  height: 21px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const OrderStatusText = styled.Text`
  font-family: NunitoSans-Regular;
  color: #ffffff
  font-size: 12px;
  line-height: 16px;
`;

export const SessionContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.divider_gray};
  width: 100%;
  padding-bottom: 20px;
  margin-top: 20px;

  align-items: center;
`;

export const InformationLine = styled.View`
  width: 100%;
  height: 29px;
  padding-right: 10px;
  padding-left: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InformationLabel = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.text_gray};
`;

export const InformationValue = styled.Text`
  font-family: NunitoSans-SemiBold;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
`;

export const Price = styled.Text`
  font-family: NunitoSans-ExtraBold;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
`;

export const TotalPriceLabel = styled.Text`
  font-family: NunitoSans-SemiBold;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
`;

export const TotalPrice = styled.Text`
  font-family: NunitoSans-ExtraBold;
  font-size: 16px;
  line-height: 22px;
  color: ${colors.text_gray};
`;

export const DisclaimerText = styled.Text`
  margin-left: 10px;
  font-family: NunitoSans-Regular;
  font-size: 10px;
  line-height: 11px;
  padding: 8px 0;
  color: ${colors.main_red};
  align-self: flex-start;
`;

export const OrderStatusBottomSheet = styled.View`
  width: 348px;
  height: 306px;
  align-self: center;
  padding: 5px;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #fffdfd;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 7;

  align-items: center;
`;

export const OrderStatusBottomSheetIndicator = styled.View`
  width: 50px;
  height: 0px;
  margin-top: 13px;

  border: 2px solid #000000;
`;

export const OrderStatusBottomSheetContent = styled.View`
  margin-top: 20px;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const DriverInformationContainer = styled.View`
  width: 100%;
  padding: 10px;

  flex-direction: row;
  align-items: center;
`;

export const DriverAvatar = styled.Image`
  width: 68px;
  height: 68px;
`;

export const DriverName = styled.Text`
  margin-left: 8px;
  font-family: NunitoSans-SemiBold;
  font-size: 10px;
  line-height: 14px;
  color: ${colors.text_gray};
`;

export const VehicleContainer = styled.View`
  position: absolute;
  right: 0;
  margin-right: 10px;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
`;

export const CancelButton = styled(DefaultButton)`
  margin-top: 10px;
  width: 134px;
  height: 30px;
`;
