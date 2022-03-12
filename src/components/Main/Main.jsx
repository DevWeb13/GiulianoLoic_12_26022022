import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import MainHeader from '../MainHeader/MainHeader';
import MainSection from '../MainSection/MainSection';
import Spinner from '../Spinner/Spinner';
import {
  getUserData,
  getActivity,
  getAverageSession,
  getUserPerformance,
} from '../../services/dataManager';

function Main() {
  const [isDataLoading, setDataLoading] = useState(false);

  const [userData, setUserData] = useState({
    id: 0,
    keyData: {},
    score: 0,
   userInfos: {
      firstName: '',
      lastName: '',
      age:0,
    },
  });

  const [activityData, setActivityData] = useState([]);

  const [averageSessionData, setAverageSessionData] = useState([]);

  const [userPerformanceData, setUserPerformanceData] = useState([]);

  async function getData(){
    getUserData().then((userData) => setUserData(userData));

    getActivity()
      .then((activityData) => setActivityData(activityData));

    getAverageSession()
      .then((averageSessionData) =>
        setAverageSessionData(averageSessionData)
      );

    getUserPerformance().then((userPerformanceData) =>
      setUserPerformanceData(userPerformanceData)
    );
  }

  useEffect(() => {
    setDataLoading(true);
   getData().then((data) => setDataLoading(false));

    
  }, []);

 

  console.log(userPerformanceData);

  return isDataLoading ? (
    <Spinner />
  ) : (
    <div className="mainContainer">
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

export default Main;
