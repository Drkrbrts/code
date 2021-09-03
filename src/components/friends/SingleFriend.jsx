import React from "react";

function SingleFriend(props) {
  const oneFriend = props.friend;

  const onFriendClickFull = function () {
    props.onClick(oneFriend);
  };
  const onFriendEditFull = function () {
    props.onEdit(oneFriend);
  };
  const onFriendDeleteFull = function () {
    props.onDelete(oneFriend);
  };

  return (
    <div className="card col-md-3">
      <img
        src={oneFriend.primaryImage.imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{oneFriend.title}</h5>
        <p className="card-text">
          <strong>{oneFriend.summary}</strong>
        </p>
        <button
          className="btn btn-primary"
          onClick={onFriendClickFull}
          data-friend-id={oneFriend.id}
        >
          Info
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={onFriendEditFull}
          data-friend-id={oneFriend.id}
        >
          Edit
        </button>
        <button
          className="btn btn-secondary"
          type="submit"
          onClick={onFriendDeleteFull}
          data-friend-id={oneFriend.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
