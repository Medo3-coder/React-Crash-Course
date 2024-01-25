//context : it allows us to create some state that is going to be 
// accessible by all children of particular component


//context:  works by sending some state down to all of children 


// Context :  lets components pass information deep down without explicitly passing props.
//  Call createContext outside any components to create one or more contexts.
//   By default, the values they receive will be the default values you have specified when creating the contexts.

import { createContext, useState } from "react";

export const UserContext = createContext({
    toggleUser: null,
    user: {
        name: null,
        course: null,
    }

});


export function UserContextProvider({ children }) {

    const conner = {
        name: 'Conner',
        course: 'FrontendExpert',
    };


    const clement = {
        name: 'Clement',
        course: 'AlgoExpert',
    };

    const [user, setUser] = useState(conner);
    const toggleUser = () => {
        if (user === conner) {
            setUser(clement);
        }
        else {
            setUser(conner);
        }
    }


    return (
        // {/*  provider:  is going to be the component that create state and send it down to all children */}
        <UserContext.Provider value={{
            user,
            toggleUser
        }}>
            {children}
        </UserContext.Provider>
    );
}

























