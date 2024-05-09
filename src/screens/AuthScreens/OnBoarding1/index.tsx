import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OnBoarding1IMG from '../../../assets/images/img_OnBoarding1.svg';
import RightArrow from '../../../assets/icons/ic_RightArrow.svg';
import {ONBOARDING2} from '../../../navigation/routes';

const OnBoarding1 = ({navigation}: any) => {
  // const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginTop: 100, alignItems: 'center'}}>
        <OnBoarding1IMG />
      </View>

      <View style={{marginVertical: 10}}>
        <Text style={{fontSize: 22, textAlign: 'center', color: '#111'}}>
          ANyWHere YOU ARe
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 14, textAlign: 'center', width: '70%', color: '#111'}}>
          Sell houses easily with the help of Listenoryx and to make this line
          big I am writing more.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.Container}
        onPress={() => navigation.navigate(ONBOARDING2)}>
        <View style={styles.innerCircle}>
          <View style={{transform: [{rotate: '-45deg'}]}}>
            <RightArrow width={22} height={22} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding1;

const styles = StyleSheet.create({
  Container: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderLeftColor: '#B9E5D1',
    borderBottomColor: '#B9E5D1',
    borderRightColor: '#B9E5D1',
    borderTopColor: '#08B783',
    transform: [{rotate: '45deg'}],
    borderRadius: 50,
    marginTop: 'auto',
    marginBottom: 70,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#08B783',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
