import PropTypes from 'prop-types';
import {
  Profilee,
  Name,
  Description,
  Avatar,
  Stats,
  Statli,
  Quantity,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <Profilee>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p>{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <Statli>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </Statli>
        <Statli>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </Statli>
        <Statli>
          <span>likes</span>
          <Quantity>{stats.likes}</Quantity>
        </Statli>
      </Stats>
    </Profilee>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
