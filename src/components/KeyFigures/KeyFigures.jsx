import React from 'react';

function KeyFigures({ icon, count, type }) {
  return (
    <div className="keyFigures">
      <img src={icon} alt={icon} />
      <div className="countContainer">
        <h2>{count}</h2>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default KeyFigures;
