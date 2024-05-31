import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {Button, OTPInput} from '../../components';

const VerifyOTP = () => {
  const [value, setValue] = useState<string[]>([]);
  const getInputOTP = (newVal: string, index: number) => {
    const tempArray = [...value];
    tempArray[index] = newVal;
    setValue(tempArray);
  };
  const HandleBackSpace = (index: number) => {
    console.log('index is: ', index);
    const updatedValue = [...value];
    updatedValue.splice(index, 1);
    setValue(updatedValue);
  };
  console.log('Val in screen: ', value);

  const handleClick = () => {
    const otp = value.reduce((acc, crr) => {
      return acc + crr;
    }, '');
    console.log('OTP is: ', otp);
    console.log(typeof otp)
    if (otp === '12345') {
      console.log('YAYAY correct');
    } else {
      console.log('wrong');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -10 : 20}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.TitleContainer}>
            <Text style={styles.TitleText}>Phone verification</Text>
          </View>
          <View>
            <Text style={styles.SubText}>Enter your OTP code</Text>
          </View>
          <View style={styles.OTPContainer}>
            <OTPInput
              length={5}
              value={['1', '2', '3', '4', '5']}
              disabled={false}
              onChange={getInputOTP}
              onBackSpace={HandleBackSpace}
            />
          </View>
          <View>
            <Text style={styles.FallBackText}>
              Didn't receive code?
              <Text
                style={styles.HighlightText}
                onPress={() => {
                  console.log('clicked');
                }}>
                {' '}
                Resend again
              </Text>
            </Text>
          </View>
          <View style={styles.Button}>
            <Button title={'Verify'} NavigateTo={''} onClick={handleClick} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  TitleContainer: {
    marginBottom: 20,
  },
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
  OTPContainer: {
    marginTop: 45,
    marginBottom: 20,
    // width: '80%',
    // overflow :'hidden',
    // borderWidth: 1
  },
  FallBackText: {
    color: '#5A5A5A',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  HighlightText: {
    color: '#008955',
  },
  Button: {
    position: 'absolute',
    bottom: 25,
  },
});
