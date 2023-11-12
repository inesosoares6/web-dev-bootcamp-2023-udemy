import React from "react";
import ReactDOM from "react-dom";

const name = "Ines";
const num = 6;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
