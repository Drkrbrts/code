import React from "react"
import * as seperateFile from "../codeChallenge/seperateFile";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class PostWidget extends React.Component {

  state = {
    name: "",
    manufacturer : "",
    description: "",
    cost: Number,
    id: seperateFile.id
    // tenantId: "U024KAS2547"
}

onFormFieldChanged = (e) =>
{
  let currentTarget = e.currentTarget
       let newValue = currentTarget.value
       let inputName = currentTarget.name

       this.setState(()=>{
        
        let newState = {} 
        newState[inputName] = newValue

        return newState

       })
}

onItemClicked = (e) => {
  e.preventDefault()
  // e.stopPropogation()
  console.log("I was clicked")
  // console.log(this.newState)

  
  let payload = {
    id: this.state.id,
    name: this.state.name,
    manufacturer: this.state.manufacturer,
    description: this.state.description,
    cost: this.state.cost,
    tenantId: this.state.tenantId}

  
      


   
  seperateFile.newPost(payload)
  .then(this.onActionSuccess)
  .catch(this.onActionError)

    

}

onActionSuccess = response => {
  console.log(this.onItemClicked)
  toast.success(`${"Created!!"} ${this.state.id} `,  {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  
};

onActionError = response => {
  console.warn(this.onItemClicked)
  toast.error('You Thought, Try again', {
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

    
    
    return(       
      <form>
      <div className="form-group p-">

        <div>
        <label className="exampleInputPassword1 p-2">What are you making?</label>
    <input type="text"
     className="form-control"
      id="idTextBox"
      name="id"
       value={this.state.id}
       onChange={this.onFormFieldChanged} 
       />

        <label className="nameInput p-2">Name</label>
        </div>
        <input type="text" className="form-control"
         id="nameInputBox"
         name="name"
         value={this.state.name}
         onChange={this.onFormFieldChanged}
         />
      </div>
        <div className="form-group">
    <label className="exampleInputPassword1 p-2">Maufacturer</label>
    <input type="text"
     className="form-control"
      id="manufacturerTexBox"
      name="manufacturer"
       value={this.state.manufacturer}
       onChange={this.onFormFieldChanged} 
       />
    <label className="exampleInputPassword1 p-2">Description</label>
    <input type="text"
     className="form-control"
      id="descriptionTextBox"
      name="description"
       value={this.state.description}
       onChange={this.onFormFieldChanged} 
       />
    <label className="exampleInputPassword1 p-2">Cost</label>
    <input type="number"
     className="form-control"
      id="costTextBox"
      name="cost"
       value={this.state.cost}
       onChange={this.onFormFieldChanged} 
       />
  </div>
      <div>
        
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.onItemClicked}>Submit</button>
        
        
        <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    {/* Same as */}
    <ToastContainer />
        </form>
    )
  }
}

export default PostWidget