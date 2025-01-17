// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { dec, ince , inceByValue } from './CountSlice'

// const ButtonUI = () => {

//     const data = useSelector(state => state.demo.count)

//     const dispatch = useDispatch()
//   return (

//     <div>
//         <h1>{data}</h1>
//         <button onClick={() => dispatch(ince())}>+++</button>
//         <button onClick={() => dispatch(dec())}>---</button>
//         <button onClick={() => dispatch(inceByValue(5))}>++++</button>
//     </div>
//   )
// }

// export default ButtonUI


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dec, ince, inceByValue } from './CountSlice';

const ButtonUI = () => {
  const [inputValue, setInputValue] = useState(0); // Local state for user input
  const data = useSelector((state) => state.demo.count);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInputValue(isNaN(value) ? 0 : value); // Handle invalid inputs
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>{data}</h1>
      <button onClick={() => dispatch(ince())}>Increment by 1</button>
      <button onClick={() => dispatch(dec())}>Decrement by 1</button>
      <br />
      <input
        type="number"
        placeholder="Enter a number"
        value={inputValue}
        onChange={handleInputChange}
        style={{ marginTop: '10px', padding: '5px', width: '150px' }}
      />
      <br />
      <button
        onClick={() => dispatch(inceByValue(inputValue))}
        style={{ marginTop: '10px', padding: '5px 15px' }}
      >
        Increment by {inputValue}
      </button>
      <button
        onClick={() => dispatch(inceByValue(-inputValue))}
        style={{ marginTop: '10px', padding: '5px 15px' }}
      >
        Decrement by {inputValue}
      </button>
    </div>
  );
};

export default ButtonUI;

