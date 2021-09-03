import React from 'react'
import addWidget from '../../services/widgetService';
import SecondNav from '../SecondNav';
import { toast } from 'react-toastify';

class Widget extends React.Component {

  state = {
    formData: {
      name: "Sam Wise",
      manufacturer: "Trendicorp",
      description: "Some Borderlands gun named after a LOTR character",
      cost: "50000"
    }
  }

    onClickHandler = (e) => {
      e.preventDefault()
      addWidget(this.state.formData)
      .then(this.onAddWidgetSuccess)
      .catch(this.onAddWidgetError)
  }

  onFormFieldChanged = (e) => {
    let currentValue = e.target.value
    
    let isName = e.target.id === "name"
    let isManufacturer = e.target.id === "manufacturer"
    let isDescription = e.target.id === "description"
    let isCost = e.target.id === "cost"

    // @TODO 
    this.setState(()=> {
      let newValue = currentValue;
      let newState = {};
      newState.formData = {}
 
      if(isName) {
        newState.formData.name = newValue
      }

      if(isManufacturer) {
        newState.formData.manufacturer = newValue
      }

      if(isDescription) {
        newState.formData.description = newValue
      }

      if(isCost) {
        newState.formData.cost = newValue
      }

    console.log(newState)
      return newState
    })
  }

  

  onAddWidgetSuccess(res) {
    console.log(res)
    console.log("onAddWidgetSuccess")
    toast.success(`Widget Created. Id: ${res.data.item}`)
  }
  onAddWidgetError(err) {
    console.log(err)
    console.log("onAddWidgetError")
  }

  render () {
    return (
      <div className="container-fluid">
        <SecondNav></SecondNav>
        <div className="form-popup-container">
        </div>
        <div className="container-fluid form-container">
          <div className="page-title">
            <h4>Please Create A Widget</h4>
          </div>
          <form>
            <div className="row">
              <div className="col-md-12 form-col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="name"
                  value={this.state.formData.name}
                  onChange={this.onFormFieldChanged}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Manufacturer"
                  id="manufacturer"
                  value={this.state.formData.manufacturer}
                  onChange={this.onFormFieldChanged}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  id="description"
                  value={this.state.formData.description}
                  onChange={this.onFormFieldChanged}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cost"
                  id="cost"
                  value={this.state.formData.cost}
                  onChange={this.onFormFieldChanged}
                />
              </div>
            </div>
          </form>
          <button type="button" className="btn btn-primary" id="loginUser" onClick={this.onClickHandler}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default Widget;