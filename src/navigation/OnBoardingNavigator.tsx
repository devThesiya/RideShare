import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { OnBoarding1, OnBoarding2, OnBoarding3 } from '../screens/AuthScreens';
import { ONBOARDING1, ONBOARDING2, ONBOARDING3 } from './routes';

const Stack = createNativeStackNavigator();

const OnBoardingNavigator = () => {
  const screens = [
    {
      name: ONBOARDING1,
      component: OnBoarding1,
      options: {headerShown: true},
    },
    {
      name: ONBOARDING2,
      component: OnBoarding2,
      options: {headerShown: true},
    },
    {
      name: ONBOARDING3,
      component: OnBoarding3,
      options: {headerShown: true},
    },
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ONBOARDING1}
        screenOptions={{
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerBackTitleVisible: true,
        }}>
        {screens?.map(screen => {
          return (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default OnBoardingNavigator;
