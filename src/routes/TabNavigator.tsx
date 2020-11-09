import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopList from '../screens/ShopList';
import MyAccount from '../screens/MyAccount';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ShopList" component={ShopList} />
      <Tab.Screen name="MyAccount" component={MyAccount} />
    </Tab.Navigator>
  )
};

export default TabNavigator;
