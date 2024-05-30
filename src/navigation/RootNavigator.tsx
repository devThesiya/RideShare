import {Text} from 'react-native';
import React from 'react';
import {SendVerification, VerifyOTP, WelComeScreen} from '../screens';


const RootNavigator = () => {
  return <>{true ? <VerifyOTP/> : <Text>homenavigator</Text>}</>;
};

export default RootNavigator;
