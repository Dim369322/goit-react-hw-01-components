import styles from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.status : styles.statusOffline}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
