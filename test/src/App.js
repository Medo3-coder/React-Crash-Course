// import logo from './logo.svg';
import './App.css';
import React, { useReducer, useState } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.num };
    case 'decrement':
      return { count: state.count + action.num };
    default:
      throw new Error('Unknown action type');
  }
}


function App() {

  const [state , dispatch] = useReducer(reducer , {
    count: 0
  });

  return (
    <>
      <Counter count={state.count} onClick={()=>dispatch({
        type: 'increment',
        num:1  //inital number
      })}/>
    <Counter count={state.count} onClick={()=>dispatch({
        type: 'increment',
        num:1  //inital number
      })}/>    </>
  );
}

function Counter({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}




// -----------Event-Driven Programming--------------------


// function App() {

//   return (
//     <MyButton onClick={handleClick}>Click Me</MyButton>
//   );

//   function handleClick (event) {
//     console.log(event.nativeEvent)
//   };

//   function MyButton(props)
//   {
//     return (
//       <button
//       onClick={props.onClick}   //{...props}  we can use spread operator
//       // {...props} 
//       style={{
//         color:'red'
//       }}>
//         {props.children}
//       </button>
//     );
//   }

// }



export default App;
