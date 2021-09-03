import React from "react";
import * as friendsService from "./services/friendsService"
import SingleFriend from "./SingleFriend";

class FriendsView extends React.Component{

    state={}

    componentDidMount(){
        console.log("componentDidMount");

        friendsService.getFriends()
            .then(this.onGetFriendsSuccess)
            .catch(this.onGetFriendsError);
    }

    mapFriends=(friend)=>{
        return (
            <React.Fragment key={`friend-${friend.id}`}>
            <SingleFriend friend= {friend} onClick={this.onEditClicked}></SingleFriend>
            </React.Fragment>
        )
    }

    onGetFriendsSuccess=(response)=>{
        console.log(response, "onGetFriendsSuccess");

        this.setState((prevState)=>{

            return { mappedFriends: response.map(this.mapFriends)}
        })
    }

    onGetFriendsError=(error)=>{
        console.log(error, "onGetFriendsError");
    }

    onEditClicked=(friend)=>
    {
        console.log(friend);

        this.props.history.push(`/friends/${friend.id}/edit`, {
            type: "TO_UPDATE",
            payload: friend,
        });
    }


    render()
    {
        return (

                <div>
                    <h1 style={{padding: "15px", marginBottom: "50px"}}>Friends</h1>
               
                    <div style={{padding: "15px"}} className="row">
                        {this.state.mappedFriends}
                    </div>
                </div>
        )
        
    }
}

export default FriendsView;