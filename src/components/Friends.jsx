import React from "react";
import {Link} from "react-router-dom";
import Card from "../components/Card";
import * as FriendService from "../services/FriendService";
//import AddFriend from "../components/AddFriend";


class Friends extends React.Component {
    
    state = {
        friends: [],
    };

    onEditFriendClicked = (fre) => {
        console.log(fre.id);
        this.props.history.push("/AddFriend/" + fre.id);
    };

    onDeleteFriendClicked(fren) {
        FriendService.deleteFriend(fren.id)
            .then(this.onDeleteFriendSuccess)
            .catch(this.onDeleteFriendError);
    };

    onDeleteFriendSuccess(response) {
        console.log(response);
    }

    onDeleteFriendError(err) {
        console.log(err);
    }

    onAddFriendClicked = () => {
        console.log("onAddFriendClicked was clicked");
        this.props.history.push("/friends/addFriend");
    };

    componentDidUpdate(prevProps) {
        let currentPath = this.props.location.pathname;
        let previousPath = prevProps.location.pathname;
        console.log({currentPath, previousPath});
      };

      componentDidMount() {
        let pageIndex = 0;
        let pageSize = 10;
        FriendService.getPaginated(pageIndex, pageSize).then(this.onGetSuccess).catch(this.onGetError);
      };

      onGetSuccess = (response) => {
        console.log(response);
        let myFriends = response.data.item.pagedItems;
        this.setState((preState) => {
            return {mappedFriends: myFriends.map(this.mapFriends) };
        });
    };
    
    onGetError = (err) => {
        console.error(err)
    };

    mapFriends = (oneFriend) => {
        return(
            <React.Fragment key={oneFriend.id}>
                <Card 
                    primaryImage={oneFriend.primaryImage.imageUrl} 
                    title={oneFriend.title}
                    headline={oneFriend.headline}
                    bio={oneFriend.bio}
                    summary={oneFriend.summary}
                    slug={oneFriend.slug}
                    statusId={oneFriend.statusId} 
                    skills={oneFriend.skills}
                    edit={() => this.onEditFriendClicked(oneFriend)}
                    delete={() => this.onDeleteFriendClicked(oneFriend)}
                    />
            </React.Fragment>
        );
    };

    render() {
        return(
            <React.Fragment>
                <header className="p-1 bg-dark text-white">
                <div className="container p-1">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/friends/addFriend">
                        <button type="button" className="btn btn-info me-2" onClick={this.onAddFriendClicked}>
                        + Add Friend
                        </button>
                    </Link>
                    </div>
                </div>
            </header>
            <div className="card-container p-5">
                {this.state.mappedFriends}
            </div>
            </React.Fragment>
        );
    }
}

export default Friends;