import React from "react"
import * as userService from "../services/userService";



class HomePageNav extends React.Component {
   
    state = {
        name: "",
    };
    
    componentDidMount() {
        userService
            .getCurrentUser(this.state.formData)
            .then(this.onCurrentUserSuccess)
            .catch(this.onCurrentUserError);
    };
    onCurrentUserSuccess = (res) => {
        let name = res.data.item.name;
        this.setState(() => {
            return { welcomeMsg: `Welcome ${name}!` };
        });
        console.log(name);
    };
    onCurrentUserError = (err) => {
        //redirect to login page
        console.log({ error: err });
    }
    
   
    onLogOutClicked = () => {
        console.log("Logged Out!")


    userService.logOut()
    .then(this.onActionSuccess)
    .catch(this.onActionError);
    }

  



    render() {
        return <header className="p-3 bg-dark text-white">

            {/* <div className="container text-center my-5">
                <h1 className ="homePageGreeting"
                    style={{ fontsize: "8rem" }}>{this.state.welcomeMsg}
                </h1>
            </div> */}
            
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
                                className="nav-link px-2 text-white link-button"
                            >
                                Blogs
                            </button>
                        </li>
                        <li>
                            <button className="nav-link px-2 text-white link-button">
                                Events
                            </button>
                        </li>
                        <li>
                            <button
                                href="#"
                                className="nav-link px-2 text-white link-button"
                            >
                                Friends
                            </button>
                        </li>
                        <li>
                            <button
                                href="#"
                                className="nav-link px-2 text-white link-button"
                            >
                                Jobs
                            </button>
                        </li>
                        <li>
                            <button
                                href="#"
                                className="nav-link px-2 text-white link-button"
                            >
                                Tech Companies
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
                        <button 
                        type="button" 
                        className="btn btn-outline-light me-2"
                        >
                            Register
                        </button>

                        <button 
                        type="button" 
                        className="btn btn-outline-light me-2"
                        onClick={this.onLogOutClicked}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    }
}

export default HomePageNav;