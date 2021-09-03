import React from "react"
import * as friendService from "../services/friendService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FriendSearch from "./FriendSearch";
import { Route } from "react-router-dom";

class FriendsNavBar extends React.Component {

    componentDidMount = () =>{

        console.log("Edit friend props", this.props.editFormData)
    }
    
    state = {
        formData:{
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

        console.log("SUBMIT SEARCH",box)

        this.setState(() => {
            let route = {...this.state.route}; 

            route = this.sendDataToFriendSearch();  

            return { route };
        })

        friendService.searchFriends(box)
        .then(this.onSearchFriendSuccess)
        .catch(this.onSearchFriendError);
    }
    
    onSearchFriendSuccess = (response) => {


        //console.log("Search friend success:",response)
        //console.log("FriendNav state",this.state)
        toast.success("You have successfully found a friend!");

        this.props.history.push(`/Friends/FriendSearch/${this.state.formData.search}`)
        
    }
    
    sendDataToFriendSearch = () =>{

        return (
            <React.Fragment> 
            <Route 
            path="/Friends/FriendSearch"
            exact={false}   
            render={(routeProps) => (
            <FriendSearch
            searchData={this.state.formData}
            {...routeProps}
            ></FriendSearch>
            )}
            ></Route>
            </React.Fragment> 
        )
    }

    onSearchFriendError= (errResponse) => {
        toast.error("No friends found under this search criteria.");
    }

    onAddFriendClicked = (e) => {
        let seconds = new Date().getSeconds()
        //console.log("onAddFriendClicked was clicked",seconds)
        this.props.history.push("/Friends/AddFriend")
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
                        type="submit" 
                        className="btn btn-outline-light me-2"

                        >
                        Search
                        </button>
                    </div>
                    </div>
                </div>
                </header>

               {/* {this.state.route}*/}
             
                    <Route 
                    path="/Friends/FriendSearch"
                    exact={false}   
                    render={(routeProps) => (
                    <FriendSearch
                    searchData={this.state.formData}
                    {...routeProps}
                    ></FriendSearch>
                    )}
                    ></Route>
                

        </React.Fragment>
        )
    }
};

export default FriendsNavBar;