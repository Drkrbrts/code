import React from "react";
import { addNewFriend, getFriendById, updateFriend } from "../../services/friendService";
import debug from "sabio-debug";
const _logger = debug.extend("FriendForm");

class AddFriendForm extends React.Component
{

    state = {
        formData: {
            "id": 0,
            "userId": "",
            "title": "",
            "bio": "",
            "summary": "",
            "headline": "",
            "slug": "",
            "statusId": "",
            "primaryImage": 0
        }
    }


    componentDidMount()     // SHOULD BE MAKING ALL AJAX CALLS IN HERE!
    {
        _logger("componentDidMount start");
        let passedId = this.props.match.params.id;
        if (passedId)
        {
            getFriendById(this.props.match.params.id)
                .then(this.onGetFriendByIdSuccess)
                .catch(this.onGetFriendByIdFail);
        }
        _logger("componentDidMount end");
    }



    onChangeFunction = (e) =>
    {
        let formData = { ...this.state.formData };
        let newValue = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        _logger(newValue)

        this.setState(() =>
        {
            formData[inputName] = newValue;
            return { formData: formData }
        })
    };

    onAddNewFriendSuccess = (response) =>
    {
        _logger(response, "new friend added!");
    }

    onAddNewFriendFail = (response) =>
    {
        _logger(response, "add friend failed");
    }

    onAddNewFriendClicked = (e) =>
    {
        e.preventDefault();
        addNewFriend(this.state.formData)
            .then(this.onAddNewFriendSuccess)
            .catch(this.onAddNewFriendFail);

    };

    onGetFriendByIdSuccess = (response) =>
    {
        _logger("got friend by id", response);
        let friendInfo = response.data.item;
        _logger("before setState called:", this.state.formData)
        this.setState((prevState) =>
        {
            _logger("setState called:", prevState.formData)
            let formData = { ...this.state.formData };
            formData.userId = friendInfo.userId;
            formData.title = friendInfo.title;
            formData.bio = friendInfo.bio;
            formData.summary = friendInfo.summary;
            formData.headline = friendInfo.headline;
            formData.slug = friendInfo.slug;
            formData.statusId = friendInfo.statusId;
            formData.primaryImage = friendInfo.primaryImage;
            _logger(formData)
            return { formData: formData }

        })

        _logger("after settingState:", this.state.formData)

    }

    onGetFriendByIdFail = (response) =>
    {
        _logger("failed to get friend by id", response)
    }

    onUpdateFriendClicked = (e) =>
    {
        let selectedFriendInfo = this.state.formData;
        let dataNeededToUpdateFriend = {
            "id": this.props.match.params.id,
            "userId": selectedFriendInfo.userId,
            "title": selectedFriendInfo.title,
            "bio": selectedFriendInfo.bio,
            "summary": selectedFriendInfo.summary,
            "headline": selectedFriendInfo.headline,
            "slug": selectedFriendInfo.slug,
            "statusId": selectedFriendInfo.statusId,
            "primaryImage": selectedFriendInfo.primaryImage
        }

        updateFriend(dataNeededToUpdateFriend, dataNeededToUpdateFriend.id)
            .then(this.onUpdateFriendSuccess)
            .catch(this.onUpdateFriendFail);
    }

    onUpdateFriendSuccess = (response) =>
    {
        _logger("friend updated!", response);
    }

    onUpdateFriendFail = (response) =>
    {
        _logger("friend failed to update", response);
    }


    render()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="userId" className="form-label">User ID:</label>
                                <input type="text"
                                    className="form-control"
                                    name="userId"
                                    value={this.state.formData.userId}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title:</label>
                                <input type="text"
                                    className="form-control"
                                    name="title"
                                    value={this.state.formData.title}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bio" className="form-label">Bio:</label>
                                <input type="text"
                                    className="form-control"
                                    name="bio"
                                    value={this.state.formData.bio}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="summary" className="form-label">Summary:</label>
                                <input type="text"
                                    className="form-control"
                                    name="summary"
                                    value={this.state.formData.summary}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="headline" className="form-label">Headline:</label>
                                <input type="text"
                                    className="form-control"
                                    name="headline"
                                    value={this.state.formData.headline}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="slug" className="form-label">Slug:</label>
                                <input type="text"
                                    className="form-control"
                                    name="slug"
                                    value={this.state.formData.slug}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="statusId" className="form-label">Status ID:</label>
                                <input type="text"
                                    className="form-control"
                                    name="statusId"
                                    value={this.state.formData.statusId}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="primaryImage" className="form-label">Primary Image:</label>
                                <input type="text"
                                    className="form-control"
                                    name="primaryImage"
                                    value={this.state.formData.primaryImage}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                        </form>
                        {this.props.match.params.id && <button type="button" className="btn btn-success" onClick={this.onUpdateFriendClicked}>Update Friend</button>}
                        {!this.props.match.params.id && <button type="button" className="btn btn-primary" onClick={this.onAddNewFriendClicked}>Add Friend</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default AddFriendForm;