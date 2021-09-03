import React from "react";

function SingleFriend(props) {
  const aFriend = props.friend;

  const onFriendDelete = () => {
    props.onDeleteClick(aFriend);
  };

  const onFriendEdit = () => {
    props.history.push("/friends/" + aFriend.id + "/edit", aFriend);
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
      <div className="card shadow text-center p-4 h-100">
        <img
          // style={{ height: "200px" }}
          src={aFriend.image.imageUrl}
          className="round-card-img center"
          alt="..."
        />
        <h3 className="card-title">{aFriend.title}</h3>
        <p className="card-text">{aFriend.summary}</p>
        <div>
          <button
            onClick={onFriendEdit}
            data-frd-id={aFriend.id}
            className="mx-1 col-4 my-1 btn btn-secondary"
          >
            Edit
          </button>
          <button
            onClick={onFriendDelete}
            data-frd-id={aFriend.id}
            className="mx-1 col-4 my-1 btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
