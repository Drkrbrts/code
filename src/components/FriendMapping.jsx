import React from "react";

function FriendMapping(props) {
  const oneFriend = props.friend;
  const onEditClicked = function () {
    props.onEdit(oneFriend.id);
  };
  const onDeleteClicked = function () {
    props.onDelete(oneFriend.id);
  };

  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={oneFriend.primaryImage.imageUrl}
          className="card-imt-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{oneFriend.title}</h5>
          <h6>{oneFriend.summary}</h6>
          <p className="card-text">{oneFriend.bio}</p>
          <div style={{ padding: "5px" }}>
            <button className="btn btn-info" onClick={onEditClicked}>
              Edit
            </button>
          </div>
          <div style={{ padding: "5px" }}>
            <button className="btn btn-danger" onClick={onDeleteClicked}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendMapping;
