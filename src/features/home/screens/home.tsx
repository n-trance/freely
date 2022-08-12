import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../../components/text';
import colors from '../../../constants/colors';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.SCREEN_BACKGROUND,
  },
});
