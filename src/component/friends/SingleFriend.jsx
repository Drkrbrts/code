import React from "react";

function SingleFriend(props) {
  const aFriend = props.friend;

  function onFriendDelete() {
    props.onDeleteClick(aFriend);
  }

  function onFriendEdit() {
    props.onEditClick(aFriend);
  }
  return (
    <div key={`Friend # ${aFriend.id}`} className="card col-md-3 m-2">
      <img
        src={aFriend.primaryImage.imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{aFriend.title}</h5>
        <p className="card-text">{aFriend.summary}</p>
        <button
          onClick={onFriendEdit}
          data-frd-id={aFriend.id}
          className="btn btn-primary m-1"
        >
          Edit
        </button>
        <button
          onClick={onFriendDelete}
          data-frd-id={aFriend.id}
          className="btn btn-danger m-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
