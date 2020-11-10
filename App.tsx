import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CachedFetchProvider } from 'react-cached-fetch';
import * as Font from 'expo-font';

import Navigator from './src/routes';
import api from './src/services/api';
import colors from './src/styles/colors';
import { isLoaded } from 'expo-font';

const App = () => {
  const [loaded] = Font.useFonts({
    NunitoRegular: require('./assets/fonts/NunitoSans-Regular.ttf'),
    NunitoSemiBold: require('./assets/fonts/NunitoSans-SemiBold.ttf'),
    NunitoExtraBold: require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
  });

  if (!isLoaded('NunitoRegular')) {
    return null;
  }

  return (
    <NavigationContainer>
      <CachedFetchProvider
        globalOptions={{
          fetcher: async (route: string) => {
            const { data } = await api.get(route);
            return data;
          },
        }}>
        <StatusBar backgroundColor={colors.main_red} />
        <Navigator />
      </CachedFetchProvider>
    </NavigationContainer>
  );
};

export default App;
