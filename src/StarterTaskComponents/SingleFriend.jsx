import React from "react";

function SingleFriend(props) {
  const friend = props.friend;

  function onEditClicked() {
    props.onClick(friend);
  }

  const onDeleteClicked = () => {
    props.onClick2(friend);
  };

  return (
    <React.Fragment>
      <div
        className="card"
        style={{ width: "18rem", margin: " 0 0 0 10px", padding: "10px" }}
      >
        <img
          src={friend.primaryImage.imageUrl}
          className="card-img-top"
          alt="friend"
          style={{ height: "300px", borderRadius: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{friend.title}</h5>
          <p className="card-text">{friend.summary}</p>
          <div>
            <button
              onClick={onDeleteClicked}
              className="btn btn-danger mx-2"
              style={{ borderRadius: "10px", height: "50px", width: "100px" }}
              data-f-id={friend.id}
            >
              Delete
            </button>
            <button
              onClick={onEditClicked}
              className="btn"
              style={{
                borderRadius: "10px",
                height: "50px",
                width: "100px",
                color: "white",
                backgroundColor: `rgb(0, 170, 204)`,
              }}
              data-f-id={friend.id}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(SingleFriend);
