import React from "react";
import PropTypes from "prop-types";

function FriendCard(props) {
  console.log("SingleFriend is firing");

  const oneFriend = props.friend;

  oneFriend.propTypes = {
    friend: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      headline: PropTypes.string,
      primaryImage: PropTypes.string,
    }),
  };

  console.log("This is one friends: ", oneFriend.primaryImage);

  const onEditClicked = () => {
    props.onEditClicked(oneFriend);
  };

  const onDeleteClicked = () => {
    props.onDeleteClicked(oneFriend);
  };
  return (
    <div className="col-3 d-flex border-0 p-3 card-friend">
      <div className="card shadow w-100">
        <img
          src={oneFriend.primaryImage} //removed imageUrl
          className="card-img-top pt-2"
          alt=""
        />
        <div className="card-body d-flex p-2">
          <div>
            <h5
              className="card-title mb-0 pt-2 pb-1 border-top text-center"
              data-friend-id="0"
            >
              {oneFriend.title}
            </h5>
            <div className="card-headline text-center p-2 text-black-50">
              <p>
                <q>
                  <i>{oneFriend.headline}</i>
                </q>
              </p>
            </div>

            <div className="d-flex justify-content-around">
              <button
                type="button"
                className="btn btn-primary edit-friend"
                style={{ width: 75 }}
                onClick={onEditClicked}
                data-friend-id={oneFriend.id}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger delete-friend"
                onClick={onDeleteClicked}
                data-friend-id={oneFriend.id}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FriendCard);
