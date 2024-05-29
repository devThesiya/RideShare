import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  const storeData = async () => {
    try {
      const val = {name: 'Devang', email: 'devang@gmail.com'};
      const jsonValue = JSON.stringify(val);
      await AsyncStorage.setItem('firstItem', jsonValue);
      console.log('DATA Added');
    } catch (e) {
      console.log('error', e);
    }
  };
  const updateData = async () => {
    try {
      const val = {obj1: {name: 'DEV', email: 'dev1111111111@gmail.com'}};
      const jsonValue = JSON.stringify(val);
      await AsyncStorage.setItem('firstItem', jsonValue);
      console.log('DATA Updated');
    } catch (e) {
      console.log('error', e);
    }
  };

  const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('firstItem');
      if (jsonValue) {
        console.log(JSON.parse(jsonValue));
      } else {
        console.log('No data');
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View>
      <Text>AsyncStorageExample</Text>
      <Button title="Click to Add" onPress={storeData}></Button>
      <Button title="Click to Fetch" onPress={getData}></Button>
      <Button title="Click to Update" onPress={updateData}></Button>
    </View>
  );
};

export default AsyncStorageExample;
