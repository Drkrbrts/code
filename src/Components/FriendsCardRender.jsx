import React from "react";

function FriendsCardRender(props) {
  const renderFriend = props.banana;

  function onFriendsDeleteClicked() {
    console.log("it worked!!", renderFriend.id);
    props.onFriendsDeleteClicked(renderFriend.id);
  }

  function onFriendsEditClicked() {
    console.log("hurray!!", renderFriend);
    props.onFriendsEditClicked(renderFriend.id);
  }

  return (
    <div className="container col-md-3 p-5">
      <div className="col">
        <div className="amazing">
          <div className="card">
            <img
              src={renderFriend.primaryImage.imageUrl}
              className="card-img-top"
              alt="..."
            ></img>

            <div className="card-body">
              <h5 className="card-title">{renderFriend.title}</h5>
              <p className="card-text">
                <strong>{renderFriend.bio}</strong>
              </p>
              <button
                type="button "
                className="btn btn-danger btn-md"
                onClick={onFriendsDeleteClicked}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-primary btn-md p-10"
                onClick={onFriendsEditClicked}
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

export default FriendsCardRender;
