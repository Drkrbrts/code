import React from "react";
import debug from "sabio-debug";
import { deleteFriend } from "../../services/friendService";

const _logger = debug.extend("Card");

class Card extends React.Component
{

    state = {
        friendData: {
            bio: "",
            dateAdded: "",
            dateModified: "",
            headline: "",
            id: 0,
            image: [
                {
                    dateAdded: "",
                    dateModified: "",
                    id: 0,
                    imageTypeId: 0,
                    imageUrl: ""
                }
            ],
            primaryImage: 0,
            skills: [],
            slug: "",
            statusId: "",
            summary: "",
            title: "",
            totalCount: 0,
            usedId: ""
        }
    };

    componentDidMount = () =>
    {
        let image = this.state.friendData.image;
        // if (image === null)
        // {
        //     this.setState(() =>
        //     {
        //         let friendData = { ...this.state.friendData };
        //         friendData.image = [];
        //         friendData.image[0] = {
        //             dateAdded: "",
        //             dateModified: "",
        //             id: 0,
        //             imageTypeId: 0,
        //             imageUrl: ""
        //         }
        //         friendData.image[0].imageUrl = "https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081_960_720.jpg";
        //     })
        // }
        this.setState(() =>
        {
            let friendData = { ...this.state.friendData };
            friendData = this.props.friend;

            return { friendData }
        })
    }

    componentDidUpdate = () =>
    {
        let image = this.state.friendData.image;

        // _logger(image[0].imageUrl);
    }

    onEditButtonClicked = (friend) =>
    {
        let selectedId = friend.id;

        this.props.history.push("/addfriend/" + selectedId);
    };

    onDeleteFriendSuccess = (response) =>
    {
        _logger("friend deleted", response);
    }

    onDeleteFriendFail = (response) =>
    {
        _logger("failed to delete friend", response)
    };

    onDeleteRequest = (deletedPerson) =>    // deletedPerson === e. just named something else
    {
        _logger("onDeleteRequest", { deletedPerson: deletedPerson });


    };


    onDeleteButtonClicked = (e) =>
    {
        let selectedFriendId = e.currentTarget.dataset.friendid;
        deleteFriend(selectedFriendId)
            .then(this.onDeleteFriendSuccess)
            .catch(this.onDeleteFriendFail)
    }

    render()
    {
        return (
            <div className="card text-center mx-auto" style={{ width: "18rem" }
            }>
                <img className="card-img-top h-50" src={this.state.friendData.image[0].imageUrl} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.state.friendData.title}</h5>
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
};

export default Card;