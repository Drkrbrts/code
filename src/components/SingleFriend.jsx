import React from "react";

function singleFriend(props) {
  const oneFriend = props.friend;

  const onDeleteClick = function () {
    props.onClick(oneFriend);
  };

  const onUpdateClick = function () {
    props.history.push(`/friendform/${oneFriend.id}/edit`, oneFriend);
  };

  return (
    <div className="card col-3 m-2 align-items-center">
      <img
        src={oneFriend.primaryImage.imageUrl}
        className="card-img-top m-1"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{oneFriend.title}</h5>
        <strong>{oneFriend.bio}</strong>
        <p className="card-text">{oneFriend.summary}</p>
        <button
          className="btn btn-danger m-1"
          onClick={onDeleteClick}
          data-friend-id={oneFriend.id}
        >
          Delete
        </button>
        <button className="btn btn-info m-1" onClick={onUpdateClick}>
          Update
        </button>
      </div>
    </div>
  );
}

export default React.memo(singleFriend);
