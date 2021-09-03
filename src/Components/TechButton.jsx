import React from "react";



class TechButton extends React.Component {
    clickHandler = () => {
       this.props.history.push("/tech")
    }


    render() {
        return <React.Fragment>
                <li>
                  <button onClick={this.clickHandler} className="nav-link px-2 text-white link-button">
                    Tech Co.
                  </button>
                </li>   

        </React.Fragment>
    }
}




export default TechButton;