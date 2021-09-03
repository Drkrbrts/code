import React from "react";

class AddJobsButton extends React.Component {

    clickHandler = () => {
            
        this.props.history.push("/addJob");
    }

    render() {    

        return <React.Fragment>

                <li>
                  <button  onClick={this.props.reset}                                                             
                             
                    className="nav-link px-2 text-white link-button">
                   
                   <strong>Jobs+</strong>
                  </button>
                </li>

        </React.Fragment>        
    }
}



export default AddJobsButton;