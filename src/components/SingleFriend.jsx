import React from "react";

function SingleFriend(props) {
  const oneFriend = props.friend;

  const onFriendClickFull = function () {
      props.onClick(oneFriend)
  }

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
          Access friend info
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
