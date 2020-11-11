import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreditCardList from '../screens/CreditCardList';
import AddressList from '../screens/AddressList';
import AddCreditCard from '../screens/AddCreditCard';

import colors from '../styles/colors';
import TabNavigator from './TabNavigator';
import OrderStatusWaiting from '../screens/OrderStatusWaiting';
import OrderStatusCanceled from '../screens/OrderStatusCanceled';
import OrderStatusTrying from '../screens/OrderStatusTrying';
import AddressMap from '../screens/AddressMap';

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
        options={{ headerTitle: 'CARTÕES DE CRÉDITO' }}
      />
      <Stack.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{ headerTitle: 'CADASTRAR CARTÃO' }}
      />
      <Stack.Screen
        name="AddressList"
        component={AddressList}
        options={{ headerTitle: 'ENDEREÇOS DE ENTREGA' }}
      />
      <Stack.Screen
        name="OrderStatusWaiting"
        component={OrderStatusWaiting}
        options={{ headerTitle: 'ACOMPANHE SEU PEDIDO' }}
      />
      <Stack.Screen
        name="OrderStatusCanceled"
        component={OrderStatusCanceled}
        options={{ headerTitle: 'PEDIDO N° 940157' }}
      />
      <Stack.Screen
        name="OrderStatusTrying"
        component={OrderStatusTrying}
        options={{ headerTitle: 'ACOMPANHE SEU PEDIDO' }}
      />
      <Stack.Screen
        name="AddressMap"
        component={AddressMap}
        options={{ headerTitle: 'CADASTRAR ENDEREÇO' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
