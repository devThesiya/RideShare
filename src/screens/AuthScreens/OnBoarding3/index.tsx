import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import RightArrow from '../../../assets/icons/ic_RightArrow.svg';
import OnBoarding3IMG from '../../../assets/images/img_OnBoarding3.svg';

const OnBoarding3 = ({navigation}: any) => {
  // const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
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
        <OnBoarding3IMG />
      </View>

      <View style={{marginVertical: 10}}>
        <Text style={{fontSize: 22, textAlign: 'center', color: '#111'}}>BoOK your CAr</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 14, textAlign: 'center', width: '70%', color: '#111'}}>
          Sell houses easily with the help of Listenoryx and to make this line
          big I am writing more.
        </Text>
      </View>
      <TouchableOpacity style={styles.Container} onPress={() => {}}>
        <View style={styles.innerCircle}>
          <View style={{transform: [{rotate: '-45deg'}]}}>
            <RightArrow width={22} height={22} />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default OnBoarding3;

const styles = StyleSheet.create({
  Container: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderColor: '#08B783',
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
