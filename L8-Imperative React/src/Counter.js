import { forwardRef, useImperativeHandle, useState } from "react";

//The useState Hook
//useState is a Hook that lets you 
//add React state to function components.
//after a state is changed, the page is rerendered, refecting
//the state change


export default forwardRef(function Counter(props, ref) {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => {
        return {
            reset: () => setCount(0)
        }
    });

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <p>Count : {count}</p>
        </>
    );
});