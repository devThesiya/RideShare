import {Text} from 'react-native';
import React from 'react';
import OnBoardingNavigator from './OnBoardingNavigator';

const RootNavigator = () => {
  return <>{true ? <OnBoardingNavigator/> : <Text>homenavigator</Text>}</>;
};

export default RootNavigator;
