import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {

    // return (
    //   <>
    //     <Hello name="Conner" />
    //     <Hello name="Clement" />
    //     <Hello />
    //   </>
    // );

    return (
      <>
       <Comment username="Conner" time={(new Date()).toString()}>
        <h1>Hello World</h1>
       </Comment>
    </>
    );
  }
}

// 1 - first try 

// function Hello(props){
//   return <h1>Hello {props.name}</h1>
// }

// 2 - other way by destructing

function Hello({name}){
  return <h1>Hello {name}</h1>
}

//3 - we can make default props

// Hello.defaultProps = {
//   name: "user"
// };


// comment example
function Comment({username , time , children})
{
  return (
    <section>
      <p>{username} commented At {time}</p>
      {children}
    </section>
  );
}



export default App;
