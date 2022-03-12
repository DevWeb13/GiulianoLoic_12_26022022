import React from 'react';
import propTypes from 'prop-types';
/**
 * Component HeaderMain
 * @prop {string} firstName
 * @returns  {React.ReactElement}
 */
function MainHeader({ firstName }) {
  return (
    <header className="mainHeader">
      <h2>
        Bonjour <span>{firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

MainHeader.propTypes = {
  firstName: propTypes.string,
};

export default MainHeader;
