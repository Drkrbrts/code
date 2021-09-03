import React from "react";

const SingleFriend = (props) => {
  const oneFriend = props.friend;
  console.log(oneFriend);

  const onEditFriendClick = (e) => {
    props.handleEdit(oneFriend);
  };

  const onDeleteFriendClick = (e) => {
    props.handleDelete(oneFriend.id);
  };

  return (
    <div className="card col-md-2 m-4">
      <img
        src={oneFriend.primaryImage.imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{oneFriend.title}</h5>
        <p className="card-text">{oneFriend.bio}</p>
        <button className="btn btn-primary" onClick={onEditFriendClick}>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={onDeleteFriendClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default React.memo(SingleFriend);
