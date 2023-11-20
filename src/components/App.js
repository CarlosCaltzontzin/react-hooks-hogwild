import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filters from "./Filters";
import hogData from "../porkers_data";

function App() {
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"
  const [selectedHog, setSelectedHog] = useState(null);

  const handleHogClick = (hog) => {
    setSelectedHog(hog);
  };

  const handleGreasedFilterChange = () => {
    setGreasedFilter(!greasedFilter);
    setSelectedHog(null); // Reset selectedHog when the filter changes
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
    setSortOrder(criteria === "name" ? "asc" : "desc"); // Set ascending order for "Sort by Name"
    setSelectedHog(null); // Reset selectedHog when the sort changes
  };

  const filteredHogs = greasedFilter ? hogData.filter((hog) => hog.greased) : hogData;

  const sortedHogs = () => {
    if (sortCriteria === "name") {
      return filteredHogs.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortCriteria === "weight") {
      return filteredHogs.slice().sort((a, b) => (sortOrder === "asc" ? a.weight - b.weight : b.weight - a.weight));
    } else {
      return filteredHogs;
    }
  };

  return (
    <div className="App ui grid container">
      <div className="indexWrapper row">
        <div className="ui center aligned column">
          <Nav />
          <Filters
            greasedFilter={greasedFilter}
            sortCriteria={sortCriteria}
            handleGreasedFilterChange={handleGreasedFilterChange}
            handleSortChange={handleSortChange}
          />
        </div>
      </div>
      <div className="indexWrapper row ui padded">
        <HogList hogs={sortedHogs()} handleHogClick={handleHogClick} selectedHog={selectedHog} />
      </div>
    </div>
  );
}

export default App;

/*

import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";

function App() {
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"
  const [selectedHog, setSelectedHog] = useState(null);

  const handleHogClick = (hog) => {
    setSelectedHog(hog);
  };

  const handleGreasedFilterChange = () => {
    setGreasedFilter(!greasedFilter);
    setSelectedHog(null); // Reset selectedHog when the filter changes
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
    setSortOrder(criteria === "name" ? "asc" : "desc"); // Set ascending order for "Sort by Name"
    setSelectedHog(null); // Reset selectedHog when the sort changes
  };

  const filteredHogs = greasedFilter ? hogs.filter((hog) => hog.greased) : hogs;

  const sortedHogs = () => {
    if (sortCriteria === "name") {
      return filteredHogs.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortCriteria === "weight") {
      return filteredHogs.slice().sort((a, b) => (sortOrder === "asc" ? a.weight - b.weight : b.weight - a.weight));
    } else {
      return filteredHogs;
    }
  };

  return (
    <div className="App ui grid container">
      <div className="indexWrapper row">
        <div className="ui center aligned column">
          <Nav />
          <label>
            <input type="checkbox" checked={greasedFilter} onChange={handleGreasedFilterChange} />
            Show Greased Hogs
          </label>
          <div>
            <label>
              <input type="radio" name="sort" value="name" checked={sortCriteria === "name"} onChange={() => handleSortChange("name")} />
              Sort by Name
            </label>
            <label>
              <input type="radio" name="sort" value="weight" checked={sortCriteria === "weight"} onChange={() => handleSortChange("weight")} />
              Sort by Weight
            </label>
          </div>
        </div>
      </div>
      <div className="indexWrapper row ui padded">
        {sortedHogs().map((hog, index) => (
          <div key={index} className="pigTile ui four wide column" onClick={() => handleHogClick(hog)}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} className="minPigTile" />
            {sortCriteria === "weight" && <p>Weight: {hog.weight} kg</p>}
            {selectedHog && selectedHog.name === hog.name && (
              <div className="hogDetails">
                <p>Specialty: {selectedHog.specialty}</p>
                {sortCriteria !== "weight" && <p>Weight: {selectedHog.weight} kg</p>}
                <p>Greased: {selectedHog.greased ? "Yes" : "No"}</p>
                <p>Highest Medal Achieved: {selectedHog["highest medal achieved"]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
*/