import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark, setIsDark] = useState(false); // saving state in isDark, setIsDark handles our state
  const appClass = isDark ? "App dark" : "App light"; // isDark is set to false above, replacing our previous "false" setting

  function setDarkMode() {
    setIsDark(!isDark); // passing saved boolean into a new function to be called on click
  } //  sets state to opposite with bang operator

  //button below switching state with setDarkMode
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={setDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
