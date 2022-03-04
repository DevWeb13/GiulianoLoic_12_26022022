import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import Spinner from '../Spinner/Spinner';
import { getActivity } from '../../services/dataManager';

function Weight() {
  const [isDataLoading, setDataLoading] = useState(false);

  const [activityData, setActivityData] = useState({
    userId: 0,
    sessions: [],
  });

  useEffect(() => {
    setDataLoading(true);
    getActivity().then((activityData) => setActivityData(activityData));
    setDataLoading(false);
  }, []);
  console.log(activityData);

  /**
   *
   * @param {object} activityData
   */
  function dayCounter(activityData) {
    let dayNumber = 1;
    activityData.sessions.forEach((session) => {
      session.dayNumber = dayNumber;
      dayNumber++;
    });
  }
  dayCounter(activityData);
  return isDataLoading ? (
    <Spinner />
  ) : (
    <div className="weight">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activityData.sessions}>
          <XAxis dataKey="dayNumber" />

          <YAxis
            dataKey="kilogram"
            orientation="right"
            type="number"
            domain={['dataMin - 1', 'dataMax + 1']}
          />
          <CartesianGrid vertical={false} horizontalPoints={[80]} />
          <Bar
            dataKey="kilogram"
            stroke="#8884d8"
            barSize={7}
            legendType="circle"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            legendType="circle"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Weight;
