import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <SayHello />
        <SayHello />
      </div>
    );
  }
}


function SayHello() {
  return <p>Hello Wolrd</p>
}
export default App;