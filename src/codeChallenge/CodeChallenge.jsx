import React from "react"

import * as codeChallenge from "../services/codeChallenge";

import { ToastContainer, toast } from 'react-toastify';


class CodeChallenge extends React.Component{

    state = {
        formData: {
        nameOfCar : "",
        manufacturer: "",
        description: "",
        cost: "",
        // id: "123456"
      }
    }


    onFormFieldChanged = (e) =>
{
    // console.log(e)
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({newValue, currentTarget});

    // console.log(this.state.formData)

    this.setState(() => {
        let formData = {...this.state.formData};

        formData[inputName] = newValue

        return {formData}
    });
}


onSubmitClicked = (e) => 
{
    console.log("sbumit is firing")
    e.preventDefault();

    codeChallenge.postWidget(this.state.formData)
    .then(this.onSubmitWidgetSuccess)
    .catch(this.onSubmitWidgetError)
}


onSubmitWidgetSuccess = (response) =>
{
    // console.log(response, "success")
    // console.log(this.state.formData.id)
    // console.log(response.data.item)

    this.messageSuccess(response)
}

 messageSuccess = (response) => {

    console.log(response.data.item)
    let id = response.data.item;

    toast.success(`${this.state.formData.nameOfCar} was created successfully. Save your ID number: ${id}`, 
        {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
        this.setState((prevState) =>
          {
            let currentEntity = {...prevState.formData}
            let newData = response.data.item
            currentEntity.nameOfCar = newData.nameOfCar            
            currentEntity.manufacturer = newData.manufacturer
            currentEntity.description = newData.description
            currentEntity.cost = newData.cost
            // currentEntity.id = newData.id

            return {currentEntity}
    })
    this.resetForm();
}

onSubmitWidgetError = (response) =>
{

    console.log(response)
    
  toast.error('Creation Failed', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

resetForm = () => 
{
  this.setState(
    {
        formData: {
            nameOfCar : "",
            manufacturer: "",
            description: "",
            cost: "",
            }
  })
}        

    render()
    {
        return (
            
            <section className="vh-100 bg-image" >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" >
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Your Widget Information</h2>
          
                        <form>
                          <div className="form-outline mb-4">
                            <input type="text" name="nameOfCar" id="nameOfCar" className="form-control form-control-lg" value={this.state.formData.nameOfCar} onChange={this.onFormFieldChanged} />
                            <label className="form-label" htmlFor="nameOfCar">Name</label>
                          </div>
          
                          <div className="form-outline mb-4">
                            <input type="text" name="manufacturer" id="manufacturer" className="form-control form-control-lg" value={this.state.formData.manufacturer} onChange={this.onFormFieldChanged}/>
                            <label className="form-label" htmlFor="manufacturer">Manufacturer</label>
                          </div>
          
                          <div className="form-outline mb-4">
                            <input type="text" name="description" id="description" className="form-control form-control-lg" value={this.state.formData.description} onChange={this.onFormFieldChanged}/>
                            <label className="form-label" htmlFor="description">Description</label>
                          </div>
          
                          <div className="form-outline mb-4">
                            <input type="number" name="cost" id="cost" className="form-control form-control-lg" value={this.state.formData.cost} onChange={this.onFormFieldChanged}/>
                            <label className="form-label" htmlFor="cost">Cost</label>
                          </div>
              
                          <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={this.onSubmitClicked}>Submit Widget</button>
    
                          </div>
                        </form>
          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default CodeChallenge