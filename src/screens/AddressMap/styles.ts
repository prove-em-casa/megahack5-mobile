import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const InputBlock = styled(Animated.View)`
  position: absolute;
  bottom: 20px;
  flex-direction: row-reverse;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  background-color: #fff;
  width: 350px;
  height: 60px;
  padding-left: 15px;

  border-width: 1px;
  border-radius: 4px;
  border-color: ${colors.secundary_gray};

  font-size: 14px;
  font-family: NunitoSans-Regular;
  color: ${colors.text_gray};
`;

export const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
`;

export const ResultContainer = styled(Animated.View)`
  background-color: ${colors.main_red};
  width: ${Dimensions.get('window').width + 'px'};
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -50px;
`;

export const ResultText = styled.Text`
  color: #fff;
  font-family: NunitoSans-LightBold;
  font-size: 14px;
`;
