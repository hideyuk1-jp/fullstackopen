import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [value, setValue] = useState(10);

  const hello = who => {
    return () => {
      console.log("hello", who);
    };
  };

  return (
    <div>
      {value}
      <button onClick={hello("world")}>button</button>
      <button onClick={hello("react")}>button</button>
      <button onClick={hello("function")}>button</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
