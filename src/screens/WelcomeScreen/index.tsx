import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {img_WelcomeScreen} from '../../assets/images';
import {Button, ButtonTransparent, OTPInput} from '../../components';

const WelComeScreen = () => (
  <View style={styles.container}>
    <View style={styles.ImageContainer}>
      <Image source={img_WelcomeScreen} style={styles.image} />
    </View>
    <View style={styles.TitleTextContainer}>
      <Text style={styles.TitleText}>Welcome</Text>
    </View>
    <View style={styles.SubTextContainer}>
      <Text style={styles.SubText}>Have a better sharing experince</Text>
    </View>
    <View style={{marginTop: 150}}>
      <View style={{marginBottom: 15}}>
        <Button title={'Create an account'} NavigateTo={''} />
      </View>
      <View>
        <ButtonTransparent title={'Log In'} NavigateTo={''} />
      </View>
    </View>
  </View>
);

export default WelComeScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    marginTop: 50,
    marginBottom: 25,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 300,
  },
  TitleTextContainer: {
    marginBottom: 15,
  },
  SubTextContainer: {},
  TitleText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#414141',
  },
  SubText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#A0A0A0',
  },
});
