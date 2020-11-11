import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreditCardList from '../screens/CreditCardList';
import AddressList from '../screens/AddressList';
import AddCreditCard from '../screens/AddCreditCard';

import colors from '../styles/colors';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.main_red,
        },
        headerTintColor: colors.background_white,
      }}>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreditCardList"
        component={CreditCardList}
        options={{ headerTitle: 'Cartões de crédito' }}
      />
      <Stack.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{ headerTitle: 'Cadastrar cartão' }}
      />
      <Stack.Screen

        name="AddressList"
        component={AddressList}
        options={{ headerTitle: 'Endereços de entrega' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
