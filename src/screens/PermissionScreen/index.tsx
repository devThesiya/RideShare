import React, {useEffect, useState} from 'react';
import {Platform, Text, View} from 'react-native';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

const PermissionScreen = () => {
  const [lat, SetLat] = useState(0);
  const [long, SetLong] = useState(0);

  async function getLocationPermissions() {
    const granted = await request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
      {
        title: 'DemoApp',
        message: 'DemoApp would like access to your location ',
      },
    );

    granted === RESULTS.GRANTED;
    if (granted === RESULTS.GRANTED) {
      // If permission is granted, fetch the user's current location
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            resolve({granted: true, latitude, longitude});
          },
          error => {
            reject(error);
          },
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
      });
    } else {
      // If permission is not granted, return false
      return {granted: false};
    }
  }
  useEffect(() => {
    const data = async () => {
      const val = await getLocationPermissions();
      console.log(val);
      SetLat(val.latitude);
      SetLong(val.longitude);
    };
    data();
  }, [lat, long]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Latitude is: {lat}</Text>
      <Text>Longitude is: {long}</Text>
      {lat && long ? (
        <View>
          <Text>WE are using yuor location</Text>
        </View>
      ) : (
        <View>
          <Text>WE are Not using yuor location</Text>
        </View>
      )}
    </View>
  );
};

export default PermissionScreen;
