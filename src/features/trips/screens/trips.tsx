import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { fetchTripList } from '../trips-slice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { TripCard } from '../components/trip-card';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/root';

export const TripsScreen = () => {
  const dispatch = useAppDispatch();

  const trips = useAppSelector(state => state.trips);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const promise = dispatch(fetchTripList());
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort();
    };
  }, []);

  if (trips.status === 'LOADING') {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.indicator} />
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.tripsContainer}>
        {trips.data.map(trip => (
          <TripCard
            key={trip.id}
            onPress={() => navigation.navigate('trip', { id: trip.id })}
            {...trip}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    paddingVertical: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tripsContainer: {
    flex: 1,
    width: '100%',
  },
});
