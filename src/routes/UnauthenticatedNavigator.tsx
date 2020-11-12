import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import StackNavigator from './StackNavigator';

const Stack = createStackNavigator();

const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        component={Register}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={StackNavigator}
      />
    </Stack.Navigator>
  );
};

export default UnauthenticatedNavigator;
