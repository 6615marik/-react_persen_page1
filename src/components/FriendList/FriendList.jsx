import PropTypes from 'prop-types';
export const FriendList = ({ children }) => {
  return <ul className="friend-list">{children}</ul>;
};
FriendList.propTypes = {
  children: PropTypes.node,
};
