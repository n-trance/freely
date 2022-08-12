import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home';
import { TripScreen } from '../features/trips/screens/trip';
import { TripsScreen } from '../features/trips/screens/trips';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from '../components/text';

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
          <Text style={{ color }}>
            {route.name[0].toUpperCase() + route.name.slice(1)}
          </Text>
        ),
        tabBarLabel: () => null,
        headerShown: false,
      })}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="trips" component={TripsScreen} />
    </Tab.Navigator>
  );
};

type RootStackParamList = {
  'root-tab': undefined;
  trips: undefined;
  trip: undefined;
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
