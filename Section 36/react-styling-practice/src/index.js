//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let header = "";
let headerStyle = {
  color: "black"
};
if (new Date().getHours() < 12) {
  header = "Good Morning";
  headerStyle.color = "red";
} else if (new Date().getHours() < 18) {
  header = "Good afternoon";
  headerStyle.color = "green";
} else {
  header = "Good Evening";
  headerStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={headerStyle}>
      {header}
    </h1>
  </div>,
  document.getElementById("root")
);
