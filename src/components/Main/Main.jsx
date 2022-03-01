import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderMain from '../HeaderMain/HeaderMain';
import SectionMain from '../SectionMain/SectionMain';
import Spinner from '../Spinner/Spinner';
import { getUserData } from '../../services/dataManager';

function Main() {
  const [isDataLoading, setDataLoading] = useState(false);

  const [userData, setUserData] = useState({
    id: 0,
    keyData: {},
    score: 0,
    userInfos: {},
  });

  useEffect(() => {
    setDataLoading(true);

    getUserData().then((userData) => setUserData(userData));
    setDataLoading(false);
  }, []);

  console.log(userData);
  return isDataLoading ? (
    <Spinner />
  ) : (
    <div className="mainContainer">
      <main>
        <HeaderMain firstName={userData.userInfos.firstName} />
        <SectionMain />
      </main>
    </div>
  );
}

Main.propTypes = {
  id: PropTypes.number,
  keyData: PropTypes.objectOf(PropTypes.number),
  score: PropTypes.number,
  userInfos: PropTypes.exact({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default Main;
