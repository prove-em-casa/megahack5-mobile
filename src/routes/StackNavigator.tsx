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
import OrderStatusConcluded from '../screens/OrderStatusConcluded';
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';

export type StackNavigatorParamList = {
  Home: undefined;
  CreditCardList: undefined;
  AddCreditCard: undefined;
  AddressList: undefined;
  OrderStatusWaiting: undefined;
  OrderStatusTrying: undefined;
  OrderStatusCanceled: undefined;
  OrderStatusConcluded: undefined;
  AddressMap: undefined;
  ProductList: { shop: IShop };
  ProductDetails: { product: IProduct };
};

const Stack = createStackNavigator<StackNavigatorParamList>();

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
        name="OrderStatusConcluded"
        component={OrderStatusConcluded}
        options={{ headerTitle: 'DETALHES DO PEDIDO' }}
      />
      <Stack.Screen
        name="AddressMap"
        component={AddressMap}
        options={{ headerTitle: 'CADASTRAR ENDEREÇO' }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{ headerTitle: 'NOME DA LOJA' }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerTitle: 'DETALHES DO PRODUTO' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
