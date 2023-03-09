import PropTypes from 'prop-types';
import { List } from './FriendList.steled';
export const FriendList = ({ children }) => {
  return <List>{children}</List>;
};
FriendList.propTypes = {
  children: PropTypes.node,
};
