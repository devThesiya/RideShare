import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {storage} from '../../DataBase';

const MMKVExample = () => {
  const storeData = () => {
    storage.set('username', 'Innocent');
    storage.set('age', 25);
    storage.set('is-mmkv-fast-asf', true);
    console.log('Added');
  };
  const getData = () => {
    const username = storage.getString('username');
    const age = storage.getNumber('age');
    const isMmkvFastAsf = storage.getBoolean('is-mmkv-fast-asf');
    if (
      username !== undefined &&
      age !== undefined &&
      isMmkvFastAsf !== undefined
    ) {
      console.log('===============================');

      console.log('\t\t', username);
      console.log('\t\t', age);
      console.log('\t\t', isMmkvFastAsf);
      console.log('===============================');
    } else {
      console.log('Sorry, values not found');
    }
  };
  const updateData = () => {
    storage.set('username', 'NOT Innocent');
    storage.set('age', -23);
    storage.set('is-mmkv-fast-asf', false);
    console.log("Updated");
    
  };

  return (
    <View>
      <Text>MMKVExample</Text>
      <Button title="Click to Add" onPress={storeData}></Button>
      <Button title="Click to Fetch" onPress={getData}></Button>
      <Button title="Click to Update" onPress={updateData}></Button>
    </View>
  );
};

export default MMKVExample;
