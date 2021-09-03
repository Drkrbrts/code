import React from "react";

const SingleFriend = (props) => {
  const friend = props.friend;

  const onEditClickFull = function () {
    props.onEditClicked(friend.id);
  };

  const onDeleteRequested = function () {
    props.onDeleteRequested(friend.id);
  };

  return (
    <div className="col newFriend">
      <div className="card shadow-lg friend-card">
        <img
          className="card-img-top friend-img rounded-circle"
          src={friend.primaryImage.imageUrl}
          alt=""
        />
        <div className="card-body card-text-center">
          <h4 className="text-center name">{friend.title}</h4>
          <p className="text-center card-text summary">{friend.summary}</p>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-danger card-delete"
              onClick={onDeleteRequested}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-info card-edit"
              onClick={onEditClickFull}
              data-friendid={friend.id}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SingleFriend);
