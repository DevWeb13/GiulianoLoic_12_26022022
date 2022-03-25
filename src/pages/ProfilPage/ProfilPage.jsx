import React from 'react';
import Main from '../../components/Main/Main';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

/**
 *  @prop {bool} mockedData
 * @returns {React.ReactComponentElement}
 */
function ProfilPage({ mockedData }) {
  let { userId } = useParams();

  return (
    <div className="profilPage">
      <Main userId={parseInt(userId)} mockedData={mockedData} />
    </div>
  );
}

ProfilPage.propTypes = {
  mockedData: propTypes.bool,
};

export default ProfilPage;
