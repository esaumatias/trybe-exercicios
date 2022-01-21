import React, { useState } from "react";
import ComponenteX from './ComponenteX';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
      <ComponenteX />
    </div>
  );
}

export default App;
