import React from 'react';
import propTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

/**
 * KeyFigures component
 * @prop {string} icon Link from icon
 * @prop {string} count number of type
 * @prop {string} type  unité
 * @returns {React.ReactComponentElement}
 */
function KeyFigures({ icon, count, type ,isUserDataLoading}) {
  return isUserDataLoading ? (
    <div className="keyFigures">
      <Spinner />
    </div>
  ):(
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
