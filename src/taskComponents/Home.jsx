import React from "react"

class Home extends React.Component {

    userWelcomeMsg = () =>{

        if (this.props.userData === "user")
        {
            return;
        }
        else{
            return this.props.userData;
        }
    }

    render() {

        return <React.Fragment>
            <div className="container">
                <div className="row">
                    <h1>Welcome Home {this.userWelcomeMsg()}</h1>
                </div>
            </div>
        </React.Fragment>

    }
};

export default Home;