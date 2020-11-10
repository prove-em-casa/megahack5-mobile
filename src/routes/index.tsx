import React, { useState } from 'react';

import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';

const Navigator = () => {
  const [isSignedIn] = useState(false);

  if (isSignedIn) {
    return <TabNavigator />;
  }

  return <StackNavigator />;
};

export default Navigator;
