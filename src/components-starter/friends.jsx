import React from "react";
import { getAllFriends, deleteFriend, searchFriends } from "../services/friendService";
import { NavLink } from "react-router-dom";
import debug from "sabio-debug";
import Pagination from 'rc-pagination';

const _logger = debug.extend("Friends");

class Card extends React.Component
{
    render()
    {
        return (
            <div className="card text-center mx-auto" style={{ width: "18rem" }
            }>
                <img className="card-img-top h-50" src={this.props.friend.primaryImage.imageUrl} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.friend.title}</h5>
                    <p className="card-text">{this.props.friend.summary}</p>
                    <div className="row">
                        <button className="btn btn-primary"
                            onClick={() => this.onEditButtonClicked(this.props.friend)}     // <-- capturing array data during mapping
                            data-friendid={this.props.friend.id}>
                            Edit Friend
                        </button>
                        <button className="btn btn-info"
                            onClick={this.onDeleteButtonClicked}
                            data-friendid={this.props.friend.id}>
                            Delete Friend
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

class FriendsPage extends React.Component
{

    state = {
        formData: {},
        searchData: {},
        activePage: 0,
        exampleFriend: {
            "id": "id",
            "title": "title",
            "bio": "bio",
            "summary": "summary",
            "headline": "headline",
            "slug": "slug",
            "statusId": "statusId",
            "primaryImage": "primaryImage"
        },
        friends: [

            // {
            //     name: "Friend One",
            //     id: 1,
            //     avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            // },
            // {
            //     name: "Friend Two",
            //     id: 2,
            //     avatar: "https://images.pexels.com/photos/3775168/pexels-photo-3775168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            // },
            // {
            //     name: "Friend Three",
            //     id: 3,
            //     avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            // }

        ]
    }

    componentDidMount()
    {
        _logger("componentDidMount start");

    }


    onGetAllFriendsSuccess = (response) =>
    {
        let friends = response.data.item.pagedItems
        _logger(friends);
        _logger("Total count is:", response.data.item.totalCount);


        this.setState((prevState) =>
        {
            return {
                mappedFriends: friends.map(this.mapFriends),
                totalCount: response.data.item.totalCount
            }
        });
    };

    onGetAllFriendsFail = (response) =>
    {
        _logger(response);
    };

    onDeleteFriendSuccess = (response) =>
    {
        _logger("friend deleted", response)
    }

    onDeleteFriendFail = (response) =>
    {
        _logger("failed to delete friend", response)
    }

    onDeleteButtonClicked = (e) =>
    {
        let selectedFriendId = e.currentTarget.dataset.friendid;
        deleteFriend(selectedFriendId)
            .then(this.onDeleteFriendSuccess)
            .catch(this.onDeleteFriendFail)
    }

    onEditButtonClicked = (friend) =>
    {

        let selectedId = friend.id;
        _logger(selectedId);

        this.props.history.push("/addfriend/" + selectedId);

    }

    mapFriends = (oneFriend) =>
    {
        return (
            <React.Fragment key={`Friend-${oneFriend.id}`} >
                <Card friend={oneFriend} />
            </React.Fragment>
        )
    }

    // <div className="card text-center mx-auto" style={{ width: "18rem" }
    //             }>
    //                 <img className="card-img-top h-50" src={oneFriend.primaryImage.imageUrl} alt="..." />
    //                 <div className="card-body">
    //                     <h5 className="card-title">{oneFriend.title}</h5>
    //                     <p className="card-text">{oneFriend.summary}</p>
    //                     <div className="row">
    //                         <button className="btn btn-primary"
    //                             onClick={() => this.onEditButtonClicked(oneFriend)}     // <-- capturing array data during mapping
    //                             data-friendid={oneFriend.id}>
    //                             Edit Friend
    //                         </button>
    //                         <button className="btn btn-info"
    //                             onClick={this.onDeleteButtonClicked}
    //                             data-friendid={oneFriend.id}>
    //                             Delete Friend
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>

    // return <p key={`Friend-${resultId}`}>{resultName}</p>;
    // each item mapped needs a key!
    // the FIRST ELEMENT needs to have the key!
    // even if React.Fragment is the first element, and it is not actually rendered anywhere on the page,
    // it still needs to have the key!
    // we could have multiple arrays on this page (cars, friends, events, etc),
    // and objects within the different arrays could have the same id.
    // the first car could have an id of 1, and the first friend could have an id of 1.
    // to avoid conflict, we include the prefix to make sure it is unique



    onShowFriendsButtonClicked = () =>
    {
        getAllFriends(0, 11)
            .then(this.onGetAllFriendsSuccess)
            .catch(this.onGetAllFriendsFail)
    }

    onAddFriendsButtonClicked = () =>
    {
        _logger("add friends button clicked");

    }

    onPageChange = (pageNumber) =>  // the page number i click on
    {
        _logger(`active page is ${pageNumber}`);

        getAllFriends(pageNumber - 1, 2)
            .then(this.onGetAllFriendsSuccess)
            .catch(this.onGetAllFriendsFail)

        this.setState({ activePage: pageNumber });
    }

    onSearchChange = (e) =>
    {
        let inputValue = e.currentTarget.value;


        this.setState(() =>
        {
            let searchData = { ...this.state.searchData };
            searchData.query = inputValue;
            return { searchData }
        })

    }

    onSearchFriendsSuccess = (response) =>
    {
        _logger("search friends success:", response);
        let searchedFriendArray = response.data.item.pagedItems;
        this.setState((prevState) =>
        {
            return {
                mappedFriends: searchedFriendArray.map(this.mapFriends),
                totalCount: response.data.item.totalCount
            }
        });
    }

    onSearchFriendsFail = (response) =>
    {
        _logger("no friends found", response);
    }

    onSearchButtonClicked = (e) =>
    {
        _logger("searchbuttonclicked")
        searchFriends(0, 10, this.state.searchData.query)
            .then(this.onSearchFriendsSuccess)
            .catch(this.onSearchFriendsFail)
    }


    render()
    {
        return (
            <div className="main-container p-5 ">
                <div className="btn-and-search d-flex">
                    <button type="button" className="btn btn-success me-2" onClick={this.onShowFriendsButtonClicked} >
                        Show Friends
                    </button>

                    <NavLink to="/addfriend">
                        <button type="button" className="btn btn-success me-2" onClick={this.onAddFriendsButtonClicked}>
                            + Add Friend
                        </button>
                    </NavLink>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                            type="search"
                            className="form-control form-control-dark"
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={this.onSearchChange}
                        />
                    </form>
                    <button type="button" className="btn btn-outline-primary" onClick={this.onSearchButtonClicked}>search</button>
                </div>

                <div className="row m-5">
                    {this.state.mappedFriends}
                </div>
                <div className="m-5">
                    <Pagination
                        total={this.state.totalCount}
                        defaultPageSize={2}
                        current={this.state.activePage}
                        onChange={this.onPageChange}
                    />
                </div>
            </div>

        )
    }
}


export default FriendsPage;