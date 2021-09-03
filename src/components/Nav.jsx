import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { Button } from './Button'; 




function Navbar() { 
        const [click, setClick] = useState(false);
        const [button,setButton] = useState(true)

        const handleClick = () => setClick(!click)
        const closeMobileMenu = () => setClick(false)

        const showButton = () => {
          if(window.innerWidth <= 960) {
            setButton(false);
          }else {
            setButton(true);
          }
        };

        window.addEventListener('resize', showButton);
        
        
         
  return (
   
    <React.Fragment>
    <header className="p-3 bg-dark text-white mb-4">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <NavLink href="#"
                  
                  exact={true}
                  to="/"
                  className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                >
                  <img
                    src="https://pw.sabio.la/images/Sabio.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Sabio"
                  />
                  
                </NavLink>
                
                {/* className={click ? 'fas soild fa-times' : 'fas fa-bars'}  */}
                
                <ul  className= "nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li className="nav-item">
                    <button
                      href="#"
                      className="nav-link px-2 text-secondary link-button"
                    ><NavLink to="/" className='nav-links' onClick={closeMobileMenu}>Home</NavLink>
                      
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link px-2 text-white link-button">
                      <NavLink to="/product"  activeStyle={{color:"white"}} exact={true} className='nav-links' onClick={closeMobileMenu}>Product</NavLink>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link px-2 text-white link-button">
                      <NavLink to="/registration"  activeStyle={{color:"white"}} exact={true} className='nav-links' onClick={closeMobileMenu}>Registration</NavLink>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                       <NavLink to="/jumbo" activeStyle={{color:"white"}} exact={true}  className='nav-links' onClick={closeMobileMenu}>Jumbo</NavLink>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      <NavLink to="/jumbo" activeStyle={{color:"white"}} exact={true}  className='nav-links' onClick={closeMobileMenu}>FAQs</NavLink>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      <NavLink to="/forms" activeStyle={{color:"white"}} exact={true}  className='nav-links' onClick={closeMobileMenu}>About</NavLink>
                    </button>
                  </li>
                  <li className="nav-item-mobile">
                       <NavLink to="/sign-up" activeStyle={{color:"white"}} exact={true}  className='nav-links' onClick={closeMobileMenu}>Sign-up</NavLink>
                  </li>


                </ul>
                {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
                
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
                  <NavLink to="/login" activeStyle={{color:"white"}} exact={true}  className='nav-links' onClick={closeMobileMenu}>Login</NavLink>
                  </button>
                  <button type="button" className="btn btn-warning">
                  <NavLink to="/sign-up" activeStyle={{color:"white"}} exact={true}  className='nav-links' onClick={closeMobileMenu}>Sign-up</NavLink>
                  </button>
                  <div className="' menu-icon fa-2x " onClick={handleClick}>
                  <i className={click ? 'fas soild fa-times' : 'fas fa-bars'}></i>
                  
                  </div>
                </div>
              </div>
            </div>
          </header>
    </React.Fragment>
  )
    

    


}

export default Navbar;


