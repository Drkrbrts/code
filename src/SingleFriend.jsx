import React from "react";
import { toDelete } from "./services/friendsService";


function SingleFriend(props)
{
    const friend = props.friend;

    function onEditClicked(){

        props.onClick(friend)
    }

    const onDeleteClicked =()=>
    {
        console.log(friend, "delete clicked")

        let id = friend.id;
        // console.log(id)

        toDelete(id)
            .then(onDeleteSuccess)
            .catch(onDeleteError);

        
    }
    
    const onDeleteSuccess=(response)=>{
        console.log(response, "onDeleteSuccess")
    }

    const onDeleteError=(response)=>{
        console.log(response, "onDeleteSuccess")

    }

    return (
        <React.Fragment>
        <div className="card" style={{width: "18rem", margin:" 0 0 0 10px", padding: "10px"}}>
                <img src={friend.primaryImage.imageUrl} className="card-img-top" alt="friend" style={{height: "300px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{friend.title}</h5>
                    <p className="card-text">{friend.summary}</p>
                    <div>
                        <button onClick={onDeleteClicked} className="btn btn-danger mx-2" data-f-id={friend.id}>Delete</button>
                        <button onClick={onEditClicked} className="btn btn-primary" data-f-id={friend.id} >Edit</button>
                    </div>
                </div>
        </div>
        </React.Fragment>
    )
}

export default React.memo(SingleFriend);