import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../../../constants/colors';
import spacing from '../../../constants/spacing';
import { Trip } from '../trips-slice';

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
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.container,
      ]}>
      <Text>{name}</Text>
      <Text>{startDate}</Text>
      <Text>{endDate}</Text>
      <Text>{status}</Text>
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
    // required for iOS - need the font
    // fontFamily: 'SFProDisplay-Bold'
  },
  dateText: {
    fontSize: 16,
  },
});
