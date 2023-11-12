import React from "react";
import Item from "./Item";
import emojipedia from "../emojipedia";

function createItem(item) {
  return (
    <Item
      key={item.id}
      name={item.name}
      emoji={item.emoji}
      meaning={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createItem)}</dl>
    </div>
  );
}

export default App;
