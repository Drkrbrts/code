import React from "react";

function FriendCard(props) {
  const friend = props.friend;

  let onEditClick = (e) => {
    e.preventDefault();
    props.onEditClick(friend);
  };
  let onDeleteClick = (e) => {
    e.preventDefault();
    props.onDelete(friend.id);
  };

  return (
    <div className="card shadow-lg col-3">
      <div className="card-header">
        <img
          className="card-img-top img-responsive"
          src={friend.primaryImage.imageUrl}
          alt="photograph"
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{friend.title}</h5>
        <p className="card-summary">{friend.summary}</p>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-warning col-5 ms-auto"
          onClick={onEditClick}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger col-5 me-auto"
          onClick={onDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(FriendCard);
