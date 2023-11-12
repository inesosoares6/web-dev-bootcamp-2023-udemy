import React from "react";

function App() {
  const [fullname, setFullname] = React.useState({
    fName: "",
    lName: ""
  });
  const [lName, setLName] = React.useState("");

  function handleChange(event) {
    const { value, name } = event.target;

    setFullname((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName };
      } else if (name === "lName") {
        return { fName: prevValue.fName, lName: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fName} {fullname.lName}
      </h1>
      <form>
        <input
          // value={fullname.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          // value={fullname.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
