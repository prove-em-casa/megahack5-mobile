import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CachedFetchProvider } from 'react-cached-fetch';

import Navigator from './src/routes';
import api from './src/services/api';

const App = () => {
  return (
    <NavigationContainer>
      <CachedFetchProvider
        globalOptions={{
          fetcher: async (route: string) => {
            const { data } = await api.get(route);
            return data;
          },
        }}>
        <StatusBar barStyle="dark-content" />
        <Navigator />
      </CachedFetchProvider>
    </NavigationContainer>
  );
};

export default App;
