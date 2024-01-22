import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {

    // 1 - send variable
    const name = 'medo';    

    return (
      <>
        <h1> Hello {name.toLocaleUpperCase()}</h1>
        <p>Test</p>
      </>
    );


    //2 - custom style

    // return <p style={{
    //   color: "red",
    //   textAlign: "center",
    //   fontSize: 48
    // }}>Hello World</p>

    //3 - style by class but need to put class in css file
    // return <p className="center">Hello World</p>

    //4 -  props exmaple .....

    // const props = {
    //   id: "input",
    //   type: "text",
    //   maxLength:"3"
    // };
    
    // return (
    //   <>
    //     <lable htmlFor="input">Input: </lable>
    //     {/* <input type="text" id="input" maxLength="3"> </input> */}
    //     <input {...props} placeholder='user'/>

    //   </>
    // );




  


    // 5 - condition satatment  

    // const error = false;
    // return error ? <h1>Error</h1> : <h1>Success</h1>
    // if(error){
    //   return <h1>Error</h1>
    // }
    // return <h1>Success</h1>
    // return (
    //   <>
    //     {/* ternary */}
    //     {/* {error ? <h1>Error</h1> : null} */}
    //     {/* {!error ? <h1>Success</h1> : null} */}

    //     {/* short circet evaluation */}
    //     {/* {error && <h1>Error</h1>} */}
    //     {/* {!error && <h1>Success</h1>} */}

    //   </>
    // );
  }
}

export default App;


// 1 -  self closing tags  <br/> not <br>
// 2 - u need to return single jsx element
// 3 - anything inside {}  is js i can call function or any js
