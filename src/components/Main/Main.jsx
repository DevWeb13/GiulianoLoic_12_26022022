import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import MainHeader from '../MainHeader/MainHeader';
import MainSection from '../MainSection/MainSection';
import Spinner from '../Spinner/Spinner';
import { getUserData } from '../../services/dataManager';

function Main() {
  const [isDataLoading, setDataLoading] = useState(false);

  const [userData, setUserData] = useState({
    userId: 0,
    keyData: {},
    score: 0,
    userInfos: {},
  });

  useEffect(() => {
    setDataLoading(true);

    getUserData().then((response) => setUserData(response));
    setDataLoading(false);
  }, []);

  return isDataLoading ? (
    <Spinner />
  ) : (
    <div className="mainContainer">
      <main>
        <MainHeader firstName={userData.userInfos.firstName} />
        <MainSection />
      </main>
    </div>
  );
}

// Main.propTypes = {
//   userId: PropTypes.number,
//   keyData: PropTypes.objectOf(PropTypes.number),
//   score: PropTypes.number,
//   userInfos: PropTypes.exact({
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//     age: PropTypes.number,
//   }),
// };

export default Main;
