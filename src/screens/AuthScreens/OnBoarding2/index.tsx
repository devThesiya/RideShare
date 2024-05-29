import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import RightArrow from '../../../assets/icons/ic_RightArrow.svg';
import OnBoarding2IMG from '../../../assets/images/img_OnBoarding2.svg';
import {ONBOARDING3} from '../../../navigation/routes';

const OnBoarding2 = ({navigation}: any) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    fadeIn();
  }, []);
  return (
    <Animated.View
      style={{flex: 1, backgroundColor: '#fff', opacity: fadeAnim}}>
      <View style={{marginTop: 100, alignItems: 'center'}}>
        <OnBoarding2IMG />
      </View>

      <View style={{marginVertical: 10}}>
        <Text style={{fontSize: 22, textAlign: 'center', color: '#111'}}>AT aNYTime</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 14, textAlign: 'center', width: '70%', color: '#111'}}>
          Sell houses easily with the help of Listenoryx and to make this line
          big I am writing more.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.Container}
        onPress={() => navigation.navigate(ONBOARDING3)}>
        <View style={styles.innerCircle}>
          <View style={{transform: [{rotate: '-45deg'}]}}>
            <RightArrow width={22} height={22} />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default OnBoarding2;

const styles = StyleSheet.create({
  Container: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderTopColor: '#08B783',
    borderRightColor: '#08B783',
    borderBottomColor: '#08B783',
    borderLeftColor: '#B9E5D1',
    transform: [{rotate: '45deg'}],
    borderRadius: 50,
    marginTop: 'auto',
    marginBottom: 70,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 82,
    height: 82,
    borderRadius: 44,
    backgroundColor: '#08B783',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
