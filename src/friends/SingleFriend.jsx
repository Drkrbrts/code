import React from "react";
//import { render } from "react-dom";

function Friend(props) {
  const oneFriend = props.friend;

  const onEditClick = function () {
    console.log("edit was clicked");
    props.onClick(oneFriend.id);
  };

  const onDeleteClick = function () {
    console.log("delete was clicked");
    props.delete(oneFriend.id);
  };

  return (
    <div className="card col-md-3 p-3">
      <img
        className="card-img-top img-thumbnail h-50 shadow-sm"
        src={oneFriend.primaryImage.imageUrl}
        alt="friendImage"
      />
      <div className="card-body">
        <h5 className="card-title">{oneFriend.title}</h5>
        <p className="card-text h-25">{oneFriend.bio}</p>
        <button
          onClick={onEditClick}
          data-friend-id={oneFriend.id}
          className="btn btn-secondary"
        >
          Edit
        </button>
        <button
          onClick={onDeleteClick}
          data-friend-id={oneFriend.id}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default React.memo(Friend);
//the behavior that if any particular object is provided the same set of properties
//then expect the same output
