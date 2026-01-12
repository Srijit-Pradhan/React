import React from 'react'

const Child = ({ sendDataToParent }) => {
     const handleSend = () => {
    sendDataToParent("Hello from Child!");
  };
  return (
    <div>
       <h2>Child Component</h2>
      <button onClick={handleSend}>Send Data to Parent</button>
    </div>
  )
}

export default Child
