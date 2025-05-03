// import { useState } from 'react'
// //import './App.css'

// function App() {
//   const [count, setCount] = useState(0)  //this is state and it is used to change the real time value of variable 
//                                          //search v
//   return (
//     <>
//         count is {count}
//         <br/>
//       <button onClick={()=>{setCount(count+1)}}>Click me</button>
//     </>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
export default FriendStatus