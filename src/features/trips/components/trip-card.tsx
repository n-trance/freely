import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from '../../../components/text';
import colors from '../../../constants/colors';
import spacing from '../../../constants/spacing';
import { Trip } from '../trips-slice';
import { useFromBackground } from './useFromBackground';

export const TripCard = ({
  onPress,
  name,
  startDate,
  endDate,
  status,
}: { onPress: () => void } & Pick<
  Trip,
  'id' | 'name' | 'startDate' | 'endDate' | 'status'
>) => {
  const fromBackground = useFromBackground();

  return (
    <Pressable
      testID="trip-card-container"
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.5 : 1 },
        {
          backgroundColor:
            fromBackground && status === 'NOT_STARTED'
              ? colors.TRIP_CARD_BACKGROUND_HIGHLIGHTED
              : colors.TRIP_CARD_BACKGROUND,
        },
      ]}>
      <Text testID="trip-card-name" style={styles.nameText}>
        {name}
      </Text>
      <Text testID="trip-card-dates" style={styles.dateText}>
        {startDate} - {endDate}
      </Text>
      <Text testID="trip-card-status" style={styles.statusText}>
        {status}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.TRIP_CARD_BACKGROUND,
    height: 128,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.s,
    padding: spacing.s,
    borderRadius: spacing.s,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'SFProDisplay-Bold',
  },
  dateText: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'SFProDisplay-Bold',
    position: 'absolute',
    right: spacing.s,
    bottom: spacing.s,
  },
});
