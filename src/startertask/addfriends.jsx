import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import defaultexport from "../services/friendservice"

class Friends extends React.Component{
    state = {
        formData:
        {
            title: "",
            bio: "",
            summary: "",
            headline: "",
            slug: "",
            statusId: "Active",
            primaryImage: ""
          }
    }
    onFormFieldChange =(e)=>
    {
      let currentTarget = e.currentTarget;
      let newvalue = currentTarget.value;
     let inputName = currentTarget.name
     
  
      this.setState(()=>
      {
        let newState = {};
  
         newState[inputName] = newvalue;
  
        
  
  
        return newState
      })
  
    }
    onAddFriends = () =>
  {
    console.log("I was clicked")
    var payload = this.state
    defaultexport.add(payload)
    .then(this.onRegisterSuccess)
    .catch(this.onRegisterError)
  }


  onRegisterSuccess = (response) =>{
    console.log(response.data, "Succsessful")
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  
  
  }




  onRegisterError = (errorResponse) =>{
    console.log(errorResponse, "Unsuccsessful")
    toast.error('🦄 Wow you suck!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  

  
  
  }
  onShowFriends = () =>
  {
    console.log("I was clicked")
    var payload = this.state
    defaultexport.add(payload)
    .then(this.onRegisterSuccess)
    .catch(this.onRegisterError)
  }


  onRegisterSuccess = (response) =>{
    console.log(response.data, "Succsessful")
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  
  
  }




  onRegisterError = (errorResponse) =>{
    console.log(errorResponse, "Unsuccsessful")
    toast.error('🦄 Wow you suck!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  

  
  
  }








    render(){
        return <React.Fragment>
              <div>
      
      </div>
      <div>
<div role="main">
  <div className="container">
    <div className="row">
    <div className="col-mb-3 p-5">
<form>
<div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" 
    className="form-control" 
    id="name" 
    name="title"
    onChange={this.onFormFieldChange}
   value={this.state.title}/>
  </div>


  <div className="mb-3">
    <label htmlFor="bio" className="form-label">bio</label>
    <input type="text" 
    className="form-control" 
    id="bio" 
    name="bio"
    onChange={this.onFormFieldChange}
   value={this.state.bio}/>
  </div>

  <div className="mb-3">
    <label htmlFor="summary" className="form-label">summary</label>
    <input type="text" 
    className="form-control" 
    id="summary" 
    name="summary"
    onChange={this.onFormFieldChange}
   value={this.state.summary}/>
  </div>
    



  <div className="mb-3">
    <label htmlFor="headline" className="form-label">headline</label>
    <input type="text" 
    className="form-control" 
    id="headline"
    name="headline"
    onChange={this.onFormFieldChange}
   value={this.state.headline}/>
  </div>

  <div className="mb-3">
    <label htmlFor="slug" className="form-label">slug</label>
    <input type="text" 
    className="form-control" 
    id="slug"
    name="slug"
    onChange={this.onFormFieldChange}
   value={this.state.slug}/>
  </div>

  <div className="mb-3">
    <label htmlFor="statusId" className="form-label">statusId</label>
    <input type="statusId" 
    className="form-control" 
    id="statusId"
    name="statusId"
    onChange={this.onFormFieldChange}
   value={this.state.statusId}/>
  </div>

  <div className="mb-3">
    <label htmlFor="primaryImage" className="form-label">primaryImage</label>
    <input type="url" 
    className="form-control" 
    id="primaryImage"
    name="primaryImage"
    onChange={this.onFormFieldChange}
   value={this.state.primaryImage}/>
  </div>

  
  <button type="button" className="btn btn-primary" onClick={this.onAddFriends}>Submit</button>
</form>
</div>
</div>
<button type="button" className="btn btn-primary" onClick={this.onShowFriends}>Show Friends</button>
<ToastContainer/>
</div>
</div>
</div>






        </React.Fragment>
    }
}

export default Friends


