import React from "react";
import { useHistory } from "react-router";
import friendsService from "./services/friends";

function SingleFriend(props) {
  const friend = props.friend;
  const id = friend.id;
  const payload = {
    title: friend.title,
    bio: friend.bio,
    summary: friend.summary,
    headline: friend.headline,
    slug: friend.slug,
    primaryImage: friend.primaryImage.imageUrl,
  };

  const history = useHistory();

  const onEditBtnClickFull = function () {
    props.onClick(id, payload);
  };

  const onDeleteBtnClick = function () {
    friendsService.delete(id).then(deleteSuccess).catch(deleteError);
  };

  const deleteSuccess = (response) => {
    console.log(response);
    history.go(0);
  };

  const deleteError = (response) => {
    console.error(response);
  };

  return (
    <div className="card col-md-3">
      <img
        src={friend.primaryImage.imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{friend.title}</h5>
        <p className="card-text">{friend.bio}</p>
        <button
          date-friend-id={friend.id}
          className="btn btn-primary"
          onClick={onEditBtnClickFull}
        >
          Edit
        </button>
        <button
          date-friend-id={friend.id}
          className="btn btn-danger"
          onClick={onDeleteBtnClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
