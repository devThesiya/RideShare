import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Location from '../../assets/images/img_Location.svg';
import { Button, ButtonTransparent } from '../Button';

const LocationPermission = () => {
  return (
    <View
      style={{
        width: 340,
        height: 459,
        borderWidth: 1,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 30,
        borderRadius: 12
      }}>
      {/* <Text>LocationPermission</Text> */}
      <Location />
      <View>
        <Text style={styles.TitleText}>Enable your location</Text>
      </View>
      <View>
        <Text style={styles.SubText}>Choose your location to start find the request around you </Text>
      </View>
      <View style={{width: 300, marginVertical: 20}}>
        <Button title={'Use my location'} NavigateTo={''} onClick={() => {}}/>
      </View>
      <View style={{width: 300}}>
        <ButtonTransparent title={'Skip for now'} NavigateTo={''} onClick={() => {}}/>
      </View>
    </View>
  );
};

export default LocationPermission;

const styles = StyleSheet.create({
    TitleText: {
        color: '#414141',
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    },
    SubText: {
        color: '#A0A0A0',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    }
})
