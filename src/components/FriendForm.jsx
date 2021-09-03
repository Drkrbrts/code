import React, { Component } from "react"; 
import * as friendService from "../services/friendService"
import { toast } from "react-toastify";


class FriendForm extends Component {

    state = {
        title : "", 
        bio : "", 
        summary : "", 
        headline : "", 
        slug : "", 
        statusId : "", 
        primaryImage : "", 
    }; 

    componentDidMount() {
      console.log(this.props);

      
    
    }

    onSubmitClicked = (e) => {
      e.preventDefault(); 
      console.log("onSubmitClicked", "button firing ok");

      friendService.addFriend(this.state)
        .then(this.onAddFriendSuccess)
        .catch(this.onAddFriendError);  
    }

    onAddFriendSuccess = (response) => {
      console.log("onAddFriendSuccess", response);
      toast.success("You successfully registered!");
      this.props.history.push("/friends");

    }

    onAddFriendError = (err) => {
      console.error(err);
    }



    onFormFieldCompleted = (e) => {
      let currentTarget = e.currentTarget; 
      let newValue = currentTarget.value; 
      let inputName = currentTarget.name; 

      this.setState(()=>{
        let newState = {}; 

        newState[inputName] = newValue; 
        console.log({ newState });

        return newState; 
      })
    }

    render(){
        return(
            <React.Fragment>
            <main role="main">
            <div className="container p-5">
              <div className="row">
                <div className="col-md-4 p-5">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input 
                        className="form-control" 
                        name="title"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.title} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Bio</label>
                      <input 
                        className="form-control" 
                        name="bio"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.bio} />
                    </div>

                    
                    <div className="mb-3">
                      <label className="form-label">Summary</label>
                      <input 
                        className="form-control" 
                        name="summary"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.summary} />
                    </div>

                    
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Headline</label>
                      <input 
                        className="form-control" 
                        name="headline"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.headline} />
                    </div>

                    
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Status Id</label>
                      <input 
                        className="form-control" 
                        name="statusId"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.statusId} />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Slug</label>
                      <input 
                        className="form-control" 
                        name="slug"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.slug} />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Primary Image</label>
                      <input 
                        className="form-control" 
                        name="primaryImage"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.primaryImage} />
                    </div>

                    <button type="submit" 
                    className="btn btn-info submitFriend"
                    style={{
                      marginTop: "10px",
                      marginLeft: "0px",
                      marginRight: "10px",
                    }} 
                    onClick={this.onSubmitClicked.bind(this)}>Submit</button>
                  
                    {/* <button type="submit" 
                    className="btn btn-warning editFriend" 
                    style={{
                      marginTop: "10px",
                      marginLeft: "15px",
                      marginRight: "10px",
                    }}
                    onClick={this.onEditClicked}>Edit</button> */}

                  </form>
                </div>
  
              </div>
              
              <hr />
            </div>
          </main>
          </React.Fragment>
        ); 
    }
}

export default FriendForm


//need Conditional Rendering for navigation bar 