import React from "react"
import * as friendService from "../services/friendService";
class Friends extends React.Component {

    state = {};

componentDidMount = () =>{

    //this.setState((preState) => {
     //   return {mapFriends: preState.presidents.map()}
    //})

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

mapFriends = (friend) => {
    console.log("mapFriend",friend)
    
    return (
        <React.Fragment key={`friend${friend.id}`}> 
        <div className="col-md-3">
            <div className="card card-height card-radius">
                <div className="image-cont">
                    <img className="card-img-top card-image img-radius image" src={friend.primaryImage.imageUrl} alt="..." />
                </div>
                <div className="card-body card-height">
                        <h5 className="card-name">{friend.title}</h5>
                        <p className="card-team">{friend.bio}</p>

                </div>
                    <div className="card-footer bttn-center bttn-inline">
                        <button className="delete-player btn btn-danger bttn-inline">Delete</button>
                        <button className="btn btn-info bttn-inline edit">Edit</button>
                </div>

            </div>
        </div>
        </React.Fragment>
    )
    
}

    render() {

        return (
        <React.Fragment>
            <div className="container">
            <div className="col-md-12">
                <h1>Friends</h1>
                <br />
                <div className="row">
                   {this.state.mappedFriends}
                </div>
            </div>
            </div>
        </React.Fragment>

        )}
};

export default Friends;