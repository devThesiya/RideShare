import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Input} from '../../components';
// import { ic_Apple, ic_Facebook, ic_Gmail } from '../../assets/icons';
import ICGmail from '../../assets/icons/ic_Gmail.svg';
import ICFaceBook from '../../assets/icons/ic_Facebook.svg';
import ICApple from '../../assets/icons/ic_Apple.svg';

const SignIn = () => {
  return (
    <View>
      <View style={styles.TitleContainer}>
        <Text style={styles.TitleText}>
          Sign in with your email or phone number
        </Text>
      </View>
      <View style={{width: '100%'}}>
        <View style={{marginBottom: 18}}>
          <Input placeholder={'Enter or Phone Number'} />
        </View>
        <View style={{}}>
          <Input placeholder={'Enter Your Password'} />
        </View>
        <View style={{marginLeft: 'auto', marginRight: 20, marginTop: 10}}>
          <Text style={{color: '#F44336', fontFamily: 'Poppins-Medium'}}>
            Forget password?
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Button title={'Sign Up'} NavigateTo={''} onClick={() => {}} />
        </View>
        <View
          style={{
            borderTopWidth: 1,
            marginTop: 35,
            marginHorizontal: 20,
            borderColor: '#B8B8B8',
          }}></View>
        <View style={styles.OtherOptionContainer}>
          <ICGmail height={26} width={26} />
          <Text style={styles.OtherOptionText}>Sign up with Gmail</Text>
        </View>
        <View style={styles.OtherOptionContainer}>
          <ICFaceBook height={26} width={26} />
          <Text style={styles.OtherOptionText}>Sign up with Facebook</Text>
        </View>
        <View style={styles.OtherOptionContainer}>
          <ICApple height={26} width={26} />
          <Text style={styles.OtherOptionText}>Sign up with Apple</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <Text style={{fontSize: 16, fontFamily: 'Poppins-Medium', color: '#5A5A5A'}}>
            Don't have an account?<Text style={{color: '#008955'}}> Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  TitleText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
  TitleContainer: {
    // borderWidth: 1,

    marginHorizontal: 20,
    marginBottom: 40,
  },
  OtherOptionContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#D0D0D0',
    marginTop: 25,
  },
  OtherOptionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#5A5A5A',
    marginLeft: 10,
  },
});
