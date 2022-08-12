import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../constants/colors';
import spacing from '../../../constants/spacing';
import { useAppSelector } from '../../../hooks';
import { RootStackParamList } from '../../../navigation/root';

export const TripScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'trip'>>();
  const trip = useAppSelector(state =>
    state.trips.data.find(item => item.id === params.id),
  );

  if (trip) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.nameText}>{trip.name}</Text>
          {trip.destinations.map((destination, index) => (
            <Text key={index}>{destination}</Text>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Trip not found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SCREEN_BACKGROUND,
  },
  content: {
    paddingTop: spacing.m + 100,
    padding: spacing.m,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    // required for iOS - need the font
    // fontFamily: 'SFProDisplay-Bold'
  },
});
