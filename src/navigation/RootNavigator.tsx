import {Text} from 'react-native';
import React from 'react';
import {WelComeScreen} from '../screens';

const RootNavigator = () => {
  return <>{true ? <WelComeScreen /> : <Text>homenavigator</Text>}</>;
};

export default RootNavigator;
