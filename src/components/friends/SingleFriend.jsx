import React from "react";

function SingleFriend(props) {
  const oneFriend = props.friend;

  function onEditClicked() {
    // props.onClick(oneFriend);
    console.log("testing..");
    props.onEditClick(oneFriend);
  }
  function onDeleteClicked() {
    // props.onClick(oneFriend);
    console.log("testing.. 2");
    props.onDeleteClick(oneFriend);
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
        <p className="card-text">{oneFriend.bio}</p>
        <p className="card-text">{oneFriend.headline}</p>
        <p className="card-text">{oneFriend.summary}</p>
        <p className="card-text">{oneFriend.id}</p>
        <p className="card-text">{oneFriend.statusId}</p>
        <button
          className="btn btn-info"
          onClick={onEditClicked}
          data-friend-id={oneFriend.id}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={onDeleteClicked}
          data-friend-id={oneFriend.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
