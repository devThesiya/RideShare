import {Text} from 'react-native';
import React from 'react';

const RootNavigator = () => {
  return <>{true ? <Text>onBoarding</Text> : <Text>homenavigator</Text>}</>;
};

export default RootNavigator;
