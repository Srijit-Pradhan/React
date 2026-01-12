import React from 'react'
import { useState } from 'react';
import Child from "./components/Child";

const App = () => {
  const [message, setMessage] = useState("");

  // Function to receive data from the child
  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
       <h1>Parent Component</h1>
      <p>Data from Child: {message}</p>

      {/* Pass function to child */}
      <Child sendDataToParent={handleChildData} />
    </div>
  )
}

export default App
