import styles from './Friendlist.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;