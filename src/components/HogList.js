import React from "react";

const HogList = ({ hogs, handleHogClick, selectedHog }) => {
  return (
    <>
      {hogs.map((hog, index) => (
        <div key={index} className="pigTile ui four wide column" onClick={() => handleHogClick(hog)}>
          <h3>{hog.name}</h3>
          <img src={hog.image} alt={hog.name} className="minPigTile" />
          {selectedHog && selectedHog.name === hog.name && (
            <div className="hogDetails">
              <p>Specialty: {selectedHog.specialty}</p>
              {selectedHog.weight && <p>Weight: {selectedHog.weight} kg</p>}
              <p>Greased: {selectedHog.greased ? "Yes" : "No"}</p>
              <p>Highest Medal Achieved: {selectedHog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default HogList;
