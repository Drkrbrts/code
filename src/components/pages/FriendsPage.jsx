import React from 'react'
import {getFriends, deleteFriend} from '../../services/friendServices'
import "../../css/friends-page.css"
// import AddEditFriend from '../friends/AddEditFriend'
import { withRouter } from 'react-router-dom';

class FriendsPage extends React.Component {
  state = {
    friends: [
      ""
    ]
  }

  componentDidMount = () => {
    getFriends(0, 10).then(this.onGetFriendsSuccess).catch(this.onGetFriendsError)
  }

  onGetFriendsSuccess = (res) => {
    console.log(res)
    this.setState(prevState => {
      return (
        {friends: res.data.item.pagedItems}
      )
    })
    console.log("onGetFriendsSuccess")
  }

  onGetFriendsError(err) {
    console.log(err)
    console.log("onGetFriendsError")
  }

  mapFriend = (oneFriend) => {
    let image = (!oneFriend.primaryImage) ? null : oneFriend.primaryImage.imageUrl;
    return (
      <div className="card col-md-3 card-margin" key={`Friend-${oneFriend.id}`}>
        <img className="card-img-top" src={image} alt={`Friend-${oneFriend.slug}`} />
        <div className="card-body">
          <h5 className="card-title">{oneFriend.title}</h5>
          <p className="card-text"><strong>{oneFriend.bio}</strong></p>
          <a href="/" className="btn btn-primary link-button" 
            onClick={this.onEditFriendClick}
            id={oneFriend.id}
          >Edit</a>
          <a href="/" className="btn btn-primary link-button" 
            onClick={this.onDeleteFriendClick}
            id={oneFriend.id}
          >Delete</a>
        </div>
      </div>
    )
  }

  onAddFriendClick = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
    console.log("onAddFriendClick")
    this.props.history.push("/friends/add-edit");
  }

  onEditFriendClick = (e) => {
    e.preventDefault()
    console.log("onEditFriendClick")
    // Redirect to AddEditFriend passing the Id
    this.props.history.push({
      pathname: "/friends/add-edit",
      state: {
        formData: {
          id: e.currentTarget.id
        },
      }
    });
  }

  onDeleteFriendClick = (e) => {
    e.preventDefault()
    let friendId = e.currentTarget.id
    console.log("onDeleteFriendClick")
    deleteFriend(friendId).then(this.onDeleteFriendSuccess).catch(this.onDeleteFriendError)
  }

  onDeleteFriendSuccess = (res) => {
    console.log(res)
    console.log("onDeleteFriendSuccess")
  }  

  onDeleteFriendError = (err) => {
    console.log(err)
    console.log("onDeleteFriendError")
  }

  

  render() {
  return(
  <React.Fragment>
  <div className="container-fluid">
    <div className="col-md-12 p-5">
      <h1>Friends</h1>
      <button className="btn btn-primary btn" onClick={this.onAddFriendClick}>+Friend</button>
      <hr />
      <div className="row">
        {this.state.friends.map(this.mapFriend)}
      </div>
    </div>
  </div>
  </React.Fragment>
  )
}
}

export default withRouter(FriendsPage)