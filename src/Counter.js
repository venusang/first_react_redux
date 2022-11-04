import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  //handleSubmit was changed - name is byAmountSubmit in lesson
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(Number(input)));
  }
  const [input, setInput] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Counter;