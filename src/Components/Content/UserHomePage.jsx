import React from "react"
import { withRouter } from "react-router-dom"

class UserHomePage extends React.Component{

    componentDidMount(){
        console.log("componentDidMount() -> UserHomePage");
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <h1 className="m-3">Hello {this.props.currentUser.currentUser.firstName} {this.props.currentUser.currentUser.lastName}!</h1>
                </div>
            </React.Fragment>
        );
    };
};

export default withRouter(UserHomePage)