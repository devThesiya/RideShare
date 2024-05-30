import {View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

interface InputProps {
  placeholder: string;
}

const Input = ({placeholder}: InputProps) => {
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      {/* <Text>TextInput</Text> */}
      <TextInput
        onChangeText={setInput}
        value={input}
        placeholder={placeholder}
        keyboardType="email-address"
        style={styles.InputText}
        // autoCapitalize='none'
        placeholderTextColor={'#D0D0D0'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    // alignItems:  'center',
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
    borderColor: '#B8B8B8'
  },
  InputText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#414141'
  }
});
