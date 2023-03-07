import PropTypes from 'prop-types';
export const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <li className="item" key={friend.id}>
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};