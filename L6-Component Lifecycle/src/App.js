import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

export default function App() {


    const [isShown, setIsShown] = useState(true);

    return (
      <>
       <button onClick={() => setIsShown(!isShown)}>
        {isShown ?  'Hide Counter' : 'Show Counter'}
       </button>
       {isShown ? <Counter />: null}
      </>
    );
}


