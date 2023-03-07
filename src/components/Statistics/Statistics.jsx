import PropTypes from 'prop-types';
export const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li
              className="item"
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};