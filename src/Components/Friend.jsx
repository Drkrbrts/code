import React from "react";
// import { editFriend } from "../services/userService";

function Friend(props) {
  const oneBuddy = props.banana;

  function onEditFriendClicked() {
    console.log("Im clicked!", new Date());
    props.onEditFriendClicked("This is my ID", oneBuddy.id);
    console.log(typeof oneBuddy.id);

    //   editFriend(oneBuddy.id).then(onEditFriendSuccess).catch(onEditFriendError);
    // }
    // function onEditFriendSuccess(response) {
    //   console.log(response, "success");
    // }

    // function onEditFriendError(response) {
    //   console.log(response, "error");
  }

  function onDeleteFriendClicked() {
    console.log("I am deleted", new Date());
    props.onDeleteFriendClicked("This ID was deleted", oneBuddy.id);
  }

  return (
    <div className="card col-md-3">
      <img
        src={oneBuddy.primaryImage.imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{oneBuddy.name}</h5>
        <strong>{oneBuddy.bio}</strong>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="row-md-3 p-3">
          <button
            className="btn btn-primary button"
            onClick={onDeleteFriendClicked}
          >
            Delete
          </button>
          <button
            className="btn btn-primary button"
            onClick={onEditFriendClicked}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Friend;
