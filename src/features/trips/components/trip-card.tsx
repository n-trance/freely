import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, AppState } from 'react-native';
import type { AppStateStatus } from 'react-native';
import colors from '../../../constants/colors';
import spacing from '../../../constants/spacing';
import { Trip } from '../trips-slice';

// app has come from background to foreground
const useFromBackground = () => {
  const appState = useRef(AppState.currentState);
  const [fromBackgound, setFromBackground] = useState(false);

  useEffect(() => {
    const sub = AppState.addEventListener('change', handleAppStateChange);
    return () => sub.remove();
  }, []);

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      setFromBackground(true);
    }
    appState.current = nextAppState;
  };

  return fromBackgound;
};

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
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.dateText}>
        {startDate} - {endDate}
      </Text>
      <Text style={styles.statusText}>{status}</Text>
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
  },
  dateText: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    right: spacing.s,
    bottom: spacing.s,
  },
});
