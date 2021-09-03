import React from "react";
import { getAllFriends, searchFriends } from "../../services/friendService";
import { NavLink } from "react-router-dom";
import debug from "sabio-debug";
import Pagination from 'rc-pagination';
import Card from "./Card";

const _logger = debug.extend("FriendsPage");

class FriendsPage extends React.Component
{

    state = {
        formData: {},
        searchData: {},
        activePage: 0,
        exampleFriend: {
            "id": 0,
            "dateAdded": "",
            "dateModified": "",
            "userId": "",
            "title": "title",
            "bio": "bio",
            "summary": "summary",
            "headline": "headline",
            "slug": "slug",
            "statusId": "statusId",
            "primaryImage": 0,
            "skills": [],
            "image": {},
            "totalCount": 0
        }
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



    mapFriends = (oneFriend) =>
    {
        return (
            <React.Fragment key={`Friend-${oneFriend.id}`} >
                <Card {...this.props} friend={oneFriend} />
            </React.Fragment>
        )
    }

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
        _logger("button clicked");
        getAllFriends(0, 1)
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
        searchFriends(0, 2, this.state.searchData.query)
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