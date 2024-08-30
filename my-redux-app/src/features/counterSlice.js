import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    add: (state, action) => {
      state.value += action.payload;
    },
    subtract: (state, action) => {
      state.value -= action.payload;
    },
    divide: (state, action) => {
      if (action.payload !== 0) { // Prevent division by zero
        state.value /= action.payload;
      }
    },
    modulo: (state, action) => {
      if (action.payload !== 0) { // Prevent modulo by zero
        state.value %= action.payload;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { 
  increment, 
  decrement, 
  incrementByAmount, 
  add, 
  subtract, 
  divide, 
  modulo,
  reset 
} = counterSlice.actions;

export default counterSlice.reducer;
