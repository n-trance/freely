import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from '@reduxjs/toolkit';

type TripStatus = 'NOT_STARTED' | 'STARTED' | 'FINISHED';

type Trip = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  destination: string[];
  status: TripStatus;
};

type Status = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';

interface TripsState {
  data: Trip[];
  status: Status;
  error: SerializedError | undefined;
}

const delay = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(1), ms));

// fetch api call
export const fetchTripList = createAsyncThunk(
  'trips/fetchTripList',
  async () => {
    // artificial delay for demo purposes
    await delay(2000);

    const data = require('./trip-list.json');
    return data;
  },
);

const initialState: TripsState = {
  data: [],
  status: 'IDLE',
  error: undefined,
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTripList.pending, state => {
      state.status = 'LOADING';
    });
    builder.addCase(fetchTripList.fulfilled, (state, action) => {
      state.status = 'SUCCESS';
      state.data = action.payload;
    });
    builder.addCase(fetchTripList.rejected, (state, action) => {
      state.status = 'ERROR';
      state.error = action.error;
    });
  },
});

export default tripsSlice.reducer;
