import React from "react"
import * as service from "./service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Widget extends React.Component
{
    state = {
        name : "",
        manufacturer: "",
        description: "",
        cost:""  
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
    onSubmitClicked = (e) => {
        e.preventDefault()
        // e.stopPropogation()
        console.log("I was clicked")

        
        let payload = {
            name : this.state.name,
            manufacturer: this.state.manufacturer,
            description: this.state.description,
            cost: this.state.cost  
        }
            
    

         
        service.widgetInfo(payload)
        .then(this.onActionSuccess)
        .catch(this.onActionError)       
    }
    onActionSuccess = response => {
        console.log(response.data);
        toast.success(`${'Success!!'} ${response.data.item}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
;
};

    onActionError = response => {
        console.warn(response);
        toast.error('Error!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    

render(){return(<form>
  <div class="form-group">
    <label for="exampleName1">Name</label>
    <input type="email" class="form-control" id="exampleName1" aria-describedby="nameHelp" placeholder="Enter a car name"
    name="name"
    value={this.state.name}
    onChange={this.onFormFieldChanged}/>
    <small id="nameHelp" class="form-text text-muted">Enter Car Name You Want To Store.</small>
  </div>
  <div class="form-group">
  <label for="exampleManufacturer1">Manufacturer Type</label>
  <input type="email" class="form-control" id="exampleManufacturer1" aria-describedby="manufacturerHelp" placeholder="Manufacturer Name"
                 name="manufacturer"
                 value={this.state.manufacturer}
                 onChange={this.onFormFieldChanged}/>
  <small id="tenantIDhelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
  <label for="exampleDescription1">Description</label>
  <input type="email" class="form-control" id="exampleDescription1" aria-describedby="descriptionHelp" placeholder="Description"
                 name="description"
                 value={this.state.description}
                 onChange={this.onFormFieldChanged}/>
  <small id="descriptionhelp" class="form-text text-muted"></small>
  </div>  
  <div class="form-group">
  <label for="exampleCost1">Cost</label>
  <input type="email" class="form-control" id="exampleCost" aria-describedby="costHelp" placeholder="Cost"
                 name="cost"
                 value={this.state.cost}
                 onChange={this.onFormFieldChanged}/>
  <small id="costhelp" class="form-text text-muted"></small>
  </div>
  {/* <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    name="password"
    value={this.state.password}
    onChange={this.onFormFieldChanged}/>
  </div> */}
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Luxury Car ?</label>
  </div>
  <button onClick={this.onSubmitClicked} type="submit" class="btn btn-primary">Submit</button>
</form>)
}
}

export default Widget 