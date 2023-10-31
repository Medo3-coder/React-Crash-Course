// import logo from './logo.svg';
import './App.css';
import React from 'react'


//-----------comment props

function App() {

  return (
     <Comment username="conner" time={(new Date()).toString()}>
      <h1>Hello World</h1>
     </Comment>
  );
}


function Comment({username , time , children})
{
  return (
    <section>
      <p>{username} commented At {time}</p>
      {children}
    </section>
  );
}



// ------------------- defaultProps-------------

// function App() {

//   return (
//    <>
//    <Hello name="conner"/>
//    <Hello name="celement"/>
//    <Hello />

//    </>
//   );
// }


// function Hello({name})
// {
//   return <h1>Hello {name}</h1>
// }

// Hello.defaultProps = {
//   name:"User"
// }


// -------------------props-------------

// function App() {

//   return (
//    <>
//    <Hello name="conner"/>
//    <Hello name="celement"/>

//    </>
//   );
// }

// function Hello(props)
// {
//   return <h1>Hello {props.name}</h1>
// }


export default App;
