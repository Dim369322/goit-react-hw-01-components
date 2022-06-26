import PropTypes from "prop-types";
import styles from 'components/Profile/Profile.module.css';

export const Profile = ({ username,
    tag,
    location,
    avatar,
    stats,}) => (
        <div key={avatar} className={styles.profile}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={styles.avatar}
          />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
      
        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
);

Profile.propTypes = {
  tag: PropTypes.string,
  location: PropTypes.string,
  username: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};