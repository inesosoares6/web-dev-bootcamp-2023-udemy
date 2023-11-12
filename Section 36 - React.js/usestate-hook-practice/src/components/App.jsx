import React from "react";

function App() {
  const [time, setTime] = React.useState();

  function refreshTime() {
    return setTime(new Date().toLocaleTimeString());
  }

  setInterval(refreshTime, 1000);

  return (
    <div className="container">
      <h1>{time ?? "TIME"}</h1>
      <button onClick={refreshTime}>Get Time</button>
    </div>
  );
}

export default App;
