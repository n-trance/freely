import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home';
import { TripScreen } from '../screens/trip';
import { TripsScreen } from '../screens/trips';

type RootStackParamList = {
  home: undefined;
  trips: undefined;
  trip: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="trips" component={TripsScreen} />
      <Stack.Screen name="trip" component={TripScreen} />
    </Stack.Navigator>
  );
};
