import React from "react";
import { useState } from "react";

const App = () => {
  const [Num, setNum] = useState(0);
  const increment = () => {
    setNum(Num + 1);
  }
  const decrement = () => {
    setNum(Num - 1);
  }
  const reset = () => {
    setNum(0);
  }
  return (
    <div>
      <h1>This is counter</h1>
      <h1>{Num}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;
