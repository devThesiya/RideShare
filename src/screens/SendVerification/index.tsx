import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Button, Input} from '../../components';

const SendVerification = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.TitleText}>Verification email or phone number</Text>
      </View>
      <Input placeholder={'Email or phone number'} />
      <View style={styles.ButtonContainer}>
        <Button title={'Send OTP'} NavigateTo={''} onClick={()  => {}}/>
      </View>
    </View>
  );
};


export default SendVerification;


const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,

  },
  TitleText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
  ButtonContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 25 ,
    // marginTop: height - 400,
  }
});
