import { useContext, useState } from 'react';
import Profile from './Profile';
import { UserContext, UserContextProvider } from './UserContext';




function App() {


  return (
    <main>
      {/* provide to all of it's children global state  */}
      <UserContextProvider>
        {/* first of those children */}
        <AppInternal />
      </UserContextProvider>
    </main>
  );
}

function AppInternal() {
  const { toggleUser } = useContext(UserContext);
  return (
    <>
      <Profile />
      <button onClick={toggleUser}> Toggle User </button>
    </>
  );
}

export default App;