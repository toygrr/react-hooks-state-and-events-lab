import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterType, setFilterType] = useState("All"); // All: providing a default value that matches the option value below (allows the list to appear populated)

  // calls anon. function, grabs target, and sets state to that value.
  function filterHandler(e) {
    setFilterType(() => e.target.value);
  }
  // filters through the items > returns our saved variable>renders full list if nothing is selected, but sets the item caregory if something is selected
  const filteredItems = items.filter((item) =>
    filterType === "All" ? true : item.category === filterType
  );

  //  below, when changing an option in the drop down, were setting that selected item to "e"
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
