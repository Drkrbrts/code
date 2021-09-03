import React from "react";

function SingleFriendship(props) {
  const oneFriendship = props.friendship;

  const onFrenClickFull = function () {};

  props.onClick(oneFriendship);

  return (
    <div className="card col-md-3">
      <img src={oneFriendship.avatar} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{oneFriendship.name}</h5>
        <p className="card-text">
          <strong>{oneFriendship.pp}</strong>
        </p>
        <button
          className=""
          onClick={() => onFrenClickFull(oneFriendship)}
          data-fren-id={oneFriendship.id}
        >
          Go somewhere
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleFriendship);
