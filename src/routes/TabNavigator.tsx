import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ShopList from '../screens/ShopList';
import MyAccount from '../screens/MyAccount';
import ShopBag from '../screens/ShopBag';
import OrderList from '../screens/OrderList';
import colors from '../styles/colors';
import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#fff"
      barStyle={{ backgroundColor: colors.main_red }}>
      <Tab.Screen
        name="ShopList"
        options={{
          title: 'Lojas',
          tabBarIcon: ({ color }) => (
            <IconI name="home-sharp" color={color} size={24} />
          ),
        }}
        component={ShopList}
      />
      <Tab.Screen
        name="OrderList"
        component={OrderList}
        options={{
          title: 'Meus Pedidos',
          tabBarIcon: ({ color }) => (
            <IconE name="shop" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        options={{
          title: 'Minha Conta',
          tabBarIcon: ({ color }) => (
            <IconM name="account" color={color} size={24} />
          ),
        }}
        component={MyAccount}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
