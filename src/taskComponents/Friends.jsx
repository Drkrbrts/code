import React from "react";
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
        ,current: 1
        ,mappedFriends:[]
        
    };
    

/*
====GET FRIENDS=================================================================================================================
*/
    componentDidMount = () =>{
        this.getFriends();
    }

    getFriends = ()=>{
        let payload = {page: 0, size: 100};
        friendService.getFriends(payload)
        .then(this.onGetFriendsSuccess)
        .catch(this.onGetFriendsError)
    }

    onGetFriendsSuccess = (myFriends) => {
        //console.log("Number of friends",myFriends.data.item.pagedItems.length);
        //let pgNum = 1;
        this.updateFriendCount(myFriends);
        this.currentPage(this.state.current);
      
    }

    onGetFriendsError = (response) => {
        console.error("get friend error",{error:response})
    }

  // ON CLICK CALL BACK for props for edit button, for App to send edited friend props.
    onFriendClickFull = (myFriend) =>
    {
        //console.log("onFriendClickFull",myFriend.friend)
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
        //console.log("prevState.people",prevState.mappedFriends)
    
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
        //console.log("Deleting friend executing",friendId)

        friendService.deleteFriend(friendId)
        .then(this.onDeleteFriendSuccess)
        .catch(this.onDeleteFriendError)
    }

    onDeleteFriendSuccess = (responseFriendId) => {
        toast.success("You successfully deleted friend!");
        this.props.history.push("/Friends")
        this.getFriends();
        this.onDeleteRequested(responseFriendId)  
    }

    onDeleteFriendError= (errResponse) => {
        let serverResponse = {error:errResponse};
        let responseError = serverResponse.error.response.data.errors[0];

        toast.error(responseError);
    }

/*
====PAGINATION=================================================================================================================
*/
    onChange = page => {  
        this.currentPage(page); 
        //console.log("the current page",page);
        this.setState({
        current: page,
        });
    };


    currentPage = (pgNum) => {
        
        let actualPageNumber = pgNum -1;
        //console.log("page index",this.state.current)
        let payload = {page: actualPageNumber, size: 8}; 

        friendService.getFriends(payload)
        .then(this.onChangePageSuccess)
        .catch(this.onChangePageError)
    }

    onChangePageSuccess = (myFriends) => {
        this.updateFriendList(myFriends); 
    }

    onChangePageError = (response) => {
        console.error("get friend error",{error:response})
    }

    updateFriendList = (myFriends) =>{

        let friendsArrData = myFriends.data.item.pagedItems;

        this.setState((preState) => {
        return {
            mappedFriends: friendsArrData.map(this.mapFriends)
        }
        })
    }

    updateFriendCount = myFriends => {
        let friendQuantity = myFriends.data.item.pagedItems.length;

        this.setState((preState) => {

        return {
            friendCount: friendQuantity
            }
        })
    }

    render() {
        return (
        <React.Fragment>
            <Pagination
                defaultCurrent={1}
                pageSize={8}
                onChange={this.onChange}
                current={this.state.current}
                total={this.state.friendCount}
            />
            <div className="container">
            <div className="col-md-12">
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