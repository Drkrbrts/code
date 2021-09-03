import React from 'react';
import * as userService from "../services/userService";
import {toast } from "react-toastify";
import {NavLink} from "react-router-dom";

class Friends extends React.Component {

    state = {
        formData: {
            title: '',
            bio: '',
            summary: '',
            headline: '',
            slug: '',
            statusId: '',
            primaryImage: "",
            skills: ''
        }
    }
    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget
        let newValue = currentTarget.value
        let inputName = currentTarget.name
        
        this.setState(() => {
            let newState = {...this.state.formData}
            newState[inputName] = newValue
            return {formData: newState}
           })
    }

    onRegisterClick = (e) => {
       e.preventDefault()
        userService.addFriend(this.state.formData)
          .then(this.onActionSuccess)
          .catch(this.onActionError);
    }
    onActionSuccess = (response) => {
        if (response) {
            this.props.history.push('/Login')
            toast.success('✅ Friend added successfully', {
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
            this.props.history.push('/Register')
            toast.error('❌ Friend was not added', {
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

       onLogOutClick = (e) => {
        e.preventDefault()
        this.props.history.push('/Login')
         userService.logOut()
           .then(this.onActionSuccess)
           .catch(this.onActionError);
     }
     onActionSuccess = (response) => {
         console.log(response)
         
        }
     onActionError= (errResponse) => {
         console.log(errResponse)
        }


    
render() {
    return (
        <React.Fragment>
            <header>
            <div className="p-2 bg-light  text-white">
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
                <li>
                <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-light p-3">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
                </div>
                <nav className="navbar navbar-dark bg-light">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                </nav>
                </li>
              </ul>
              <div className="text-end d-flex">
              
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn text-white btn-light joke" type="submit">Search</button>
              </div>
              <button type="button" className="btn text-white hm" onClick={this.onLogOutClick}>Log Out</button>
            </div>
            </div>
            </header>

      <div className='col-6 form '>
        <form  className= 'card p-3 bg-white'>      
     <div className="mb-3 row">
    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
    <div className="col-sm-10">
      <input type="text" name ='title' className="form-control" id="title" onChange={this.onFormFieldChange} value={this.state.title}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="bio" className="col-sm-2 col-form-label">Bio</label>
    <div className="col-sm-10">
      <input type="text" name ='bio' className="form-control" id="bio" onChange={this.onFormFieldChange} value={this.state.bio}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="summary" className="col-sm-2 col-form-label">Summary</label>
    <div className="col-sm-10">
      <input type="text" name ='summary' className="form-control" id="summary" onChange={this.onFormFieldChange} value={this.state.summary}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="headline" className="col-sm-2 col-form-label">Headline</label>
    <div className="col-sm-10">
      <input type="text" name ='headline' className="form-control" id="headline" onChange={this.onFormFieldChange} value={this.state.headline}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="slug" className="col-sm-2 col-form-label">Slug</label>
    <div className="col-sm-10">
      <input type="text" name ='slug' className="form-control" id="slug" onChange={this.onFormFieldChange} value={this.state.slug}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="statusId" className="col-sm-2 col-form-label">Status</label>
    <div className="col-sm-10">
      <input type="text" name ='statusId' className="form-control" id="statusId" onChange={this.onFormFieldChange} value={this.state.statusId}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="skills" className="col-sm-2 col-form-label">Skills</label>
    <div className="col-sm-10">
      <input type="text" name ='skills' className="form-control" id="skills" onChange={this.onFormFieldChange} value={this.state.skills}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="primaryImage" className="col-sm-2 col-form-label">Primary Image</label>
    <div className="col-sm-10">
      <input type="text" name ='primaryImage' className="form-control" id="primaryImage" onChange={this.onFormFieldChange} value={this.state.primaryImage}/>
      <button type="submit"  className="btn text-white frbtn">Submit</button>
    </div>
    
  </div>
  </form>

</div>
        </React.Fragment>
    )
}

}

export default Friends