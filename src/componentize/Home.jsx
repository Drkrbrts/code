import React from "react";
// import Login from "../starter/Login"
import * as userService from "../services/userService"

class Home extends React.Component {

    // state = {
    //     isAuthenticated: false,
       
    //     currentUser:{
    //     firstName: "", 
    //     lastName: "", 
    //     email: "",
    //     avatarUrl: ""
    // }}
    
    // componentDidMount()
    // {
    //     console.log('mounted!')
    //     // this.onCurrentUser()
    //     this.onCurrentUser();    
    //     console.log(this.state)
    // }
    
    // onCurrentUser = () => 
    // {
    //     userService.currentUser()
    //     .then(this.onCurrentSuccess)
    //     .catch(this.onCurrentError)
    // }
    
    // onCurrentSuccess = (response) => {
    
    //     userService.userById(response.data.item.id)
    //     .then(this.onCurrentUserSuccess)
    //     .catch(this.onCurrentUserError)
    // }
    
    // onCurrentError = (response) => 
    // {
    //     console.warn(response)
    // }
      
    //   onCurrentUserSuccess = (response) =>
    //   { 
    //       // console.log(response)
    //       // console.log(response.data.item.name)
    
    //       console.log(response.data.item)
    
    //     //   var newUser = {...this.state.currentUser}
    //     //   newUser.firstName = response.data.item.firstName
    //     //   this.setState({currentUser: newUser})
    
    //     this.setState((prevState) =>
    //       {
    //         let currentUser = {...prevState.currentUser}
    //         let newData = response.data.item
    //         currentUser.firstName = newData.firstName            
    //         currentUser.lastName = newData.lastName
    //         currentUser.email = newData.email
    
    //         return {currentUser}
    //       });
    
    //       console.log(this.state)
    //     // this.setState({tempData})
    //    }
               
    //     onCurrentUserError = (response) =>
    //   {
    //     console.log(response)    
    //   }
        

    render()
    {        
        return (<div> <center> <h1> Welcome {this.props.user}</h1> </center></div>)
    }}

export default Home


















// 23:30 for targeting the current user name

    // constructor(props)
    // {
    //     super(props);

    //     this.state={
    //         user: []
    //     }
    // }

//currentUser 
//componentDidmount    
// currentUser endpoint


// "Welcome {this.props.userCurrent.name}"

// -> 

// state = {
//     currentPerson: {}
// }

// componentDidMount()
// {
//     console.log("its working")

//     // this.onSuccessfulLogin()
// }
    
    
    // onSuccessfulLogin = () => {

    //     userService.userById(this.props.currentPerson)
    //     .then(this.onSuccessfulLoginSuccess)
    //     .catch(this.onSuccessfulLoginError)
    // }


    // onSuccessfulLoginSuccess = (response) =>
    // {
    //     console.log(this.props.currentPerson)
    //     console.log(response)
    // }

    // onSuccessfulLoginError = (response) =>
    // {
    //     console.log(response)
    // }

    // state = {}