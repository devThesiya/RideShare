import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProp {
  title: string;
  NavigateTo: string;
  onClick(): void;
}

export const Button = ({title, NavigateTo, onClick}: ButtonProp) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ButtonTransparent = ({title, NavigateTo}: ButtonProp) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#008955',
      }}
      onPress={() => {}}>
      <Text style={{...styles.text, color: '#008955'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#008955',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
  },
});
