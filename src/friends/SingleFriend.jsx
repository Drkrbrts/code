import React from "react"

function SingleFriend(props)
{
    const one = props.oneFriend;

    function onDeleteClicked  () {
        props.onDeleteClicked(one);
    }
    return (
        <div className="card col-3" key={one.slug}>
                <img className="card-img-top rounded-circle" src={one.primaryImage.imageUrl} alt="..." width="10" height="350"/>
                <div className="card-body">
                    <h5 className="card-title">{one.title}</h5>
                    <p className="card-text">{one.summary}</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-danger mx-3" onClick={onDeleteClicked} data-friend-id={one.id}>Delete</button>
                    <button className="btn btn-info mx-3 px-4"  
                        data-friend-id={one.id} 
                        data-friend-title={one.title}
                        data-friend-bio={one.bio}
                        data-friend-summary={one.summary}
                        data-friend-headline={one.headline}
                        data-friend-slug={one.slug}
                        data-friend-statusid={one.statusId}
                        data-friend-primaryimage={one.primaryImage}>Edit</button>
                </div>
            </div>
    )

}

export default SingleFriend