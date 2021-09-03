import React from "react"
import * as userService from "../services/userService"
import {NavLink} from "react-router-dom"
import UpdateFriend from "./UpdateFriend";


class Friends extends React.Component
{
    state = {
        
    };

    componentDidMount(){
        userService.getPageFriend().then(this.onGetPageFriendSuccess).catch(this.onGetPageFriendError)
    }
//.................................................................................................................
    
    onGetPageFriendSuccess = (response) =>{
        console.log("this", response);
        this.setState((preState)=>{
            return {mappedFriends: response.data.item.pagedItems.map(this.oneFriend)}
        })
    }
    onGetPageFriendError = (err) =>{
        console.error(err)
    }
//................................................................................................................
    onDeleteClicked = (e) =>
    {
        console.log(e.currentTarget.dataset.friendid)
        let id = e.currentTarget.dataset.friendid
        userService.deleteFriend(id).then(this.onDeleteFriendSuccess).catch(this.onDeleteFriendError)
    }
    onDeleteFriendSuccess = (response) =>{
        console.log("Delete friend success")
    }

    onDeleteFriendError =(err) =>{
        console.error(err)
    }
//.......................................................................................................................
    onEditClicked = (e) =>{
        //  console.log(e.currentTarget.dataset)
        let currentTarget = e.currentTarget.dataset;
        let id = currentTarget.friendId;
        console.log(currentTarget);
       
        this.props.history.push("/addFriend/" + id + "/edit")
    }
//.......................................................................................................................
    oneFriend = (one) =>{
        return (
            <React.Fragment key={one.id}>
                {/* <SingleFriend oneFriend={one} onClick={this.onDeleteClicked}></SingleFriend> */}
             <div className="card col-3" key={one.slug}>
                <img className="card-img-top rounded-circle" src={one.primaryImage.imageUrl} alt="..." width="10" height="350"/>
                <div className="card-body">
                    <h5 className="card-title">{one.title}</h5>
                    <p className="card-text">{one.summary}</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-danger mx-3" onClick={this.onDeleteClicked} data-friend-id={one.id}>Delete</button>
                    <button className="btn btn-info mx-3 px-4" onClick={this.onEditClicked} 
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
            </React.Fragment>
        )
    }
//..........................................................................................................................
    // onePresidentSample = (one) =>{
    //     return <p key={`Presidents-${one.id}`}>{one.name}</p>
    // }
//..........................................................................................................................
    render()
    {
        return (
            
            <div className="col-md-12 p-5 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <h1>Friends</h1>
                <NavLink to="/addFriend">
                    <button type="button" className="btn btn-primary m-3">+ Friend</button>
                </NavLink>
                <hr />
                <div className="row">
                    {/* {this.state.presidents.map(this.onePresident)} */}
                    {this.state.mappedFriends}
                </div>
                
            </div>
            
        );
    }
}

export default Friends;