import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Error from '../Error/Error';
import MainHeader from '../MainHeader/MainHeader';
import MainSection from '../MainSection/MainSection';
import {
  getUserData,
  getActivity,
  getAverageSession,
  getUserPerformance,
} from '../../services/dataManager';

/**
 *
 * @prop {number} userId
 * @prop {string} mockedData
 * @returns {React.ReactComponentElement}
 */
function Main({ userId, mockedData }) {
  const [isUserDataLoading, setIsUserDataLoading] = useState(false);
  const [isActivityDataLoading, setIsActivityDataLoading] = useState(false);
  const [isAverageSessionDataLoading, setIsAverageSessionDataLoading] =
    useState(false);
  const [isUserPerformanceDataLoading, setIsUserPerformanceDataLoading] =
    useState(false);
  const [isError, setIsError] = useState(false);

  const [userData, setUserData] = useState({
    id: 0,
    keyData: {},
    score: 0,
    userInfos: {
      firstName: '',
      lastName: '',
      age: 0,
    },
    fill: '',
  });

  const [activityData, setActivityData] = useState([]);

  const [averageSessionData, setAverageSessionData] = useState([]);

  const [userPerformanceData, setUserPerformanceData] = useState([]);

  useEffect(() => {
    setIsUserDataLoading(true);
    setIsActivityDataLoading(true);
    setIsAverageSessionDataLoading(true);
    setIsUserPerformanceDataLoading(true);

    getUserData(userId, mockedData)
      .then((userData) => setUserData(userData))
      .then((_userData) => {
        setIsUserDataLoading(false);
        setIsError(false);
      })
      .catch((_error) => setIsError(true));

    getActivity(userId, mockedData)
      .then((activityData) => setActivityData(activityData))
      .then((_activityData) => setIsActivityDataLoading(false));

    getAverageSession(userId, mockedData)
      .then((averageSessionData) => setAverageSessionData(averageSessionData))
      .then((_averageSessionData) => setIsAverageSessionDataLoading(false));

    getUserPerformance(userId, mockedData)
      .then((userPerformanceData) =>
        setUserPerformanceData(userPerformanceData)
      )
      .then((_userPerformanceData) => setIsUserPerformanceDataLoading(false));
  }, [mockedData, userId]);

  userData.fill = 'red';

  return isError ? (
    <Error />
  ) : (
    <div className="mainContainer">
      {mockedData ? (
        <p className="green">DataMocked</p>
      ) : (
        <p className="red">DataNotMocked</p>
      )}
      <main>
        <MainHeader firstName={userData.userInfos.firstName} />
        <MainSection
          userData={userData}
          isUserDataLoading={isUserDataLoading}
          activityData={activityData}
          isActivityDataLoading={isActivityDataLoading}
          averageSessionData={averageSessionData}
          isAverageSessionDataLoading={isAverageSessionDataLoading}
          userPerformanceData={userPerformanceData}
          isUserPerformanceDataLoading={isUserPerformanceDataLoading}
        />
      </main>
    </div>
  );
}

Main.propTypes = {
  userId: propTypes.number,
  mockedData: propTypes.bool,
};

export default Main;
