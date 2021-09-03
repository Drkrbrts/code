import React from "react";
import * as userService from "../services/userService";
import SingleFriend from "./SingleFriend";


class Friends extends React.Component {

  state = {
        formData:{Title:""
            , Bio:""
            , Summary:""
            , Headline:""
            , Slug:"" 
            , Status:""
            , Skills:""
            , PrimaryImage:""
        },
        // mappedFriends: null
    };

    componentDidMount(){ //best place to make api calls. you need everything to render before you can make axios call
        userService.getFriends() //making axios call to get friends
        .then(this.onGetAllFriendsSuccess) 
        .catch(this.onGetAllFriendsError)
    }

    onGetAllFriendsSuccess = (response) => {
        console.log(response)
        let allFriends = response.data.item.pagedItems; //get the whole array of friends
        // console.log(allFriends)
        this.setState((prevState)=>{ //setting state
            return{
                ...prevState, //taking a copy of prevState
                mappedFriends: allFriends.map(this.mapFriend) //creating another variable called MappedFriends with the array of friends
            }
        })
    }
    
    onGetAllFriendsError=(err)=> {
        console.error({error: err})
    }

    mapFriend = (oneFriend) => { //passing props of one friend
        return (<SingleFriend
        fries={oneFriend}
        key={oneFriend.id}
        handleEdit ={this.onHandleEdit}  
        handleDelete={this.onHandleDelete}
        />)};
   
    // onAddFriendBtnClick = (e) => {
    //     e.preventDefault();
    //     console.log("go to add new friend page");
    //     this.props.history.push("/friends");
    // };

    // onAddFriendBtnClick = (data) =>{

    //     userService.addFriend(this.state.formData)
    //     .then(this.onAddFriendActionSuccess)
    //     .catch(this.onAddFriendActionError)
    //     console.log("click button is working")
    //     }

    //     onAddFriendActionSuccess = (response) => {
    //       console.log("success friend added")
    //     }

    //     onAddFriendActionError = (errResponse) => {
    //       console.log("error friend not added")
    //     }

    // onChange = event => {
    
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    
    //     this.setState(prevState => {
    //       const updatedFormData = {
    //         ...prevState.formData
    //       };
    //       updatedFormData[name] = value;
    
    //       return { formData: updatedFormData };
    //     }, this.stateChanged);
    //   };
    

    render() {
        return (

            <React.Fragment>

                 <div className="container">
                    <div className="row">
                        <div className="col-9"></div>
                            {this.state.mappedFriends}

                   </div>
                </div>
                

                {/* <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                  
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                        type="search"
                        className="form-control form-control-dark"
                        placeholder="Search..."
                        aria-label="Search"
                        />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">
                        Search
                        </button>
                        <button type="button" className="btn btn-warning">
                        Logout
                        </button>
                    </div>
                    </div>
                </div>
                </header>
                <h1 className="text-center">Friends</h1>
                <button className="btn btn-secondary" style={{justifyContent: "center"}} onClick={this.onAddFriendBtnClick}>+ Friend</button> */}
                
               
            </React.Fragment>
        );
    }
}

export default Friends;