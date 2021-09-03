import React from "react";

function SingleFriend(props) {
  const oneFriend = props.friend;

  const onEditClickFull = () => {
    props.onEdit(oneFriend);
  };
  const onDeleteClickFull = () => {
    props.onDelete(oneFriend);
  };
  return (
    <div className="card col-md-3">
      <img src={oneFriend.image.url} className="rounded" alt="..." />
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <h5 className="card-title">{oneFriend.title}</h5>
          <p className="card-text">{oneFriend.summary}</p>
          <div className="d-grid gap-2 d-md-flex">
            <button
              className="btn  btn-danger"
              type="button"
              onClick={onDeleteClickFull}
              data-friend-id={oneFriend.id}
            >
              Delete
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={onEditClickFull}
              data-friend-id={oneFriend.id}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleFriend);
