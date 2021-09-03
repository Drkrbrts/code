import React from "react";
import { Link } from "react-router-dom";
//import Card from "../components/Card";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class TechCo extends React.Component {
  state = {
    current: 0,
    total: 0,
    pageIndex: 0,
    pageSize: 3,
    formData: {
      query: "",
    },
  };

  //   componentDidMount() {
  //     let friendId = this.props.match.params.friendId;
  //     console.log("ComponentDidMount", { friendId });
  //     console.log("friendId: " + friendId);
  //     if (friendId) {
  //       FriendService.getById(friendId)
  //         .then(this.onGetByIdSuccess)
  //         .catch(this.onGetByIdError);
  //     } else {
  //       FriendService.getPaginated(this.state.pageIndex, this.state.pageSize)
  //         .then(this.onGetPaginatedSuccess)
  //         .catch(this.onGetPaginatedError);
  //     }
  //   }

  //   onGetByIdSuccess = (response) => {
  //     console.log(response);
  //     let myFriend = response.data.item;
  //     this.setState((preState) => {
  //       return {
  //         mappedFriend: this.mapFriends(myFriend),
  //       };
  //     });
  //   };

  //   onGetByIdError = (err) => {
  //     console.warn(err);
  //   };

  //   onGetPaginatedSuccess = (response) => {
  //     console.log(response);
  //     let myFriends = response.data.item.pagedItems;
  //     let trueTotal = response.data.item.totalCount;
  //     this.setState((preState) => {
  //       return {
  //         mappedFriends: myFriends.map(this.mapFriends),
  //         total: trueTotal,
  //       };
  //     });
  //   };

  //   onGetPaginatedError = (err) => {
  //     console.error(err);
  //   };

  //   onChange = (page) => {
  //     console.log(page);

  //     this.setState(
  //       {
  //         current: page,
  //         pageIndex: page - 1,
  //       },
  //       (preState) => {
  //         this.getFriendPaginated();
  //       }
  //     );
  //   };

  //   getFriendPaginated = () => {
  //     FriendService.getPaginated(this.state.pageIndex, this.state.pageSize)
  //       .then(this.onGetPaginatedSuccess)
  //       .catch(this.onGetPaginatedError);
  //   };

  //   onEditFriendClicked = (oneFriend) => {
  //     console.log(oneFriend.id);
  //     this.props.history.push("/AddFriend/" + oneFriend.id);
  //   };

  //   onDeleteFriendClicked = (oneFriend) => {
  //     FriendService.deleteFriend(oneFriend.id)
  //       .then(this.onDeleteFriendSuccess)
  //       .catch(this.onDeleteFriendError);
  //   };

  //   onDeleteFriendSuccess = (response) => {
  //     console.log(response);
  //   };

  //   onDeleteFriendError = (err) => {
  //     console.log(err);
  //   };

  onAddTechCoClicked = () => {
    console.log("onAddTechCoClicked was clicked");
    this.props.history.push("/techCo/addTechCo");
  };

  //   onFormFieldChanged = (e) => {
  //     let currentTarget = e.currentTarget;
  //     let newValue = currentTarget.value;
  //     let inputName = currentTarget.name;

  //     console.log({ currentTarget, newValue });

  //     this.setState(() => {
  //       let formData = { ...this.state.formData };
  //       formData[inputName] = newValue;
  //       return { formData };
  //     });
  //   };

  //   onSearchClicked = () => {
  //     let query = this.state.formData.query;
  //     FriendService.searchFriend(this.state.pageIndex, this.state.pageSize, query)
  //       .then(this.onSearchFriendSuccess)
  //       .catch(this.onSearchFriendError);
  //   };

  //   onSearchFriendSuccess = (response) => {
  //     console.log(response);
  //     let myFriends = response.data.item.pagedItems;
  //     let trueTotal = response.data.item.totalCount;
  //     this.setState((preState) => {
  //       return {
  //         mappedFriends: myFriends.map(this.mapFriends),
  //         total: trueTotal,
  //       };
  //     });
  //   };

  //   onSearchFriendError = (err) => {
  //     console.warn(err);
  //   };

  //   mapFriends = (oneFriend) => {
  //     console.log("You're inside mapFriends. If you");
  //     console.log("don't see it then its something else");
  //     return (
  //       <React.Fragment key={oneFriend.id}>
  //         <div className="row p-3">
  //           <div className="col p-5">
  //             <Card
  //               primaryImage={oneFriend.primaryImage}
  //               title={oneFriend.title}
  //               headline={oneFriend.headline}
  //               bio={oneFriend.bio}
  //               summary={oneFriend.summary}
  //               slug={oneFriend.slug}
  //               statusId={oneFriend.statusId}
  //               skills={oneFriend.skills}
  //               edit={() => this.onEditFriendClicked(oneFriend)}
  //               delete={() => this.onDeleteFriendClicked(oneFriend)}
  //             />
  //           </div>
  //         </div>
  //       </React.Fragment>
  //     );
  //   };

  render() {
    return (
      <React.Fragment>
        <header className="p-1 bg-dark text-white">
          <div className="container p-1">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link to="/techCo/addTechCo">
                <button
                  type="button"
                  className="btn btn-info me-2"
                  onClick={this.onAddTechCoClicked}
                >
                  + Add Tech Co.
                </button>
              </Link>
              <form>
                <input
                  type="search"
                  name="query"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                  style={{ marginLeft: "800px", width: "25%" }}
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.query}
                ></input>
              </form>
              <div className="text-end">
                <button
                  type="button"
                  className="btn btn-primary me-2"
                  onClick={this.onSearchClicked}
                  style={{ marginLeft: "50px" }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row-3">
            <div className="col-3" style={{ display: "flex" }}>
              {this.state.mappedFriends}
              {this.state.mappedFriend}
            </div>
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
          pageSize={this.state.pageSize}
          hideOnSinglePage={true}
        />
      </React.Fragment>
    );
  }
}

export default TechCo;
