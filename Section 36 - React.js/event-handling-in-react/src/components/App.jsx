import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [buttonStyle, setButtonStyle] = React.useState("white");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleHover() {
    return buttonStyle == "white"
      ? setButtonStyle("black")
      : setButtonStyle("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
        style={{ background: buttonStyle }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
