import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface ButtonProp {
  title: string;
  NavigateTo: string;
}

const Button = ({title, NavigateTo}: ButtonProp) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    // marginTop: 'auto',
    width: width - 40,
    borderRadius: 8,
    backgroundColor: '#008955',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    // borderWidth: 1,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
});
