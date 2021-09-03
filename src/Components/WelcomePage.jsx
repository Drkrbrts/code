import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


class WelcomePage extends React.Component{
    
successfullLogout = () => {
    toast.success( "Logout Successful, See ya next time",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

}

    render(){

        return(<div>
            <h1>
                Welcome Sabio Fellow 
            </h1>
            <button type="button" class="btn btn-outline-info"
            onClick={this.successfullLogout}>
            <Link to="/" className="nav-link   link-button">Logout</Link>
            </button>
        </div>)
    }
}

export default WelcomePage