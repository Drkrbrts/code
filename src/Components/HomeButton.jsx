import React from "react";



class HomeButton extends React.Component {
    clickHandler = () => {
       this.props.history.push(`/user/${this.props.user.id}`)
    }


    render() {
        return <React.Fragment>
                <li>
                  <button onClick={this.clickHandler} className="nav-link px-2 text-white link-button">
                    Home
                  </button>
                </li>   

        </React.Fragment>
    }
}




export default HomeButton;