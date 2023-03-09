import PropTypes from 'prop-types';
import { Name, Img, StatysOff, StatysOn, Iteam } from './FriendListItem.styled';
export const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <Iteam key={friend.id}>
      {friend.isOnline ? (
        <StatysOn>{friend.isOnline}</StatysOn>
      ) : (
        <StatysOff>{friend.isOnline}</StatysOff>
      )}
      <Img src={friend.avatar} alt={friend.name} width="48" />
      <Name>{friend.name}</Name>
    </Iteam>
  ));
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
