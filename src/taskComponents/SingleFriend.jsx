import React from "react";

function SingleFriend(props) {

    const friend = props.myFriend;

    const onClickDeleteFriend = function () {
        props.onClick(friend.id)
        console.log("currentTarget")
        
    };

    return (

        <div id={friend.id} className="col-md-3">
            <div className="card card-height card-radius">
                <div className="image-cont">
                    <img className="card-img-top card-image img-radius image" src={friend.primaryImage.imageUrl} alt="..." />
                </div>
                <div className="card-body card-height">
                        <h5 className="card-name">{friend.title}</h5>
                        <p className="card-team">{friend.bio}</p>

                </div>
                    <div className="card-footer bttn-inline">
                      
                            <span className="px-3 ">
                            <button

                            onClick = {onClickDeleteFriend} // captures the whole object with the function
                            data-friend-id = {friend.id}                        // "data-friend-id" the data tag helps react capture the data requested and creates a value from friend-id to friendId

                            className="btn btn-danger">Delete</button>
                            </span>
                            <span className="px-2">
                            <button className="btn btn-warning">Edit</button>
                            </span>
                       
                </div>

            </div>
        </div>

    );
}

export default React.memo(SingleFriend);