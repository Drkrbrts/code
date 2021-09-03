import React from "react";

function SingleFriend(props) {
  const oneFriend = props.friend;

  const onDeleteClick = function onDeleteClick() {
    props.onDeleteClick(oneFriend);
  };
  const onEditClick = function onEditClick() {
    props.onEditClick(oneFriend);
  };

  return (
    <div className="col card-temp">
      <div className="card" style={{ width: "18rem" }}>
        <div className="text-center">
          <img
            src={oneFriend.primaryImage.imageUrl}
            className="card-img-top circular-landscape align-items-center"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{oneFriend.title}</h5>
          <p className="card-text">{oneFriend.summary}</p>
        </div>
        <div className="card-footer">
          <button
            onClick={onDeleteClick}
            className="btn btn-danger deleteButton"
            data-friend-id={oneFriend.id}
          >
            Delete
          </button>
          <button
            onClick={onEditClick}
            className="btn btn-primary editButton"
            data-friend-id={oneFriend.id}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
