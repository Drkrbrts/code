import React from "react";
import deleteFriend from "../services/friendService";

function SingleFriend({ oneFriend }) {
  //function onDeleteClickFull() {}

  function onDeleteClickFull(props) {
    console.log("Clicked=deleted");
    props.onClick.deleteFriend(oneFriend.id);
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
          <strong>{oneFriend.headline}</strong>
        </p>
        <button
          className="btn btn-primary"
          // onClick={this.onEditClick}
          data-edit-id={oneFriend.id}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={onDeleteClickFull}
          data-del-id={oneFriend.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleFriend;
