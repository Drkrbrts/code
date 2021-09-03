import React from "react";
import * as userService from "../services/friendsServices";
import NavLink from "react-router-dom";

// class SingleFriend extends React.Component {

function SingleFriend(props) {
  const nameFriend = props.myFriend;

  function onDeleteFriendClicked(e) {
    e.preventDefault();

    userService
      .deleteFriend(nameFriend.id)
      .then(onDeleteFriendSuccess)
      .catch(onDeleteFriendError);
  }

  function onDeleteFriendSuccess(response) {
    console.log(response);
  }

  function onDeleteFriendError(response) {
    console.warn(response);
  }

  function onEditFriendClicked() {
    // console.log(nameFriendId);
    // props.editingFriend(nameFriend);
    console.log(nameFriend.id);
    props.onClick(nameFriend);
  }

  return (
    <div className="col-md-3 m-2 card shadow text-center p-4 h-100">
      <img
        className="round-card-img center"
        src={nameFriend.primaryImage.imageUrl}
        alt="..."
      />
      <h3 className="card-title">{nameFriend.title}</h3>
      <p className="card-text">{nameFriend.bio}</p>
      <div>
        <button
          id={nameFriend.id}
          className="mx-1 col-4 my-1 btn btn-danger"
          onClick={onDeleteFriendClicked}
        >
          Delete
        </button>
        <button
          id={nameFriend.id}
          onClick={onEditFriendClicked}
          className="mx-1 col-4 my-1 btn btn-secondary"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
