import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = function ({ friends }) {
  return (
    <section>
      <ul className={s.friendList}>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
