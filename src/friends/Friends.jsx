import React from "react";
import * as friendService from "../services/friendService";
import SingleFriend from "./SingleFriend";
// import Pagination from 'rc-pagination';

class Friends extends React.Component {
    state = {
        mappedFriends: []
    };

    componentDidMount()
    {
        friendService
            .getAll(0, 3)
            .then(this.onGetFriendsSuccess)
            .catch(this.onGetFriendsError);
    }

    onGetFriendsSuccess = (response) =>
    {
        let myFriends = response.data.item.pagedItems;
        console.log(myFriends)
        
        this.setState((prevState) => {
            return {
                mappedFriends : myFriends.map(this.mapFriend)
            };
        });
    }

    onGetFriendsError = (err) =>
    {
        console.error(err);
    }

    onDeleteClickFull = (friendToDelete) =>
    {
        console.log(friendToDelete);

        let deletedId = friendToDelete.id;

        friendService
            .deleteById(deletedId)
            .then(this.onDeleteSuccess(deletedId))
            .catch(this.onDeleteError)
    }

    onDeleteSuccess = (idToDelete) =>
    {
        console.log("deleted friend", idToDelete);
        
        this.setState((prevState) => {

                const indexOfFriend = prevState.mappedFriends.findIndex(
                    (friendMember) => friendMember.props.children.props.friend.id === idToDelete
                );
                    console.log(indexOfFriend, idToDelete);
                const mappedFriends = [...prevState.mappedFriends];

                if (indexOfFriend >= 0) {
                    mappedFriends.splice(indexOfFriend, 1);
                }
            
                return{ 
                    mappedFriends
                    , formData: null 
                };  
            }, this.stateChanged)
    }

    onDeleteError = (error) =>
    {
        console.error(error)
    }

    onEditClickFull = (friendToEdit) =>
    {
        console.log(friendToEdit);
        this.props.history.push(`/Friends/${friendToEdit.id}/edit`, friendToEdit);
    }
        // let updateById = friendToEdit.id;
        // friendService
        // .update(updateById, )
        // .then(this.onUpdateSuccess)
        // .catch(this.onUpdateError)
    

    //grab id and push to the form
    //want to attach the service call to it so it can update
    
    
    // componentDidUpdate(prevProps)
    // {
    //     let currentPath = this.props.location.pathname;
    //     let previousPath = prevProps.props.location.pathname;

    //     console.log("button update", {currentPath, previousPath});
    // }

    mapFriend = (oneFriend) =>
    {
        return (
            <React.Fragment key={`Friends-${oneFriend.id}`}>
                <SingleFriend 
                    friend={oneFriend} 
                    onEditClick={this.onEditClickFull}
                    onDeleteClick={this.onDeleteClickFull}
                >
                </SingleFriend>

            </React.Fragment>
        );
    }

    render(){
        return (
            <div className="container col-md-10 p-5">
                <h1>Your Friends</h1>
                <hr/>
                <div className="row">
                    {this.state.mappedFriends}
                </div>
                {/* <Pagination total={80} /> */}
           </div>
        );
    }
}

export default Friends;



    // onEditClick = (e) =>
    // {
    //     console.log(e.currentTarget.dataset)
    //     console.log(e.currentTarget.dataset.friendSlug);
    // }



            /* <div className="card col-md-4">
                <img className="card-img-top" src={oneFriend.primaryImage.imageUrl} alt={oneFriend.summary}/>
                <div className="card-body">
                    <h4 className="card-text">{oneFriend.title}</h4>
                    <h4 className="card-text">{oneFriend.headline}</h4>
                    <h6 className="card-text">{oneFriend.skills}</h6>
                    <p className="card-text">{oneFriend.bio}</p>
                    <p className="card-text">{oneFriend.statusId}</p>                                        
                </div>   
                    <button 
                        className="btn btn-primary" 
                        onClick={() => this.onEditClickFull(oneFriend)} 
                        data-friend-slug={oneFriend.slug}
                    >
                        Edit
                    </button>
                    <button 
                        className="btn btn-primary" 
                        onClick={this.onDeleteClick}
                    >
                        Delete
                    </button>
            </div> */