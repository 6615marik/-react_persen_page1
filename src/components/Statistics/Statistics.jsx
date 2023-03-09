import PropTypes from 'prop-types';
import {
  Statisticss,
  Title,
  Statlist,
  Statli,
  Label,
  Percentage,
} from './Statistics.styled';
export const Statistics = ({ stats }) => {
  return (
    <Statisticss>
      <Title>Upload stats</Title>

      <Statlist className="stat-list">
        {stats.map(stat => {
          return (
            <Statli
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}</Percentage>
            </Statli>
          );
        })}
      </Statlist>
    </Statisticss>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};
