import React from "react"
import * as friendService from "../services/friendService"



class UserAddFriendPage extends React.Component{

    state = {
        friendData: {}
    }

    componentDidMount(){
        console.log("componentDidMount() -> UserAddFriendPage");
        if(this.props.match.params.friendId){
            friendService.getFriendById(this.props.match.params.friendId)
                .then(this.onGetFriendByIdSuccess)
                .catch(this.onGetFriendByIdError)
        }

    }

    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;

        this.setState(() => {
            let friendData = {...this.state.friendData}
            friendData[inputName] = newValue;

            return {friendData}
        })
    }

    onSubmitBtn = (e) => {
        e.preventDefault();
        let friendInfo = this.state.friendData;
        friendService.addFriends(friendInfo)
            .then(this.onAddFriendSuccess)
            .catch(this.onAddFriendError)
    }

    onUpdateBtn = (e) => {
        e.preventDefault();
        let friendInfo = this.state.friendData;

        friendService.updateFriend(friendInfo.id, friendInfo)
            .then(this.onUpdateFriendSuccess)
            .catch(this.onUpdateFriendError)
    }

    //####### SUCCESS HANDLERS #######//
    onAddFriendSuccess = (response) => {
        console.log(response.data, "onAddFriendSuccess");
        this.props.history.push("/friends")
    }

    onGetFriendByIdSuccess = (response) => {
        console.log(response.data, "onGetFriendByIdSuccess");
        this.setState(()=>{
            let friendData = {...this.state.friendData};
            friendData = response.data.item
            friendData.skills = ""
            friendData.primaryImage = response.data.item.primaryImage.imageUrl

            return {friendData}
        })
    }

    onUpdateFriendSuccess = (response) => {
        console.log(response.data, "onUpdateFriendSuccess");
        this.props.history.push("/friends")
    }

    //####### ERROR HANDLERS #######//
    onAddFriendError = (errResponse) => {
        console.log({ error:errResponse });
    }

    onGetFriendByIdError = (errResponse) => {
        console.log({error: errResponse});
    }

    onUpdateFriendError = (errResponse) => {
        console.log({error:errResponse});
    }

    //####### CONDITIONAL RENDERING #######//
    renderConditionally = (condition) => {
        if(condition){
            return(
            <div>
                <div className="container p-2 my-1 bg-secondary rounded-3">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-3">
                        <h3 className="my-1 text-white">Add or Edit Friend</h3>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 my-3">
                    <div className="card border-0 shadow">
                        <div className="card-body m-4">
                            <form>
                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="title"
                                        className="col-form-label col-sm-2"
                                        ><strong>Title</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                            name="title"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.friendData.title}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="bio"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Bio</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="About yourself..."
                                            name="bio"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.friendData.bio}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="summary"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Summary</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Short description..."
                                            name="summary"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.friendData.summary}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="headline"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Headline</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Catch phrase"
                                            name="headline"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.friendData.headline}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="slug"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Slug</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Slug"
                                            name="slug"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.friendData.slug}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="statusId"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Status</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Active"
                                            name="statusId"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.friendData.statusId}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="skills"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Skills</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="skills"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.friendData.skills}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="primaryImage"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Primary Image</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Image Url"
                                            name="primaryImage"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.friendData.primaryImage}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={this.onUpdateBtn}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )
        } else {
            return (
            <div>
                <div className="container p-2 my-1 bg-secondary rounded-3">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-3">
                        <h3 className="my-1 text-white">Add or Edit Friend</h3>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 my-3">
                    <div className="card border-0 shadow">
                        <div className="card-body m-4">
                            <form>
                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="title"
                                        className="col-form-label col-sm-2"
                                        ><strong>Title</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                            name="title"
                                            onChange={this.onFormFieldChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="bio"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Bio</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="About yourself..."
                                            name="bio"
                                            onChange={this.onFormFieldChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="summary"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Summary</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Short description..."
                                            name="summary"
                                            onChange={this.onFormFieldChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="headline"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Headline</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Catch phrase"
                                            name="headline"
                                            onChange={this.onFormFieldChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="slug"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Slug</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Slug"
                                            name="slug"
                                            onChange={this.onFormFieldChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="statusId"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Status</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Active"
                                            name="statusId"
                                            onChange={this.onFormFieldChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="skills"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Skills</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="skills"
                                            onChange={this.onFormFieldChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="primaryImage"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Primary Image</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Image Url"
                                            name="primaryImage"
                                            onChange={this.onFormFieldChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={this.onSubmitBtn}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }


    render(){
        const friendId = this.props.match.params.friendId

        return(
            this.renderConditionally(friendId)
        );
    }
}

export default UserAddFriendPage