import React from "react";



class JobsButton extends React.Component {
    clickHandler = () => {
       this.props.history.push(`/jobs`)
    }


    render() {
        return <React.Fragment>
                <li>
                  <button onClick={this.clickHandler} className="nav-link px-2 text-white link-button">
                    Jobs
                  </button>
                </li>   

        </React.Fragment>
    }
}




export default JobsButton;