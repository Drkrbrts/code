import React from "react";
import {NavLink} from "react-router-dom"
import defaultExport from '../services/startUserService'


class FriendsPage extends React.Component {
    state = {
        title: "",
        bio: "",
        summary: "",
        headline: "",
        slug: "",
        statusId: "",
        primaryImage: ""
    }

    componentDidMount() {
        defaultExport.getFriend().then(this.getFriendSuccess).catch(this.onFailure)
    }
    getFriendSuccess = (data) => {
        console.log(data)
        let friendsArray = data.data.item.pagedItems
        this.setState((prevState) => {
            return {...prevState, mappedFriends: friendsArray.map(this.mapFriends)}
        })
    }
    onAddFriendsClicked = (e) => {
        console.log("Add/Edit Friends was clicked")

        this.props.history.push("/addfriends/")
    }
    componentDidUpdate = (prevProps) => {
        let currentPath = this.props.location.pathName
        let previousPath = prevProps.location.pathName

        console.log("buttons", {currentPath, previousPath})
    }

    mapFriends = (newFriend) => {

        return (
            <div className="card col-md-3" key={newFriend.slug}>
                <img src={newFriend.primaryImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{newFriend.title}</h5>
                    <p className="card-text">{newFriend.bio}</p>
                    <p className="card-text">{newFriend.summary}</p>
                    <p className="card-text">{newFriend.statusId}</p>
                    <button type='button' className="btn btn-primary me-2">Edit</button>
                    <button type='button' className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
    onFailure = (data) => {
        console.warn(data)
    }
    render () {
        return <React.Fragment>
            <NavLink to="/addfriends/">
                
            </NavLink>
            <div className="row">
                {this.state.mappedFriends}
            </div>
        </React.Fragment>
        
    }
}

export default FriendsPage;