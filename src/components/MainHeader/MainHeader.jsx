import React from 'react';
import propTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
/**
 * Component HeaderMain
 * @prop {string} firstName
 * @prop {boolean} isUserDataLoading
 * @returns  {React.ReactElement}
 */
function MainHeader({ firstName, isUserDataLoading }) {
  return isUserDataLoading ? (
    <header className="mainHeader">
      <Spinner />
    </header>
  ) : (
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
  isUserDataLoading: propTypes.bool,
};

export default MainHeader;
