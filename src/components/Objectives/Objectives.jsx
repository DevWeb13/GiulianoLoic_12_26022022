import PropTypes from 'prop-types';
import {
  XAxis,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

/**
 *
 * @prop {array} averageSessionData
 * @returns {React.ReactComponentElement}
 */
function Objectives({ averageSessionData }) {
  function formatDate() {
    const weekDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    for (let i = 0; i < averageSessionData.sessions.length; i++) {
      averageSessionData.sessions[i].day = weekDay[i];
    }
  }

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
  formatDate();

  return (
    <div className="objectives">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart
          data={averageSessionData.sessions}
          margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
        >
          <Tooltip
            content={<CustomTooltip active={undefined} payload={undefined} />}
          />
          <XAxis
            dataKey="day"
            stroke="#ffffff"
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Objectives.propTypes = {
  averageSessionData: PropTypes.exact({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(
      PropTypes.exact({
        day: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        sessionLength: PropTypes.number,
      })
    ),
  }),
};

export default Objectives;
