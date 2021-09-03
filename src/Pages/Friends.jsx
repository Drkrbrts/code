import React from 'react'
import "../Styles/friends.css"
import FriendForm from '../components/FriendForm'
import FriendCard from '../components/FriendsCard'
import { getMyFriends } from '../ajax'


class Friends extends React.Component{


    state ={
        formData : null
        ,myFriends : null
    }
   


      addFriendToList = (e) =>{
        this.setState(()=>{
           return {formData : {
            title: ''
            ,bio: ''
            ,summary: ''
            ,headline: ''
            ,slug: ''
            ,statusId: ''
            ,primaryImage: ''
           }}
              
        })
      } 

    componentDidMount(){
        let friends = {...this.state.myFriends}
        getMyFriends()
        .then((res)=>{
            
            this.setState({myFriends: friends})
        })

    }

    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-sm bg-primary navbar-primary py-3 friend-nav">
                    <div className="container">
                    <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <h5 className="usernameTitle" 
                                style={{color: "whitesmoke"}}
                                >Friends</h5>
                            </li>
                        </ul>
                        <button
                        className="addFriend btn"
                        onClick={this.addFriendToList}>
                            Add Friend
                        </button>
                    </div>
                </nav>

                <div>
                    <FriendCard friends={this.state.myFriends} />
                </div>
               

                {this.state.formData && (<FriendForm
                data={this.state.formData}
                >

                </FriendForm>)}
            </React.Fragment>
        )
    }
}

export default Friends