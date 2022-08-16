import React from 'react';
import { render } from '@testing-library/react-native';
import { TripCard } from './trip-card';
import * as hooks from './useFromBackground';
import colors from '../../../constants/colors';

const exampleTrip = {
  id: '1',
  name: 'Trip 1',
  startDate: '2022-06-01',
  endDate: '2022-06-29',
  destinations: ['Bali', 'Malaysia'],
  status: 'NOT_STARTED',
} as const;

test('renders trip card', () => {
  const { getByTestId } = render(
    <TripCard {...exampleTrip} onPress={() => {}} />,
  );

  expect(getByTestId('trip-card-container')).toBeTruthy();
});

test('render regular background', () => {
  const { getByTestId } = render(
    <TripCard {...exampleTrip} onPress={() => {}} />,
  );

  const { style } = getByTestId('trip-card-container').props;
  const background = style.find(
    (s: { backgroundColor: string }) =>
      s.backgroundColor === colors.TRIP_CARD_BACKGROUND,
  );

  expect(background).toBeTruthy();
});

test('render highlighted background', () => {
  jest.spyOn(hooks, 'useFromBackground').mockReturnValue(true);

  const { getByTestId } = render(
    <TripCard {...exampleTrip} onPress={() => {}} />,
  );

  const { style } = getByTestId('trip-card-container').props;
  const background = style.find(
    (s: { backgroundColor: string }) =>
      s.backgroundColor === colors.TRIP_CARD_BACKGROUND_HIGHLIGHTED,
  );

  expect(background).toBeTruthy();
});
