// import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  const error = true;
  return <h1>{error ? 'Error' : 'Success'}</h1>
  return (
      <>
     {/* return error ? <h1>Error</h1> : <h1>success</h1> */}
    {/* {!error ? <h1>success</h1> : <h1>Error</h1> } */}
    {/* {error && <h1>Success</h1>} */}
    </>
  );
}



export default App;
