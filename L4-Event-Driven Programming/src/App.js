import React, { Component } from 'react';
import './App.css';
class App extends Component {

  render() {
    return (
      <MyButton onClick={handleClick}>Click Me</MyButton>
    );
  }
}

//performance optimization not to rerender every time page reload
const handleClick = (event) => {
  console.log(event.nativeEvent);
}

function MyButton(props) {
  return (
    <button
      // {...props} 
      onClick={props.onClick}   //{...props}  we can use spread operator
      style={{
        color: 'red'
      }}>
      {props.children}
    </button>
  );
}

// if we use props  it will be like this:

// function MyButton(props) {
//   return (
//     <button
//       {...props}
//       style={{
//         color: 'red'
//       }} />
//   );
// }

export default App;
