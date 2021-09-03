import React from "react";

function SingleFriend(props) {
  var friend = props.friend;

  function logClick() {
    props.onClick(friend);
  }

  return (
    <div className="card col-md-3">
      <img src={friend.primaryImage.imageUrl} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{friend.title}</h5>
        <p className="card-text">{friend.summary}</p>
        <button className="btn btn-primary mx-1" data-friend-id={friend.id}>
          Edit
        </button>
        <button className="btn btn-danger mx-1" data-friend-id={friend.id}>
          Delete
        </button>
        <button
          className="btn btn-outline-warning mx-1"
          data-friend-id={friend.id}
          onClick={logClick}
        >
          Log in Console
        </button>
      </div>
    </div>
  );
}

export default SingleFriend;
