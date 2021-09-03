import React from "react";
import * as friendService from "../services/friendService";

const SingleFriend = (props) => {
  const onEditHandle = () => {
    let friendData = props.singleFriend;
    console.log("edit friends is firing", friendData);
    props.history.push(`/friends/${props.singleFriend.id}/edit`, {
      type: "EDIT_FRIEND",
      payload: friendData,
    });
  };

  const onDeleteHandle = () => {
    let id = props.singleFriend.id;
    friendService
      .deleteFriend(id)
      .then(onDeleteFriendSuccess)
      .catch(onDeleteFriendError);
  };

  const onDeleteFriendSuccess = (response) => {
    console.log(response, "friend deleted");
    props.history.push("/friends");
  };

  const onDeleteFriendError = (error) => {
    console.log(error, "did not delete friend");
  };
  return (
    <>
      <div className="card ">
        <img
          src={props.singleFriend.primaryImage.imageUrl}
          className="card-img-top"
          alt="friend"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.singleFriend.title}</h5>
          <p className="card-text">{props.singleFriend.headline}</p>
          <button type="button" className="btn btn-info" onClick={onEditHandle}>
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onDeleteHandle}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleFriend;
