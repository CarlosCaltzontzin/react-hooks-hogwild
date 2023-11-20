import React from "react";

const Filters = ({ greasedFilter, sortCriteria, handleGreasedFilterChange, handleSortChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={greasedFilter} onChange={handleGreasedFilterChange} />
        Show Greased Hogs
      </label>
      <div>
        <label>
          <input
            type="radio"
            name="sort"
            value="name"
            checked={sortCriteria === "name"}
            onChange={() => handleSortChange("name")}
          />
          Sort by Name
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="weight"
            checked={sortCriteria === "weight"}
            onChange={() => handleSortChange("weight")}
          />
          Sort by Weight
        </label>
      </div>
    </div>
  );
};

export default Filters;
