import React, { forwardRef, useRef, useState } from 'react';


// useRef() :  only returns one item. It returns an Object called current.

// The useRef Hook allows you to persist values between renders.

// It can be used to store a mutable value that does not cause a re-render when updated.

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const timerID = useRef(null);

  const startTimer = () => {
    timerID.current = setInterval(() => {
      setSeconds(currSeconds => currSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerID.current);
  };

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>seconds: {seconds}</p>

    </>
  );

}


//2 - commen use case for refs

// export default function App() {

//   const inputRef = useRef(null);

//   const foucsInput = () => {
//     inputRef.current.focus();
//   };


//   return (
//     <>
//       <MyInput ref={inputRef} />
//       <button onClick={foucsInput}>Foucs</button>

//     </>
//   );

// }

// const MyInput = forwardRef(function (props, ref) {
//   return <input ref={ref}  {...props} style={{ color: 'red' }} />
// });



