import Pagination from 'rc-pagination';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as friendService from '../services/friendService'
import Friend from '../Components/Friend'
import 'rc-pagination/assets/index.css'

class Friends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            total: 0,
            pageSize: 3,
            friends: [],
            mappedFriends: []
        }
    }

    componentDidMount() {
        this.getFriends(this.state.current)
    }

    getFriends = (page) => {
        friendService
            .getAll(page - 1)
            .then(this.onGetFriendSucces)
            .catch(error => console.log(error))
    }

    onGetFriendSucces = data => {
        this.setState(() => {
            return {
                total: data.item.totalCount,
                friends: data.item.pagedItems,
                mappedFriends: data.item.pagedItems.map(this.mapFriends)
            }
        })
    }

    onDeleteRequest = id => {
        console.log(id, "delete Clicked");
    }

    onEditRequest = id => {
        console.log(id, "Edit clicked");
    }

    onPageChange = page => {
        this.setState({
            current: page
        }, () =>
            this.getFriends(this.state.current)
        )
    }

    mapFriends = friend => {
        return (
            <Friend
                key={`Friend - ${friend.id}`}
                friend={friend}
                onDClick={this.onDeleteRequest}
                onEClick={this.onEditRequest}
            />
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderHeader()}
                {this.renderFriends()}
            </React.Fragment>
        )
    }

    renderFriends = () => {
        const friends = this.state.mappedFriends
        return (
            <React.Fragment>
                <div className="row p-3">
                    {friends.length > 0
                        ? friends
                        : <h3 className="text-center">Loading...</h3>
                    }
                </div>
                <div className="row ms-4">
                    <Pagination
                        className="ant-pagination"
                        onChange={this.onPageChange}
                        current={this.state.current}
                        total={this.state.total}
                        pageSize={this.state.pageSize}
                    />
                </div>
            </React.Fragment>
        )
    }

    renderHeader = () => {
        return (
            <React.Fragment>
                <header className="bg-light p-3 d-flex justify-content-between">
                    <div className="d-flex">
                        <h2 className="mx-2">Friends</h2>
                        <div>
                            <NavLink
                                to="friends/addFriend"
                                className="btn btn-secondary"
                            >+ Friend
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-4 mx-2">
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search friends"
                            />
                        </form>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Friends;