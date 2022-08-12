import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from '../../../components/text';
import colors from '../../../constants/colors';
import spacing from '../../../constants/spacing';
import { useAppSelector } from '../../../hooks';
import { RootStackParamList } from '../../../navigation/root';

// // can be extracted to own file if reused by other components
const BackButton = () => {
  const navigation = useNavigation();

  if (navigation.canGoBack()) {
    return (
      <Pressable
        style={{ padding: spacing.m }}
        onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </Pressable>
    );
  }

  return null;
};

export const TripScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'trip'>>();
  const trip = useAppSelector(state =>
    state.trips.data.find(item => item.id === params.id),
  );

  if (trip) {
    return (
      <SafeAreaView style={styles.container}>
        <BackButton />
        <View style={styles.content}>
          <Text style={styles.nameText}>{trip.name}</Text>
          {trip.destinations.map((destination, index) => (
            <Text key={index}>{destination}</Text>
          ))}
        </View>
      </SafeAreaView>
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
    paddingTop: spacing.m,
    padding: spacing.m,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'SFProDisplay-Bold',
  },
});
