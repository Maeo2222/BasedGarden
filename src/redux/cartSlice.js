import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalItems: 0
  },
  reducers: {
    addItem: (state) => {
      state.totalItems += 1;
    }
  }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
