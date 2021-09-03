import React from "react";

function SingleFriend(props) {
  const oneFriend = props.friend;

  function onDeleteFriendClick(e) {
    props.onClick(oneFriend);
    console.log(e.currentTarget.dataset.frienId);
  }

  function onEditFriendClick(e) {
    // props.onClick(oneFriend);
    props.history.push(`/friendsForm/${e.currentTarget.dataset.fId}/edit`);
  }
  return (
    <div className="card shadow text-center p-4 h-100">
      <img
        className="round-card-img center"
        src={oneFriend.primaryImage.imageUrl}
        alt="..."
      />
      <h3 className="card-title">{oneFriend.title}</h3>
      <p className="card-text">{oneFriend.bio}</p>
      <div>
        <button
          className="mx-1 col-4 my-1 btn btn-danger"
          data-frien-id={oneFriend.id}
          onClick={onDeleteFriendClick}
        >
          Delete
        </button>
        <button
          className="mx-1 col-4 my-1 btn btn-secondary"
          data-f-id={oneFriend.id}
          onClick={onEditFriendClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
