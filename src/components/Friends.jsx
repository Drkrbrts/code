import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import * as FriendService from "../services/FriendService";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class Friends extends React.Component {
  state = {
    current: 0,
    total: 0,
    pageIndex: 0,
    pageSize: 10,
  };

  componentDidMount() {
    console.log(this.state.current);
    FriendService.getPaginated(this.state.pageIndex, this.state.pageSize)
      .then(this.onGetPaginatedSuccess)
      .catch(this.onGetPaginatedError);
  }

  onGetPaginatedSuccess = (response) => {
    console.log(response);
    let myFriends = response.data.item.pagedItems;
    let trueTotal = response.data.item.totalCount;
    this.setState((preState) => {
      return {
        mappedFriends: myFriends.map(this.mapFriends),
        total: trueTotal,
      };
    });
  };

  onGetPaginatedError = (err) => {
    console.error(err);
  };

  onChange = (page) => {
    console.log(page);

    this.setState(
      {
        current: page,
        pageIndex: page - 1,
      },
      (preState) => {
        this.getFriendPaginated();
      }
    );
  };

  getFriendPaginated = () => {
    FriendService.getPaginated(this.state.pageIndex, this.state.pageSize)
      .then(this.onGetPaginatedSuccess)
      .catch(this.onGetPaginatedError);
  };

  onEditFriendClicked = (oneFriend) => {
    console.log(oneFriend.id);
    this.props.history.push("/AddFriend/" + oneFriend.id);
  };

  onDeleteFriendClicked = (oneFriend) => {
    FriendService.deleteFriend(oneFriend.id)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
  };

  onDeleteFriendSuccess = (response) => {
    console.log(response);
  };

  onDeleteFriendError = (err) => {
    console.log(err);
  };

  onAddFriendClicked = () => {
    console.log("onAddFriendClicked was clicked");
    this.props.history.push("/friends/addFriend");
  };

  mapFriends = (oneFriend) => {
    return (
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
    return (
      <React.Fragment>
        <header className="p-1 bg-dark text-white">
          <div className="container p-1">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link to="/friends/addFriend">
                <button
                  type="button"
                  className="btn btn-info me-2"
                  onClick={this.onAddFriendClicked}
                >
                  + Add Friend
                </button>
              </Link>
            </div>
          </div>
        </header>
        <div className="card-container p-5">
          <div className="row card-deck" style={{ height: "675px" }}>
            <div className="col-3">{this.state.mappedFriends}</div>
          </div>
        </div>
        <Pagination
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            marginBottom: "-200px",
            marginLeft: `550px`,
          }}
          onChange={this.onChange}
          current={this.state.current}
          total={this.state.total}
        />
      </React.Fragment>
    );
  }
}

export default Friends;
