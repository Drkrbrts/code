
import React from 'react';
import * as userService from "../services/userService";
import SiteNav from '../SiteNav';


class Home extends React.Component {
        state = {name: null,
                id: null
            }

    componentDidMount() {
        
            userService.getCurrent()
              .then(response => {
                    this.setState({name: response.data.item.name,
                        id: response.data.item.id})
                    console.log(this.state.id)
              })
    }

    onLogOutClick = (e) => {
        e.preventDefault()
        this.props.history.push('/Login')
         userService.logOut()
           .then(this.onActionSuccess)
           .catch(this.onActionError);
     }
     onActionSuccess = (response) => {
         console.log(response)
         
        }
     onActionError= (errResponse) => {
         console.log(errResponse)
        }

render() {
    return (
        <React.Fragment>
            <header>
            <SiteNav/>
            </header>
            
            <h1>Welcome {this.state.name}</h1>
            <button type="button" className="btn btn-danger  me-2 btn-sm mr-1" onClick={this.onLogOutClick} >
                  <strong>Log Out</strong>
                </button>
        </React.Fragment>
    )
}

}

export default Home