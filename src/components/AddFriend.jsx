import React from "react"
import * as userService from "../services/userService";
import 'rc-pagination/assets/index.css'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SingleFriend from "./SingleFriend";



class AddFriend extends React.Component {


    state = {
      formData: { Title: ""
                , Bio: ""
                , Summary: "" 
                , Headline: ""
                , Slug: ""
                , Status: ""
                , PrimaryImage: ""
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




  onActionSuccess = (response) => { toast.success('Friend Submit Success')
  console.log("Friend Submitted!")
  }
  onActionError= (errResponse) => { toast.error('Error')
  console.log("Error!")
  }


    render() {
        return  <form>

        <font size="+4">
        Add a Friend
        </font>

        <div className="mb-3">
          <label htmlFor="exampleTitle" className="form-label">Title</label>
          <input 
          type="text" 
          className="form-control" 
          name="Title"
          id="InputTitle"
          value={this.state.formData.InputTitle} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleBio" className="form-label">Bio</label>
          <input 
          type="text"
          className="form-control" 
          name="Bio"
          id="InputBio" 
          value={this.state.formData.InputBio} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleSummary" className="form-label">Summary</label>
          <input 
          type="email" 
          className="form-control" 
          name="Summary"
          id="InputSummary" 
          value={this.state.formData.InputSummary} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleHeadline" className="form-label">Headline</label>
          <input 
          type="text" 
          className="form-control" 
          name="Headline"
          id="InputHeadline" 
          value={this.state.formData.InputHeadline} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleSlug" className="form-label">Slug</label>
          <input 
          type="text" 
          className="form-control" 
          name="Slug"
          id="InputSlug" 
          value={this.state.formData.InputSlug} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleStatus" className="form-label">Status</label>
          <input 
          type="text" 
          className="form-control" 
          name="Status"
          id="InputStatus" 
          value={this.state.formData.InputStatus} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleImageUrl" className="form-label">Primary Image</label>
          <input 
          type="text" 
          className="form-control" 
          name="PrimaryImage"
          id="InputImg" 
          value={this.state.formData.InputImg} 
          onChange={this.onChange}
          />
        </div>
        <div>
        <button 
            type="button" 
            className="btn btn-primary"
            style={{float: 'left'}}
            onClick={this.onSubmitFriendClicked}
            onChange={this.onChange}
            >
            Submit
            </button>
          </div>
      </form>
      

      
    }
}

export default AddFriend;


