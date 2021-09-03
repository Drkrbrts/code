import React from "react";
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import * as friendService from "../services/friendService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleFriend from "./SingleFriend";

class Friends extends React.Component {

    state = {
        addOrUpdate: ""
    };

    componentDidMount = () =>{

        friendService.getFriends()
        .then(this.onGetFriendsSuccess)
        .catch(this.onGetFriendsError)
    }

    onGetFriendsSuccess = (myFriends) => {
        console.log("get friend success",myFriends.data.item.pagedItems)
        let friendsArrData = myFriends.data.item.pagedItems;

        this.setState((preState) => {
        return {mappedFriends: friendsArrData.map(this.mapFriends)}
        })
    }

    onGetFriendsError = (response) => {
        console.error("get friend error",{error:response})
    }


    onFriendClickFull = (friend) =>
    {
        console.log("DELETE",friend);
    }


    mapFriends = (oneFriend) => {
        console.log("mapFriend",oneFriend)

    return (
        <React.Fragment key={`friend${oneFriend.id}`}> 

        <SingleFriend 
        myFriend={oneFriend}
        onClick={this.onFriendClickFull}></SingleFriend>

        {/*
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

                            onClick = { () => this.onClickDeleteFriend(friend)} // captures the whole object with the function
                            data-friend-id = {friend.id}                        // "data-friend-id" the data tag helps react capture the data requested and creates a value from friend-id to friendId

                            className="btn btn-danger">Delete</button>
                            </span>
                            <span className="px-2">
                            <button className="btn btn-warning">Edit</button>
                            </span>
                       
                </div>

            </div>
        </div>
        */}

        </React.Fragment>
    )
    
}

onClickDeleteFriend = (e) =>{
    // let friendId = e.currentTarget;
    console.log(e)

    e.remove();
    //friendService.deleteFriend()
    //.then(this.onGetFriendsSuccess)
    //.catch(this.onGetFriendsError)
}

onDeleteFriendSuccess = (response) => {
    console.log("Delete friend success:",response)
    toast.success("You successfully deleted friend!");
    this.props.history.push("/Friends")

}

onDeleteFriendError= (errResponse) => {
    let serverResponse = {error:errResponse};
    let responseError = serverResponse.error.response.data.errors[0];

    // console.log("login error:",{error: errResponse})
    toast.error(responseError);
}

    render() {
        return (
        <React.Fragment>

            <div className="container">
            <div className="col-md-12">
                <br />
                <div className="row">                    
                   {this.state.mappedFriends}
                </div>
            </div>
            <Pagination defaultPageSize={1} defaultCurrent={1} total={2} style={{ margin: '100px' }} />
            </div>
            
        </React.Fragment>

        )}
};

export default Friends;