import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      /**
       * Iterate over each item in the state array and create a new array
       * containing only the items that do not have an id matching
       * action.payload.
       */
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
