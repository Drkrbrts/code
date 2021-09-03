import React from "react";

class Home extends React.Component {


    render() {

        if (this.props.user) {
            return (
                <div className="col-12 center">
                    <h1>Welcome {this.props.name}</h1>
                </div>
            )
        } else
            return(
                <div>
                    <h1>Please Register or sign in</h1>
                </div>
            )
    }
}

export default Home