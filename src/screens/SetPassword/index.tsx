import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
import {Button, Input} from '../../components';

const SetPassword = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -10 : 20}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.TitleTextContainer}>
            <Text style={styles.TitleText}>Set password</Text>
          </View>
          <View style={styles.SubTextContainer}>
            <Text style={styles.SubText}>Set your password</Text>
          </View>
          <View style={{width: '100%'}}>
            <View style={{ marginBottom: 18}}>
              <Input placeholder={'Enter Your Password'} />
            </View>
            <View style={{}}>
              <Input placeholder={'Confirm Password'} />
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              width: '100%',
              marginLeft: 40,
              marginTop: 5,
            }}>
            <Text
              style={{
                textAlign: 'left',
                color: '#A6A6A6',
                fontSize: 14,
                fontFamily: 'Poppins-Medium',
              }}>
              Atleast 1 number or a special character
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: 25}}>
            <Button title={'Register'} NavigateTo={''} onClick={() => {}} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TitleTextContainer: {
    marginBottom: 10,
  },
  TitleText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#414141',
  },
  SubTextContainer: {
    marginBottom: 45,
  },
  SubText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#A0A0A0',
  },
});
