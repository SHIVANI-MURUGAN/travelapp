// src/components/TravelerCounter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store'; // Adjust path as per your project structure

const TravelerCounter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Add Traveler</button>
      <button onClick={() => dispatch(decrement())} disabled={counter <= 1}>
        Remove Traveler
      </button>
      <p>Number of Travelers: {counter}</p>
    </div>
  );
};

export default TravelerCounter;
