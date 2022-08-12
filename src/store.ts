import { configureStore } from '@reduxjs/toolkit';
import tripsReducer from './features/trips/trips-slice';

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
