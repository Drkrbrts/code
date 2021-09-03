import React from 'react'
import "../Styles/friends.css"
import FriendForm from '../components/FriendForm'
import { getMyFriends } from '../ajax'
import { deleteThePerson } from '../ajax'




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
        getMyFriends()
        .then((res)=>{
            let allFriends = res.data.item.pagedItems.map((people)=>{
                return {
                    id : people.id,
                    name : people.bio, 
                    primaryImage : people.primaryImage.imageUrl, 
                    summary : people.summary
                }
            })

            this.setState({myFriends: allFriends})

        })
    }

    mapPeople =(person) =>{
        return <div className="col-3" id={person.id} key={person.id}>
                <div className="card">
                    <img src={person.primaryImage} className="card-img-top img-fluid img-thumbnail" alt="Not Here" style={{}}></img>
                    <div className="card-body">
                        <h5 className="card-title">{person.bio}</h5>
                        <p className="card-text">{person.summary}</p>
                    </div>
                    <button 
                    className="btn btn-danger"
                    onClick={this.deleteEntry}
                    >Delete</button>

                    <button 
                    className="btn btn-info"
                    onClick={this.onEditClick}
                    >Edit</button>
                </div>
            </div>
    }

    deleteEntry = (e) =>{
        let theKey = e.currentTarget.parentElement.parentElement.id
        theKey = theKey.toString()
        deleteThePerson(theKey)
            .then(res=>window.location.reload())    
    }
   
    onEditClick = (e) =>{
        let theKey = e.currentTarget.parentElement.parentElement.id
        theKey = theKey.toString()

        this.props.history.push("/Friends/Edit/" + theKey)
    }


    render(){
        return(
            <React.Fragment>
                <div className="container">
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

                {this.state.myFriends && (<div className="row align-items-start card-deck">

                    {this.state.myFriends.map(this.mapPeople)}

                </div>)}
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