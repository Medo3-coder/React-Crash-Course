import { Suspense, lazy, useCallback, useMemo, useState } from 'react';
import './App.css';
const MyButton = lazy(() => import('./MyButton'));


// The React useMemo Hook returns a memoized value.

// The useMemoHook accepts a second parameter to declare dependencies. The expensive function 
// will only run when its dependencies have changed.

// The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
//  You can learn more about useCallback in the useCallback chapter.
function App() {

  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');
  const fibValue = useMemo(() => {
    console.log('calculating fib value...');
    return fib(num);
  }, [num]);


  //The React useCallback Hook returns a memoized callback function.
  const onClickLog = useCallback(() => {
    console.log(logValue)
  }, [logValue])

  return (
    <>
      <h1>Fib {num} is {fibValue}</h1>
      <input
        type='number'
        value={num}
        onChange={(event) => setNum(parseInt(event.target.value))}
      />

      <input
        type='text'
        value={logValue}
        onChange={(event) => setLogValue(event.target.value)}
      />

      {
        logValue.length > 0 ?
          (
            <Suspense fallback={<div>Loading...</div>}>
              <MyButton onClick={onClickLog}>Log Value</MyButton>
            </Suspense>
          ) :
          null
      }

    </>
  );
}


function fib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
}
export default App;