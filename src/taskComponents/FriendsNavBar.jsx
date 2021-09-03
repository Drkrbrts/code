import React from "react"
import * as friendService from "../services/friendService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FriendSearch from "./FriendSearch";
//import Friends from "./Friends";
import { Route } from "react-router-dom";

class FriendsNavBar extends React.Component {

    componentDidMount = () =>{

        console.log("Edit friend props", this.props.editFormData)
    }
    
    state = {
        clicked: false
        ,formData:{
        search: ""
        }
    }
    
    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;    
        let newValue =                          
            currentTarget.type === "checkbox"   
            ? currentTarget.checked            
            : currentTarget.value;              

        let inputName = currentTarget.name;     


        this.setState(() => {
            let formData = {...this.state.formData}; 

            formData[inputName] = newValue;  

            return { formData };
        })
    }

    onClickSearchSubmitHandler = (e) => {
        e.preventDefault();
        let box = this.state.formData;

        this.setState({clicked:true});
        console.log("SUBMIT SEARCH",box)


        friendService.searchFriends(box)
        .then(this.onSearchFriendSuccess)
        .catch(this.onSearchFriendError);
    }
    
    onSearchFriendSuccess = (response) => {
        console.log("RESPONSE",response.data.item.pagedItems)
        this.setState({searchResults:response.data.item.pagedItems})

        toast.success("You have successfully found a friend!");

        //this.props.history.push(`/Friends/FriendSearch/${this.state.formData.search}`)
        this.props.history.push(`/Friends/FriendSearch/`)
        
    }
    

    onSearchFriendError= (errResponse) => {
        toast.error("No friends found under this search criteria.");
    }

    onAddFriendClicked = (e) => {
        this.props.history.push("/Friends/AddFriend")
    }

    onKeyUp(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            //console.log("key",event.key)
        }
    }

    render() {

        return (
        <React.Fragment>

                <header className="p-1 bg-secondary text-dark">
                <div className="">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  
                        <h2 className="text-light">Friends</h2>
                        <div>              
                        <button 
                        type="button"
                        onClick={this.onAddFriendClicked} 
                        className="btn btn-outline-light me-2 margin-l"
                        >
                        +Friend
                        </button>
                        </div> 
                    </div>

                    

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                        onKeyPress={this.onKeyUp}
                        value={this.state.formData.search}
                        onChange={this.onFormFieldChanged} 
                        type="text"
                        name="search" 
                        id="search" 
                        className="form-control form-control-dark"
                        placeholder="Search Friend..."
                        
                        />
                    </form>

                    <div className="text-end">
                        <button
                        onClick={this.onClickSearchSubmitHandler}
                        type="text" 
                        className="btn btn-outline-light me-2"

                        >
                        Search
                        </button>
                    </div>
                    </div>
                </div>
                </header>
             
                    <Route 
                    path="/Friends/FriendSearch"
                    exact={false}   
                    render={(routeProps) => (
                    <FriendSearch
                    searchData={this.state.searchResults}
                    editShareData = {this.props.shareFriendData}
                    {...routeProps}
                    ></FriendSearch>
                    )}
                    ></Route>
                

        </React.Fragment>
        )
    }
};

export default FriendsNavBar;