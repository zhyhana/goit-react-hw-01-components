import styles from './FriendList.module.css';

function FriendListItem({ id, name, avatar, isOnline }) {
  return (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.statusOnline : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
