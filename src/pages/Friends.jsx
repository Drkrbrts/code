import React from "react";
import friendsService from "../services/friends";

class Friends extends React.Component {

    state = {
        name: "",
        bio: "",
        summary: "",
        headline: "",
        slug: "",
        avatar: "",
        mappedFriends: []
    }

    addBtnClicked = () => {
        let payload = {
            title: this.state.name,
            bio: this.state.bio,
            summary: this.state.summary,
            headline: this.state.headline,
            slug: this.state.slug,
            statusId: "active",
            primaryImage: this.state.avatar
        }

        friendsService.add(payload)
            .then(this.addSuccess)
            .catch(this.addError)
    }

    addSuccess = response => {
        console.log(response.data)
    }

    addError = response => {
        console.log(response)
    }



    mapFriends = friend => {
        return (
            <div key={`Friends-${friend.id}`} className="card col-md-3">
                <img scr={friend.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{friend.name}</h5>
                    <p className="card-text">{friend.bio}</p>
                    <button className="btn bth-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }

    showBtnCicked = () => {
        friendsService.showAll()
            .then(this.showSuccess)
            .catch(this.showError)
    }

    showSuccess = response => {
        console.log(response.data.item.pagedItems)
        this.setState({mappedFriends: response.data.item.pagedItems})
        this.mapFriends(response.data.item.pagedItems)
    }

    showError = response => {
        console.log(response)
    }

    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        this.setState(()=>{
            let newState = {};
            newState[inputName] = newValue;

            return newState;
        })
    }

    render() {

        if(this.props.user) {
            return (
                <React.Fragment>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input
                            type="text"
                            className="form-control" 
                            id="name" 
                            name="name"
                            onChange={this.onFormFieldChange} 
                            value={this.state.name} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">
                                Bio
                            </label>
                            <input
                            type="text"
                            className="form-control" 
                            id="bio" 
                            name="bio"
                            onChange={this.onFormFieldChange} 
                            value={this.state.bio} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="summary">
                                Summary
                            </label>
                            <input
                            type="text"
                            className="form-control" 
                            id="summary" 
                            name="summary"
                            onChange={this.onFormFieldChange} 
                            value={this.state.summary} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="headline">
                                Headline
                            </label>
                            <input
                            type="text"
                            className="form-control" 
                            id="headline" 
                            name="headline"
                            onChange={this.onFormFieldChange} 
                            value={this.state.headline} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="slug">
                                Slug
                            </label>
                            <input
                            type="text"
                            className="form-control" 
                            id="slug" 
                            name="slug"
                            onChange={this.onFormFieldChange} 
                            value={this.state.slug} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="avatar">
                                Avatar
                            </label>
                            <input
                            type="url"
                            className="form-control" 
                            id="avatar" 
                            name="avatar"
                            onChange={this.onFormFieldChange} 
                            value={this.state.avatar} 
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.addBtnClicked}>Add Friend</button>
                        <button type="button" className="btn btn-success" onClick={this.showBtnCicked}>Show Friends</button>
                    </form>
                    <hr />
                    <div className="row">
                        {this.state.mappedFriends}
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <h1>Please Login or Register</h1>
            )
        }
    }
}

export default Friends