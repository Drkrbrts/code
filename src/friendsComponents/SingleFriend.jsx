import React from "react";
import * as friendService from "../services/friendServices";

function SingleFriend(props) {
  const aFriend = props.aFriend;
  console.log(aFriend);

  const onDeleteClickedFull = function () {
    props.onClick(aFriend);
    console.log(aFriend.id);

    friendService
      .deleteFriend(aFriend.id)
      .then(onDeleteSuccess)
      .catch(onDeleteError);
  };

  let onEditClickedFull = () => {
    props.onClick(aFriend);
    console.log(aFriend);
    props.history.push("/friendform");
  };

  const onDeleteSuccess = (response) => {
    console.log(response);
  };

  const onDeleteError = (errResponse) => {
    console.log(errResponse);
  };

  //   onDeleteClickedFull = (friend) => {
  //     console.log(friend.id);
  //     this.props.onClick(friend);

  //     friendService
  //       .deleteFriend(friend.id)
  //       .then(this.onDeleteSuccess)
  //       .catch(this.onDeleteError);
  //   };

  //   onEditClickedFull = (afriend) => {
  //     console.log(afriend.id, this);

  //   };

  return (
    <div
      key={aFriend.id}
      className="card col-4 col-md-3 m-2 card shadow text-center p-4 h-100"
    >
      <img
        src={aFriend.primaryImage.imageUrl}
        className="card-img-top "
        alt=""
      ></img>
      <div className="card-body">
        <h5 className="card-title">{aFriend.title}</h5>
        <p className="card-text">{aFriend.bio}</p>
        <button
          type="button"
          href="#"
          className="btn btn-warning m-1"
          onClick={() => onEditClickedFull()}
          data-editfriend-id={aFriend.id}
        >
          Edit
        </button>
        <button
          type="button"
          href="#"
          className="btn btn-danger m-1"
          onClick={() => onDeleteClickedFull(aFriend)}
          data-friend-id={aFriend.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
