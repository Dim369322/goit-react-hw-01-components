import PropTypes from "prop-types";
import styles from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
        {title ? (<h2 className={styles.title}>{title}</h2>) : ""}
      
        <ul className={styles.statList}>
            {stats.map(value => (
              <li key={value.id} className={styles.item} style={{background:getRandomHexColor()}}>
                <span className={styles.label}>{value.label}</span>
                <span className={styles.percentage}>{value.percentage}%</span>
              </li>
            ))}
        </ul>
      </section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
  }))
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}