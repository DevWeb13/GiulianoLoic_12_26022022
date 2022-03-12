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
  
  return (
    <div className="activity">
      <header className="activityHeader">
        <h2>Activité quotidienne</h2>
        <ul>
          <li className="weightLegend">Poids (kg)</li>
          <li className="burnedCaloriesLegend">Calories bruléées (kCal)</li>
        </ul>
      </header>

      <ResponsiveContainer width="92%" height={175}>
        <BarChart
          data={activityData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <Tooltip content={<ActivityTooltip />} />
          <XAxis dataKey="day" />
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
  activityData: PropTypes.arrayOf(
      PropTypes.exact({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    ),
  
};

/**
 * @prop {Boolean} active
 * @prop {Array} payload
 * @return {React.ReactComponentElement}
 */
function ActivityTooltip({ active, payload }) {
  return (
    active && (
      <ul className="activityTooltip">
        <li>{payload[0].value}kg</li>
        <li>{payload[1].value}kCal</li>
      </ul>
    )
  );
}

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default Activity;
