import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="parent">
      <textarea
        placeholder="Type multiple lines..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="text">
        <p>{text}</p>
      </div>

      <button onClick={() => setText("")}>Reset</button>
    </div>
  );
};

export default App;
