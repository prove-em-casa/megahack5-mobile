import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CachedFetchProvider } from 'react-cached-fetch';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';

import Navigator from './src/routes';
import api from './src/services/api';
import colors from './src/styles/colors';
import { store, persistor } from './src/store/store';
import SplashScreen from 'react-native-splash-screen';

// SplashScreen.show();

const App = () => {
  const [loaded] = Font.useFonts({
    NunitoRegular: require('./assets/fonts/NunitoSans-Regular.ttf'),
    NunitoSemiBold: require('./assets/fonts/NunitoSans-SemiBold.ttf'),
    NunitoExtraBold: require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
  });

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
