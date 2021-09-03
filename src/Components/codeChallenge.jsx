import React from 'react';
import {toast } from "react-toastify";
import {NavLink} from "react-router-dom";
import * as productService from '../Components/productService';

class Products extends React.Component {

    state = {
        formData: {
            name: '',
            manufacturer: '',
            description: "",
            cost: ''
        }
    }
    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget
        let newValue = currentTarget.value
        let inputName = currentTarget.name
        
        this.setState(() => {
            let formData = {...this.state.formData}
            formData[inputName] = newValue
            return {formData}
           })
    }

    onCreateEntityClick = (e) => {
       e.preventDefault()
        productService.entityCreate(this.state.formData)
          .then(this.onActionSuccess)
          .catch(this.onActionError);
    }
    onActionSuccess = (response) => {
        if (response) {
            this.props.history.push('/Products')
            toast.success('✅ Product created successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
       }
    
    onActionError= (errResponse) => {
        if(errResponse) {
            this.props.history.push('/Products')
            toast.error('❌ Product creation failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
       }

    
render() {
    return (
        <React.Fragment>
            <header>
            <div className="p-2 bg-light  text-white productnav">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                <NavLink to="/Home">
                  <button
                    href="/Home"
                    className="nav-link px-2 text-white link-button home"
                  >
                    <h3>Home</h3> 
                  </button>
                  </NavLink>
                </li>
               
              </ul>
              <div className="text-end d-flex">
              
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn text-white btn-warning " type="submit">Search</button>
              </div>
              <button type="button" className="btn btn-warning text-white joke2 " onClick={this.onLogOutClick}>Log Out</button>
            </div>
            </div>
            </header>


             <div className='col-6 form '>
        <form  className= 'card p-3 bg-white'>      
     <div className="mb-3 row">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" name ='name' className="form-control" id="name" onChange={this.onFormFieldChange} value={this.state.formData.name}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="manufacturer" className="col-sm-2 col-form-label">Manufacturer</label>
    <div className="col-sm-10">
      <input type="text" name ='manufacturer' className="form-control" id="manufacturer" onChange={this.onFormFieldChange} value={this.state.formData.manufacturer}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
      <input type="text" name ='description' className="form-control" id="description" onChange={this.onFormFieldChange} value={this.state.formData.description}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="cost" className="col-sm-2 col-form-label">Cost</label>
    <div className="col-sm-10">
      <input type="text" name ='cost' className="form-control" id="cost" onChange={this.onFormFieldChange} value={this.state.formData.cost}/>
      <div className="mb-3 row">
    <div className="col-sm-10">
      <button type="submit"  className="btn btn-primary prodbut text-white" onClick={this.onCreateEntityClick}>Submit</button>
    </div>
    
  </div>
 

</div>
 

  </div>
  </form>

</div>



        </React.Fragment>
    )
}

}

export default Products