import React, { Component, useRef } from 'react';
import './App.css';
import Counter from './Counter';
import CustomInput from './CustomInput';

//goal to add click reset handlers to reset counter and CustomInput

function App() {
  const counterRef = useRef();
  const customInputRef = useRef();
  return (
    <>
      <Counter ref={counterRef} />
      <CustomInput ref={customInputRef} placeholder="Type something" />
      <button onClick={() => {
        counterRef.current.reset();
        customInputRef.current.reset();
      }}>
        reset
      </button>
    </>
  );
}

export default App;

