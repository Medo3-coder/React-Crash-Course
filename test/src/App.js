// import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {

  return (
   <>
   <Hello name="conner"/>
   <Hello name="celement"/>

   </>
  );
}

function Hello(props)
{
  return <h1>Hello {props.name}</h1>
}


export default App;
