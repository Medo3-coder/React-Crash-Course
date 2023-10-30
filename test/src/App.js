// import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const props = {
    id:'input',
    type: 'text',
    maxLength:'3'
  };
  return (
      <>
     <label htmlFor='input'>Input:</label>
     <input {...props}></input>
    </>
  );
}



export default App;
