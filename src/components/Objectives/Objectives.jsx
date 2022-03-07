import React, { useState, useEffect } from 'react';
import { XAxis, YAxis, LineChart, Line, ResponsiveContainer,Tooltip } from 'recharts';
import Spinner from '../Spinner/Spinner';
import { getAverageSession } from '../../services/dataManager';

function Objectives() {
  const [isDataLoading, setDataLoading] = useState(false);

  const [averageSessionData, setAverageSessionData] = useState({
    userId: 0,
    sessions: [],
    unit : "mn",
  });

  useEffect(() => {
    setDataLoading(true);
    getAverageSession().then((response) => setAverageSessionData(response));

    setDataLoading(false);
  }, []);
  // console.log(averageSessionData.sessions);
  

  function formatDate() {
    const weekDay = ["L","M","M","J","V","S","D"];
    for (let i = 0; i < averageSessionData.sessions.length; i++) {
      averageSessionData.sessions[i].day = weekDay[i];
      
    }
  
  }
  

  formatDate();
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="value">{`${payload[0].value} cm`}</p>
        
        </div>
      );
    }
  
    return null;
  };
 
  return isDataLoading ? (
    <Spinner />
  ) : (
    <div className="objectives">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart
          data={averageSessionData.sessions}
          margin={{ top: 0, right:5 , left: 5, bottom: 0 }}
          
        >
          <Tooltip content={<CustomTooltip active={undefined} payload={undefined} />}
          
          // wrapperStyle={{ width: 25 }}
          // contentStyle={{ backgroundColor: '#ffffff', fontSize: '7px' , height:24,display: 'flex',alignItems: 'center'}}
          // labelStyle={{ display: 'none' , padding:0}}
          // itemStyle={{ color: 'red' }}
          
          // separator=""
          
        />
          <XAxis dataKey="day"  stroke="#ffffff" axisLine={false}  tickLine={false} interval={0}/>
          {/* <YAxis /> */} 
          <Line type="natural" dataKey="sessionLength" stroke="#ffffff" dot={false}  strokeWidth={2}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Objectives;
