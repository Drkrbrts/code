import React from 'react'


class Home extends React.Component {

    /* update = (prevState, item) => {
        var newState = {...prevState}
        newState.name = item.name
        return {user: newState}
    } */

  /*   componentDidMount(){
        //next line grabs email param from url
        let email = this.props.match.params.email
        console.log(email)
        userServices.getCurrentUser()
        .then(this.onGetCurrentUserSuccess)
        .catch(this.onGetCurrentUserError)
    } */
    /* onGetCurrentUserSuccess = (response) => {
        console.log('response from Home', response.data.item)
    }
    onGetCurrentUserError = (response) => {
        console.log({error: response})
    } */

    /* didComponentUpdate(){
        console.log('In component did update')
    } */

   

   /*  onLogoutClick = () => {
        console.log('Logout was clicked')
        userServices.logout()
        .then(this.onLogoutSuccess)
        .catch(this.onLogoutError)
    }

    onLogoutSuccess = (response) => {
        console.log(response)
        this.props.history.push('/login')
    }
    onLogoutError = (response) => {
        console.log({error: response})
    } */

    

    render(){
    return(
        <React.Fragment>
        <div className="container">
        <h1>Welcome, {this.props.user.firstName}!</h1>
        <div className="container">
        </div>
        </div>
        </React.Fragment>
    )}
}

export default Home