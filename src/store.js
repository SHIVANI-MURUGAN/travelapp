// src/store.js
import { createStore } from 'redux';

// Define initial state
const initialState = {
  counter: 1, // Start with 1 traveler as default
};

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: Math.max(1, state.counter - 1) }; // Prevent negative travelers
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;
