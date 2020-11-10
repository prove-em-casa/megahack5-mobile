import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import colors from '../../styles/colors';

export const ShopBagContainer = styled.ScrollView`
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

export const ModalContainer = styled.View`
  margin-top: 64px;
  width: 100%;
  height: 100%;
  background: ${colors.background_white};

  align-self: center;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const Address = styled.TouchableOpacity`
  width: 322px;
  min-height: 60px;
  margin-bottom: 12px;
  padding: 8px;

  border-radius: 4px;
  border-color: #bbbbc4;
  border-width: 1px;

  justify-content: center;
`;

export const Title = styled.Text`
  padding-bottom: 5px;
  font-family: NunitoSemiBold;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.text_gray};
`;

export const ListContainer = styled.View`
  padding: 10px;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const AddIcon = styled(Icon)`
  color: #ffffff;
`;

export const Product = styled.View`
  width: 322px;
  height: 90px;
  margin-bottom: 12px;
  padding: 8px;

  border-radius: 4px;
  border-color: #bbbbc4;
  border-width: 1px;

  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 64px;
  height: 64px;
`;

export const DescriptionContainer = styled.View`
  width: 250px;
  height: 100%;

  justify-content: space-around;
`;

export const PriceAndSizeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: NunitoExtraBold;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
  margin-right: 10px;
`;

export const Size = styled.Text`
  font-family: NunitoExtraBold;
  font-size: 13px;
  line-height: 15px;
  color: ${colors.secundary_gray};
  margin-left: 5px;
  margin-top: 4px;
`;

export const TrashIcon = styled(Icon)`
  position: absolute;
  right: 0;
  margin-right: 20px;
  color: ${colors.text_gray};
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

export const Card = styled.TouchableOpacity`
  width: 322px;
  min-height: 60px;
  margin-bottom: 12px;
  padding: 8px;

  border-radius: 4px;
  border-color: #bbbbc4;
  border-width: 1px;

  flex-direction: row;
  align-items: center;
`;

export const CardImage = styled.Image`
  width: 40px;
  height: 27px;
`;

export const CardDetails = styled.View`
  margin-left: 15px;
`;

export const CardOperator = styled.Text`
  font-family: NunitoSans-SemiBold;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
`;

export const CardLastDigits = styled.Text`
  font-family: NunitoSans-Regular;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.text_gray};
`;

export const ButtonContainer = styled.View`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;
