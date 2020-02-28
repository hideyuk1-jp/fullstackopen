import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter}</div>
      <button onClick={setCounter(counter + 1)}>plus</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
