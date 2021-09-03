import React from "react"
import * as userService from "../services/userService"

class Presidents extends React.Component
{
    state = {
        
    };

    componentDidMount(){
        userService.getPageFriend().then(this.onGetPageFriendSuccess).catch(this.onGetPageFriendError)
    }
    onGetPageFriendSuccess = (response) =>{
        console.log(response);
        this.setState((preState)=>{
            return {mappedFriends: response.data.item.pagedItems.map(this.oneFriend)}
        })
        
    }
    onGetPageFriendError = (err) =>{
        console.error(err)
    }

    onDeleteClicked = (e) =>{
        console.log(e.currentTarget)
    }

    oneFriend = (one) =>{
        return (
            <div className="card col-md-3" key={one.slug}>
                <img className="card-img-top" src={one.primaryImage.imageUrl} alt="..." width="60" height="500"/>
                <div className="card-body">
                    <h5 className="card-title">{one.title}</h5>
                    <p className="card-text">{one.bio}</p>
                    <p className="card-text">{one.summary}</p>
                    
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger mx-3" onClick={this.onDeleteClicked}>Delete</button>
                    <button className="btn btn-info mx-3">Edit</button>
                </div>
                
            </div>
        )
    }
    onePresidentSample = (one) =>{
        return <p key={`Presidents-${one.id}`}>{one.name}</p>
    }
    render()
    {
        return (
            
            <div className="col-md-12 p-5 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <h1>Friends</h1>
                <button type="button" className="btn btn-primary m-3" disabled={this.state.formData === null ? false : true} onClick={this}>+ Friend</button>
                <hr />
                <div className="row">
                    {/* {this.state.presidents.map(this.onePresident)} */}
                    {this.state.mappedFriends}
                </div>
            </div>
            
        );
    }
}

export default Presidents;