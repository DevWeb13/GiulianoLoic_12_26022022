import React from 'react';
import propTypes from 'prop-types';

/**
 * KeyFigures component
 * @prop {strin} icon Link from icon
 * @prop {strin} count number of type
 * @prop {strin} type  unité
 * @returns {React.ReactComponentElement}
 */
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

KeyFigures.propTypes = {
  icon: propTypes.string,
  count: propTypes.string,
  type: propTypes.string,
};

export default KeyFigures;
