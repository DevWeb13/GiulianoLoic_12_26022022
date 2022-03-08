import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

function RadarComponent({ userPerformanceData }) {
  return (
    <div className="radar">
      <ResponsiveContainer>
        <RadarChart data={userPerformanceData.data}>
          {/* <PolarGrid /> */}
          <PolarAngleAxis dataKey="kind" />
          {/* <PolarRadiusAxis angle={90} /> */}
          <Radar
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarComponent.propTypes = {
  userPerformanceData: PropTypes.exact({
    userId: PropTypes.number,
    kind: PropTypes.objectOf(PropTypes.string),
    data: PropTypes.arrayOf(
      PropTypes.exact({
        value: PropTypes.number,
        kind: PropTypes.number,
      })
    ),
  }),
};

export default RadarComponent;
