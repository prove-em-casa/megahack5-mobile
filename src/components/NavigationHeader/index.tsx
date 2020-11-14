import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Header, HeaderText } from './styles';

interface NavigationHeaderProps {
  title: string;
  showGoBackButton?: boolean;
}

const NavigationHeader = ({
  title,
  showGoBackButton,
}: NavigationHeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <Header>
      {showGoBackButton ? (
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
      ) : (
          <View />
        )}
      <HeaderText>{title}</HeaderText>
      <View />
    </Header>
  );
};

export default NavigationHeader;
