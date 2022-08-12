import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { fetchTripList } from '../features/trips/trips-slice';
import { useAppDispatch } from '../hooks';

export const TripsScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(fetchTripList());
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort();
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};
