import {Text} from 'react-native';
import React from 'react';
import {SignIn} from '../screens';

const RootNavigator = () => {
  return <>{true ? <SignIn /> : <Text>homenavigator</Text>}</>;
};

export default RootNavigator;
