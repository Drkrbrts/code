import React from "react"
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


//***COULDNT GET IMPORT PATH TO WORK***

class Widget extends React.Component {


  state = {
    formData: { InputWidget: ""
               , InputManufacturer: ""
               , InputDescription: "" 
               , InputCost: ""
  }
};
  

  onChange = event => {
    // console.log(event)
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
  



  onSubmitWidgetClicked = (data) =>{
    console.log("Widget Created!")

    var formData = {
      Name: "",
      Manufacturer: "",
      Description: "",
      Cost: "",
    }


  // A user should be able to create a widget using the **Entity Endpoint API**.
    userService.post(formData)
    .then(this.onActionSuccess)
    .catch(this.onActionError);
  }

  onActionSuccess = (response) => { toast.success('Signed in')
  console.log("Submitted!")
  }
  onActionError= (errResponse) => { toast.error('Sign in Error')
  console.log("Error!")
  }



// Create a form to capture the following widget information.
//1. Name (string)
// 2. Manufacturer (string)
// 3. Description (string)
// 4. Cost (number)


    render() {
        return  <form>

        <font size="+4">
        Create a Widget!
        </font>

        <div className="mb-3">
          <label htmlFor="exampleName" className="form-label">Widget Name</label>
          <input 
          type="text" 
          className="form-control" 
          name="InputWidget"
          id="InputWidget"
          value={this.state.formData.Name} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleLastName" className="form-label">Manufacturer</label>
          <input 
          type="text"
          className="form-control" 
          name="InputManufacturer"
          id="InputManufacturer" 
          value={this.state.formData.Manufacturer} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Description</label>
          <input 
          type="text" 
          className="form-control" 
          name="InputDescription"
          id="InputDescription" 
          value={this.state.formData.Description} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Cost</label>
          <input 
          type="number" 
          className="form-control" 
          name="InputCost"
          id="InputCost" 
          value={this.state.formData.Cost} 
          onChange={this.onChange}
          />
        </div>
        <div>
        <button 
            type="button" 
            className="btn btn-primary"
            style={{float: 'left'}}
            onClick={this.onSubmitWidgetClicked}
            onChange={this.onChange}
            >
            Submit Widget
            </button>
          </div>

          <br></br>
          <br></br>
          
          
      </form>
      
    }
}

export default Widget;

