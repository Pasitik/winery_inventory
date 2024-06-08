import { createSlice } from '@reduxjs/toolkit';

const refreshSlice = createSlice({
  name: 'refresh',
  initialState: {
    value: false,
  },
  reducers: {
    setRefresh: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRefresh } = refreshSlice.actions;

export default refreshSlice.reducer;
