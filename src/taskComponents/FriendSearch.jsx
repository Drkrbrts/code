import React from "react";
import Pagination from 'rc-pagination';

import * as friendService from "../services/friendService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleFriend from "./SingleFriend";

class FriendSearch extends React.Component {

    state = {
        friendsArrData: ""
        ,current: 1
        ,mappedFriends: ""
        ,sortedFriends: ""
        ,groupedFriends: ""

    };

    componentDidMount = () =>{
        console.log("componentDidMount")

        if (this.props.searchData === null || this.props.searchData === undefined || this.props.searchData === "")
        {
            this.props.history.push("/Friends")
        }
        else{
        this.sortFriendsIntoGroups(this.props.searchData);
        this.updateFriendList(this.props.searchData)
        }
    }
//===UPDATE FRIENDS====================================================================
    updateFriendList = (myFriends) =>{
    
        this.setState((preState) => {
        return {
            mappedFriends: myFriends.map(this.mapFriends)
        }
        })
    }

//===FRIEND EDIT CLICK=================================================================================================================

 
    onFriendClickFull = (myFriend) =>
    {
        this.props.editShareData(myFriend.friend)
        this.props.history.push(`/Friends/Edit/${myFriend.friend.id}`)
    }


//===MAP FRIENDS=================================================================================================================


    mapFriends = (oneFriend) => {
        return (
            <React.Fragment key={`friend${oneFriend.id}`}> 

            <SingleFriend 
            myFriend={oneFriend}
            delete = {this.deleteMyFriend}
            onClick={this.onFriendClickFull}></SingleFriend>

            </React.Fragment>
        )
        
    }


//===DELETE FRIEND=================================================================================================================


    deleteMyFriend = (friendId) =>{
        console.log("Deleting friend executing",friendId)

        friendService.deleteFriend(friendId)
        .then(this.onDeleteFriendSuccess)
        .catch(this.onDeleteFriendError)
    }

    onDeleteFriendSuccess = (responseFriendId) => {
        toast.success("You successfully deleted friend!");
        this.props.history.push("/Friends")
    }

    onDeleteFriendError= (errResponse) => {
        let serverResponse = {error:errResponse};
        let responseError = serverResponse.error.response.data.errors[0];

        toast.error(responseError);
    }


//===PAGINATION=================================================================================================================

sortFriendsIntoGroups = (friends) => {
    console.log("sortFriendsIntoGroups")
    
    const chunkSize = 8;
    const arr = friends;
    const groups = arr.map((e, i) => { 
     return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
    }).filter(e => { return e; });
    

    this.setState((preState) => {
        var groupedFriends = [...preState.sortedFriends]
        groupedFriends = groups;

    return {
        groupedFriends
        
    }
    })
    
}

onChange = page => {  

    this.setState({
      current: page,
    });
  };

updateFriendCount = myFriends => {
    let friendQuantity = this.props.searchData.length;
    //console.log("friendQuantity",friendQuantity)
    this.setState((preState) => {

    return {
        friendCount: friendQuantity
    }
    })
}

//testDestructuring = ({searchData}) =>{
//    console.log("testDestructuring",searchData)
//}

componentDidUpdate(prevProps,prevState) {
    
    console.log("componentDidUpdate")
    //console.log("state ",this.state.friendsArrData)
    //console.log("props ",this.props.searchData)
    /*
    if (this.state.friendsArrData !== this.props.searchData) {
       
        let page = this.state.current;
        page = page -1;
  
        this.setState((preState) => {

        return { friendCount: friendQuantity }
        })
      
        //this.setState({current : 1})
        //this.setState({friendsArrData : this.props.searchData})
        
        //this.sortFriendsIntoGroups(this.props.searchData);

        this.updateFriendList(this.state.groupedFriends[page])
        this.updateFriendCount();
    }
    */
    /*
    if (this.state.current !== prevState.current) {
        let page = this.state.current;
        page = page -1;

        this.setState({current : this.state.current})
        this.updateFriendList(this.state.groupedFriends[page])
    }
    */

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

export default FriendSearch;