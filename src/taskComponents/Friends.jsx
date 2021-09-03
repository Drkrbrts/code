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
        ,friendsArrData: ""
        ,friendsRendered: ""
        ,current: 1,
    };
    

/*
====GET FRIENDS=================================================================================================================
*/
    componentDidMount = () =>{

        friendService.getFriends()
        .then(this.onGetFriendsSuccess)
        .catch(this.onGetFriendsError)
    }

    onGetFriendsSuccess = (myFriends) => {
        //console.log("get friend success",myFriends.data.item.pagedItems)
        let friendsArrData = myFriends.data.item.pagedItems;

        this.setState((preState) => {
        return {mappedFriends: friendsArrData.map(this.mapFriends)}
        })
    }

    onGetFriendsError = (response) => {
        console.error("get friend error",{error:response})
    }

  // ON CLICK CALL BACK for props for edit button, for App to send edited friend props.
    onFriendClickFull = (myFriend) =>
    {
        console.log("onFriendClickFull",myFriend.friend)
        this.props.shareFriendData(myFriend.friend)
        this.props.history.push(`/Friends/Edit/${myFriend.friend.id}`)
    }

/*
====MAP FRIENDS=================================================================================================================
*/

    mapFriends = (oneFriend) => {
        //console.log("mapFriend",oneFriend)

        return (
            <React.Fragment key={`friend${oneFriend.id}`}> 

            <SingleFriend 
            myFriend={oneFriend}
            delete = {this.deleteMyFriend}
            onClick={this.onFriendClickFull}></SingleFriend>

            </React.Fragment>
        )
        
    }

/*
====DELETE FRIEND=================================================================================================================
*/

    onDeleteRequested = friendId => {
        
        this.setState(prevState => 
    {
        console.log("prevState.people",prevState.mappedFriends)
    
        const indexOfPerson = prevState.mappedFriends.findIndex( singleFriend => singleFriend.key === `friend${friendId}` );

        const updatedPeople = [...prevState.mappedFriends];
        
        if (indexOfPerson >= 0) 
        {          
            updatedPeople.splice(indexOfPerson, 1);
        }

        return {
        mappedFriends: updatedPeople
        };
    }, 
    );
    };

    deleteMyFriend = (friendId) =>{
        console.log("Deleting friend executing",friendId)

        friendService.deleteFriend(friendId)
        .then(this.onDeleteFriendSuccess)
        .catch(this.onDeleteFriendError)
    }

    onDeleteFriendSuccess = (responseFriendId) => {
        toast.success("You successfully deleted friend!");
        this.props.history.push("/Friends")

        this.onDeleteRequested(responseFriendId)  
    }

    onDeleteFriendError= (errResponse) => {
        let serverResponse = {error:errResponse};
        let responseError = serverResponse.error.response.data.errors[0];

        toast.error(responseError);
    }

/*
====UPDATE FRIEND=================================================================================================================
*/

    editMyFriend = (friendId) =>{
        console.log("Editing friend executing",friendId)

        friendService.editFriend(friendId)
        .then(this.onEditFriendSuccess)
        .catch(this.onEditeFriendError)
    }

    onEditFriendSuccess = (responseFriendId) => {
        toast.success("You successfully edited a friend!");
        this.props.history.push("/Friends")

        this.onDeleteRequested(responseFriendId)  
    }

    onEditeFriendError= (errResponse) => {
        let serverResponse = {error:errResponse};
        let responseError = serverResponse.error.response.data.errors[0];

        toast.error(responseError);
    }

/*
====PAGINATION=================================================================================================================
*/
onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

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

            <Pagination
        onChange={this.onChange}
        current={this.state.current}
        total={20}
      />

            </div>
        </React.Fragment>
        )}
};

export default Friends;