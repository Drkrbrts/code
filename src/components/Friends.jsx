import React from "react"
import * as userService from "../services/userService";
import 'rc-pagination/assets/index.css'
import SingleFriend from "./SingleFriend";


class Friends extends React.Component {

  state = {
    formData: { Title: ""
              , Bio: ""
              , Summary: "" 
              , Headline: ""
              , Slug: ""
              , Status: ""
              // , InputSkills: ""
              , PrimaryImage: ""
              //  isModalopen: false,
              //  hasMadeAjax:  true,
              //  arrayfComp: [],    
  }
};
  

onChange = event => {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState(prevState => {
    const updatedFormData = {
      ...prevState.formData
    };
    updatedFormData[name] = value;
    return { formData: updatedFormData };
  }, this.stateChanged);
};


componentDidMount() {
  userService.grabFriends() //making axios call to get friends
    .then(this.onGetAllFriendsSuccess)
    .catch(this.onGetAllFriendsError)
};

mapFriend = (oneFriend) => { //passing props of one friend
return (<SingleFriend
  friend={oneFriend}
  key={oneFriend.id}
  handleEdit={this.onHandleEdit}
  handleDelete={this.onHandleDelete}
/>)};


onSubmitFriendClicked = (data) =>{

  userService.postFriend(this.state.formData)
  .then(this.onActionSuccess)
  .catch(this.onActionError);
}


onGetAllFriendsSuccess = (res) => {
  console.log(res)
  let allFriends = res.data.item.pagedItems; //get the whole array of friends
  console.log(allFriends)
  this.setState((prevState)=>{ //setting state
    return {
      ...prevState, //taking a copy of prevState
      mappedFriends: allFriends.map(this.mapFriend) // creating another variable called MappedFriends with the array of friends
    }
})
}

onGetAllFriendsError = (err) => {
console.error({error: err})
}

  render() {
      return  <form>
      <div>
      <button 
          type="button" 
          className="btn btn-primary"
          style={{float: 'left'}}
          onClick={this.onSubmitFriendClicked}
          onChange={this.onChange}
          >
          +Friend
          </button>
        </div>
        <div className="container">
                    <div className="row">
                        <div className="col-9"></div>
                            {this.state.mappedCars}
                   </div>
                </div>

    </form>
       
  }
}

export default Friends;