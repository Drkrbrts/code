import React from "react";
import { ToastContainer, toast } from 'react-toastify';    
import * as userService from "../../services/userService";



class UserForm extends React.Component {

    submitUserForm = (payload) =>{

        userService.register(payload)
        .then(this.onActionSuccess)
        .catch(this.onActionError)
        console.log("click button is working")
        }

        onActionSuccess = (response) => { toast.success("Entity was created")
          console.log("success")
        }

        onActionError = (errResponse) => { toast.error()
          console.log("error")
        }


    state = {
        formData:{userName:""
            , manufacturer:""
            , description:""
            , cost:""
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
          
        }
        , this.stateChanged);
      };
    

    render() {
        return (

            <React.Fragment>
            <ToastContainer/>    

                    <form>
                        <h2>React Form Challenge</h2>
                        <div className="form-group col-md-4 p-1">   
                            <input type="text" 
                                name="userName"
                                id="userName" 
                                className="form-control" 
                                value={this.state.formData.userName}
                                onChange={this.onChange}
                                placeholder="Name"></input>
                        </div>
                        <div className="form-group col-md-4 p-1">   
                            <input type="text" 
                                name="manufacturer"
                                id="manufacturer" 
                                className="form-control" 
                                value={this.state.formData.manufacturer}
                                onChange={this.onChange}
                                placeholder="Manufacturer"></input>
                        </div>
                        <div className="form-group col-md-4 p-1">   
                            <input type="text" 
                                className="form-control" 
                                name="description"  
                                id="description"
                                value={this.state.formData.description}
                                onChange={this.onChange}
                                placeholder="Description"></input>
                        </div>
                        <div className="form-group col-md-4 p-1"> 
                            <input type="text" 
                                className="form-control" 
                                name="cost"
                                id="cost" 
                                value={this.state.formData.cost} 
                                onChange={this.onChange}
                                placeholder="Cost"></input>
                        </div>
                        <div>
                            <button type="Submit" 
                            className="btn btn-primary" 
                            onClick={this.submitUserForm}>Submit</button>
                        </div>
                    </form>
   
            </React.Fragment>
        );
    }
}

export default UserForm;