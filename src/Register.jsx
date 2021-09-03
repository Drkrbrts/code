import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./App.css";
import 'rc-pagination/assets/index.css'
import { render } from "react-dom";

class App extends Component {
  

    render(){

        return (
            <BrowserRouter>
            <React.Fragment>
    
            <header className="p-3 bg-dark text-white">
              <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                  <a
                    href="/"
                    className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                  >
                    <img
                      src="https://pw.sabio.la/images/Sabio.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="Sabio"
                    />
                  </a>
    
                  <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li>
                      <button
                        href="#"
                        className="nav-link px-2 text-secondary link-button"
                      >
                        <NavLink to="/Home"> Home</NavLink>
                        
                        
                      </button>
                    </li>
                    <li>
                      <button className="nav-link px-2 text-white link-button">
                        Features
                      </button>
                    </li>
                    <li>
                      <button
                        href="#"
                        className="nav-link px-2 text-white link-button"
                      >
                        Pricing
                      </button>
                    </li>
                    <li>
                      <button
                        href="#"
                        className="nav-link px-2 text-white link-button"
                      >
                        FAQs
                      </button>
                    </li>
                    <li>
                      <button
                        href="#"
                        className="nav-link px-2 text-white link-button"
                      >
                        About
                      </button>
                    </li>
                  </ul>
    
                  <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input
                      type="search"
                      className="form-control form-control-dark"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                  </form>
    
                  <div className="text-end">
                    <button type="button" className="btn btn-outline-light me-2">
                      Login
                    </button>
                    <button type="button" className="btn btn-warning">
                      Sign-up
                    </button>
                  </div>
                </div>
              </div>
            </header>
    
            <main role="main">
            
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                  <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
                  </div>
                </div>
    
                <hr />
              </div>
            </main>
    
            <footer className="container">
              <p>&copy; Sabio 2019-2020</p>
            </footer>
                
            </React.Fragment>
            </BrowserRouter>
        )
    };
        
};
export default App;
