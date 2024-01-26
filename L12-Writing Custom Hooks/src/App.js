import { useEffect, useRef, useState } from 'react';
import './App.css';

// useRef() :  only returns one item. It returns an Object called current.
// It can be used to store a mutable value that does not cause a re-render when updated.

// useState() :  is a hook that allows functional components to manage state. 
// State is a way for React components to keep track of and manage data that can change over time

////useEffect() :  is going to run after every render 
// useEffect hook in React is used to perform side effects in functional components. 
// Side effects are operations that are not directly related to rendering, 
// such as data fetching, subscriptions, manual DOM manipulation


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // prevCount : useRef that when it changes doesn't cause a re-render 
  const prevCount = usePrevious(count);
  const prevText = usePrevious(text);

  return (
    <>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      <p>Count: {count}</p>
      <p>Previous render count: {prevCount}</p>

      <input
        value={text}
        onChange={(event) => setText(event.target.value)} />
      <p>Previous render Text: {prevText}</p>

    </>
  );


}

function usePrevious(value) {
  const prevRef = useRef();
  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}

export default App;
