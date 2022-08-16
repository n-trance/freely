import React from 'react';
import { render } from '@testing-library/react-native';
import { TripCard } from './trip-card';

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
