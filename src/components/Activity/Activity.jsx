import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from 'recharts';

/**
 *
 * @prop {array} activityData
 * @returns {React.ReactComponentElement}
 */
function Activity({ activityData }) {
  formatDate();

  function formatDate() {
    activityData.sessions.forEach((session) => {
      let result = session.day.substring(
        session.day.length - 2,
        session.day.length
      );
      result[0] === '0' ? (session.day = result[1]) : (session.day = result);
      return session.day;
    });
  }

  return (
    <div className="weight">
      <header className="headerWeight">
        <h2>Activité quotidienne</h2>
        <ul>
          <li className="weightLegend">Poids (kg)</li>
          <li className="burnedCaloriesLegend">Calories bruléées (kCal)</li>
        </ul>
      </header>

      <ResponsiveContainer width="92%" height={145}>
        <BarChart
          data={activityData.sessions}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          width={50}
        >
          <Tooltip
            wrapperStyle={{ width: 39 }}
            contentStyle={{ backgroundColor: '#E60000', fontSize: '7px' }}
            labelStyle={{ display: 'none' }}
            itemStyle={{ color: 'white' }}
            // payload={[{ name: null, value: 12, unit: 'kg' }]}
            // filterNull={false}
            separator=""
            payload={[{ name: 'null', unit: 'kg' }]}
            viewBox={{ x: 0, y: 0, width: 400, height: 400 }}
          />
          <XAxis dataKey="day" padding={{ left: 0, right: 0 }} />
          <YAxis
            yAxisId="right"
            dataKey="kilogram"
            orientation="right"
            tickCount={3}
            domain={['dataMin - 1', 'dataMax + 2']}
            axisLine={false}
            tickLine={false}
            tickMargin={35}
          />
          <Bar
            dataKey="kilogram"
            barSize={7}
            radius={[5, 5, 0, 0]}
            yAxisId="right"
          />
          <YAxis
            hide={true}
            yAxisId="left"
            dataKey="calories"
            orientation="left"
            stroke="#E60000"
            domain={[0, 'dataMax +100']}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[5, 5, 0, 0]}
            yAxisId="left"
          />
          <CartesianGrid vertical={false} strokeDasharray="2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
Activity.propTypes = {
  activityData: PropTypes.exact({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(
      PropTypes.exact({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    ),
  }),
};

export default Activity;
