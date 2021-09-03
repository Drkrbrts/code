import React from "react";

const SingleFriend = (props) => {
  console.log(props);
  const oneFriend = props.fries;

  const onDeleteFriendBtn = (e) => {
    props.handleDelete(); // pass this some shit
  };

  const onEditFriendBtn = (e) => {
    props.handleEdit(); // passs this some stuff too
  };

  return (
  
      <div className="card col-3 text-center justify-content-center m-3">
      <div className="card-body">
        <img
          className="card-img-top"
          src= {oneFriend.primaryImage.imageUrl}
          alt="no pic"
        ></img>

        <h5 className="card-title mb-2 text-muted">{oneFriend.title}</h5>
        <p className="card-text text-muted">{oneFriend.bio}</p>

        <button className="btn btn-danger me-2" onClick={onDeleteFriendBtn}>
          Delete
        </button>
        <button className="btn btn-primary me-2" onClick={onEditFriendBtn}>
          Edit
        </button>
      </div>
    </div>

    
  );
};

export default SingleFriend;

