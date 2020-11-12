import React, { useEffect, useState } from 'react';

import UnauthenticatedNavigator from './UnauthenticatedNavigator';
import StackNavigator from './StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Navigator = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem('@sessionToken').then((token) => {
      if (token) {
        setIsLoading(false);
        setIsSignedIn(true);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  if (isSignedIn) {
    return <StackNavigator />;
  }

  return <UnauthenticatedNavigator />;
};

export default Navigator;
