import React from "react";
import defaultExport from "../services/friendservice"
import Pagination from 'rc-pagination';
// import { ToastContainer, toast } from 'react-toastify';
import AddFriends from "./addfriends";
import {Route} from "react-router-dom"




class FHome extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            friends:{
            title: "",
            bio: "",
            summary: "",
            headline: "",
            slug: "",
            statusId: "Active",
            primaryImage: ""
    }}

        
    }
   
  
    componentDidMount(){
        defaultExport.get()
        .then(this.onGetFriendsSuc)
        .catch(this.onGetFriendsErr)

    }




    onShowFriends = () => 
    {
        
       

    }
    onGetFriendsSuc = (data) =>
    {
        
        console.log(data)
        let friendsArray = data.data.item.pagedItems
        this.setState((prevState)=>
        {
            return{...prevState, mappedFriends: friendsArray.map(this.mapFriends)}
               
        })
        
        
    }
    onGetFriendsErr = (errResponse) =>
    {
        console.warn(errResponse)
    }
    onShowAddFriends =()=>{
        this.props.history.push("/addfriends" )

    }
    onEditClick = () =>{

    }
    onDeleteClick = () =>{

    }
    mapFriends = (friend) =>{
        return(<div className="col-4 card my-3 t-3 card-person ">
        <div className="card border-3 shadow" key={friend.slug}>
            <img src={friend.primaryImage} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <div className="card-name mb-0">{friend.title}</div>
                <div className="card-info text-black-50">{friend.bio}</div>
                <div className="card-dob text-black-50">{friend.statusId}</div>
                <button id="showFriends" type="button" className="btn btn-primary" onClick={this.onEditClick}>Edit Friend</button>
                <button id="showFriends" type="button" className="btn btn-danger" onClick={this.onDeleteClick}>Delete Friend</button>
            </div>
        </div>
        </div>)
    }
    

    






    render(){
        
        return <div>
        <div className="container ">
        <div className="row list">
            {/* <button id="showFriends" type="button" className="btn btn-info ml-3 mb-5" onClick={this.onShowFriends}>Show Friends</button> */}
            
            <button id="showFriends" type="button" className="btn btn-primary ml-3 mb-5" onClick={this.onShowAddFriends}>Add Friends</button>
            </div>
            <div className="row list">
                <div className="col">
                    {this.state.mappedFriends}


                </div>
            </div>
        </div>
        <Pagination/>
       
            <AddFriends/>
        </div>
    }
}
export default FHome