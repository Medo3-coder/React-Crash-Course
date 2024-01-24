import { useEffect, useLayoutEffect, useState } from "react";



export default function Counter() {
    //value , setter function
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    // run synchronously
    useLayoutEffect(() => {    // u need to avoid this as u can 
        if (count === 3) {
            setCount(4);
        }
    }, [count]);


    //run asynchronously
    useEffect(() => {
        if (count === 3) {
            setCount(4);
        }
    }, [count]);


    useEffect(() => {
        console.log("render");
    });

    const startTime = new Date();
    while (new Date() - startTime < 100) { };

    return (
        <div className="counter">
            <button onClick={() => setBool(!bool)}>Re-Render</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count : {count}</p>
        </div>
    );
}





// mount: when component add to screen for first time
// update: (render the component) whenever state or props values are changing the component needs to be updated
// unmount: when the component leaves screen (is being deleted)

// component life cycle
// mount (initial render)   -> update (render the component) -> unmount

//use effect is going to run after every render 