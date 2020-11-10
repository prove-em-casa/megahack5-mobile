import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/HomeScreen';
import MyAccount from '../screens/MyAccount';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyAccount" component={MyAccount} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
