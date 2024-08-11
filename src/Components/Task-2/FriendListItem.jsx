import PropTypes from "prop-types";
import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? "online" : "offline";

  return (
    <li className="friend-list-item">
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <p className={`status ${statusClass}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
