import React from "react";
import defaultExport from "../services/startUserService"
import {NavLink} from "react-router-dom"

class AddFriendsPage extends React.Component {

    state = {
        title: "",
        bio: "",
        summary: "",
        headline: "",
        slug: "",
        statusId: "",
        primaryImage: ""
    }

    onFriendChange = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value
        let inputName = currentTarget.name
        this.setState((prevState)=> {

            return {...prevState, [inputName]: newValue};
        })
    }

    onClickHandler = () => {
        var payload = this.state

        defaultExport.addFriends(payload)
            .then(this.onAddFriendSuccess)
            .catch(this.onAddFriendError)
    }

    onAddFriendSuccess = (response) => {
        console.log(response.data)
        this.props.histoy.push("/friends/")
    }
    onAddFriendError = (errResponse) => {
        console.log(errResponse)
    }

    

    onSubmitClicked = (e) => {
        console.log("submit was clicked")

    }

    render () {
        return <React.Fragment>
        <div className="header p-5">
                <h1 className="text-primary">Add Friend</h1>
            </div>
        <div className="content">
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" onChange={this.onFriendChange} className="form-control" id="title" v-model="title" aria-describedby="titleHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="bio" className="form-label">Bio</label>
                    <input type="text" name="bio" onChange={this.onFriendChange} className="form-control" id="bio" v-model="bio" aria-describedby="bioHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="summary" className="form-label">Summary</label>
                    <input type="text" name="summary" onChange={this.onFriendChange} className="form-control" id="summary" v-model="summary" aria-describedby="summaryHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="slug" className="form-label">Slug</label>
                    <input type="text" name="slug" onChange={this.onFriendChange} className="form-control" id="slug" v-model="slug"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="headline" className="form-label">Headline</label>
                    <input type="text" name="headline" onChange={this.onFriendChange} className="form-control" id="headline" v-model="headline"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="statusId" className="form-label">Status</label>
                    <input type="text" name="statusId" onChange={this.onFriendChange} className="form-control" id="statusId" v-model="statusId"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="primaryImage" className="form-label">Primary Image</label>
                    <input type="url" name="primaryImage" onChange={this.onFriendChange} className="form-control" id="primaryImage" v-model="primaryImage"></input>
                </div>
                <NavLink to="/friends/">
                    <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Submit</button>
                </NavLink>
            </form>
        </div>
    </React.Fragment>
    }
}

export default AddFriendsPage