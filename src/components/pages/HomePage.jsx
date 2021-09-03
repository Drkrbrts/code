import React from 'react'
import {currentUser, getUserByID, logOut} from "../../services/userServices"
import { toast } from 'react-toastify';

class HomePage extends React.Component {

  state = {
    userData: {
      email: ""
    },
    authStatus: ""
  }

  isLoggedIn() {
    if(this.state.userData.email !== "") {
      return (
        <React.Fragment>
          <p>Welcome {this.state.userData.email}</p>
          <button onClick={this.userLogOut}>Logout</button>
        </React.Fragment>
      )
    }
    return <p>Welcome <a href="/login">Please Login</a></p>
  }

  componentDidMount() {
    console.log(currentUser().then(this.onCurrentUserSuccess).catch(this.onCurrentUserError))
  }

  userLogOut = (e) => {
    e.preventDefault()
    console.log(
      logOut().then(this.onLogOutSuccess).catch(this.onLogOutError)
    )
  }

  onLogOutSuccess = (res) => {
    console.log("onLogOutSuccess")
    console.log(res)
    toast.success("Now Logged Out")
    // Redirect to login page
  }
  onLogOutError = (err) => {
    console.log("onLogOutError")
    console.log(err)
  }

  onCurrentUserSuccess = (res) => {
    console.log("onCurrentUserSuccess")
    // console.log(res.data.item.id)
    getUserByID(res.data.item.id).then(this.onGetUserByIDSuccess).catch(this.onGetUserByIDError)
  }
  onCurrentUserError = (err) => {
    console.log("onCurrentUserError")
    console.log(err)
  }

  onGetUserByIDSuccess = (res) => {
    console.log("onGetUserByIDSuccess")
    let email = res.data.item.email
    
    this.setState(()=> {
        let newState = {...this.state};
        newState.userData = {}
        newState.userData.email = email
        newState.authStatus = true
        return newState
    })
  }
  onGetUserByIDError = (err) => {
    console.log("onGetUserByIDError")
    console.log(err)
  }

  render() {
    return (
      <React.Fragment>
        {this.isLoggedIn()}
      </React.Fragment>
    )
  }
}

export default HomePage