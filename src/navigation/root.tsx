import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../features/home/screens/home';
import { TripScreen } from '../features/trips/screens/trip';
import { TripsScreen } from '../features/trips/screens/trips';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from '../components/text';
import { capitalize } from '../util/capitalize';

type RootTabParamList = {
  home: undefined;
  trips: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => (
          <Text style={{ color }}>{capitalize(route.name)}</Text>
        ),
        tabBarLabel: () => null,
        headerShown: false,
      })}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="trips" component={TripsScreen} />
    </Tab.Navigator>
  );
};

export type RootStackParamList = {
  'root-tab': undefined;
  trip: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="root-tab"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="root-tab" component={RootTab} />
      <Stack.Screen name="trip" component={TripScreen} />
    </Stack.Navigator>
  );
};
