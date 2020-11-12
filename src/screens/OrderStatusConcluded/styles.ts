import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const OrderStatusConcludedContainer = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const BottomBorderedSessionContainer = styled.View`
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 20px;

  border-bottom-width: 1px;
  border-bottom-color: ${colors.divider_gray};
`;

export const FullBorderedSessionContainer = styled.View`
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-bottom: 20px;

  border-bottom-width: 1px;
  border-bottom-color: ${colors.divider_gray};
  border-top-width: 1px;
  border-top-color: ${colors.divider_gray};
`;

export const LineContainer = styled.View`
  flex-direction: row;
`;

export const LineLabel = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.text_gray};
  margin-left: 30px;
  margin-bottom: 5px;
`;

export const LineValue = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.text_light_gray};
  margin-left: 5px;
`;

export const SpacedLineValue = styled(LineValue)`
  margin-left: 30px;
`;

export const CreditCardImage = styled.Image`
  width: 20.08px;
  height: 13px;
  margin-left: 30px;
  margin-top: 4px;
`;

export const TotalPriceLabel = styled(LineValue)`
  color: ${colors.text_gray};
`;

export const OrderSummaryLine = styled.View`
  width: 220px;
  flex-direction: row;
  justify-content: space-between;
`;
