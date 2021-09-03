import React from "react";
import * as userService from "../services/userService";

function SingleFriend(props) {
  const oneFriend = props.theFriend;

  const onFriendDeleteClickButton = () => {
    userService
      .deleteFriend(oneFriend.id)
      .then(onFriendDeleteClickButtonSuccess)
      .catch(onFriendDeleteClickButtonError);
  };

  const onFriendDeleteClickButtonSuccess = (response) => {
    console.log("deletebtnSuccess", response);
  };

  const onFriendDeleteClickButtonError = (err) => {
    console.error("deletebtnError", err);
  };
  const onFriendEditButtonClick = function () {
    props.onClick(oneFriend);
  };

  return (
    <div className="card col-md-3">
      <img
        src={props.theFriend.primaryImage.imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body ">
        <h5 className="card-title">{oneFriend.title}</h5>
        <p className="card-text">{oneFriend.bio}</p>
        <button className="btn btn-primary" onClick={onFriendEditButtonClick}>
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={onFriendDeleteClickButton}
          // data-friend-id={oneFriend.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
