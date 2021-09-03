import React from "react";

class FriendsButton extends React.Component {

    clickHandler = () => {
        this.props.history.push("/friends");
    }

    render() {

        return <React.Fragment>

                <li>
                  <button onClick={this.clickHandler} className="nav-link px-2 text-white link-button">
                    Friends
                  </button>
                </li>  


        </React.Fragment>
    }
}



export default FriendsButton;