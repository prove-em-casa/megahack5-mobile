import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import UnauthenticatedNavigator from './UnauthenticatedNavigator';
import StackNavigator from './StackNavigator';
import { RootState } from '../store/store';
import { setJwtHeader } from '../services/api';

const Navigator = () => {
  const { session_token } = useSelector(({ auth }: RootState) => auth);

  useEffect(() => {
    if (!session_token) {
      return;
    }

    setJwtHeader(session_token);
  }, [session_token]);

  if (session_token) {
    return <StackNavigator />;
  }

  return <UnauthenticatedNavigator />;
};

export default Navigator;
