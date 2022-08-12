import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchTripList } from '../features/trips/trips-slice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const TripsScreen = () => {
  const dispatch = useAppDispatch();

  const trips = useAppSelector(state => state.trips);

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
    <View style={styles.container}>
      {trips.data.map(trip => (
        <Text key={trip.id}>{trip.name}</Text>
      ))}
    </View>
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
});
