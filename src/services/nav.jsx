import React from "react"
import Register from "./services/Register";
import {NavLink} from "react-router-dom"
import Login from "./services/Login";
import Home from "./services/Home";




class SiteNav extends React.Component {



    // componentDidMount() {
    //     var payload = {
    //         "email": "guerrerob318@google.com",
    //         "password": "Warrior27$$",
    //         "tenantId": "U02B8F0JPGC"
    //       };
    //       userService.logIn(payload)
    //         .then(this.onActionSuccess)
    //         .catch(this.onActionError);
            
    //         console.log("componentDidMount")

    // }
    // onClickDropdown = () => {
    //   open: true
    // }

    onClickHome = () => {
      <Home/>
    }

   onOpenRegisterClick = () => {
      <Register/>
   }

   onOpenLoginClick = () => {
     <Login/>
   }

   onClickFriends = () => {
     
   }

    

 render() {
        return (
            <React.Fragment>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                <NavLink to="/Home">
                  <button
                    href="/"
                    className="nav-link px-2 text-secondary link-button home"
                  >
                    Home 
                  </button>
                  </NavLink>
                </li>
                <li>
                 <NavLink to="/Friends">
                  <button onClick={this.onClickFriends}  className="nav-link px-2 text-secondary link-button">
                   Friends 
                  </button>
                  </NavLink>
                </li>
                <li>
                  
                  <button 
                    href="#"
                    className="nav-link px-2 text-secondary link-button"
                  >
                    Blogs 
                  </button>
                  
                </li>
                <li>
                <NavLink to="/TechCo">
                  <button  
                    href="#"
                    className="nav-link px-2 text-secondary link-button"
                  >
                    Tech Co.
                  </button>
                  </NavLink>
                </li>
                <li>
                <NavLink to="/Jobs">
                  <button  
                    href="#"
                    className="nav-link px-2 text-secondary link-button"
                  >
                    Jobs
                  </button>
                  </NavLink>
                </li>
                <li>
                <NavLink to="/Events">
                  <button  
                    href="#"
                    className="nav-link px-2 text-secondary link-button"
                  >
                    Events
                  </button>
                  </NavLink>
                </li>
              </ul>


              <div className="text-end">
              <NavLink to="/Login">
                <button type="button" className="btn btn-danger  me-2 btn-sm mr-1" >
                  <strong>Login</strong>
                </button>
                </NavLink>
                <NavLink to="/Register">
                <button type="button"  className="btn btn-danger btn-sm mr-2" >
                  <strong>Register</strong>
                </button>
                </NavLink>
              </div>
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <img
                  src="https://pw.sabio.la/images/Sabio.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top image"
                  alt="Sabio"
                />
              </a>
              <div className="dropdown navbar-expand-lg navbar-dark bg-dark">
  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    
              
            </div>

            </React.Fragment>)
    }


}

export default SiteNav