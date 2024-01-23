import './App.css';
import { useReducer } from "react"

// state :  the old state 
// action : it describes what it supposed to be changing 

// reducer needs to return new state based on old state they got in and the action 
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.num };
    case 'decrement':
      return { count: state.count - action.num };
    default:
      throw new Error('Unknown action type');

  }
}

//[value , setter]
function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  });

  return (
    <>                                       
      <Counter count={state.count} onClick={() => dispatch({type: 'increment' , num: 1})} /> 
      <Counter count={state.count} onClick={() => dispatch({type: 'decrement' , num: 1})} />
    </>
  );
}

function Counter({ count, onClick }) {

  return (
    <>
      <button onClick={onClick}>
        Increment
      </button>
      <p>Count : {count}</p>


    </>
  );

}


export default App;