import React from "react";

function FriendsSingle({ friend, onClick }) {
  //   console.log("FriendsSingle firing", friend);
  function onFriendClicked(e) {
    e.preventDefault();
    let target = e.target;
    let clickAction = target.attributes.name.value;
    // console.log("onFriendClicked firing", clickAction);
    onClick(friend, clickAction);
  }
  return (
    <div className="col-3 flex-column">
      <div className="d-flex h-100 justify-content-center">
        <div className="card border-0 shadow m-2">
          <img
            src={friend.primaryImage.imageUrl}
            className="card-img-top rounded-circle"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title mb-2">{friend.title}</h5>
            <div className="card-text1 text-black-50">{friend.headline}</div>
          </div>
          <div className="row text-center mb-3">
            <div className="col d-block">
              <button
                className="btn btn-danger mx-4"
                name="delete"
                onClick={onFriendClicked}
              >
                Delete
              </button>
              <button
                className="btn btn-info mx-4"
                name="edit"
                onClick={onFriendClicked}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FriendsSingle;
