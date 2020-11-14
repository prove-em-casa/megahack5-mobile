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
import { Header, HeaderText } from '../styles/global';
import ShopBag from '../screens/ShopBag';
import OrderDetails from '../screens/OrderDetails';

export type StackNavigatorParamList = {
  Home: undefined;
  ShopBag: undefined;
  CreditCardList: undefined;
  AddCreditCard: undefined;
  AddressList: undefined;
  OrderDetails: { products: IProduct[]; freight: number };
  OrderStatusWaiting: { order_id: number };
  OrderStatusTrying: { order_id: number };
  OrderStatusCanceled: { order_id: number };
  OrderStatusConcluded: { order_id: number };
  AddressMap: undefined;
  ProductList: { shop: IShop };
  ProductDetails: { product: IProduct };
};

const Stack = createStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="CreditCardList" component={CreditCardList} />
      <Stack.Screen name="ShopBag" component={ShopBag} />
      <Stack.Screen name="AddCreditCard" component={AddCreditCard} />
      <Stack.Screen name="AddressList" component={AddressList} />
      <Stack.Screen name="OrderStatusWaiting" component={OrderStatusWaiting} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen
        name="OrderStatusCanceled"
        component={OrderStatusCanceled}
      />
      <Stack.Screen name="OrderStatusTrying" component={OrderStatusTrying} />
      <Stack.Screen
        name="OrderStatusConcluded"
        component={OrderStatusConcluded}
      />
      <Stack.Screen name="AddressMap" component={AddressMap} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
