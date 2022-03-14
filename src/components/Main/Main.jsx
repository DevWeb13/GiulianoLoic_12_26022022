import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MainHeader from '../MainHeader/MainHeader';
import MainSection from '../MainSection/MainSection';
import Spinner from '../Spinner/Spinner';
import {
  getUserData,
  getActivity,
  getAverageSession,
  getUserPerformance,
} from '../../services/dataManager';

function Main({ userId, mockedData }) {
  const [isDataLoading, setDataLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const [userData, setUserData] = useState({
    id: 0,
    keyData: {},
    score: 0,
    userInfos: {
      firstName: '',
      lastName: '',
      age: 0,
    },
    fill:"",
  });

  const [activityData, setActivityData] = useState([]);

  const [averageSessionData, setAverageSessionData] = useState([]);

  const [userPerformanceData, setUserPerformanceData] = useState([]);

  useEffect(() => {
    setDataLoading(true);
    // setUserPerformanceData([]);
    getData(userId, mockedData).then((data) => setDataLoading(false));
    // .then((data) => setDataLoading(false))
    // .then((isDataLoading) => {
    //   if (userPerformanceData.length === 0) {
    //     setIsError(true);
    //   }
    // });
  }, [mockedData, userId]);

  async function getData(userId, mockedData) {
    getUserData(userId, mockedData).then((userData) => setUserData(userData));

    getActivity(userId, mockedData).then((activityData) =>
      setActivityData(activityData)
    );

    getAverageSession(userId, mockedData).then((averageSessionData) =>
      setAverageSessionData(averageSessionData)
    );

    getUserPerformance(userId, mockedData).then((userPerformanceData) =>
      setUserPerformanceData(userPerformanceData)
    );
  }
  
  userData.fill = "red";
  return isDataLoading ? (
    <Spinner />
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
          activityData={activityData}
          averageSessionData={averageSessionData}
          userPerformanceData={userPerformanceData}
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
