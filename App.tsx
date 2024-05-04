import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <RootNavigator/>
    </SafeAreaView>
  );
}

export default App;
