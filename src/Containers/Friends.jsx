import React from "react";

import * as friendService from "../services/friendService";

import SingleFriend from "./SingleFriend";

import AddFriends from "./AddFriends";

class Friends extends React.Component {
  state = {};
  // friends: [
  //   {
  //     id: 12,
  //     title: "Thomas Anderson",
  //     bio: "Coder at best",
  //     summary: "Breaking through",
  //     headline: "I know Kung Fu",
  //     slug: "neo-matrix-keanu-reeves.jpg",
  //     statusId: "1",
  //     primaryImage:
  //       "https://www.maxim.com/.image/t_share/MTY2MDA0NzczOTc4Mzg0MzMx/neo-matrix-keanu-reeves.jpg",
  //   },
  //   {
  //     id: 13,
  //     title: "William Wallace",
  //     bio: "Revolutionary",
  //     summary: "Freedom",
  //     headline: "Few men truly live",
  //     slug: "images?q=tbn:ANd9GcSnW_WKW6yx0PFoXgfEZqSD-xNiky0HWlaxLQ&usqp=CAU",
  //     statusId: "2",
  //     primaryImage:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnW_WKW6yx0PFoXgfEZqSD-xNiky0HWlaxLQ&usqp=CAU",
  //   },
  // ],

  componentDidMount() {
    /*this.setState((preState) => {
      return { mappedFriends: preState.friends.map(this.mapFriends) };
    });*/
    friendService
      .friendsShow(0, 5)
      .then(this.onGetSuccess)
      .catch(this.onGetError);
  }
  onGetSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    this.setState((preState) => {
      return {
        mappedFriends: response.data.item.pagedItems.map(this.mapFriends),
      };
    });
  };
  onGetError = (err) => {
    console.error(err);
  };

  onAddFriendClick = () => {
    this.props.history.push("/AddFriends");
  };

  onEditClick = (e) => {
    console.log(e.currentTarget);
  };

  // onDeleteClickFull = (del) => {
  //   console.log(del);
  // };

  onDeleteClickFull = (id) => {
    friendService
      .deleteFriend({ id })
      .then(this.onDeleteSuccess)
      .catch(this.onDeleteError);
  };

  onDeleteSuccess = (response) => {
    console.log(response);
    this.toastMessage(true);
    friendService
      .friendsShow(0, 10)
      .then(this.onFriendsShowSuccess)
      .catch(this.onFriendsShowError);
  };

  onDeleteError = (err) => {
    console.log({ error: err });
    this.toastMessage("deleteError");
  };

  mapFriends = (oneFriend) => {
    return (
      <SingleFriend
        oneFriend={oneFriend}
        key={`Friends-${oneFriend.id}`}
        onClick={this.onEditClick}
      />
    );
  };

  mapFriendSimple = (oneFriend) => {
    return <p key={`Friends-${oneFriend.id}`}>{oneFriend.title}</p>;
  };

  render() {
    return (
      <div className="col-md-12 p-5">
        <h1>Friends</h1>
        <button
          className="btn btn-success my-3"
          onClick={this.onAddFriendClick}
        >
          + Friend
        </button>
        <hr />

        <div className="row">
          {/*this.state.friends.map(this.mapFriends)*/}
          {this.state.mappedFriends}
        </div>
      </div>
    );
  }
}

export default Friends;

/*

import React from "react";

// import * as friendsList from "../services/friendService";

// import SingleFriend from "./SingleFriend";

class Friends extends React.Component {
  state = {
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "",
    primaryImage: "",
  };

  componentDidMount() {

    friendsList.getFriends().then(this.onGetSuccess).catch(onGetError);
  }

  onGetSuccess = (myFriends) => {
    console.log(myFriends);
    this.setState((preState) => {
      return { mappedFriends: myFriends.map(this.mapFriend) };
    });
  };

  onGetError = () => {
    console.error(err);
  };

  onFrenClick = (e) => {
    console.log(e.currentTarget, dataset);
    console.log(e.currentTarget, dataset, frenId);

  };

  onFrenClickFull = (fren) => {
    console.log(fren);
  };

  mapFriends = (oneFriend) => {
    return (
      <React.Fragment key={`Friends-${oneFriend.id}`}>
        <SingleFriend
          friendship={oneFriend}
          onClick={this.onFrenClickFull}
        ></SingleFriend>
      </React.Fragment>
    );
  };

  mapFriendsSimple = (oneFriend) => {
    return <p key={`Friends-${oneFriend.id}`}>{oneFriend.name}</p>;
  };

  render() {
    return (
      <div className="col-md-12 p-5">
        <h1>Friends</h1>
        <hr />

        <div className="row">{this.state.mappedFriends}</div>
      </div>
    );
  }
}

export default Friends;
*/
