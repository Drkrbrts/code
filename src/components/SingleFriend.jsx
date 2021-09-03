import React from "react";
import * as userService from "../services/userService";

//SingleFriend component is basically being used as a  clone template.

const SingleFriend = (props) => {
  console.log(props);
  const oneFriend = props.friend;

  const onDeleteFriendBtn = (e) => {
    props.handleDelete(); // pass this something
    userService.deleteFriend()
    .then(this.onActionSuccess)
    .catch(this.onActionError);

  };
  const onEditFriendBtn = (e) => {
    props.handleEdit(); // pass this some stuff too
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

        <button 
        className="btn btn-danger me-2" 
        onClick={onDeleteFriendBtn}>
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