import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {img_WelcomeScreen} from '../../assets/images';
import {Button, OTPInput} from '../../components';

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
    {/* <View style={{marginTop: 150}}>
          <View style={{marginBottom: 15}}>
            <Button title={'Create an account'} NavigateTo={''} />
          </View>
          <View>
            <Button title={'Log In'} NavigateTo={''} />
          </View>
        </View> */}
    <OTPInput
      length={6}
      value={[]}
      disabled={false}
      onChange={() => {}}
    />
  </View>
);

export default WelComeScreen;
const styles = StyleSheet.create({
  container: {
    // marginTop: 'auto',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 20
  },
  ImageContainer: {
    marginTop: 50,
    marginBottom: 25,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    // borderWidth: 1,
  },
  TitleTextContainer: {
    // borderWidth: 1,
    marginBottom: 15,
  },
  SubTextContainer: {
    // borderWidth: 1
  },
  TitleText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#414141',
  },
  SubText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#A0A0A0',
  },
});
