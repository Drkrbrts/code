import React from "react"
import * as userService from "../services/userService";

class SiteNav extends React.Component {

    onHomeClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onHomeClicked was clicked",seconds)
        this.props.history.push("/")
    }
    
    onFooterClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onFooterClicked was clicked",seconds)
        this.props.history.push("/Footer/",seconds)
    }

    onContentClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onContentClicked was clicked",seconds)
        this.props.history.push("/Content/",seconds)
    }

    onJumboClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onJumboClicked was clicked",seconds)
        this.props.history.push("/Jumbo/",seconds)
    }

    onProductClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onProductClicked was clicked",seconds)
        this.props.history.push("/Product/" + seconds)
    }
    componentDidUpdate(prevProps)
    {
        let currentPath = this.props.location.pathname;
        let previousPath = prevProps.location.pathname;

        console.log("NAV",{currentPath,previousPath})
    }

    onClickLogInHandler = () => {
        const data = {
            "email": "Thomas_McGarvey@Hotmail.com"
            ,"password": "tHomaS1234##"
            ,"tenantId": "UO228K6HGDD"
        };
    
        //... code omitted.
    
        userService.logIn(data)
        .then(this.onActionSuccess)
        .catch(this.onActionError);
    
    }
    
    onActionSuccess = (response) => {
        console.log("login success:",response)
        this.props.history.push("/")
    
    }
    
    onActionError= (errResponse) => {
        console.log("login error:",{error: errResponse})
    }

    render() {
        console.log("Rendering SiteNav")
        return (
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
                            onClick={this.onHomeClicked}
                            className="nav-link px-2 text-white link-button"
                        >
                            Home
                        </button>
                        </li>
                        <li>
                        <button 
                            onClick={this.onJumboClicked}
                            className="nav-link px-2 text-white link-button">
                            Jumbo
                        </button>
                        </li>
                        <li>
                        <button
                            onClick={this.onContentClicked}
                            className="nav-link px-2 text-white link-button"
                        >
                            Content
                        </button>
                        </li>
                        <li>
                        <button
                            onClick={this.onFooterClicked}
                            className="nav-link px-2 text-white link-button"
                        >
                            Footer
                        </button>
                        </li>
                        <li>
                        <button
                            onClick={this.onProductClicked}
                            className="nav-link px-2 text-white link-button"
                        >
                            Product
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
                        onClick={this.onClickLogInHandler}
                        >
                        Login
                        </button>
                        <button type="button" className="btn btn-warning">
                        Sign-up
                        </button>
                    </div>
                    </div>
                </div>
                </header>
            </React.Fragment>
           
        );
    }    
};

export default SiteNav;