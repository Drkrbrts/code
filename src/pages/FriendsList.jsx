// // import React, { Component } from "react";
// // import { NavLink, withRouter } from "react-router-dom";
// // import axios from "axios";
// // import FriendCard from "./FriendCard";
// // import Pagination from "rc-pagination";
// // import Button from "react-bootstrap/Button";
// // import "./FriendsList.css";
// // //import "bootstrap/dist/css/bootstrap.min.css";

// // const PAGE_SIZE = 8;

// // class FriendsList extends Component {
// //   state = {
// //     searchQuery: "",
// //     totalCount: 0,
// //     totalPages: 1,
// //     currentPageIndex: 0,
// //     friends: [],
// //   };

// //   handleSearchChange = (e) => {
// //     this.setState({ searchQuery: e.target.value });
// //   };

// //   onSearchClick = () => {
// //     this.searchFriends();
// //   };

// //   searchFriends = () => {
// //     let apiUrl = "";

// //     if (!!this.state.searchQuery) {
// //       apiUrl = `https://api.remotebootcamp.dev/api/friends/search?pageIndex=${this.state.currentPageIndex}&pageSize=${PAGE_SIZE}&q=${this.state.searchQuery}`;
// //     } else {
// //       apiUrl = `https://api.remotebootcamp.dev/api/friends?pageIndex=${this.state.currentPageIndex}&pageSize=${PAGE_SIZE}`;
// //     }
// //     const config = {
// //       method: "GET",
// //       url: apiUrl,
// //       crossdomain: true,
// //     };

// //     axios(config)
// //       .then((response) => {
// //         console.log("data", response.data.item.pagedItems);
// //         this.setState({
// //           totalCount: response.data.item.totalCount,
// //           currentPageIndex: response.data.item.pageIndex,
// //           totalPages: response.data.item.totalPages,
// //           friends: response.data.item.pagedItems,
// //         });
// //       })
// //       .catch((response) => {
// //         console.warn(response);
// //         this.setState({ friends: [] });
// //       });
// //   };

// //   onPaginationChange = (current, pageSize) => {
// //     this.setState({ currentPageIndex: current - 1 }, () => {
// //       this.searchFriends();
// //     });
// //   };

// //   deleteFriend = (id) => {
// //     console.log(id);
// //     var config = {
// //       method: "DELETE",
// //       url: "https://api.remotebootcamp.dev/api/friends/" + id,
// //       crossdomain: true,
// //       headers: { "Content-Type": "application/json" },
// //     };

// //     axios(config)
// //       .then((response) => {
// //         console.log("data", response.data);
// //       })
// //       .catch((response) => {
// //         console.warn(response);
// //       })
// //       .finally(() => {
// //         this.searchFriends();
// //       });
// //   };

// //   componentDidMount() {
// //     this.searchFriends();
// //   }

// //   render() {
// //     return (
// //       <div className="container">
// //         <div>
// //           <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
// //             <div className="d-flex">
// //               <input
// //                 type="search"
// //                 className="form-control form-control-dark search-box"
// //                 name="searchQuery"
// //                 placeholder="Search for Friends"
// //                 aria-label="Search"
// //                 value={this.state.searchQuery}
// //                 onChange={this.handleSearchChange}
// //               />
// //               &nbsp;
// //               <button
// //                 class="btn btn-secondary btn-md"
// //                 onClick={this.onSearchClick}
// //                 type="button"
// //               >
// //                 Search
// //               </button>
// //               <div className="ml-auto">
// //                 <NavLink to="/Addfriends">
// //                   <Button> Add Friend </Button>
// //                 </NavLink>
// //               </div>
// //             </div>
// //           </form>
// //         </div>
// //         <div className="row">
// //           {this.state.friends.map((friend) => (
// //             <FriendCard
// //               key={friend.id}
// //               friend={friend}
// //               deleteFriend={this.deleteFriend}
// //             />
// //           ))}
// //         </div>
// //         <Pagination
// //           total={this.state.totalCount}
// //           current={this.state.currentPageIndex + 1}
// //           pageSize={PAGE_SIZE}
// //           onChange={this.onPaginationChange}
// //         />
// //       </div>
// //     );
// //   }
// // }

// // export default withRouter(FriendsList);
