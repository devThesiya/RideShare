import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ONBOARDING1, ONBOARDING2, ONBOARDING3} from './routes';
import {CardStyleInterpolators} from '@react-navigation/stack';
import { OnBoarding1 } from '../screens';

const Stack = createStackNavigator();

const OnBoardingNavigator = () => {
  const screens = [
    {
      name: ONBOARDING1,
      component: OnBoarding1,
      options: {},
    },
    {
      name: ONBOARDING2,
      component: OnBoarding2,
      options: {},
    },
    {
      name: ONBOARDING3,
      component: OnBoarding3,
      options: {},
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
              options={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default OnBoardingNavigator;
