import PropTypes from "prop-types";
import styles from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
    <ul className={styles.friendList}>
        {friends.map(friend => (
            <li key={friend.id} className={styles.item}>
                <span className={friend.isOnline ? styles.status : styles.statusOffline}>{friend.isOnline}</span>
                <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={styles.name}>{friend.name}</p>
            </li>
        ))}
    </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    }))
}