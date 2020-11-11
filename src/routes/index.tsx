import React, { useState } from 'react';

import UnauthenticatedNavigator from './UnauthenticatedNavigator';
import StackNavigator from './StackNavigator';

const Navigator = () => {
  const [isSignedIn] = useState(true);

  if (isSignedIn) {
    return <StackNavigator />;
  }

  return <UnauthenticatedNavigator />;
};

export default Navigator;
