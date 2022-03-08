import React, { useState, useEffect } from 'react';
import Spinner from "../Spinner/Spinner";
import { getActivity,getAverageSession,getUserPerformance } from '../../services/dataManager';
import Activity from '../Activity/Activity';
import Objectives from '../Objectives/Objectives';
import RadarComponent from '../RadarComponent/RadarComponent';
import Kpi from '../Kpi/Kpi';
import KeyFigures from '../KeyFigures/KeyFigures';

function MainSection() {
  const [isDataLoading, setDataLoading] = useState(false);

  const [activityData, setActivityData] = useState({
    userId: 0,
    sessions: [],
  });

  const [averageSessionData, setAverageSessionData] = useState({
    userId: 0,
    sessions: [],
  });

  const [userPerformanceData, setUserPerformanceData] = useState({
    userId: 0,
    kind: {},
    data: [],
  });

  useEffect(() => {
    setDataLoading(true);
    getActivity().then((response) => setActivityData(response));
    getAverageSession().then((response) => setAverageSessionData(response));
    getUserPerformance().then((response) => setUserPerformanceData(response));
    setDataLoading(false);
  }, []);
   return isDataLoading ? (
    <Spinner />
  ) :(
    <section>
      <div className="activityContainer">
        <Activity activityData={activityData}/>
        <Objectives averageSessionData={averageSessionData} />
        <RadarComponent userPerformanceData={userPerformanceData}/>
        <Kpi />
      </div>
      <div className="keyFiguresContainer">
        <KeyFigures />
        <KeyFigures />
        <KeyFigures />
        <KeyFigures />
      </div>
    </section>
  );
}



export default MainSection;
