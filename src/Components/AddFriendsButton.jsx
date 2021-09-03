import React from "react";

class AddFriendsButton extends React.Component {

    clickHandler = () => {
            
        this.props.history.push("/addFriends");
    }

    render() {

        return <React.Fragment>

                <li>
                  <button  onClick={this.props.reset}                                                             
                             
                    className="nav-link px-2 text-white link-button">
                   
                   <strong>Friends+</strong>
                  </button>
                </li>

        </React.Fragment>
    }
}



export default AddFriendsButton;