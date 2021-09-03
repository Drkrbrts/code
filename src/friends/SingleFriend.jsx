import React from "react";

function SingleFriend(props)
{
    const oneFriend = props.friend;


    const onDeleteClickFull = function()
    {
        console.log("click firing")
        props.onDeleteClick(oneFriend);
    };

    const onEditClickFull = function()
    {
        props.onEditClick(oneFriend);
    };

    return (
        <div className="card col-md-4">
            <img 
                className="card-img-top" 
                src={oneFriend.primaryImage.imageUrl} 
                alt={oneFriend.summary}
            />
            <div className="card-body">
                <h3 className="card-text">{oneFriend.title}</h3>
                <h4 className="card-text">{oneFriend.headline}</h4>
                <h6 className="card-text">{oneFriend.skills}</h6>
                <p className="card-text">{oneFriend.bio}</p>
                <p className="card-text">{oneFriend.statusId}</p>                                        
            </div>   
            <button 
                className="btn btn-primary" 
                onClick={onEditClickFull}
                data-editfriend-id={oneFriend.id}
            >
                Edit
            </button>
            <button 
                className="btn btn-primary" 
                onClick={onDeleteClickFull}
                data-deletefriend-id-={oneFriend.id}
            >
                Delete
            </button>
        </div>
    );
}

export default React.memo(SingleFriend);

// _this closures and currying 10:00
