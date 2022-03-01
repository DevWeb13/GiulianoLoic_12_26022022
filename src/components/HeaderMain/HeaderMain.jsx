import React from 'react';
import PropTypes from 'prop-types';
/**
 * Component HeaderMain
 * @prop {string} firstName
 * @returns  {React.ReactElement}
 */
function HeaderMain({ firstName }) {
  return (
    <header className="headerMain">
      <h2>
        Bonjour <span>{firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

HeaderMain.propTypes = {
  firstName: PropTypes.string,
};

export default HeaderMain;
